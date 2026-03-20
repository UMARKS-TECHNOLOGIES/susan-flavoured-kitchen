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
import { Country, State, City } from 'country-state-city';
import InputCard from './InputCard';
import SelectCard from './SelectCard';
import InfoCard from './InfoCard';
import { useAuth } from '@/store/useAuth';

const DeliveryDetails = ({ delivery, setDelivery }) => {
  const { user } = useAuth();

  const update = (field, value) => {
    setDelivery(prev => ({ ...prev, [field]: value }));
  };

  const [countries] = useState([
    {
      code: 'GB',
      name: 'United Kingdom',
    },
  ]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // ERRORS STATE
  const [errors, setErrors] = useState({});

  // VALIDATION FUNCTION
  const validate = () => {
    const newErrors = {};

    if (!delivery.address.trim())
      newErrors.address = 'Street address is required';
    if (!delivery.country) newErrors.country = 'Country is required';
    if (!delivery.state.trim()) newErrors.state = 'State is required';
    if (!delivery.city.trim()) newErrors.city = 'City is required';
    if (!delivery.postcode.trim()) newErrors.postcode = 'Postcode is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // VALIDATE ON CHANGE
  useEffect(() => {
    validate();
  }, [delivery]);

  /* Load states when country changes */
  useEffect(() => {
    if (!delivery.country) return;

    const list = State.getStatesOfCountry(delivery.country);
    setStates(list);
    setCities([]);
    update('state', '');
    update('city', '');
  }, [delivery.country]);

  /* Load cities when state changes */
  useEffect(() => {
    if (!delivery.country || !delivery.state) return;

    const list = City.getCitiesOfState(delivery.country, delivery.state);
    setCities(list);
    update('city', '');
  }, [delivery.state]);

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
          onChange={e => update('country', e.target.value)}
          options={countries.map(c => ({
            value: c.code,
            label: c.name,
          }))}
          placeholder="Select country"
          error={errors.country}
        />

        {/* STATE */}
        <SelectCard
          icon={<Flag />}
          label="State"
          value={delivery.state}
          onChange={e => update('state', e.target.value)}
          options={states.map(s => ({
            value: s.isoCode,
            label: s.name,
          }))}
          placeholder={states.length ? 'Select state' : 'Enter state manually'}
          allowManual={!states.length}
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
