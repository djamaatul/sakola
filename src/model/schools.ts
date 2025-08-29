import db from "@/lib/database";

export default class SchoolModel {
  static async getSchoolById(id?: string) {
    return db.schools.findFirst({
      where: {
        id,
      },
      include: {
        activities: true,
        news: true,
        contact_links: true,
      },
    });
  }
}
