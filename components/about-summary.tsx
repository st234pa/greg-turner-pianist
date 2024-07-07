import Section from '@/layouts/section';
import { Button, Link } from '@nextui-org/react';

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
              Bachelor's from Eastman. I have years of experience teaching from
              beginner to advanced students ages 4-30.
            </p>
            <p className="pb-8">
              Through a holistic approach that includes music theory, effective
              practice techniques, and goal setting, I equip my students with
              the tools they need to play fluently and confidently. Most
              importantly, through my own passion and enthusiasm for music, my
              goal is for all of my students to develop a deep love for music
              and the music-making process.
            </p>
            <Button
              color="default"
              radius="full"
              as={Link}
              size="lg"
              href="/about"
            >
              Learn more
            </Button>
          </div>
        </div>
        <div className="about-summary-image-container">
          <img
            src="/greg_headshot.JPG"
            className="about-summary-image-blur"
          />
          <img
            src="/greg_headshot.JPG"
            className="about-summary-image"
          />
        </div>
      </div>
    </Section>
  );
}
