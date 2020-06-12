"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commonDBConnection = {
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
exports.default = commonDBConnection;
