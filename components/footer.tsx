import { FacebookIcon, InstagramIcon, WebsiteIcon, YoutubeIcon } from "./icons";
import { Divider, Link } from "@nextui-org/react";
import Section from "@/layouts/section";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <Section>
      <Divider className="mt-4" />
      <div className="w-full pt-4 lg:px-24 md:flex md:flex-row items-center gap-4 ">
        <div className="pb-3 sm:pb-0 text-2xl font-semibold flex-grow">
          <Link href="/" color="foreground" size="lg">
            <WebsiteIcon id="footer-home" />
          </Link>
        </div>
        <div className="text-sm pb-4 sm:pb-0 md:pr-12">
          <h2 className="uppercase text-default-500 text-tiny pb-1">Contact</h2>
          <p className="pb-1">
            <Link
              size="sm"
              color="foreground"
              target="_blank"
              href="mailto:gregturnerpianostudio@gmail.com"
              id="footer-email"
            >
              gregturnerpianostudio@gmail.com
            </Link>
          </p>
          <p>
            <Link
              size="sm"
              color="foreground"
              target="_blank"
              href="sms:6465809160"
              id="footer-phone"
            >
              (646)-580-9160
            </Link>
          </p>
          <h2 className="uppercase text-default-500 text-tiny pt-4">Follow</h2>
          <div className="w-full flex pt-2 items-center gap-4">
            <Link
              href="https://instagram.com/gregturnerpianostudio"
              target="_blank"
              color="foreground"
              id="footer-instagram"
            >
              <InstagramIcon id="footer-instagram" />
            </Link>
            <Link
              href="https://www.facebook.com/gregturnerpianostudio"
              target="_blank"
              color="foreground"
              id="footer-facebook"
            >
              <FacebookIcon id="footer-facebook" />
            </Link>
            <Link
              href="https://www.youtube.com/@gregturnerpianist"
              target="_blank"
              color="foreground"
              id="footer-youtube"
            >
              <YoutubeIcon id="footer-youtube" />
            </Link>
          </div>
        </div>
        <div className="text-sm gap-1 flex flex-col">
          <div className="uppercase text-default-500 text-tiny pb-1">
            Navigation
          </div>
          {siteConfig.navItems
            .filter((navItem) => "home" !== navItem.id)
            .map((navItem) => (
              <Link
                href={navItem.href}
                key={navItem.href}
                size="sm"
                color="foreground"
                id={`footer-${navItem.id}`}
              >
                {navItem.label}
              </Link>
            ))}
        </div>
      </div>
      <Divider className="mt-4" />
      <div className="w-full pt-4 pb-2 text-tiny uppercase text-default-500">
        Last updated July 25, 2024.
      </div>
      <div className="w-full pb-2 text-tiny text-default-500">
        This site is protected by reCAPTCHA and the Google{" "}
        <Link
          href="https://policies.google.com/privacy"
          color="secondary"
          target="_blank"
          className="text-tiny"
        >
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          target="_blank"
          color="secondary"
          href="https://policies.google.com/terms"
          className="text-tiny"
        >
          Terms of Service
        </Link>{" "}
        apply.
      </div>
    </Section>
  );
}
