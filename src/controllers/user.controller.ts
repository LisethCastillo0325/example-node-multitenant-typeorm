import { Request, Response } from "express";
import { getConnection, Connection, getRepository } from 'typeorm';


import ConnectionManager from '../connection/connectionManager';
import { Users } from '../entity/Users';
import { TenantUsers } from '../entity/tenant/TenantUsers';



export const getUsers = async (req: Request, res: Response): Promise<Response> => {

    const users = await getCustomRepository().find(); 

    return res.json(users);
}

function getCustomRepository(){
    const connectionDB : Connection =  getConnection(ConnectionManager.getNameConnection());
    if(ConnectionManager.getNameConnection() == "common"){
        return connectionDB.getRepository(Users);
    }else{
        return connectionDB.getRepository(TenantUsers); 
    }
}