import { defineConfig, env } from "prisma/config";
import dotenv from "dotenv";

dotenv.config();  // <-- THIS loads your .env file

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    get url() {
      return env("DATABASE_URL");  // now this WILL exist
    },
  },
});
