"use client";
import sendEmail from "@/app/actions";
import Button from "@/components/button";
import Input from "@/components/input";
import TextArea from "@/components/text_area";
import { useActionState } from "react";

export default function MessageForm({ to }: { to: string }) {
  const [state, action, loading] = useActionState(
    sendEmail.bind(undefined, to),
    null
  );
  return (
    <section className="flex flex-col gap-8">
      <h3 className="text-2xl font-bold">Kirim Pesan</h3>
      <form className="flex flex-col gap-4" action={action}>
        <Input name="name" type="text" placeholder="Nama" />
        <Input name="email" type="email" placeholder="Email" />
        <TextArea name="content" placeholder="Pesan" rows={4} />
        {state && state.status ? (
          <span className="text-green-400">{state.message} ✅</span>
        ) : state && (
          <span className="text-green-400">{state.message} 🛑</span>
        )}
        <Button type="submit" disabled={loading}>
          Kirim
        </Button>
      </form>
    </section>
  );
}
