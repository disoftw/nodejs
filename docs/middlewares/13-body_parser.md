# Body Parser

Necesitamos **parsear** el cuerpo de las solicitudes entrantes. Sin embargo, de manera predeterminada, no es tan fácil manejar eso y los datos no están en un formato bonito. Hay un paquete llamado **body-parser** cuyo trabajo es ayudarnos a analizar los datos.

De forma predeterminada, esta biblioteca admite datos **codificados en URL** y **JSON** , pero no archivos o medios. Para instalar el paquete, use el siguiente comando:

    $ npm install --save body-parser

Después de la instalación, debe agregarlo y configurarlo en su archivo app.js. En primer lugar, importémoslo en la parte superior:

```js
// app.js
...
const bodyParser = require('body-parser');
...
```

Después de importar, debe configurar el middleware, para que sepa qué tipo de cuerpos desea analizar. Puede agregar más de un tipo de cuerpo. Aquí agregaremos cuerpos codificados con URL y JSON. Debe configurarlos justo después de importar las rutas.

```js
// app.js
...
 app.use(bodyParser.urlencoded({extended: false}));
...
```

Aquí **extendido** significa que el cuerpo puede tener datos de alcance o no, y se necesita verdadero o falso en consecuencia. Se recomienda establecerlo como falso de forma predeterminada.

Pero hasta ahora no estamos admitiendo cuerpos JSON, así que agreguemos ese soporte justo después del primer analizador de cuerpos:

```js
// app.js
...
app.use(bodyParser.json());
...
```

Ahora, este middleware capturará automáticamente ambos tipos de cuerpos antes de verificar las rutas. Entonces, dentro de las rutas, podemos extraer fácilmente los cuerpos de las solicitudes.

:::warning
 Ahora su proyecto está listo para analizar el cuerpo de las solicitudes entrantes. En la próxima lección, los agregaremos en las rutas /users y /codes.
:::

## Body Parser en uso

En la lección anterior, agregamos el analizador de cuerpo para extraer los datos de los cuerpos de solicitud entrantes. En esta lección, lo implementaremos en nuestras rutas /users y /codes para obtener los datos deseados.

Ahora en nuestros controladores de ruta (digamos POST, donde esperamos obtener datos), podemos leer el cuerpo con el siguiente código:

```js
router.post('/', (req, res, next) => {
  const data = req.body.sampleData
})
```

Aquí el sampleData es solo una palabra aleatoria. Pero debe coincidir con la propiedad en la solicitud entrante. Entonces, usando el código anterior, el cuerpo de la solicitud POST debería verse así:

{"sampleData": "Datos aleatorios"}

Ahora manejemos el cuerpo de la solicitud en el controlador POST de la ruta de usuarios:

```js
// users.js
router.post('/', (req, res, next) => {
  const user = {
    name: req.body.name,
    age: req.body.age
  }
  res.status(201).json({
    message: 'Handling POST request of the /users',
    user: user
  })
})
```

Ahora escribamos el cuerpo y veamos la respuesta:

![](post-2.png)

Hagamos lo mismo para /codes:

```js
// codes.js
router.post('/', (req, res, next) => {
  const code = {
    language: req.body.lang,
    data: req.body.data
  }
  res.status(201).json({
    message: 'Handling POST request of the /codes',
    code: code
  })
})
```

La solicitud del cartero se verá así:

> Entonces, manejamos con éxito dos solicitudes con diferentes cuerpos a dos rutas y obtuvimos los resultados.
