import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Home,
  Building,
  Info,
  User,
  Phone,
  Mail,
  Globe,
  Flag,
} from 'lucide-react';
import InputCard from './InputCard';
import SelectCard from './SelectCard';
import InfoCard from './InfoCard';
import { useAuth } from '@/store/useAuth';

const DeliveryDetails = ({ delivery, setDelivery }) => {
  const { user } = useAuth();

  const update = (field, value) => {
    setDelivery(prev => ({ ...prev, [field]: value }));
  };

  // Restrict to United Kingdom only
  const [countries] = useState([{ code: 'GB', name: 'United Kingdom' }]);

  // Use UK regions (top-level): England, Scotland, Wales, Northern Ireland
  const ukRegions = [
    { value: 'England', label: 'England' },
    { value: 'Scotland', label: 'Scotland' },
    { value: 'Wales', label: 'Wales' },
    { value: 'Northern Ireland', label: 'Northern Ireland' },
  ];

  const [states] = useState(ukRegions);
  const [cities, setCities] = useState([]);

  // ERRORS STATE
  const [errors, setErrors] = useState({});

  // VALIDATION FUNCTION
  const validate = () => {
    const newErrors = {};

    if (!delivery.address.trim())
      newErrors.address = 'Street address is required';
    // Country must be United Kingdom (GB)
    if (!delivery.country || delivery.country !== 'GB')
      newErrors.country = 'Country must be United Kingdom';

    if (!delivery.state.trim()) newErrors.state = 'Region is required';
    if (!delivery.city.trim()) newErrors.city = 'City is required';
    if (!delivery.postcode.trim()) newErrors.postcode = 'Postcode is required';
    // Phone validation: expect national number without leading 0 (10 digits)
    const digits = (delivery.phone || '').replace(/\D/g, '');
    // normalize if user provided leading 0 or 44
    let national = digits;
    if (national.startsWith('44')) national = national.slice(2);
    if (national.startsWith('0')) national = national.slice(1);
    // Phone validation: accept various UK formats (+44..., 0..., or national digits only)
    const phoneInput = (delivery.phone || '').trim();
    if (!phoneInput) {
      newErrors.phone = 'Phone number is required';
    } else {
      const digits = phoneInput.replace(/\D/g, '');
      let isValidUK = false;
      if (digits.startsWith('44')) {
        // International format: +44 (44 + 10 digits)
        isValidUK = digits.length === 12;
      } else if (digits.startsWith('0')) {
        // National format: 0... (0 + 10 digits)
        isValidUK = digits.length === 11;
      } else {
        // Just digits without 0 or 44 (should be 10 digits)
        isValidUK = digits.length === 10;
      }
      if (!isValidUK) {
        newErrors.phone =
          'Enter a valid UK phone number (e.g., +447123456789 or 07123456789)';
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const validatePhone = phoneValue => {
    const phoneInput = (phoneValue || '').trim();
    let phoneError = '';

    if (!phoneInput) {
      phoneError = 'Phone number is required';
    } else {
      const digits = phoneInput.replace(/\D/g, '');
      let isValidUK = false;
      if (digits.startsWith('44')) {
        isValidUK = digits.length === 12;
      } else if (digits.startsWith('0')) {
        isValidUK = digits.length === 11;
      } else {
        isValidUK = digits.length === 10;
      }
      if (!isValidUK) {
        phoneError =
          'Enter a valid UK phone number (e.g., +447123456789 or 07123456789)';
      }
    }

    setErrors(prev => ({ ...prev, phone: phoneError }));

    return !phoneError;
  };

  // VALIDATE ON CHANGE
  useEffect(() => {
    validate();
  }, [delivery]);

  // Prefill phone if available on user profile
  useEffect(() => {
    if (!delivery.phone && user?.phone) {
      update('phone', user.phone);
    }
    // ensure country is GB and cannot be changed
    if (!delivery.country) update('country', 'GB');
  }, [user]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
      <h2 className="text-lg font-semibold mb-4">Delivery Details</h2>

      {/* USER INFO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard icon={<User />} label="Full Name" value={user.name} />
        <InfoCard icon={<Phone />} label="Phone" value={user.phone} />
        <InfoCard icon={<Mail />} label="Email" value={user.email} full />
      </div>

      {/* INFO HINT */}
      <div className="flex items-start gap-2 bg-orange-50 text-orange-700 text-sm p-3 rounded-xl shadow-sm">
        <Info className="w-4 h-4 mt-0.5" />
        <p>
          To change personal details, visit your{' '}
          <Link
            to="/dashboard/account"
            className="underline font-medium text-orange-600 hover:text-orange-700"
          >
            account dashboard
          </Link>
          .
        </p>
      </div>

      {/* DELIVERY ADDRESS */}
      <div className="space-y-6">
        {/* STREET */}
        <InputCard
          icon={<Home />}
          label="Street Address"
          placeholder="Street address"
          value={delivery.address}
          onChange={e => update('address', e.target.value)}
          error={errors.address}
        />

        {/* COUNTRY */}
        <SelectCard
          icon={<Globe />}
          label="Country"
          value={delivery.country}
          onChange={() => {}}
          options={countries.map(c => ({
            value: c.code,
            label: c.name,
          }))}
          placeholder="United Kingdom"
          error={errors.country}
          disabled
        />

        {/* PHONE (UK only) */}
        <InputCard
          icon={<Phone />}
          label="Phone Number"
          type="tel"
          placeholder="+447123456789 or 07123456789"
          value={delivery.phone || ''}
          onChange={e => update('phone', e.target.value)}
          onBlur={e => validatePhone(e.target.value)}
          error={errors.phone}
        />

        {/* STATE / REGION */}
        <SelectCard
          icon={<Flag />}
          label="Region"
          value={delivery.state}
          onChange={e => update('state', e.target.value)}
          options={states}
          placeholder="Select region"
          allowManual={false}
          error={errors.state}
        />

        {/* CITY & POSTCODE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SelectCard
            icon={<MapPin />}
            label="City"
            value={delivery.city}
            onChange={e => update('city', e.target.value)}
            options={cities.map(c => ({
              value: c.name,
              label: c.name,
            }))}
            placeholder={cities.length ? 'Select city' : 'Enter city manually'}
            allowManual={!cities.length}
            error={errors.city}
          />

          <InputCard
            icon={<Building />}
            label="Postcode"
            placeholder="Postcode"
            value={delivery.postcode}
            onChange={e => update('postcode', e.target.value)}
            error={errors.postcode}
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
