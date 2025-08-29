import { PropsWithChildren } from "react";
import Header from "./components/header";
import { Footer } from "./components/footer";
import { Params } from "next/dist/server/request/params";
import SchoolModel from "@/model/schools";
import { redirect } from "next/navigation";

export default async function LandingLayout(
  props: PropsWithChildren<{ params: Promise<Params> }>
) {
  const { id } = await props.params;

  const school = await SchoolModel.getSchoolById(id as string);

  if (!school) return redirect("/");

  return (
    <main className="flex flex-col min-h-screen">
      <Header name={school?.name} />
      <div className="flex-1">{props.children}</div>
      <Footer />
    </main>
  );
}
