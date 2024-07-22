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
              In-home piano lessons in Manhattan and Jersey City
            </h1>
            <p className="text-xl pt-6 pb-8 font-light">
              Hello! My name is Greg Turner. I received my Master's in Piano
              Performance from <span className="font-bold">Juilliard</span> and
              I offer in-home private lessons to students of all levels and
              ages.
            </p>
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
