import { Application } from "https://deno.land/x/oak/mod.ts";
import router from './routes.ts'; //Importando nuestro archivo
 //Importando Oak ; Framework para crear server y enrutador


const app = new Application(); //Creacin de server

app.use(router.routes());
//ctx ; Objeto donde viene response & request
// app.use((ctx)=>{
//     ctx.response.body="Hello World";
// })

await app.listen({port:8081});