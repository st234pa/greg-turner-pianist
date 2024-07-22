import DefaultLayout from "@/layouts/default";
import Section from "@/layouts/section";
import { Accordion, AccordionItem, Link } from "@nextui-org/react";

export default function IndexPage() {
  const philosophyContent = [
    {
      title: "Piano lessons should develop a students love for music",
      id: "philosophy-love-for-music",
      content: (
        <div>
          <p className="pb-2">
            I understand that most people will not go into music as a career, so
            my number one goal for all of my students is to develop in them a
            love for music and the music making process that lasts them the rest
            of their lives, and to give them the tools to make music fluently
            and effortlessly.
          </p>
        </div>
      ),
    },
    {
      title: "Music is a path to personal growth",
      id: "philosophy-personal-growth",
      content: (
        <div>
          <p className="pb-2">
            When learning an instrument, one learns to problem solve, learn
            efficiently, set goals, focus intently, and be disciplined.
          </p>
          <p className="pb-2">
            These are all skills that students will carry with them for the rest
            of their lives far beyond the domain of music.
          </p>
        </div>
      ),
    },
    {
      title: "Music is a path to connection",
      id: "philosophy-connection",
      content: (
        <div>
          <p className="pb-2">
            To me, learning to play an instrument is about expressing emotions,
            telling stories, and connecting deeply with the music, the composer,
            and your audience.
          </p>
          <p className="pb-2">
            My lessons include frequent discussions about the character and
            emotions of pieces, and expressing these aspects is the number one
            priority. Through this process, my students learn to become not just
            better musicians but more empathetic people in general.
          </p>
        </div>
      ),
    },
    {
      title: "A highly supportive environment is essential",
      id: "philosophy-high-support",
      content: (
        <div>
          <p className="pb-2">
            Though every student progresses at their own pace, I truly believe
            every student is capable of being a master of their instrument. I
            make sure all my students feel capable of achieving their goals. I
            never degrade, shame, or yell at my students.
          </p>
          <p className="pb-2">
            I strive to create an environment where students feel safe,
            confident, and comfortable to make mistakes, yet eager to fix them.
          </p>
        </div>
      ),
    },
    {
      title: "Students should be held to the highest standard they can be",
      id: "philosophy-high-standards",
      content: (
        <div>
          <p className="pb-2">
            A highly supportive environment does not mean standards should drop.
            But I also understand that everyone has a different standard they
            should be held to. Expecting the impossible is a perfect way to make
            a student feel incompetent, no matter how supportive you are.
          </p>
          <p className="pb-2">
            With this in mind, I constantly adjust my standards with my students
            and try to hold them to the highest standard they are capable of
            being held to without being discouraged.
          </p>
        </div>
      ),
    },
    {
      title: "Practicing is an art that needs to be perfected",
      id: "philosophy-practice-is-art",
      content: (
        <div>
          <p className="pb-2">
            No one is capable of reaching their goals if they don't have good
            practice strategies, and when they do, the sky's the limit.
          </p>
          <p className="pb-2">
            With this in mind, we talk a lot about practice in lessons. We talk
            about what strategies to use and how exactly to allocate one's time
            during practice.
          </p>
          <p className="pb-2">
            We also spend time reflecting on how practice goes each week. I give
            suggestions based on these reflections, allowing students to refine
            their practice process over time.
          </p>
          <p className="pb-2">
            Sometimes I ask my students to record their practice so we can
            ensure they are practicing in a way that will guarantee results.
          </p>
          <p className="pb-2">
            Ultimately, through all of our refining of practice strategies, all
            of my students develop confidence that the time they put in will
            guarantee results.
          </p>
        </div>
      ),
    },
    {
      title: "Piano expertise takes years to develop",
      id: "philosophy-expertise-takes-years",
      content: (
        <div>
          <p className="pb-2">
            Even the most talented pianists in the world work tirelessly to get
            where they are. Lang Lang was known to practice up to 8 hours a day
            as a child. Talent exists, but it is overrated. Hard work beats
            talent when talent doesn't work. If you want to see results, you
            must work hard, no matter who you are.
          </p>
          <p className="pb-2">
            Anyone promising you that you'll be able to play Moonlight Sonata or
            Rondo Alla Turka in a month is lying to you or completely
            delusional. There is no such thing as mastering piano in a few
            lessons and any decent pianist will tell you this.
          </p>
        </div>
      ),
    },
  ];
  const lessonStructureContent = [
    {
      title: "Refinement of Practice Strategies",
      id: "philosophy-curriculum-practice-strategies",
      content: (
        <div>
          <p className="pb-2">
            No one can reach their goals without effective practice strategies.
            In my lessons, we focus extensively on practice methods, discussing
            which strategies to use and how to allocate practice time
            effectively. We also reflect on weekly practice sessions, with me
            providing suggestions to refine the process continuously.
          </p>
          <p className="pb-2">
            I sometimes ask students to record their practice sessions to ensure
            they are practicing in a way that guarantees results. Through this
            constant refinement, all my students develop confidence that their
            dedicated practice time will yield tangible results.
          </p>
        </div>
      ),
    },
    {
      title: "Technique Training",
      id: "philosophy-curriculum-technique",
      content: (
        <div>
          <p className="pb-2">
            I’ve studied healthy and efficient piano techniques with some of the
            world's greatest teachers at Juilliard and Eastman. I strive to pass
            this knowledge to my students in an understandable way, ensuring
            they can play at a high level without injury for life.
          </p>
          <p className="pb-2">
            My students practice scales, arpeggios, exercises, and etudes
            carefully chosen to improve specific weak spots in their technique.
            All of my technique discussions aim to achieve musical goals in our
            pieces, with the understanding that good technique is only a means
            to an end.
          </p>
        </div>
      ),
    },
    {
      title: "Carefully Selected Repertoire",
      id: "philosophy-curriculum-repertoire",
      content: (
        <div>
          <p className="pb-2">
            Selecting the right pieces is crucial for making piano practice fun
            and rewarding. I understand the frustration of working on something
            too difficult and the boredom of something too easy. Therefore, I
            carefully select pieces that are within and just beyond my students'
            abilities, ensuring they feel capable yet challenged.
          </p>
          <p className="pb-2">
            I've created a personal collection of over 50 pieces for beginner to
            advanced students, each annotated and ordered by level. I use this
            along with the proven{" "}
            <Link
              className="font-normal"
              color="secondary"
              target="_blank"
              href="https://www.rcmusic.com/"
            >
              RCM
            </Link>{" "}
            curriculum. When students are ready for a new piece, I offer them
            multiple options to choose from, giving them ownership and
            motivation to practice.
          </p>
        </div>
      ),
    },
    {
      title: "Music Theory",
      id: "philosophy-curriculum-theory",
      content: (
        <div>
          <p className="pb-2">
            I incorporate music theory into my lessons. By learning how the
            music is structured and why it sounds the way it does, students
            enhance their appreciation for the pieces, as well as their
            analytical skills.
          </p>
          <p className="pb-2">
            I use the{" "}
            <Link
              className="font-normal"
              color="secondary"
              target="_blank"
              href="https://www.rcmusic.com/"
            >
              RCM
            </Link>{" "}
            curriculum for music theory. This well established curriculum brings
            students beyond an undergraduate level of music theory by the end of
            the program.
          </p>
        </div>
      ),
    },
    {
      title: "Music History",
      id: "philosophy-curriculum-history",
      content: (
        <div>
          <p className="pb-2">
            I incorporate music history into my lessons. By exploring the
            stories behind the music and the cultures that influenced it,
            students connect more personally with the pieces they play.
          </p>
          <p className="pb-2">
            For advanced students, I use the{" "}
            <Link
              className="font-normal"
              color="secondary"
              target="_blank"
              href="https://www.rcmusic.com/"
            >
              RCM
            </Link>{" "}
            curriculum for music history. It is a well established curriculum
            that brings students beyond an undergraduate level history by the
            time they finish the program.
          </p>
        </div>
      ),
    },
    {
      title: "Ear Training",
      id: "philosophy-curriculum-ear-training",
      content: (
        <div>
          <p className="pb-2">
            I teach my students the essentials of ear training that I learned at
            Eastman and Juilliard. They will be trained to recognize pitches,
            intervals, and chords, allowing them to better play by ear, and gain
            a deeper understanding of the structure of the music they play.
          </p>
        </div>
      ),
    },
  ];
  return (
    <DefaultLayout>
      <Section maxWidth="max-w-3xl" isFirst>
        <h1 className="text-3xl sm:text-4xl pb-4">Teaching Philosophy</h1>
        <Accordion
          itemClasses={{ title: "text-md", content: "text-default-600" }}
          selectionMode="multiple"
        >
          {philosophyContent.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={item.title}
              title={item.title}
              onPress={() => {
                // @ts-ignore
                dataLayer.push({ event: item.id });
              }}
            >
              <div className="font-light">{item.content}</div>
            </AccordionItem>
          ))}
        </Accordion>
        <h1 className="text-2xl pt-4 pb-2">Curriculum</h1>
        <Accordion
          id="curriculum"
          selectionMode="multiple"
          itemClasses={{ title: "text-md", content: "text-default-600" }}
        >
          {lessonStructureContent.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={item.title}
              title={item.title}
            >
              <div className="font-light">{item.content}</div>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </DefaultLayout>
  );
}
