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

// const sizeStyles = {
//   sm: {
//     root: "gap-0 pl-4 pr-4 py-1.5 text-sm sm:gap-3 sm:pr-1.5",
//     icon: "size-8",
//     iconSvg: 15,
//   },
//   md: {
//     root: "gap-0 pl-6 pr-6 py-1.5 text-[0.95rem] sm:gap-4 sm:pl-7 sm:pr-1.5 sm:text-base",
//     icon: "size-10 sm:size-11",
//     iconSvg: 18,
//   },
//   lg: {
//     root: "gap-0 pl-7 pr-7 py-1.5 text-base sm:gap-5 sm:pl-8 sm:pr-1.5 sm:text-lg",
//     icon: "size-11 sm:size-12",
//     iconSvg: 20,
//   },
// } as const;

//type ButtonSize = keyof typeof sizeStyles;

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
  //size = "md",
  fullWidth = false,
  showIcon = true,
  ...props
}: ButtonProps) {
  //const sizing = sizeStyles[size];

  const classes = cx(
    "group inline-flex sm:gap-2.5 items-center rounded-xl sm:rounded-full",
    showIcon ? "justify-center sm:justify-between" : "justify-center",
    "bg-[var(--brand-color)] text-white text-sm font-medium",
    "shadow-md",
    "py-3 pr-6 pl-6 sm:pr-1.5 sm:pl-7 sm:py-1.5",
    "transition-[transform,filter,box-shadow] duration-300",
    "hover:brightness-110 hover:shadow-lg",
    "active:scale-[0.98]",
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-color-deep)]",
    "disabled:pointer-events-none disabled:opacity-60",
    //sizing.root,
    !showIcon && "pr-6 sm:pr-7",
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
            //sizing.icon,
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
