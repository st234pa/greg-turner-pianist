import Image from 'next/image';

export default function Splash() {
  return (
    <div className="splash-container">
      <Image
        width={1000000}
        priority
        height={1000000}
        src="/greg_at_piano.png"
        className="splash"
        alt="Greg Turner at piano"
      />
      <div className="splash-overlay" />
      <div className="splash-overlay-text">
        <div>
          <h1 className="splash-header">Greg Turner</h1>
          <h3 className="splash-subheader">Pianist and Educator</h3>
        </div>
      </div>
    </div>
  );
}
