import DefaultLayout from "@/layouts/default";
import Section from "@/layouts/section";
import { Link } from "@nextui-org/react";
import Image from "next/image";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Section maxWidth="max-w-3xl" isFirst>
        <div className="text-3xl sm:text-4xl pb-4">About Me</div>
        <div className="md:grid md:grid-cols-5 md:gap-6 pb-5">
          <Image
            src="/greg_and_childhood_teacher.JPG"
            alt="Greg Turner and Maria Mierelles"
            priority
            className="object-cover h-full rounded-[16px] md:col-span-2"
            width={1000000}
            height={1000000}
          />
          <div className="pt-4 md:pt-0 md:col-span-3">
            <Heading>
              My journey with the piano began at age ten, following Youtube
              tutorials to teach myself pieces such as Beethoven's Moonlight
              Sonata and Joplin's Maple Leaf Rag.
            </Heading>
            <Paragraph>
              A few months later I started taking formal lessons with Maria
              Mierelles, an accomplished Detroit pianist and teacher, who came
              out of retirement to take me as a student. She worked with me to
              build a strong technical foundation, effective practice habits and
              a deep love for music.
            </Paragraph>
            <Paragraph isLast>
              My late start has given me a better understanding of how to help
              my students improve in the early stages &mdash; I vividly remember
              the challenges I faced and the strategies I used to overcome them.
              I can relate to their frustrations and provide practical, tailored
              guidance.
            </Paragraph>
          </div>
        </div>
        <div className="pb-5">
          <Heading>
            I have since won prizes in several major international competitions,
            and I was admitted to both Eastman and Juilliard on scholarship.
          </Heading>
          <Paragraph isLast>
            Some of these prizes include first place at the{" "}
            <Link
              className="font-normal"
              color="secondary"
              target="_blank"
              href="https://sites.uco.edu/cfad/academics/music/the-kuleshov/past-winners"
            >
              Kuleshov
            </Link>{" "}
            International Piano Competition, third place in the{" "}
            <Link
              className="font-normal"
              color="secondary"
              target="_blank"
              href="https://www.capevincentartscouncil.org/pianocompetitioninfo/2022competitionresults.html"
            >
              Thousand Islands
            </Link>{" "}
            International Piano Competition, and honorable mention at the{" "}
            <Link
              className="font-normal"
              color="secondary"
              target="_blank"
              href="https://www.facebook.com/GarciaPianoCompetition/posts/pfbid0P6knJRPMaJgNt6v6tvB6TA4SWhLNLAvuHaL4WVzhGr4rMcLqJKxKhtMK1FXqmZNzl?rdid=ozmDJA8i1MX4enYb"
            >
              Marian Garcia
            </Link>{" "}
            International Piano Competition.
          </Paragraph>
          <Image
            src="/greg_at_carnegie_hall.jpg"
            alt="Greg Turner at Carnegie Hall"
            priority
            className="object-cover mt-4 rounded-[16px] max-h-[420px]"
            width={1000000}
            height={1000000}
          />
          <div className="text-center mt-1 mb-3">
            <p className="text-sm font-light text-default-500">
              From my performance at Carnegie Hall as a prize winner at the New
              York Piano Competition and Festival
            </p>
          </div>
          <Paragraph isLast>
            By sharing the strategies and mindset I employed to perform at the
            highest level, I help my students develop the tools and mindset they
            need to attain their goals.
          </Paragraph>
        </div>
        <div className="md:grid md:grid-cols-5 md:gap-6 pb-4">
          <div className="pb-4 md:col-span-3">
            <Heading>
              I have studied pedagogy at Eastman and Juilliard, and I have years
              of experience teaching students of all ages.
            </Heading>
            <Paragraph>
              At Juilliard and Eastman, I took pedagogy courses on the science
              of learning modalities, the science of motivation, and strategies
              to communicate effectively with various age groups. I have also
              spent countless hours pouring through neuroscience studies,
              learning how the brain learns motor movements.
            </Paragraph>
            <Paragraph isLast>
              I currently instruct over a dozen students in the NYC area, and I
              view every lesson I give as an opportunity to hone my teaching
              skills.
            </Paragraph>
          </div>
          <Image
            src="/greg_graduation.jpg"
            alt="Greg Turner at graduation"
            priority
            className="md:col-span-2 object-cover h-full rounded-[16px]"
            width={1000000}
            height={1000000}
          />
        </div>
      </Section>
    </DefaultLayout>
  );
}

function Heading({ children }: { children: string }) {
  return <div className="text-2xl pb-2">{children}</div>;
}

function Paragraph({
  children,
  isLast,
}: {
  children: string | JSX.Element[] | Array<string | JSX.Element>;
  isLast?: boolean;
}) {
  return (
    <div className={`${isLast ? "" : "pb-4"} font-light text-default-600`}>
      {children}
    </div>
  );
}
