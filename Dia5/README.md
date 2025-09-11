## creamos un usuario 
curl -X POST http://localhost:3000/api/users \
-H "Content-Type: application/json" \
-d '{"name": "Juan", "email": "juan@ejemplo.com", "age": 25}'
## actualizar 
curl -X PUT http://localhost:3000/api/users/1   -H "Content-Type: application/json"   -d '{"name": "Juan Actualizado", "age": 26}'
## eliminar 
curl -X DELETE http://localhost:3000/api/users/1
## listar
curl -X GET http://localhost:3000/api/users
