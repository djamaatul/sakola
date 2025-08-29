"use client";
import { motion, AnimatePresence } from "framer-motion";
import { createContext, PropsWithChildren, useState } from "react";
import Button from "./button";
import Image from "next/image";
import Input from "./input";
import { signIn } from "next-auth/react";

export const LoginContext = createContext({
  show: () => {},
});

export default function LoginProvider(props: PropsWithChildren) {
  const [show, setShow] = useState(false);

  const value = {
    show: () => {
      setShow(true);
    },
  };
  return (
    <LoginContext.Provider value={value}>
      <AnimatePresence key="login">
        {show && (
          <div
            className="fixed left-0 top-0 bg-black/50 w-screen h-screen z-20 flex justify-center items-start"
            onClick={() => setShow(false)}
          >
            <motion.div
              initial={{ top: -1000 }}
              animate={{ top: 50 }}
              exit={{ top: -1000 }}
              className="bg-background/50 rounded-lg p-4 fixed flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h1 className="text-lg font-semibold">Masuk</h1>
              <Input name="email" type="email" placeholder="Email" />
              <Input name="password" type="password" placeholder="Password" />
              <Button.outline onClick={() => signIn("google")}>
                <Image
                  src={`https://www.material-tailwind.com/logos/logo-google.png`}
                  alt="google"
                  width={24}
                  height={24}
                />
                Masuk menggunakan Google
              </Button.outline>
              <Button>Masuk</Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {props.children}
    </LoginContext.Provider>
  );
}
