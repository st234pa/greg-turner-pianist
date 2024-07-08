export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Greg Turner',
  description: 'Pianist and educator',
  navItems: [
    {
      label: 'About Me',
      href: '/about',
    },
    {
      label: 'Teaching Philosophy',
      href: '/philosophy',
    },
    {
      label: 'Pricing',
      href: '/pricing',
    },
  ],
};
