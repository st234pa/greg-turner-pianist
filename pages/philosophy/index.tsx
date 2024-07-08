import DefaultLayout from '@/layouts/default';
import Section from '@/layouts/section';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function IndexPage() {
  const philosophyContent = [
    {
      title: 'Music is a path to personal growth and connection',
      content: (
        <div>
          <p className="pb-2">
            To me, learning to play an instrument is far more than just learning
            how to move your fingers at the right time; it is about expressing
            emotions, telling stories, and connecting deeply with the music and
            your audience.
          </p>
          <p className="pb-2">
            Through this process, my students learn to become not just better
            musicians but more empathetic and productive people in general. They
            learn to problem solve, learn efficiently, set goals, be
            disciplined, and be focused. But most importantly, they learn to
            love music and the music making process for the rest of their lives.
          </p>
        </div>
      ),
    },
    {
      title: 'High standards, high support',
      content: (
        <div>
          <p className="pb-2">
            The phrase high standards, high support, comes from David Yaeger, a
            developmental psychologist who studies the science of motivating
            young people. He has shown that the optimal learning environment is
            one that combines high standards with high support.
          </p>
          <p className="pb-2">
            Without the high standards, students never reach their potential.
            Without the support, students learn to despise the lessons and
            practice and often quit.
          </p>
          <p className="pb-2">
            I strive to foster a high standards and high support environment.
          </p>
          <p className="pb-2">
            Though every student progresses at their own pace, I truly believe
            every student is capable of being a master of their instrument. I
            make sure all my students feel capable of achieving their goals. I
            never degrade, shame, or yell at my students.
          </p>
          <p className="pb-2">
            I also hold students to the highest standard they are capable of
            being held to. If a standard is not being met, we discuss why and
            strategies to reach it next time.
          </p>
          <p className="pb-2">
            But high standards does not mean impossible standards. I don't
            expect every student to play like Vladimir Horowitz or Lang Lang,
            but if a student shows the drive and dedication to be held to that
            standard or beyond, I will push them to reach that level.
          </p>
        </div>
      ),
    },
    {
      title: 'Practicing is an art that needs to be perfected',
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
      title: 'Piano expertise takes years to develop',
      content: (
        <div>
          <p className="pb-2">
            Anyone promising you that you'll be able to play Moonlight Sonata or
            Rondo Alla Turka in a month is lying to you or completely
            delusional. There is no such thing as mastering piano in a few
            lessons and any decent pianist will tell you this.
          </p>
          <p className="pb-2">
            Even the most talented pianists in the world work tirelessly to get
            where they are. For instance, as a child, Lang Lang was known to
            practice up to eight hours a day; according to Yunchan Lim, he still
            practices for twelve or more hours on Sundays.
          </p>
          <p className="pb-2">
            Some students do progress faster with less time, but that has
            everything to do with their interest and focus in their practice
            &mdash; not some secret their teacher told them or some piano gene
            informing them how to play.
          </p>
          <p className="pb-2">
            In my studio, we embrace the value of hard work and smart work. If
            you finished your assignment for the week in two practice days, the
            takeaway isn't that you are talented (which may also be true), it's
            that your assignment was too easy and the standards should be
            raised.
          </p>
        </div>
      ),
    },
  ];
  const lessonStructureContent = [
    {
      title: 'Repertoire',
      content: (
        <div>
          <p className="pb-2">
            Playing the right pieces is an essential part of making practice of
            the instrument fun and rewarding. I know just how frustrating it can
            be to work on something that is too difficult, and equally how
            boring it can be to work on something that is too easy.
          </p>
          <p className="pb-2">
            Knowing this, I take choosing the right repertoire very seriously
            and approach it with great care. In my studio, I carefully select
            pieces for my students that are within and just beyond their
            ability, so at all times they feel capable but pushed to be better.
          </p>
          <p className="pb-2">
            I've crafted my own personal book of over 50 various pieces for
            beginner to advanced students. Each one is annotated by me to
            describe the piece's value and ordered by level. I use this
            collection as well as the well established and proven curriculum of
            RCM to choose the perfect pieces for my students.
          </p>
          <p className="pb-2">
            When students are ready for a new piece, I give them 3 different
            options, and they choose which they like the best. This gives the
            student ownership over the piece, as well as a sense of
            responsibility to finish it, motivating them to practice.
          </p>
          <p className="pb-2">
            While we primarily focus on pieces from the western classical
            tradition, I teach students music outside of this genre as well if
            they so desire.
          </p>
        </div>
      ),
    },
    {
      title: 'Technique',
      content: (
        <div>
          <p className="pb-2">
            I've spent years studying what it takes to have a healthy and
            efficient technique with some of the greatest teachers in the world
            at Juilliard and Eastman.
          </p>
          <p className="pb-2">
            I strive to pass the knowledge I gained from them down to my
            students in a way they will understand so they will be able to play
            piano at a high level without injury for the rest of their lives.
          </p>
          <p className="pb-2">
            I understand that piano isn't just about good technique, it is about
            making music. So, all discussions of technique I provide are in
            service of achieving a musical goal in the pieces we work on
            together.
          </p>
          <p className="pb-2">
            To practice technique, my students do scales and arpeggios, as well
            as exercises and etudes carefully chosen to improve specific weak
            spots in their technique.
          </p>
        </div>
      ),
    },
    {
      title: 'Theory and History',
      content: (
        <div>
          <p className="pb-2">
            My students learn music theory, music history, and ear training on
            top of their piano studies.
          </p>
          <p className="pb-2">
            By learning how the music is structured and why it sounds the way it
            does, students enhance their appreciation for the pieces, as well as
            their analytical skills.
          </p>
          <p className="pb-2">
            By exploring the stories behind the music and learning about the
            cultures that influenced it, students connect more personally with
            the pieces they play.
          </p>
          <p className="pb-2">
            I use RCM’s curriculum for music theory and music history. It is a
            well established curriculum that brings students beyond an
            undergraduate level of theory and history by the time they finish
            the program.
          </p>
        </div>
      ),
    },
  ];
  return (
    <DefaultLayout>
      <Section
        maxWidth={768}
        isFirst
      >
        <h1 className="text-3xl pb-2 py-4">Teaching Philosophy</h1>
        {/* <h1 className="text-3xl pb-2"></h1> */}
        <Accordion
          itemClasses={{ title: 'text-md', content: 'text-default-400' }}
        >
          {philosophyContent.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={item.title}
              title={item.title}
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
        <h1 className="text-2xl pt-4 pb-2">Curriculum</h1>
        <Accordion
          id="curriculum"
          itemClasses={{ title: 'text-md', content: 'text-default-400' }}
        >
          {lessonStructureContent.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={item.title}
              title={item.title}
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </DefaultLayout>
  );
}
