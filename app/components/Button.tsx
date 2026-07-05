import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

type CommonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLinkProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const base =
  "cursor-pointer inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold no-underline select-none " +
  "transition-all duration-200 ease-out md:hover:scale-[1.02] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/50 focus-visible:ring-offset-2";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-accent)] text-[var(--color-on-primary)] shadow-[0_4px_14px_rgba(0,0,0,0.08)] " +
    "hover:bg-[var(--color-accent-hover)] hover:text-[var(--color-on-primary)]",
  secondary:
    "bg-white text-[var(--color-foreground)] border border-[var(--color-foreground)] " +
    "hover:bg-[var(--color-secondary)]",
};

export default function Button(props: ButtonProps) {
  const { variant = "primary", className = "", children, ...rest } = props as ButtonProps;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props) {
    const { href, ...linkRest } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    const isInternal = href.startsWith("/");

    if (isInternal) {
      return (
        <Link href={href} className={classes} {...(linkRest as any)}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...linkRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
