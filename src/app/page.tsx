import { About } from "@/components/About";
import { Advantages } from "@/components/Advantages";
import { Contact } from "@/components/Contact";
import { CtaBand } from "@/components/CtaBand";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Stats } from "@/components/Stats";
import { TechStack } from "@/components/TechStack";
import { TelegramCta } from "@/components/TelegramCta";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Stats />
        <Portfolio />
        <CtaBand
          title="Нужен сайт под вашу нишу?"
          description="Расскажите о бизнесе в Telegram — предложим структуру, сроки и ориентир по бюджету."
        />
        <Advantages />
        <TechStack />
        <WhyUs />
        <CtaBand
          title="Готовы обсудить проект?"
          description="Покажем референсы, согласуем этапы и запустим разработку без лишней бюрократии."
          primaryTelegram
        />
        <About />
        <Process />
        <Testimonials />
        <TelegramCta />
        <Contact />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
