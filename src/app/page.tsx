import Affiliations from "@/components/affiliations-v2";
import AnimatedLogo from "@/components/animated-logo";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Icons } from "@/components/icons";
import Layout from "@/components/layout";
import Services from "@/components/services";
import Team from "@/components/team";
import Tweets from "@/components/tweets";

export default async function Home() {
  return (
    <main>
      <Layout
        header={<Header />}
        side={<Icons />}
        logo={<AnimatedLogo />}
        // affiliations={<Affiliations />}
      >
        {/* <Affiliations /> */}
        <Services />
        <Affiliations />
        <Team />
        <Tweets />
      </Layout>
      <Footer />
    </main>
  );
}
