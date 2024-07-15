import { FacebookIcon, InstagramIcon, YoutubeIcon } from './icons';
import { Divider, Link } from '@nextui-org/react';
import Section from '@/layouts/section';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <Section>
      <Divider className="mt-4" />
      <div className="w-full pt-4 lg:px-24 md:flex md:flex-row items-center gap-4 ">
        <h1 className="pb-3 sm:pb-0 text-2xl font-semibold flex-grow">
          Turner Piano Studio
        </h1>
        <div className="text-sm pb-4 sm:pb-0 md:pr-12">
          <h2 className="uppercase text-default-500 text-tiny pb-1">Contact</h2>
          <p className="pb-1">
            <Link
              size="sm"
              color="foreground"
              target="_blank"
              href="mailto:gregturnerpianist@gmail.com"
            >
              gregturnerpianist@gmail.com
            </Link>
          </p>
          <p>
            <Link
              size="sm"
              color="foreground"
              target="_blank"
              href="tel:2482753939"
            >
              (248)-275-3939
            </Link>
          </p>
          <h2 className="uppercase text-default-500 text-tiny pt-4">Follow</h2>
          <div className="w-full flex pt-2 items-center gap-4">
            <Link
              href="https://instagram.com/gregturnerpianist"
              target="_blank"
              color="foreground"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61561084240413"
              target="_blank"
              color="foreground"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://www.youtube.com/@gregturnerpianist"
              target="_blank"
              color="foreground"
            >
              <YoutubeIcon />
            </Link>
          </div>
        </div>
        <div className="text-sm gap-1 flex flex-col">
          <h2 className="uppercase text-default-500 text-tiny pb-1">
            Navigation
          </h2>
          {siteConfig.navItems.map((navItem) => (
            <div key={navItem.href}>
              <Link
                href={navItem.href}
                size="sm"
                color="foreground"
              >
                {navItem.label}
              </Link>
            </div>
          ))}
          <div>
            <Link
              href={'/contact'}
              size="sm"
              color="foreground"
            >
              Request a Trial Lesson
            </Link>
          </div>
        </div>
      </div>
      <Divider className="mt-4" />
      <div className="w-full pt-4 pb-2 text-sm text-default-400">
        This site is protected by reCAPTCHA and the Google{' '}
        <Link
          size="sm"
          href="https://policies.google.com/privacy"
          color="secondary"
        >
          Privacy Policy
        </Link>{' '}
        and{' '}
        <Link
          size="sm"
          color="secondary"
          href="https://policies.google.com/terms"
        >
          Terms of Service
        </Link>{' '}
        apply.
      </div>
    </Section>
  );
}
