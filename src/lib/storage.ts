// storage.ts
import { type DepartmentData, type InsertDepartmentData } from "./schema";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export interface IStorage {
  getDepartmentData(section: string): Promise<DepartmentData | undefined>;
  getAllDepartmentData(): Promise<DepartmentData[]>;
  updateDepartmentData(section: string, data: any): Promise<DepartmentData>;
  createDepartmentData(data: InsertDepartmentData): Promise<DepartmentData>;
}

export class NeonStorage implements IStorage {
  async getDepartmentData(section: string): Promise<DepartmentData | undefined> {
    const [row] = await sql`SELECT * FROM department_data WHERE section = ${section}`;
    return row;
  }

  async getAllDepartmentData(): Promise<DepartmentData[]> {
    const rows = await sql`SELECT * FROM department_data`;
    return rows;
  }

  async updateDepartmentData(section: string, data: any): Promise<DepartmentData> {
    const [updated] = await sql`
      INSERT INTO department_data (section, data)
      VALUES (${section}, ${data})
      ON CONFLICT (section) DO UPDATE SET data = ${data}
      RETURNING *;
    `;
    return updated;
  }

  async createDepartmentData(insertData: InsertDepartmentData): Promise<DepartmentData> {
    const [created] = await sql`
      INSERT INTO department_data (section, data)
      VALUES (${insertData.section}, ${insertData.data})
      RETURNING *;
    `;
    return created;
  }
}

export const storage = new NeonStorage();
