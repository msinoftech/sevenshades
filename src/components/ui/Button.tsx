import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

function ArrowUpRightIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type CommonProps = {
  children: ReactNode;
  className?: string;
  //size?: ButtonSize;
  fullWidth?: boolean;
  showIcon?: boolean;
};

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children"> & {
    href: string;
    type?: never;
    disabled?: never;
  };

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function Button({
  children,
  className,
  fullWidth = false,
  showIcon = true,
  ...props
}: ButtonProps) {

  const classes = cx(
    "group inline-flex sm:gap-2.5 items-center rounded-xl sm:rounded-full",
    showIcon ? "justify-center sm:justify-between" : "justify-center",
    "bg-[var(--brand-color)] text-white text-sm font-medium",
    "py-3 pr-6 pl-6 sm:pr-1.5 sm:pl-7 sm:py-1.5",
    !showIcon && "pr-6",
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      <span className="whitespace-nowrap">{children}</span>
      {showIcon ? (
        <span
          className={cx(
            "size-10",
            "hidden shrink-0 items-center justify-center rounded-full sm:inline-flex",
            "bg-[var(--brand-color-deep)] text-white",
            "transition-transform duration-300 group-hover:scale-105",
          )}
          aria-hidden="true"
        >
          <ArrowUpRightIcon size={18} />
        </span>
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
