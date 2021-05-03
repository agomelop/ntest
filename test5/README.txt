Enunciado:
Crear una proxy forwarding donde dando una queryparam SRC y propaga  la petición
 la url dada. Habrá que compartir los headers de la respuesta. Para ello, habrá
que hacer esto:


req.pipe(connector)

.on("error", err => res.sendStatus(500))

.on('response', response => {

// unmodified http.IncomingMessage object

res.writeHead(response.statusCode, response.headers);



Dudas: