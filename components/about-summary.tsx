import Section from '@/layouts/section';
import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';

export default function AboutSummary() {
  return (
    <Section>
      <div className="about-summary">
        <div className="about-summary-text">
          <div>
            <h1 className="text-4xl">About Me</h1>
            <p className="pt-8 pb-4">
              Hello! I'm a dedicated pianist and music educator based in NYC. I
              received my Master's in Piano Performance from Juilliard and my
              Bachelor's from Eastman. I offer in-home private lessons to
              students of all levels, and I have years of experience teaching
              students ages 4-30.
            </p>
            <p className="pb-8">
              Through a holistic approach that includes music theory, effective
              practice techniques, and goal setting, I equip my students with
              the tools they need to play fluently and confidently. Most
              importantly, through my own passion and enthusiasm for music, my
              goal is for all of my students to develop a deep love for music
              and the music-making process.
            </p>
            <div className="flex gap-4">
              <Button
                color="default"
                radius="full"
                as={Link}
                href="/about"
              >
                Learn More
              </Button>
              <Button
                color="primary"
                radius="full"
                as={Link}
                href="/contact"
              >
                Request a Trial Lesson
              </Button>
            </div>
          </div>
        </div>
        <div className="about-summary-image-container">
          <Image
            src="/greg_headshot.JPG"
            className="about-summary-image-blur"
            alt="Greg Turner headshot blurred"
            priority
            width={1000000}
            height={1000000}
          />
          <Image
            src="/greg_headshot.JPG"
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
