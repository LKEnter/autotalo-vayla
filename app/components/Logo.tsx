import Link from "next/link";

const LOGO_SRC = "/assets/images/brand/logo.webp";

/** Intrinsic size of logo.webp (680×122). */
const LOGO_WIDTH = 680;
const LOGO_HEIGHT = 122;

type LogoProps = {
  className?: string;
  imageClassName?: string;
  onClick?: () => void;
  priority?: boolean;
  /** Use on dark backgrounds (e.g. footer). */
  onDark?: boolean;
};

export default function Logo({
  className = "",
  imageClassName = "",
  onClick,
  priority = false,
  onDark = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center no-underline ${className}`}
      onClick={onClick}
    >
      {/* Native img — avoids Next/Image optimizer quirks with this WebP */}
      <img
        src={LOGO_SRC}
        alt="Koskiauto"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={[
          "block h-8 w-auto md:h-9",
          onDark ? "brightness-0 invert" : "",
          imageClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      />
    </Link>
  );
}
