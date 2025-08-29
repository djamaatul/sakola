import db from "@/lib/database";

export default class ContactModel {
  static async getSchool() {
    return db.contacts.findMany();
  }
}
