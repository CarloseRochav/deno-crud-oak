import { search } from "../repository/users.ts";

export async function getAllUsers (ctx:any){
    try{
        const result = await search();
        console.log(result.rows);
        ctx.response.body=result.rows;
    }catch(error){
        console.log(error);        
    }
    
}