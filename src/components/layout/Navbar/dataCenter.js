export function navLinks(categories) {
  return [
    { name: 'Home', href: '/' },
    {
      name: 'Menu',
      href: '/menu',
      dropdown: ['All', ...categories],
    },
    { name: 'Event Catering', href: '/event' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact-us' },
  ];
}
