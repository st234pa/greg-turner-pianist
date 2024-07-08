import Section from '@/layouts/section';
import { Link } from '@nextui-org/react';

export default function ServicesSummary() {
  return (
    <Section>
      <div className="services-summary">
        <ServiceSummary
          title="Effective Teaching"
          blurb="I model my teaching after my own experience studying with world-class teachers."
          href="/philosophy"
        />
        <ServiceSummary
          title="Well-Rounded Curriculum"
          blurb="I teach carefully selected repertoire based on my students' interests and capabilities, as well as technique, music theory and history. "
          href="/philosophy#curriculum"
        />
        <ServiceSummary
          title="Fair Pricing"
          blurb="I offer fair rates, and I accept multiple forms of payment &mdash; including cash, credit card, and AfterPay."
          href="/pricing"
        />
      </div>
    </Section>
  );
}

type ServiceSummaryProps = {
  title: string;
  blurb: string;
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
