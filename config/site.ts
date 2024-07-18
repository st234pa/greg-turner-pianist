export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Greg Turner Piano Studio',
  description: 'In-home piano lessons in Lower Manhattan and Jersey City',
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
