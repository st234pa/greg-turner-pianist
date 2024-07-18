import DefaultLayout from '@/layouts/default';
import Section from '@/layouts/section';
import Image from 'next/image';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Section
        maxWidth="max-w-3xl"
        isFirst
      >
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
          <div className="md:col-span-3">
            <Heading1>
              I understand the importance of a strong foundation and how to
              achieve it.
            </Heading1>
            <Paragraph>
              My journey with the piano began at age 10, following Youtube
              tutorials to teach myself pieces that I loved on a two-octave toy
              keyboard.
            </Paragraph>
            <Paragraph>
              Noticing my enthusiasm, my family found me a free upright piano,
              and a few months later, I started taking formal lessons with Maria
              Mierelles, who worked with me to build a strong technical
              foundation and effective practice habits.
            </Paragraph>
            <Paragraph isLast>
              This experience has given me a better understanding of how to help
              my students improve in the early stages &mdash; I vividly remember
              the challenges I faced and the strategies I used to overcome them.
              I can relate to their frustrations and provide practical, tailored
              guidance.
            </Paragraph>
          </div>
        </div>
        <Heading1>I know what it takes to play at a high level.</Heading1>
        <Heading2>Growth mindset</Heading2>
        <Paragraph>
          Along with solid fundamentals, my teachers instilled in me a growth
          mindset &mdash; the belief that one's ability is not fixed, but rather
          determined by the amount of time spent practicing, and the practice
          strategies employed.
        </Paragraph>
        <Paragraph isLast>
          Taking this to heart, I became hungry to learn all that I could about
          the instrument. I read several books on piano performance, asked
          questions to the teachers around me whenever I had the chance, and
          began to hold myself to the highest standard possible.
        </Paragraph>
        <Image
          src="/greg_at_carnegie_hall.jpg"
          alt="Greg Turner at Carnegie Hall"
          priority
          className="object-cover my-4 rounded-[16px] max-h-[420px]"
          width={1000000}
          height={1000000}
        />
        <div className="pb-5">
          <Heading2>International competition experience</Heading2>
          <Paragraph>
            After years of dedication and hard work, I won prizes in major
            international competitions, including the Thousand Island
            International Piano Competition, Marian Garcia International Piano
            Competition, and first prize at the Kuleshov International Piano
            Competition, and I was admitted to both Eastman and Juilliard on
            scholarship.
          </Paragraph>
          <Paragraph isLast>
            My own experience of working hard to achieve success in the
            competitive piano world equips me with the knowledge and tools to
            guide my students effectively. By sharing the strategies and mindset
            required for high-level performance, I help my students develop the
            tools and mentality they need to attain their highest goals.
          </Paragraph>
        </div>
        <div className="md:grid md:grid-cols-5 md:gap-6 pb-4">
          <div className="md:col-span-3">
            <Heading1>I have spent years honing my teaching skills.</Heading1>
            <Heading2>Studying the art of teaching</Heading2>
            <Paragraph>
              At Juilliard and Eastman, I studied piano pedagogy for two years.
              In these courses, I studied topics such as the science of learning
              modalities, the science of motivation, and strategies to
              communicate effectively with various age groups.
            </Paragraph>
            <Paragraph isLast>
              In my Juilliard pedagogy courses, some of Juilliard's best
              teachers observed my lessons and provided me with constructive
              feedback. On my own time, I have spent countless hours pouring
              through neuroscience studies, learning how the brain learns motor
              movements.
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
        <Heading2>Applying the growth mindset to my own teaching</Heading2>
        <Paragraph>
          But great teaching also requires practical experience and that you
          actively try to improve your teaching ability over time. With over
          three years of teaching experience, I currently instruct around 12
          students in Manhattan and at the Long Island Music Conservatory, and I
          consider every lesson to be an opportunity to perfect my craft.
        </Paragraph>
        <Paragraph>
          I take notes on what went well and what could be improved in my own
          teaching for every lesson I give. I continue to ask questions to
          teachers I look up to and seek out all the knowledge about teaching
          available to me on a daily basis.
        </Paragraph>
      </Section>
    </DefaultLayout>
  );
}

function Heading1({ children }: { children: string }) {
  return <div className="text-3xl pb-4">{children}</div>;
}

function Heading2({ children }: { children: string }) {
  return <div className="text-2xl pb-2">{children}</div>;
}

function Paragraph({
  children,
  isLast,
}: {
  children: string;
  isLast?: boolean;
}) {
  return (
    <div className={`${isLast ? '' : 'pb-4'} font-light text-default-600`}>
      {children}
    </div>
  );
}
