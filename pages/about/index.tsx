import DefaultLayout from "@/layouts/default";
import Section from "@/layouts/section";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Section maxWidth={768} isFirst>
        <div className="text-2xl pb-4">About Me</div>
        <div></div>
      </Section>
    </DefaultLayout>
  );
}
