import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
    "postgresql://waste-management-db_owner:EUMRJC1FBpD9@ep-frosty-thunder-a8fritow.eastus2.azure.neon.tech/waste-management-db?sslmode=require"
);
export const db = drizzle(sql, { schema });