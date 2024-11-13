export const metadata = {
  title: "Mari-Liis Truija | Portfolio",
  description: "Portfolio for Mari-Liis Truija",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero";
import Timeline from "@/components/timeline";
import Tools from "@/components/tools";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Timeline />
      <Tools />
      <Cta />
    </>
  );
}
