import Section from "@/layouts/section";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";

export default function AboutSummary() {
  return (
    <Section isFirst>
      <div className="about-summary pt-4">
        <div className="about-summary-text">
          <div>
            <h1 className="text-4xl lg:text-5xl">
              In-home piano lessons in Manhattan and Jersey City with a
              Juilliard graduate
            </h1>
            <ul className="text-lg pt-6 pb-8 font-light list-disc list-inside">
              <li>
                The Juilliard School - Master of Music in Piano Performance
              </li>
              <li>The Juilliard School - Teaching Fellow of Secondary Piano</li>
              <li>
                Eastman School of Music - Bachelor of Music in Piano Performance
              </li>
              <li>
                Kuleshov International Piano Competition - First Prize Winner
              </li>
              <li>
                Thousand Islands International Piano Competition - Third Prize
                Winner
              </li>
            </ul>
            <Button
              color="primary"
              variant="shadow"
              radius="full"
              as={Link}
              size="lg"
              href="/contact"
              id="contact-about-summary"
            >
              Request a FREE Trial Lesson
            </Button>
          </div>
        </div>
        <div className="about-summary-image-container">
          <Image
            src="/headshot.jpg"
            className="about-summary-image-blur"
            alt="Greg Turner headshot blurred"
            priority
            width={1000000}
            height={1000000}
          />
          <Image
            src="/headshot.jpg"
            className="about-summary-image"
            alt="Greg Turner headshot"
            priority
            width={1000000}
            height={1000000}
          />
        </div>
      </div>
    </Section>
  );
}
