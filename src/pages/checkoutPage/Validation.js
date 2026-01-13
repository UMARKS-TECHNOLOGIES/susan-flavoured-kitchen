export  function validateCheckoutFields(delivery, deliveryMethod, paymentType) {
  const errors = {};

  if (!delivery.address.trim()) {
    errors.address = 'Address is required';
  }

  if (!delivery.country.trim()) {
    errors.country = 'Country is required';
  }

  if (!delivery.state.trim()) {
    errors.state = 'State is required';
  }

  if (!delivery.city.trim()) {
    errors.city = 'City is required';
  }

  if (!delivery.postcode.trim()) {
    errors.postcode = 'Postcode is required';
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
