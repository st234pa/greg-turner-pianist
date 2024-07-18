import AboutSummary from "@/components/about-summary";
import { BrahmsVideo } from "@/components/brahms-video";
import ServicesSummary from "@/components/services-summary";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <AboutSummary />
      <ServicesSummary />
      <BrahmsVideo />
    </DefaultLayout>
  );
}
