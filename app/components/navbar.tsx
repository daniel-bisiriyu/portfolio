import Link from "next/link";
import { Sofia_Sans_Condensed } from "next/font/google";

const sofia = Sofia_Sans_Condensed();

export default function Navbar() {
  return (
    <div className="flex justify-between align-center py-8 px-10">
      <div className={`${sofia.className} font-black text-xl`}>
        <p>DANIEL</p>
        <br />
        <p className="mt-[-2.55rem]"> BISIRIYU</p>
      </div>
      <div className="self-center">
        <Link href="#about" className="pr-6">
          [ About Me ]
        </Link>
        <Link href="#experience" className="pr-6">
          [ Experience ]
        </Link>
        <Link href="#skills" className="pr-6">
          [ Skills ]
        </Link>
        <Link href="#contat" className="pr-6">
          [ Contact ]
        </Link>
      </div>
    </div>
  );
}
