import { Client } from "https://deno.land/x/mysql/mod.ts";
/*Deno solo extrae el codigo cuando hacemos run, para poder usarlos antes de correr nuestro programa
Podemos instalarlo con deno install {urlPackage} para poder usar descargarlo y asi 
usar el autocompletado
*/

const cliente = await new Client().connect({
    hostname:"127.0.0.1",
    username:"root",
    db:"dbusers",
    password:""
});

export default cliente;

