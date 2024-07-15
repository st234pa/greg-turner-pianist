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
                At Juilliard and the Eastman School of Music, I learned from
                some of the best teachers in the world, including professors
                Julian Martin, Alan Chow, and Nelita True.
              </p>
              <p>
                I have spent years studying and applying their proven methods in
                my lessons, ensuring that every student gets personalized,
                engaging, and highly effective instruction.
              </p>
            </>
          }
          href="/about"
        />
        <ServiceSummary
          title="Comprehensive Curriculum"
          blurb={
            <>
              <p className="pb-4">
                I carefully select repertoire that matches each student's
                interests and abilities, ensuring they stay motivated and
                engaged. Students also receive comprehensive instruction in
                technique, music theory, and history.
              </p>
              <p>
                This well-rounded approach not only improves their playing
                skills but also deepens their understanding and appreciation of
                music.
              </p>
            </>
          }
          href="/philosophy"
        />
        <ServiceSummary
          title="Insightful Instruction"
          blurb={
            <>
              <p className="pb-4">
                Having started piano later than many of my peers, I deeply
                understand the hurdles new learners face. I remember all of the
                struggles and joys of mastering the piano, which helps me create
                a patient, encouraging, and empathetic teaching approach.
              </p>
              <p>
                With me, students have a teacher who has been in their shoes and
                is committed to their growth and success.
              </p>
            </>
          }
          href="/about"
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
    <div className="text-center">
      <Link
        href={href}
        showAnchorIcon
        className="text-xl pb-4 text-secondary"
      >
        {title}
      </Link>
      <p>{blurb}</p>
    </div>
  );
}
