export const handleValidation = formData => {
  if (
    !formData.name ||
    !formData.phone ||
    !formData.email ||
    !formData.address
  ) {
    alert('Please fill in all required fields');
    return;
  }
  return true;
};

export const handleSuccessClose = ({ handler, location, navigate }) => {
  handler(false);
  navigate(location); // Redirect to home or orders page
};

export const handleFailedClose = ({ handler, location, navigate }) => {
  handler(false);
  navigate(location); // Redirect to home or orders page
};

export const handleRetry = handler => {
  handler(false);
  // User can try again with the same form data
};

export const handleSubmit = async ({formData,}) => {
  if (!formData) {
    console.log('no form data passed to be validated');
  }
  const valid = handleValidation(formData);
  if (!valid) return false;

  //call server to initialise order
};
