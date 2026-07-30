import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/assets/images/brand/logo.webp";

type LogoProps = {
  className?: string;
  imageClassName?: string;
  onClick?: () => void;
  /** Use on dark backgrounds (e.g. footer). */
  onDark?: boolean;
};

export default function Logo({
  className = "",
  imageClassName = "",
  onClick,
  onDark = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center no-underline ${className}`}
      onClick={onClick}
    >
      <Image
        src={LOGO_SRC}
        alt="Autotalo Väylä"
        width={160}
        height={29}
        sizes="160px"
        quality={75}
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
