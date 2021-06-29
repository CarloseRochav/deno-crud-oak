import cliente from "../db.ts"


/*Podemos crear una interfaz para pasarle como parametros y asi conocer
el tipo de dato --esto si pensamos reutilizar la interfaz*/ 
interface Params{
    id?:any;//Puedo indicar que el valor puede ser string o number O Cualquiera
}

export async function search (params:Params={}){
    //Pasa el nuestro objeto al metodo
    const isSpecific = Object.keys(params).length!==0;//Esto regrsa un valor booleano

    if(!isSpecific){
        return await cliente.execute("SELECT * FROM USERS");    
        
    }else{
        return await cliente.execute("SELECT * FROM USERS WHERE ID =?",[params.id]);
    }

    

}

/*Podemos crear una interfaz y pasarla como parametros a la funcion
para su reutilizacion*/
interface InsertParams{
    name:string,
    country:string
}

export async function insertUser ({name,country}:InsertParams){//Parametros igual al valor de la interfaz
    
    return await cliente.execute("INSERT INTO users(name,country) VALUES (?,?)",
    [
        name,
        country
    ]);
    

}
export async function deleteUser (){

    return await cliente.execute("SELECT * FROM USERS");

}
export async function updateUser (){

    return await cliente.execute("SELECT * FROM USERS");

}