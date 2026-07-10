import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { VisitSteps } from "@/components/VisitSteps";
import { Tech } from "@/components/Tech";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Doctors } from "@/components/Doctors";
import { Gallery } from "@/components/Gallery";
import { Booking } from "@/components/Booking";

export default function Page() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <VisitSteps />
      <Tech />
      <BeforeAfter />
      <Doctors />
      <Gallery />
      <Booking />
    </>
  );
}
