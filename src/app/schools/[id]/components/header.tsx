"use client";

import Button from "@/components/button";
import Link from "next/link";

export default function Header(props: { id?: string; name?: string }) {
  return (
    <header className="sticky top-0 z-10 shadow-sm backdrop-blur-sm bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href={`/schools/${props.id}`} className="flex items-center">
            <span className="text-xl font-semibold">{props.name}</span>
          </Link>

          <div className="relative w-6 h-6 flex justify-center items-center md:w-auto md:h-auto">
            <input
              type="checkbox"
              className="peer opacity-0 w-full h-full absolute top-0 left-0 z-10 md:hidden"
            />
            <div className="absolute top-0 left-0 w-6 h-1 bg-white peer-checked:rotate-45 peer-checked:top-2 peer-checked:right-2 transition-all duration-300 md:hidden"></div>
            <div className="absolute top-3 left-0 w-6 h-1 bg-white peer-checked:-rotate-45 peer-checked:top-2 peer-checked:-right-2 transition-all duration-300 md:hidden"></div>
            <nav className="scale-0 peer-checked:scale-100 origin-top-right absolute md:static md:scale-100 top-10 right-0 md:flex bg-foreground md:bg-transparent text-background md:text-foreground rounded-lg transition-all duration-300">
              <Button.link href="#career">Beranda</Button.link>
              <Button.link href="#about">Tentang Kami</Button.link>
              <Button.link href="#activity">Kegiatan</Button.link>
              <Button.link href="#news">Berita</Button.link>
              <Button.link href="#contact">Kontak</Button.link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
