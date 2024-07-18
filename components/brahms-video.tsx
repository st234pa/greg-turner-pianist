import Section from "@/layouts/section";

export function BrahmsVideo() {
  return (
    <Section>
      <div className="flex justify-center">
        <div className="video-wrap">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DesVeqvQeqA?si=yVknk-kP3zri5kr4"
              title="Greg Turner playing Brahms' Soanta number 3"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
}
