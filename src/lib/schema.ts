import { z } from "zod";

export const insertDepartmentDataSchema = z.object({
  section: z.string(),
  data: z.any(),  // you can make this stricter later if you know the shape
});

export type InsertDepartmentData = z.infer<typeof insertDepartmentDataSchema> & {
  section: string;
  data: any;
};

export type DepartmentData = {
  id: string;
  section: string;
  data: any;
};
