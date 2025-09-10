# Instalación
# Clonar repositorio
```js
git clone https://github.com/Gersonchm1/Express_ChaparroGerson_S1
```
## 1. Requisitos previos

Node.js

## Dependecias

- dotenv
- express
- fs
- mongodb
- nodemon
- swagger-jsdoc
- swagger-ui-express

## archivo.env
```js
MONGO_URI="tu uri"
PORT=6969
DB_NAME="el nombre que el quieras poner"
```
# Endpoints Principales

Organizados por recurso o funcionalidad. Aquí puedes usar los datos directamente del Swagger.
## la documentacion en Swagger esta en 
```js
http://localhost:6969/doc/
```
## Comenzamos creando las colecciones
```js
curl http://localhost:6969/crearColecciones

```
## Creamos el coordinador
```js
curl -X POST http://localhost:6969/crearCoordinador   -H "Content-Type: application/json"   -d '{"contrasena":"xd","nombre":"Juan","apellido":"Pérez"}'
```
## Creamos un camper
```js
curl -X POST http://localhost:6969/coordinador/0/xd/crearEstudiante   -H "Content-Type: application/json"   -d '{"contrasena":"1","nombre":"Juan","apellido":"Pérez","acudiente":"María Gómez","telefono":"3124567890"}'
```
## Creamos un trainer
```js
curl -X POST http://localhost:6969/coordinador/0/xd/crearTrainer   -H "Content-Type: application/json"   -d '{"contrasena":"2","nombre":"Pedro","apellido":"Gomez","telefono":"3164372414","idHorario":1,"idGrupos":2}'
```
## Creamos los horarios
```js
curl -X POST http://localhost:6969/coordinador/0/xd/crearHorario   -H "Content-Type: application/json"   -d '{"nombre":"jornada1","horas":"6am a 10am"}'
```
## Creamos una ruta

```js
curl -X POST http://localhost:6969/coordinador/0/xd/crearRuta   -H "Content-Type: application/json"   -d '{"nombreRuta":"Nodejs","intro":"","python":"","html/css":"","scrum":"","git":"","Javascript":"","introBBD":"","mongoDB":"","MySQL":"","Express":""}'
```
# Creamos un grupo
```js
curl -X POST http://localhost:6969/coordinador/0/xd/crearGrupos   -H "Content-Type: application/json"   -d '{"nombreGrupo":"S1","campers":[1,2,3,4,5,6,7,8],"idHorario":1,"idTrainer":1,"idRuta":1}'
```
# Si queremos los  campers inscritos para aprobar alguno
```js 
curl http://localhost:6969/coordinador/0/xd/aprobarCamper
```
# aprobar un camper en especifico
```js

('/coordinador/:idCoordinador/:contrasena/aprobarCamper/:idCamper')



```
## Ejemplo
```js

curl http://localhost:6969/coordinador/0/xd/aprobarCamper/1
```
# ver mi informacion para camper

```js
('/campers/:idCamper/:contrasena/verMiInfo')
```


## ejemplo 
```js
curl http://localhost:6969/campers/0/1/verMiInfo

```


