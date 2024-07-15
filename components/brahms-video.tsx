import Section from '@/layouts/section';

export function BrahmsVideo() {
  return (
    <Section>
      <div className="flex justify-center">
        <div className="video-wrap">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/DesVeqvQeqA?si=YaKeU4chzs_CAVOb"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
