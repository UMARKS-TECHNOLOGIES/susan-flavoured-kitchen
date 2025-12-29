import React from 'react';

/**
 * Centralized password validation rules
 * Requirements:
 * - Min 8 characters
 * - At least one uppercase letter
 * - At least one number OR (&, @, %)
 */
export default function usePasswordValidation(password = '') {
  const validations = React.useMemo(() => {
    const hasNumberOrAllowedSymbol = /[0-9&@%]/.test(password);

    return {
      minLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasNumberOrSymbol: hasNumberOrAllowedSymbol,
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
