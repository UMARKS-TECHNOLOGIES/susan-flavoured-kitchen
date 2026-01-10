export const getUserLocale = () =>
  navigator.language || 'en-US';

export const formatDate = (dateString, locale = getUserLocale()) => {
  if (!dateString) return '—';

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateString));
};

export const memberDuration = dateString => {
  if (!dateString) return '—';

  const created = new Date(dateString);
  const now = new Date();

  const diffMs = now - created;
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffDays < 30) {
    return 'Member for less than a month';
  }

  const months = Math.floor(diffDays / 30);

  if (months < 12) {
    return `Member for ${months} month${months > 1 ? 's' : ''}`;
  }

  const years = Math.floor(months / 12);
  return `Member for ${years} year${years > 1 ? 's' : ''}`;
};


export const joinedAgo = dateString => {
  if (!dateString) return '—';

  const created = new Date(dateString);
  const now = new Date();

  const diffDays = Math.floor(
    (now.getTime() - created.getTime()) / 86400000
  );

  if (diffDays < 30) return 'Joined recently';

  const months = Math.floor(diffDays / 30);
  if (months < 12) {
    return `Joined ${months} month${months > 1 ? 's' : ''} ago`;
  }

  const years = Math.floor(months / 12);
  return `Joined ${years} year${years > 1 ? 's' : ''} ago`;
};