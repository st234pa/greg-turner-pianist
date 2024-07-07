import AboutSummary from '@/components/about-summary';
import ServicesSummary from '@/components/services-summary';
import Splash from '@/components/splash';
import DefaultLayout from '@/layouts/default';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Splash />
      <AboutSummary />
      <ServicesSummary />
    </DefaultLayout>
  );
}
