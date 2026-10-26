import Image from "next/image";
import Link from "next/link";

export function Brand() {
  return (
    <Link className="inline-flex shrink-0 items-center" href="/" aria-label="Pilotadem — accueil">
      <Image className="h-8 w-auto" src="/pilotadem-logo.png" alt="Pilotadem" width={1319} height={252} priority />
    </Link>
  );
}
