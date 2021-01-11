# example-node-multitenant-typeorm
Este es un proyecto base con ejemplo de múltiples conexiones 

## Conceptos:

#### Tenant (Inquilino): 
Un grupo de usuarios con el privilegio espesifico de sus datos.

#### Common Connection (Conexión común):
Un objeto que tiene la información sobre la conexión de una base de datos en común.

#### Tenant Connection (Conexión de inquilino):
Un objeto que contiene la informaciónn de coxión de un inquilino

#### Common DB (DB Común):
Base de datos que contiene la información sobre todas las bases de datos de inquilinos. También almacena la información de cada base de datos de inquilinos que se puede usar para habilitar/deshabilitar las caracteristicas de cada inquilino

#### Tenant DB (DB del inquilino):
Base de datos separada para cada inquilino que cpntiene datos o estructura según necesidades del inquilino. 

