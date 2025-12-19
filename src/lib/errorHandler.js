let _showError = null;
let _showSuccess = null;

export function registerErrorHandler(fn) {
  _showError = fn;
}
export function registerSuccessHandler(fn) {
  _showSuccess = fn;
}

export function reportError(err) {
  try {
    const message =
      typeof err === 'string'
        ? err
        : err?.response?.data?.message ||
          err?.message ||
          'An unexpected error occurred';
    if (_showError) _showError(String(message));
    else console.error('[reportError]', message, err);
  } catch (e) {
    console.error('[reportError] failed', e, err);
  }
}

export function reportSuccess(msg) {
  try {
    if (_showSuccess) _showSuccess(String(msg));
    else console.log('[reportSuccess]', msg);
  } catch (e) {
    console.error('[reportSuccess] failed', e, msg);
  }
}
