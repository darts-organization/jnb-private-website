import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CoreFocus } from "@/components/CoreFocus";
import { ServiceSection } from "@/components/ServiceSection";
import { InvestmentPhilosophy } from "@/components/InvestmentPhilosophy";
import { Values } from "@/components/Values";
import { Philosophy } from "@/components/Philosophy";
import { Leadership } from "@/components/Leadership";
import { GlobalPresence } from "@/components/GlobalPresence";
import { CTASection } from "@/components/CTASection";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <div id="services">
        <CoreFocus />
        <ServiceSection variant="realEstate" accentColor="real-estate" />
        <ServiceSection variant="aviation" accentColor="aviation" />
        <ServiceSection variant="yacht" accentColor="yacht" />
        <ServiceSection variant="assetManagement" accentColor="asset-mgmt" />
      </div>
      <div id="philosophy">
        <InvestmentPhilosophy />
        <Values />
        <Philosophy />
      </div>
      <Leadership />
      <GlobalPresence />
      <CTASection />
    </>
  );
}
