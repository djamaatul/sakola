"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import TextArea from "@/components/text_area";
import { FormEvent } from "react";

export default function MessageForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Pesan telah dikirim!");
  };
  return (
    <section className="flex flex-col gap-8">
        <h3 className="text-2xl font-bold">Kirim Pesan</h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input type="text" placeholder="Nama" />
          <Input type="email" placeholder="Email" />
          <TextArea placeholder="Pesan" rows={4} />
          <Button type="button">Kirim</Button>
        </form>
    </section>
  );
}
