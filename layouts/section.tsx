type SectionProps = {
  children: React.ReactNode;
  maxWidth?: string;
  isFirst?: boolean;
};

export default function Section({ children, maxWidth, isFirst }: SectionProps) {
  return (
    <div className="w-full flex justify-center">
      <div
        className={`w-full ${maxWidth || 'max-w-7xl'} px-6 ${isFirst ? 'pt-2' : 'pt-12'} pb-2`}
      >
        {children}
      </div>
    </div>
  );
}
