import AnimatedLogo from "@/components/animated-logo";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Icons } from "@/components/icons";
import MainHeroSection from "@/components/main-hero-section";
import Services from "@/components/services";
import Team from "@/components/team";

export default async function Home() {
  return (
    <main>
      <MainHeroSection
        header={<Header />}
        side={<Icons />}
        logo={<AnimatedLogo />}
      >
        <Services />
        <Team />
        {/* <Tweets /> */}
      </MainHeroSection>
      <Footer />
    </main>
  );
}
