import bcrypt from "bcrypt";
import db from "@/lib/database";
import { User } from "@/types/users";

export default class UserModel {
  static async getUser(where: Partial<User>) {
    return db.users.findFirst({
      where: where,
    });
  }
  static async createUser(
    user: Required<Pick<User, "name" | "email" | "password">> & Partial<User>
  ) {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(user.password, salt);

    return db.users.create({
      data: {
        ...user,
        password,
      },
    });
  }
}
