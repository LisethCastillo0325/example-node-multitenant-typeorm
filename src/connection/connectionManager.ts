import {ConnectionOptions, Connection } from 'typeorm';
import {createConnection} from 'typeorm'
import { Tenant } from '../entity/Tenant';
import commonDBConnection from './commonDBConnection';

let tenat_db_host: any = null;
let tenat_db_name : any = null;
let tenat_db_username : any = null;
let tenat_db_password : any = null;
let tenat_db_port : any = null;
let name_connection : string = "common";

class ConnectionManager {

    static getConnection = async (tenat: Boolean) => {
      
        createConnection(commonDBConnection).then(async connection => {

            if(tenat){
                let tenants = await connection.getRepository(Tenant).find();
                tenat_db_host = tenants[0].db_host;
                tenat_db_name = tenants[0].db_name;
                tenat_db_username = tenants[0].db_username;
                tenat_db_password = tenants[0].db_password; // me daproblemas
                tenat_db_port = tenants[0].db_port;
                
                name_connection = tenat_db_username;
                // close connection now
                await connection.close();

                // tenant connection
                let tenantDBConnection : ConnectionOptions = {
                    type: "postgres",
                    name: name_connection,
                    host: tenat_db_host,
                    port: tenat_db_port,
                    username: tenat_db_username,
                    password: tenat_db_password,
                    database: tenat_db_name,
                    logging: ["error"],
                    entities: ["dist/entity/tenant/*.js"]
                };

                // now create a new connection
                await createConnection(tenantDBConnection);
            }

        }).catch(error => console.log("Error: ", error));

    }

    static getNameConnection(){
        return name_connection;
    }
}

export default ConnectionManager;

