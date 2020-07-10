(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{762:function(s,a,t){"use strict";t.r(a);var e=t(70),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"body-parser"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#body-parser"}},[s._v("#")]),s._v(" Body Parser")]),s._v(" "),t("p",[s._v("Necesitamos "),t("strong",[s._v("parsear")]),s._v(" el cuerpo de las solicitudes entrantes. Sin embargo, de manera predeterminada, no es tan fácil manejar eso y los datos no están en un formato bonito. Hay un paquete llamado "),t("strong",[s._v("body-parser")]),s._v(" cuyo trabajo es ayudarnos a analizar los datos.")]),s._v(" "),t("p",[s._v("De forma predeterminada, esta biblioteca admite datos "),t("strong",[s._v("codificados en URL")]),s._v(" y "),t("strong",[s._v("JSON")]),s._v(" , pero no archivos o medios. Para instalar el paquete, use el siguiente comando:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("$ npm install --save body-parser\n")])])]),t("p",[s._v("Después de la instalación, debe agregarlo y configurarlo en su archivo app.js. En primer lugar, importémoslo en la parte superior:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// app.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" bodyParser "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'body-parser'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])])]),t("p",[s._v("Después de importar, debe configurar el middleware, para que sepa qué tipo de cuerpos desea analizar. Puede agregar más de un tipo de cuerpo. Aquí agregaremos cuerpos codificados con URL y JSON. Debe configurarlos justo después de importar las rutas.")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// app.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bodyParser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("urlencoded")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("extended"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])])]),t("p",[s._v("Aquí "),t("strong",[s._v("extendido")]),s._v(" significa que el cuerpo puede tener datos de alcance o no, y se necesita verdadero o falso en consecuencia. Se recomienda establecerlo como falso de forma predeterminada.")]),s._v(" "),t("p",[s._v("Pero hasta ahora no estamos admitiendo cuerpos JSON, así que agreguemos ese soporte justo después del primer analizador de cuerpos:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// app.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\napp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bodyParser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("json")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n")])])]),t("p",[s._v("Ahora, este middleware capturará automáticamente ambos tipos de cuerpos antes de verificar las rutas. Entonces, dentro de las rutas, podemos extraer fácilmente los cuerpos de las solicitudes.")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("Ahora su proyecto está listo para analizar el cuerpo de las solicitudes entrantes. En la próxima lección, los agregaremos en las rutas /users y /codes.")])]),s._v(" "),t("h2",{attrs:{id:"body-parser-en-uso"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#body-parser-en-uso"}},[s._v("#")]),s._v(" Body Parser en uso")]),s._v(" "),t("p",[s._v("En la lección anterior, agregamos el analizador de cuerpo para extraer los datos de los cuerpos de solicitud entrantes. En esta lección, lo implementaremos en nuestras rutas /users y /codes para obtener los datos deseados.")]),s._v(" "),t("p",[s._v("Ahora en nuestros controladores de ruta (digamos POST, donde esperamos obtener datos), podemos leer el cuerpo con el siguiente código:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("router"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("post")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("req"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" next")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" data "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" req"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sampleData\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("Aquí el sampleData es solo una palabra aleatoria. Pero debe coincidir con la propiedad en la solicitud entrante. Entonces, usando el código anterior, el cuerpo de la solicitud POST debería verse así:")]),s._v(" "),t("p",[s._v('{"sampleData": "Datos aleatorios"}')]),s._v(" "),t("p",[s._v("Ahora manejemos el cuerpo de la solicitud en el controlador POST de la ruta de usuarios:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// users.js")]),s._v("\nrouter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("post")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("req"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" next")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" req"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    age"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" req"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("201")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("json")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    message"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Handling POST request of the /users'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" user\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("Ahora escribamos el cuerpo y veamos la respuesta:")]),s._v(" "),t("p",[t("img",{attrs:{src:"post-2.png",alt:""}})]),s._v(" "),t("p",[s._v("Hagamos lo mismo para /codes:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// codes.js")]),s._v("\nrouter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("post")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("req"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" next")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" code "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    language"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" req"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lang"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" req"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("201")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("json")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    message"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Handling POST request of the /codes'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    code"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" code\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("La solicitud del cartero se verá así:")]),s._v(" "),t("blockquote",[t("p",[s._v("Entonces, manejamos con éxito dos solicitudes con diferentes cuerpos a dos rutas y obtuvimos los resultados.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);