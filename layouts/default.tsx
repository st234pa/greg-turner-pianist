import { Head } from './head';

import { Navbar } from '@/components/navbar';
import Footer from '@/components/footer';
import UnderConstruction from '@/components/under-construction';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-scroll">
      <Head />
      <Navbar />
      <div className="min-h-[calc(100%-554px)] sm:min-h-[calc(100%-362px)]">
        <UnderConstruction />
        {children}
      </div>
      <Footer />
    </div>
  );
}
