export function validateCheckoutFields(delivery, deliveryMethod, paymentType) {
  const errors = {};

  if (!delivery.address.trim()) {
    errors.address = 'Address is required';
  }

  // Country must be United Kingdom (GB)
  if (!delivery.country || delivery.country !== 'GB') {
    errors.country = 'Country must be United Kingdom';
  }

  // Region required and must be one of UK regions
  const ukRegions = ['England', 'Scotland', 'Wales', 'Northern Ireland'];
  if (!delivery.state.trim()) {
    errors.state = 'Region is required';
  } else if (!ukRegions.includes(delivery.state)) {
    errors.state = 'Select a valid UK region';
  }

  if (!delivery.city.trim()) {
    errors.city = 'City is required';
  }

  if (!delivery.postcode.trim()) {
    errors.postcode = 'Postcode is required';
  }

  // Phone: validate UK format (accept +44..., 0..., or just digits)
  const phoneInput = (delivery.phone || '').trim();
  if (!phoneInput) {
    errors.phone = 'Phone number is required';
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
      // Just digits (should be 10 digits)
      isValidUK = digits.length === 10;
    }
    if (!isValidUK) {
      errors.phone =
        'Enter a valid UK phone number (e.g., +447123456789 or 07123456789)';
    }
  }

  if (!deliveryMethod) {
    errors.deliveryMethod = 'Delivery method is required';
  }

  if (!paymentType) {
    errors.paymentType = 'Payment method is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
