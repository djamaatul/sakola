import { PropsWithChildren } from "react";
import MessageForm from "./components/message_form";
import { Params } from "next/dist/server/request/params";
import SchoolModel from "@/model/schools";
import Image from "next/image";
import Card from "@/app/(landing)/components/card";
import MiniCard from "@/app/(landing)/components/mini_card";
import ContactModel from "@/model/contact";

export default async function SchoolPage(
  props: PropsWithChildren<{ params: Promise<Params> }>
) {
  const { id } = await props.params;

  const school = await SchoolModel.getSchoolById(id as string);
  const contact = await ContactModel.getSchool();
  const objectContact = Object.fromEntries(
    contact.map((m) => {
      return [m.id, m.name];
    })
  );

  return (
    <section className="flex flex-col gap-4">
      <div
        style={{
          backgroundColor: school?.color ?? "var(--primary)",
        }}
        className="flex gap-4 relative justify-between flex-col md:flex-row"
      >
        <div className="p-8 flex flex-col gap-4">
          <div className="text-2xl font-bold">
            <p>Selamat datang di</p>
            <h3 className="text-4xl">{school?.name}</h3>
          </div>
          <p>{school?.slogan}</p>
        </div>

        <Image
          alt=""
          src={school?.background ?? "unset"}
          width={500}
          height={100}
        />
      </div>

      <div className="flex flex-col p-8 gap-8 items-center">
        <h3 id="#activity" className="font-semibold text-xl">
          Kegiatan
        </h3>
        <div className="flex flex-col md:flex-row gap-4 overflow-scroll flex-wrap">
          {school?.activities?.map((activity) => {
            return (
              <MiniCard
                key={activity.id}
                title={activity.title}
                description={activity.content?.substring(0, 100) ?? ""}
              />
            );
          })}
        </div>

        <h3 id="#news" className="font-semibold text-xl">
          Berita
        </h3>
        <div className="flex flex-col md:flex-row gap-4 overflow-scroll flex-wrap">
          {school?.news?.map((news) => {
            return (
              <Card
                key={news.id}
                title={news.title}
                description={news.content?.substring(0, 100) ?? ""}
                action="Lihat"
              />
            );
          })}
        </div>
      </div>

      <div className="flex gap-4 p-8">
        <div className="flex flex-col gap-2">
          {school?.contact_links.map((contact) => {
            return (
              <div key={contact.id}>
                <h4>{objectContact[contact.contact_id]}</h4>
                <p>{contact.value}</p>
              </div>
            );
          })}
        </div>
        <MessageForm />
      </div>
    </section>
  );
}
