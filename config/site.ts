export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Greg Turner Piano Studio',
  description: 'In-home piano lessons in Manhattan and Jersey City',
  navItems: [
    {
      label: 'About Me',
      id:'about',
      href: '/about',
    },
    {
      label: 'Teaching Philosophy',
      id:'philosophy',
      href: '/philosophy',
    },
    {
      label: 'Pricing',
      id: 'pricing',
      href: '/pricing',
    },
  ],
};
