import UserModel from "@/model/users";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn(params) {
      if (params.account?.provider === "google") {
        const exist = await UserModel.getUser({
          email: params.profile?.email,
        });
        if (!exist) {
          await UserModel.createUser({
            email: params.user.email!,
            password: params.user.id,
            name: params.user.name!,
            created_by: params.account.provider,
          });
        }
      }
      return true;
    },
  },
};
