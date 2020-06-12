"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var server_1 = __importDefault(require("./server/server"));
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var connectionManager_1 = __importDefault(require("./connection/connectionManager"));
var server = new server_1.default();
var app = server.app;
// connection
connectionManager_1.default.getConnection(true);
// middelwares
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
// BodyParser
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
// routes
app.use(user_routes_1.default);
// API Route
app.get('/', function (req, res, next) {
    res.json({ body: 'Hello multi-tenant application.' });
});
//llamado a las apis
server.start(function () {
    console.log("Servidor corriendo en el puerto " + server.port);
});
