(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{755:function(e,a,s){"use strict";s.r(a);var t=s(70),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"manejo-de-errores"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manejo-de-errores"}},[e._v("#")]),e._v(" Manejo de errores")]),e._v(" "),s("p",[e._v("Siempre es posible que una solicitud sea incorrecta, ya sea debido a un error humano o errores de código. Por lo tanto, debemos mejorar nuestra API e incluir un controlador de errores central que detecte los errores principales y no permita que el servidor se bloquee.")]),e._v(" "),s("p",[e._v("Recuerde que en app.js, teníamos un middleware para manejar todas las solicitudes entrantes a la ruta "),s("strong",[e._v("/users")]),e._v(". Nuestro error al manejar el middleware detectará cualquier cosa que no sea capturada por ese middleware o cualquier otro (lo agregaremos más adelante).")]),e._v(" "),s("p",[e._v("Primero, manejemos el error "),s("strong",[e._v("No encontrado")]),e._v(". Para esto, necesitamos usar el objeto de la aplicación nuevamente y, al igual que cualquier otra ruta, obtener los parámetros "),s("strong",[e._v("req, res")]),e._v(" y "),s("strong",[e._v("next")]),e._v(" y devolver una devolución de llamada. Este fragmento de código debe estar al final de su archivo app.js, justo antes de la exportación.")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// app.js")]),e._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" error "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Not found'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("404")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v("Entonces, en el código anterior, recibimos la solicitud y arrojamos un objeto de error, adjuntamos el código de estado\n"),s("strong",[e._v("404")]),e._v(" (que significa "),s("strong",[e._v("No encontrado")]),e._v("), y finalmente pasamos el objeto de error al "),s("strong",[e._v("next()")]),e._v(".")]),e._v(" "),s("p",[e._v("Pero, hasta ahora, no tenemos nada que atrape el "),s("strong",[e._v("next()")]),e._v(". Entonces, creemos un controlador de errores general que obtenga la "),s("strong",[e._v("next()")]),e._v(" y la maneje adecuadamente.")]),e._v(" "),s("p",[e._v("Los manejadores de errores necesitan un parámetro adicional más: error.")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// app.js")]),e._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("status "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("||")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n  res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    error\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v("Aquí verificamos si hay un estado personalizado en el error, y si no, por defecto, devolverá el estado 500. El resto es similar a lo que hicimos en las lecciones anteriores, creando un objeto JSON personalizado para la respuesta.")]),e._v(" "),s("p",[e._v("Usted es libre de manejar el cuerpo JSON como lo desee. Por ejemplo, puede optar por obtener solo el mensaje de error y devolverlo como mensaje, por ejemplo:")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//app.js")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),e._v("\nres"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  error"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    message"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("message\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("p",[e._v("Entonces, enviemos una solicitud incorrecta que no se maneja y veamos el resultado:")]),e._v(" "),s("p",[s("strong",[e._v("GET Request: localhost:3000/")])]),e._v(" "),s("p",[e._v("Intente cambiar el cuerpo de JSON para leer el mensaje de error como se muestra arriba y envíe la misma solicitud nuevamente para ver la diferencia.")]),e._v(" "),s("blockquote",[s("p",[e._v("Es esencial distinguir entre los "),s("strong",[e._v("manejadores de Solicitud")]),e._v(" y los "),s("strong",[e._v("manejadores de Error")]),e._v(". Se implementan de manera diferente y funcionan de manera diferente en el marco Express. Los "),s("strong",[e._v("manejadores de solicitudes")]),e._v(" obtendrán como máximo 3 parámetros (como req, res y next), pero los "),s("strong",[e._v("manejadores de errores")]),e._v(" necesitan 4 parámetros (como "),s("strong",[e._v("error, req, res")]),e._v(" y "),s("strong",[e._v("next")]),e._v(").")])])])}),[],!1,null,null,null);a.default=n.exports}}]);