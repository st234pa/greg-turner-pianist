import Section from '@/layouts/section';
import { Link } from '@nextui-org/react';
import { ReactElement } from 'react';

export default function ServicesSummary() {
  return (
    <Section>
      <div className="services-summary">
        <ServiceSummary
          title="Superior Training"
          blurb={
            <>
              <p className="pb-4">
                At Juilliard and the Eastman School of Music, I was fortunate
                enough to have studied with some of the best teachers in the
                world.
              </p>
              <p>
                I have spent years studying and applying their proven methods in
                my lessons, so each of my students gets personalized, engaging,
                and highly effective instruction.
              </p>
            </>
          }
          href="/about"
        />
        <ServiceSummary
          title="Insightful Instruction"
          blurb={
            <>
              <p className="pb-4">
                Because I started piano later than many of my peers, I remember
                all of the struggles and joys of mastering the piano, and I
                understand deeply the hurdles that new learners face.
              </p>
              <p>
                This valuable insight helps me create a patient, encouraging,
                and empathetic teaching approach.
              </p>
            </>
          }
          href="/philosophy"
        />
        <ServiceSummary
          title="Competitive Pricing"
          blurb={
            <>
              <p className="pb-4">
                I offer competitive rates to ensure that high-quality, in-home
                piano lessons are as accessible as possible, for as many
                students as possible.
              </p>
              <p>
                I accept multiple forms of payment both online and in person
                &mdash; including cash, credit card, Venmo, Zelle, and even
                AfterPay.
              </p>
            </>
          }
          href="/pricing"
        />
      </div>
    </Section>
  );
}

type ServiceSummaryProps = {
  title: string;
  blurb: ReactElement;
  href: string;
};

function ServiceSummary({ title, blurb, href }: ServiceSummaryProps) {
  return (
    <div className="lg:text-center">
      <Link
        href={href}
        showAnchorIcon
        className="text-xl pb-4 text-secondary"
      >
        {title}
      </Link>
      {blurb}
    </div>
  );
}
