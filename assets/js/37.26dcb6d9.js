(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{757:function(a,s,e){"use strict";e.r(s);var t=e(70),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"body-parser"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#body-parser"}},[a._v("#")]),a._v(" Body Parser")]),a._v(" "),e("p",[a._v("Necesitamos "),e("strong",[a._v("parsear")]),a._v(" el cuerpo de las solicitudes entrantes. Sin embargo, de manera predeterminada, no es tan fácil manejar eso y los datos no están en un formato bonito. Hay un paquete llamado "),e("strong",[a._v("body-parser")]),a._v(" cuyo trabajo es ayudarnos a analizar los datos.")]),a._v(" "),e("p",[a._v("De forma predeterminada, esta biblioteca admite datos "),e("strong",[a._v("codificados en URL")]),a._v(" y "),e("strong",[a._v("JSON")]),a._v(" , pero no archivos o medios. Para instalar el paquete, use el siguiente comando:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("$ npm install --save body-parser\n")])])]),e("p",[a._v("Después de la instalación, debe agregarlo y configurarlo en su archivo app.js. En primer lugar, importémoslo en la parte superior:")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// app.js")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" bodyParser "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'body-parser'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v("\n")])])]),e("p",[a._v("Después de importar, debe configurar el middleware, para que sepa qué tipo de cuerpos desea analizar. Puede agregar más de un tipo de cuerpo. Aquí agregaremos cuerpos codificados con URL y JSON. Debe configurarlos justo después de importar las rutas.")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// app.js")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v("\n app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("bodyParser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("urlencoded")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("extended"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v("\n")])])]),e("p",[a._v("Aquí "),e("strong",[a._v("extendido")]),a._v(" significa que el cuerpo puede tener datos de alcance o no, y se necesita verdadero o falso en consecuencia. Se recomienda establecerlo como falso de forma predeterminada.")]),a._v(" "),e("p",[a._v("Pero hasta ahora no estamos admitiendo cuerpos JSON, así que agreguemos ese soporte justo después del primer analizador de cuerpos:")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// app.js")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("bodyParser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("json")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v("\n")])])]),e("p",[a._v("Ahora, este middleware capturará automáticamente ambos tipos de cuerpos antes de verificar las rutas. Entonces, dentro de las rutas, podemos extraer fácilmente los cuerpos de las solicitudes.")]),a._v(" "),e("blockquote",[e("p",[a._v("Ahora su proyecto está listo para analizar el cuerpo de las solicitudes entrantes. En la próxima lección, los agregaremos en las rutas /users y /codes.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);