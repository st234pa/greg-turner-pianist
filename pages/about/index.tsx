import DefaultLayout from '@/layouts/default';
import Section from '@/layouts/section';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Section
        maxWidth={768}
        isFirst
      >
        <div>About</div>
      </Section>
    </DefaultLayout>
  );
}
