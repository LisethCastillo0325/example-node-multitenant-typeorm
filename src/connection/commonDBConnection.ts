import { ConnectionOptions } from "typeorm";

const commonDBConnection : ConnectionOptions = {
    name: "common",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admincommon",
    password: "admincommon",
    database: "common_db",
    synchronize: true,
    logging: ["error"],
    entities: ["dist/entity/*.js"]
};

export default commonDBConnection;