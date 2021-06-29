import { search } from "../repository/users.ts";
import * as doesUserExist from "../libs/doesUserExits.ts"

export async function getUser({params,response}:{
    params:any,
    response:any
}){
    try{
        console.log(params)
        const userExists = await doesUserExist.findById(params.id)

        if(userExists){
            const result=await search(params)
            response.status=200;
            response.body=result.rows;    
        }        
        else{
            response.status=404;
            response.body={
                message:"User not found"
            }
        }

    }catch(error){
        console.log(error);
        
    }    
}

