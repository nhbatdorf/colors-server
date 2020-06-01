import { Client } from "https://deno.land/x/postgres/mod.ts";

async function main() {
  const client = new Client({
    user: "postgres",
    database: "colorpalettelibrary",
    host: "localhost",
    password: "Runner81!",
    port: "5432",
  });

  await client.connect();
  const result = await client.query("SELECT * FROM library;");
  console.log(result);
  await client.end();
}

main();
// export default client;
