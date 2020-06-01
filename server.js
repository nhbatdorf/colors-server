import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import client from "./database.js";

const port = 5000;
const app = new Application();
const router = new Router();

// response.body = {
//   success: true,
//   data: library,
// };
//return client.query("SELECT * FROM library ORDER BY id");

// async () => {
//   const library = await client.query("SELECT * FROM library ORDER BY id");
//   return library;
// }
// const getLibrary = async ({ response }) => {
//   console.log("getLibrary");
//   response.body = await client.query("SELECT * FROM library ORDER BY id");
// };

// const getPalette = ({ params, response }) => {
//   const palette = library.find((p) => p.id === params.id);

//   if (palette) {
//     response.status = 200;
//     response.body = {
//       success: true,
//       data: palette,
//     };
//   } else {
//     response.status = 404;
//     response.body = {
//       success: false,
//       msg: "No palette found",
//     };
//   }
//   //return client.query(`SELECT * FROM library WHERE id = $1`, id);

//   // async paletteId => {
//   //   const palette = await client.query(`SELECT * FROM library WHERE id = $1`, id);
//   //   return palette;
//   // }

//   // async ({ params, response }) => {
//   //   response.body = await client.query(`SELECT * FROM library WHERE id = $1`, params.id);
//   // }
// };

// const addPalette = async ({ request, response }) => {
//   const body = await request.body();

//   if (!request.hasBody) {
//     response.status = 400;
//     response.body = {
//       success: false,
//       msg: "No data",
//     };
//   } else {
//     const palette = body.value;
//     palette.id = body.id;
//     library.push(palette);
//     response.status = 201;
//     response.body = {
//       success: true,
//       data: palette,
//     };
//   }
//   //return client.query("INSERT INTO library (id, name, colors) VALUES ($1, $2, $3)"), request.id, request.name, request.colors);

//   // async paletteData => {
//   //   const addPalette = {id: id, name: name, colors: colors};
//   //   await client.query(addPalette);
//   //   return addPalette.id;
//   // }
// };

// const updatePalette = async ({ params, request, response }) => {
//   const palette = library.find((p) => p.id === params.id);

//   if (palette) {
//     const body = await request.body();
//     const updateData = { id, colors };
//     library = library.map((p) =>
//       p.id === params.id ? { ...p, ...updateData } : p
//     );
//     response.status = 200;
//     response.body = {
//       success: true,
//       data: library,
//     };
//   } else {
//     response.status = 404;
//     response.body = {
//       success: false,
//       msg: "No palette found",
//     };
//   }
//   //return client.query(`UPDATE library SET name = '${request.name}', colors = '${request.colors}' WHERE id = ${id}`);

//   // async paletteData => {
//   //   const palette = await getPalette(paletteId);
//   //   if (id !isValid) throw new Error;
//   //   const updatePalette = {id: id, name: name, colors: colors}
//   //   return client.query;
//   // }
// };

// const deletePalette = ({ params, response }) => {
//   library = library.filter((p) => p.id !== params.id);
//   response.body = {
//     success: true,
//     msg: "Palette removed",
//   };
//   //return client.query(`DELETE FROM library WHERE id = $1`, id);

//   // async paletteId => {
//   //   return client.query(`DELETE FROM library WHERE id = $1`, id);
//   // }
// };

// router.get("/", getLibrary);
// .get("/:pNum", getPalette)
// .post("/", addPalette)
// .put("/:pNum", updatePalette)
// .delete("/:pNum", deletePalette);

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port: ${port}`);

await app.listen({ port });
