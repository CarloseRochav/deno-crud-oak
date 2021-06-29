import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import  {addUser}  from "./handler/addUser.ts";
import { deleteUser } from "./handler/deleteUser.ts";
import { getAllUsers } from "./handler/getAllUsers.ts";
import { getUser } from "./handler/getUser.ts";
import { updateUser } from "./handler/updateUser.ts";
import { welcome } from "./handler/welcome.ts";

const route = new Router(); //Creacion de enrutador
const app = new Application();

//Es lo mismo que el app.use usando en index.ts
route
.get("/",welcome)
.post("/add-user",addUser)
.delete("/delete-user",deleteUser)
.get("/get-All-Users",getAllUsers)
.get("/get-user/:id",getUser)
.put("/update-user",updateUser)//< - Declarando muchas rutas

// app.use((ctx)=>{
//     ctx.response.body="Hello World";
// })

export default route;