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

          <div className="relative">
            <input type="checkbox" className="hidden" />
            <nav className="absolute md:static top md:flex space-x-10">
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
