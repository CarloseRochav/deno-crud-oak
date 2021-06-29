import { insertUser } from "../repository/users.ts";

export async function addUser ({response,request}:any){ //Otra forma de poner el response/request

    const body = await request.body();
    const user = await body.value;

    if(user.hasOwnProperty('name') && user.hasOwnProperty('country')){
        response.status=200;
        response.body = await insertUser(user);
    }else{
        response.body={message:"Solicitud Invalidad"};
        response.status=400;
    }
        
    console.log("Hola perros");
}