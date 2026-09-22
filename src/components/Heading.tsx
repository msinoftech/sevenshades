import type { ElementType, ReactNode } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingAlign = "left" | "center";
type HeadingTone = "light" | "dark";
type HeadingSize = "hero" | "page" | "section";

export type HeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tag?: HeadingTag;
  align?: HeadingAlign;
  tone?: HeadingTone;
  size?: HeadingSize;
  showLine?: boolean;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  lineClassName?: string;
  children?: ReactNode;
};

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const sizeStyles: Record<
  HeadingSize,
  { title: string; description: string; titleGap: string }
> = {
  hero: {
    titleGap: "my-4",
    title: "text-[2.4rem] font-bold leading-[1.02] sm:text-[3.4rem] lg:text-[4rem]",
    description: "",
  },
  page: {
    titleGap: "my-4",
    title: "text-[2.4rem] font-bold leading-[1.02] sm:text-[3.4rem] lg:text-[4rem]",
    description: "",
  },
  section: {
    titleGap: "my-4",
    title: "text-[1.85rem] font-bold leading-[1.02] sm:text-4xl lg:text-[2.75rem]",
    description: "",
  },
};

const toneStyles: Record<
  HeadingTone,
  { title: string; description: string }
> = {
  light: {
    title: "text-white",
    description: "text-white/78",
  },
  dark: {
    title: "text-[var(--black)]",
    description: "text-[var(--black)]/70",
  },
};

export default function Heading({
  eyebrow,
  title,
  description,
  tag = "h2",
  align = "left",
  tone = "dark",
  size = "section",
  showLine = true,
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
  lineClassName,
  children,
}: HeadingProps) {
  const Tag = tag as ElementType;
  const sizes = sizeStyles[size];
  const tones = toneStyles[tone];
  const isCenter = align === "center";

  return (
    <div className={cx(isCenter ? "text-center" : undefined, className)}>
      {eyebrow ? (
        <div
          className={cx(
            "flex w-fit items-center gap-3 border border-blue-100 bg-blue-50 px-3 py-1 rounded-full sm:border-none sm:bg-transparent sm:px-0 sm:py-0 sm:rounded-none",
            isCenter && "justify-center mx-auto",
          )}
        >
          {showLine ? (
            <span
              className={cx(
                "hidden sm:inline h-px w-10 bg-[var(--brand-color)] animate-about-line",
                lineClassName,
              )}
              aria-hidden="true"
            />
          ) : null}
          <p
            className={cx(
              "text-xs font-medium uppercase text-[var(--brand-color)] sm:text-sm",
              eyebrowClassName,
            )}
          >
            {eyebrow}
          </p>
        </div>
      ) : null}

      <Tag
        className={cx(
          sizes.titleGap,
          sizes.title,
          tones.title,
          titleClassName,
        )}
      >
        {title}
      </Tag>

      {description ? (
        <div
          className={cx(
            sizes.description,
            tones.description,
            descriptionClassName,
          )}
        >
          {description}
        </div>
      ) : null}

      {children}
    </div>
  );
}
