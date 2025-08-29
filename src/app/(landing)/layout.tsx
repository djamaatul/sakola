import { PropsWithChildren } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import LoginProvider from "@/components/login";

export default function LandingLayout(props: PropsWithChildren) {
  return (
    <main className="flex flex-col min-h-screen">
      <LoginProvider>
        <Header />
        <div className="flex-1">{props.children}</div>
        <Footer />
      </LoginProvider>
    </main>
  );
}
