import cliente from "../db.ts";

export async function findById(id:number | string ):Promise<boolean>{
    const result = await cliente.query(
        "SELECT COUNT(*) COUNT FROM users WHERE ID= ?",
        [id],
    );
    return result[0].count>=1
}

