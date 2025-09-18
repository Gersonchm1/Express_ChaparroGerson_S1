## crear coordiandor en windows
```js

$response = Invoke-RestMethod -Uri "http://localhost:8080/coordinador/crearCoordinador" `
-Method POST `
-Headers @{ "Content-Type" = "application/json" } `
-Body '{"nombre":"pedro","apellido":"Purez","contrasena":"12"}'
```
# Mostrar el token
```js
$response.token
```

## ver info coordiandor

#  Guardar el token en una variable
```js
$miToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZENvb3JkaW5hZG9yIjo0LCJpYXQiOjE3NTgxNzMyMTIsImV4cCI6MTc1ODE3NjgxMn0.g_5qPLqei4ct6eT97xF5jIiMTsXrY0YjNaZxmS4WOAg"
```

#  Ver información del coordinador
```js
$coordinador = Invoke-RestMethod -Uri "http://localhost:8080/coordinador/verMiInfo" `
-Method GET `
-Headers @{ "Authorization" = "Bearer $miToken" }

$coordinador
```
