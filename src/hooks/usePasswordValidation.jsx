import React from 'react';

/**
 * Small hook to centralize password validation rules.
 * Returns validation flags and a helper to check matching.
 */
export default function usePasswordValidation(password = '') {
  const validations = React.useMemo(() => {
    return {
      minLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      hasNumber: /\d/.test(password),
    };
  }, [password]);

  const passwordsMatch = React.useCallback(
    confirm => {
      if (!confirm) return true;
      return password === confirm;
    },
    [password]
  );

  return { validations, passwordsMatch };
}
