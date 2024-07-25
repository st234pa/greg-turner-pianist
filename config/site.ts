export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  
  navItems: [
    {
      name: 'Piano Lessons NYC Manhattan for Kids and Adults',
      description: 'Get in home lessons with an award winning Juilliard graduate pianist. All ages and abilities welcome!',
      label: '',
      id: 'home',
      href: '/'
    },
    {
      name: 'About Me | Greg Turner Piano Studio',
      description: 'Learn more about my background and why it makes me the ideal piano teacher.',
      label: 'About Me',
      id:'about',
      href: '/about',
    },
    {
      name: 'Teaching Philosophy | Greg Turner Piano Studio',
      description: 'Learn more about my teaching philosophy and what makes lessons with me unique.',
      label: 'Teaching Philosophy',
      id:'philosophy',
      href: '/philosophy',
    },
    {
      name: 'Pricing | Greg Turner Piano Studio',
      description: 'Explore different pricing options based on lesson duration and lesson package size.',
      label: 'Pricing',
      id: 'pricing',
      href: '/pricing',
    },
    {
      name: 'Request a Free Trial Lesson | Greg Turner Piano Studio',
      description: 'Request a free trial lesson with Greg Turner!',
      label: '',
      id: 'contact',
      href: '/contact',
    }
  ],
};
