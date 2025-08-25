// /scripts/seed.ts
import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import defaultData from "./defaultData"; // move that big array into its own file

// Create a Neon client using your connection string
const sql = neon(process.env.NODE_ENV);

async function seed() {
  try {
    for (const item of defaultData) {
      await sql`
        INSERT INTO department_data (section, data)
        VALUES (${item.section}, ${JSON.stringify(item.data)})
        ON CONFLICT (section) DO UPDATE
        SET data = EXCLUDED.data;
      `;
      console.log(`✅ Seeded section: ${item.section}`);
    }
    console.log("🎉 Seeding complete!");
  } catch (err) {
    console.error("❌ Error seeding database", err);
  }
}

seed();
