Test 1

Crea 3 servicios siemples /green, /blue, /red con un 200 ok, el resto 404 y
crear un middleware que filtre la ip y devuelva un 403.

Test 2

Servicio con un queryparam SRC donde pasa a mayúsculas el texto,
con un timeout de 1000 ms.

Test 3

Servicio que le pasas un id y consulta 2 servicios y hace  un merge de ambos.
Importante la gestión de errores.


Test 4

Servidor de ficheros estáticos.

Test 5

Crear una proxy forwarding donde dando una queryparam SRC y propaga  la petición
 la url dada. Habrá que compartir los headers de la respuesta. 

Test 6

Importar un fichero .-cjs donde hay un CRUD y crear un endpoint que haga el get
by id y el fichero importado gestionara la respuesta con un callback.

