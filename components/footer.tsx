import { ThemeSwitch } from '@/components/theme-switch';
import { EmailIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from './icons';
import { Divider } from '@nextui-org/divider';
import Section from '@/layouts/section';
import { Link } from '@nextui-org/link';

export default function Footer() {
  return (
    <div>
      <Section isFirst>
        <div className="flex flex-col">
          <Divider className="my-4" />

          <div className="w-full flex justify-center items-center gap-6">
            <Link
              color="foreground"
              href="https://instagram.com/gregturnerpianist"
              target="_blank"
            >
              <InstagramIcon />
            </Link>
            <Link
              color="foreground"
              href="https://www.facebook.com/profile.php?id=61561084240413"
              target="_blank"
            >
              <FacebookIcon />
            </Link>
            <Link
              color="foreground"
              href="https://www.youtube.com/@gregturnerpianist"
              target="_blank"
            >
              <YoutubeIcon />
            </Link>
            <Link
              color="foreground"
              href="mailto:gregturnerpianist@gmail.com"
              target="_blank"
            >
              <EmailIcon />
            </Link>
            <ThemeSwitch />
          </div>
        </div>
        <div className="w-full text-center pt-5 pb-2 text-sm text-default-400">
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
    </div>
  );
}
