const http = require('node:http')
const PRODUCTOS = [
    { id: 1, nombre: "Café Expreso", precio: 200 },
    { id: 2, nombre: "Café Americano", precio: 250 },
    { id: 3, nombre: "Café Cortado", precio: 200 },
    { id: 4, nombre: "Café Doble", precio: 250 },
    { id: 5, nombre: "Café Lagrima", precio: 200 }
]

const server = http.createServer(function (request, response) {
    // response.write() //escribe en el body del mensaje de respuesta

    response.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>AH</title></head><body>')

    response.write('<h1>Mi espectacular pagina web!</h1>')

    if (request.url === '/') {
        response.write('<p>Agostina Michelis</p>')
    } 
    else if (request.url === '/materia') {
        response.write('<p>Aplicaciones Hibridas</p>')
    } 
    else if (request.url === '/profesor') {
        response.write('<p>Brian Lara</p>')
    } 
    else if (request.url === '/productos'){
        response.write('<ul>')
        for (let i = 0; i < PRODUCTOS.length; i++){
            response.write('<li>' + PRODUCTOS[i].nombre +'</li>')
        }
        response.write('</ul>')
    }
    else {
        response.write('<p>404 Not Found</p>')
    }


    response.write('</body> </html>')


    response.end()
})

server.listen(2022)