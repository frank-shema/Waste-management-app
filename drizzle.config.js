const config = {
    schema: './utils/db/schema.ts',
    out: './drizzle',
    dbCredentials: {
      url: process.env.DATABASE_URL,
      connectionString: process.env.DATABASE_URL,
    },
    dialect: 'postgresql', // Add this line to specify the database type
  };
  
  export default config;
  