// /scripts/seed.ts
import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import defaultData from "./defaultData"; // move that big array into its own file

// Create a Neon client using your connection string
const sql = neon("postgresql://neondb_owner:npg_hruHDMUn86aq@ep-fragrant-mud-adgum4oe-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require");

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
