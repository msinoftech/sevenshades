"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import Heading from "@/components/Heading";
import {
  flakeCollectionLabels,
  garageFlakeCollections,
  garageFlakeOptions,
  type FlakeCollection,
  type GarageFlakeOption,
} from "@/lib/garage-flakes";

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12.5 9.5 17 19 7.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlakePreview({ flake }: { flake: GarageFlakeOption }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/8 shadow-xl">
      <Image
        src={flake.image}
        alt={`${flake.name} decorative chip flake sample`}
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover transition-[opacity,transform] duration-500"
        priority={false}
      />
      <div className="absolute inset-0 bg-[linear-gradient(165deg,rgba(255,255,255,0.1)_0%,transparent_40%,rgba(0,0,0,0.08)_100%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-6 pb-6 pt-20 sm:px-8 sm:pb-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-white/60 uppercase">Selected blend</p>
            <p className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">{flake.name}</p>
          </div>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-sm">
            {flake.tone}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function FlakeColorOptions() {
  const [activeCollection, setActiveCollection] =
    useState<FlakeCollection>("blends");
  const [selectedId, setSelectedId] = useState(garageFlakeOptions[0].id);

  const collectionFlakes = useMemo(
    () =>
      garageFlakeOptions.filter((flake) => flake.collection === activeCollection),
    [activeCollection],
  );

  const selected =
    garageFlakeOptions.find((flake) => flake.id === selectedId) ??
    garageFlakeOptions[0];

  const handleCollectionChange = (collection: FlakeCollection) => {
    setActiveCollection(collection);
    const first = garageFlakeOptions.find((flake) => flake.collection === collection);
    if (first) setSelectedId(first.id);
  };

  return (
    <section id="flake-colors" className="relative overflow-hidden bg-[#f4f6f8] py-14 sm:py-16">
      <div className="hidden sm:block pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-[var(--brand-color)]/10 blur-3xl" />
      <div className="hidden sm:block pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-black/5 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            tag="h2"
            align="center"
            size="section"
            tone="dark"
            eyebrow="FLAKE EPOXY"
            title={
              <>
                Garage Floors{" "}
                <span className="text-[var(--brand-color)]">
                  Flake Color Options.
                </span>
              </>
            }
            description="Decorative chip flake blends and solids in stock — tap any swatch to preview, then request your preferred blend for a free quote."
            descriptionClassName="mx-auto max-w-2xl text-black/60"
          />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {garageFlakeCollections.map((collection) => {
            const isActive = activeCollection === collection;
            const count = garageFlakeOptions.filter(
              (flake) => flake.collection === collection,
            ).length;

            return (
              <button
                key={collection}
                type="button"
                onClick={() => handleCollectionChange(collection)}
                aria-pressed={isActive}
                className={[
                  "rounded-full px-5 py-2.5 text-sm font-semibold cursor-pointer",
                  isActive
                    ? "bg-[var(--brand-color)] text-white shadow-md"
                    : "border border-black/10 bg-white text-black/65 hover:border-black/20 hover:text-black",
                ].join(" ")}
              >
                {flakeCollectionLabels[collection]}
                <span className="ml-2 text-xs opacity-75">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="flex flex-col lg:col-span-4 gap-10">
            <div className="order-2 lg:order-1">
              <FlakePreview flake={selected} />
            </div>

            <div className="order-1 lg:order-2">
              <div className="rounded-[1.25rem] border border-black/8 bg-white p-5 shadow-sm space-y-2">
                <div className="flex items-center gap-3 justify-start">
                  <span className="h-px w-10 bg-[var(--brand-color)] animate-about-line" aria-hidden="true"></span>
                  <p className="text-xs font-bold tracking-[0.16em] text-[var(--brand-color)] uppercase">About this blend</p>
                </div>
                <div className="text-xl font-bold">{selected.name}</div>
                <p>{selected.description}</p>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-black/70">{selected.tone} tone</span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-black/70">{flakeCollectionLabels[selected.collection]}</span>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {[
                  "Blends & solids in stock",
                  "Partial or full flake broadcast",
                  "Hides dust between cleanings",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-black/70">
                    <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--brand-color)]/12 text-[var(--brand-color)]">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button href="/contact-us" className="max-[450px]:w-full">
                  Request Now
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-[0.18em] text-[var(--brand-color)] uppercase">{flakeCollectionLabels[activeCollection]}</p>
                <p className="mt-1 text-sm text-black/55">Tap a swatch to preview the flake blend</p>
              </div>
              <p className="hidden text-sm font-medium text-black/45 sm:block">{collectionFlakes.length} options</p>
            </div>

            <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4">
              {collectionFlakes.map((flake) => {
                const isActive = flake.id === selectedId;

                return (
                  <li key={flake.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(flake.id)}
                      aria-pressed={isActive}
                      aria-label={`Preview ${flake.name} flake blend`}
                      className={[
                        "group relative w-full overflow-hidden rounded-xl border-3 bg-white text-left transition-all duration-300 cursor-pointer",
                        isActive
                          ? "border-[var(--brand-color)] shadow-xl"
                          : "border-black/8 hover:border-black/15",
                      ].join(" ")}
                    >
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={flake.image}
                          alt={`${flake.name} flake sample`}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black/55 to-transparent px-2 pb-2.5 pt-10">
                          <span className="rounded-md bg-[var(--brand-color)] px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.08em] text-white uppercase sm:text-xs">
                            {flake.name}
                          </span>
                        </div>
                        {isActive ? (
                          <span className="absolute top-2.5 right-2.5 z-10 inline-flex size-6 items-center justify-center rounded-full bg-[var(--brand-color)] text-[#0B1120]">
                            <CheckIcon />
                          </span>
                        ) : null}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
