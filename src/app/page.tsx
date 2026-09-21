import type { Metadata } from "next";
import CallToAction from "@/components/CallToAction";
import Counters from "@/components/Counters";
import FloorServices from "@/components/FloorServices";
import HeroBanner from "@/components/HeroBanner";
import OurProcess from "@/components/OurProcess";
import OurWork from "@/components/OurWork";
import ReviewsBar from "@/components/ReviewsBar";
import Testimonials from "@/components/Testimonials";
import Visualize from "@/components/Visualize";
import WhyChooseUs from "@/components/WhyChooseUs";
import { counterItems } from "@/lib/counters";
import { BASE_URL, contactInfo } from "@/lib/config";

export const metadata: Metadata = {
  title: "Epoxy Flooring Surrey, BC | Seven Shades",
  description: "Hire a reliable contractor for professional epoxy floor installation in Surrey, BC. Custom finishes for homes and businesses. Get a free quote today!",
  keywords: [ "epoxy flooring Surrey", "garage epoxy flooring", "commercial epoxy floors", "residential epoxy flooring", "premium epoxy solutions", "metallic epoxy flooring" ],
  alternates: { 
    canonical: BASE_URL
  },
  openGraph: {
    title: "Epoxy Flooring Surrey, BC | Seven Shades",
    description: "Hire a reliable contractor for professional epoxy floor installation in Surrey, BC. Custom finishes for homes and businesses. Get a free quote today!",
    type: "website",
    images: [
      {
        url: BASE_URL + contactInfo.DEFAULT_IMAGE,
        alt: "Epoxy Flooring Surrey, BC | Seven Shades",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Epoxy Flooring Surrey, BC | Seven Shades",
    description: "Hire a reliable contractor for professional epoxy floor installation in Surrey, BC. Custom finishes for homes and businesses. Get a free quote today!",
    images: [BASE_URL + contactInfo.DEFAULT_IMAGE],
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroBanner />

      {/* Floor Services Section */}
      <FloorServices exclude={["residential", "commercial"]} />

      {/* Reviews Section */}
      <section className="relative overflow-hidden py-5 sm:py-6 lg:py-8 hidden sm:block">
        <ReviewsBar />
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Our Process Section */}
      <OurProcess />

      {/* Before & After Section */}
      <section className="relative bg-gray-50 sm:-mt-10 sm:rounded-t-[2.75rem] lg:rounded-t-[3.5rem]">
        <Visualize />
      </section>
      
      {/* Our Work Section */}
      <OurWork />

      {/* Counters Section */}
      <Counters items={counterItems} />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CallToAction />
    </>
  );
}
