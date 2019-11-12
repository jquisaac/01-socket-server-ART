
# Socket-Server

Servidor Rest en Express y Servidor SocketIO

Librerias isntaladas:
```
npm install express
npm install cors
npm install body-parser
npm install socket.io
```

Dependencia de desarrollo:
```
npm install @types/express --save-dev
npm install @types/cors --save-dev
npm install @types/socket.io --save-dev
```

Reconstruir los módulos de Node
```
npm install
```

Generar el DIST y escuchar todos los cambios
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
```

### Changelog:

v1.2.2
* Manejo de usuarios
* Envio de mensajes privados y publicos desde REST

v1.2.1
* Evento emit

v1.2.0
* Evento emit mensaje

v1.1.0
* Configuracion Socket.io.
* Implementacion patron singleton.

v1.0.1
* Documentacion codigo.

v1.0.0
* Primer commit.
* Meto GET.
* Metodo POST.
* Metodo POST con parametros.