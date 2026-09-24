import Image from "next/image";
import Link from "next/link";
import FlooringQuoteForm from "@/components/FlooringQuoteForm";
import Heading from "@/components/Heading";
import Button from "@/components/ui/Button";

function GalleryIcon() {
  return (
    <span className="hidden size-10 shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/30 text-white transition-transform duration-300 group-hover:scale-105 sm:inline-flex sm:size-11">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" /><circle cx="8.5" cy="10" r="1.5" fill="currentColor" /><path d="m7 16 3.2-3.2a1 1 0 0 1 1.4 0L15 16l1.3-1.3a1 1 0 0 1 1.4 0L21 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
      <Image src="/images/hero-epoxy-floor-1.2.1.webp" alt="epoxy floor contractors surrey" fill priority  sizes="100vw" className="hidden sm:block object-cover"/>

      <div className="hidden sm:block w-full xl:w-1/2 h-full absolute inset-0 bg-gradient-to-r from-[#05070b]/85 via-[#05070b]/70 via-70% md:via-70% lg:via-50% xl:via-80% 2xl:via-70% to-transparent"></div>

      <div className="relative z-10 flex flex-col bg-[var(--black)] sm:bg-transparent">
        <div className="container mx-auto flex flex-1 flex-col justify-center px-4 pt-28 pb-10 sm:px-6 sm:pt-30 sm:pb-1 lg:px-8 lg:pt-30">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
            <div className="sm:animate-hero-rise lg:col-span-7">
              <div>
                <div className="max-w-xl">
                  <Heading
                    tag="h1"
                    size="hero"
                    tone="light"
                    eyebrow="Residential &amp; Commercial Epoxy Flooring"
                    title={<>Premium Epoxy Flooring In <span className="text-[var(--brand-color)]">Surrey, BC</span></>}
                    description="Durable. Beautiful. Built to Last. Transform your garage, basement, or commercial space with high-performance epoxy flooring installed by local contractors."
                    titleClassName="sm:uppercase"
                  />
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3 max-[399px]:flex-col max-[399px]:items-stretch sm:gap-4">
                  <Button href="/contact-us" className="max-[450px]:w-full">
                    Get A Free On-Site Estimate
                  </Button>

                  <Link href="/our-work" className="group inline-flex items-center justify-center gap-0 rounded-xl border border-white/75 bg-transparent py-3 pr-6 pl-6 font-medium text-sm text-white transition-colors hover:border-white hover:bg-white/10 max-[450px]:w-full sm:justify-between sm:gap-2.5 sm:rounded-full sm:pr-1.5 sm:pl-7 sm:py-1.5">
                    View Our Work
                    <GalleryIcon />
                  </Link>
                </div> 
              </div>
            </div>

            <div className="animate-hero-rise-delayed flex justify-center lg:col-span-5 lg:justify-end">
              <FlooringQuoteForm tone="light" smTone="dark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
