
# Socket-Server

Librerias isntaladas:
```
npm install express
npm install cors
npm install body-parser

Dependencia de desarrollo:
```
npm install @types/express --save-dev
npm install @types/cors --save-dev

Reconstruir los módulos de Node
```
npm install
```

Generar el DIST
```

tsc -w
```

Levantar servidor, cualquiera de estos dos comandos
```
nodemon dist/
node dist/
```

Pruebas:
```
GET: http://localhost:5000/mensajes
POST: http://localhost:5000/mensajes
    Request x-www-form-urlencoded:
        "cuerpo": "Hola desde REST-POST",
        "de": "RestUser"
    Response:
    {
        "ok": true,
        "cuerpo": "Hola desde REST-POST",
        "de": "RestUser"
    }
POST: http://localhost:5000/mensajes/:id
    Request x-www-form-urlencoded:
        "cuerpo": "Hola desde REST-POST",
        "de": "RestUser"
    Response:
    {
        "ok": true,
        "cuerpo": "Hola desde REST-POST",
        "de": "RestUser",
        "id": "abc"
    }