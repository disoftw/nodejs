(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{750:function(s,a,t){"use strict";t.r(a);var e=t(70),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ruta-de-usuarios-post"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ruta-de-usuarios-post"}},[s._v("#")]),s._v(" Ruta de usuarios (POST)")]),s._v(" "),t("p",[s._v("Ahora que tenemos la configuración necesaria en el archivo app.js, podemos agregar tantas rutas como queramos en el archivo users.js. Entonces, escribamos el manejador de solicitud (handler) "),t("strong",[s._v("POST")]),s._v(".")]),s._v(" "),t("p",[s._v("Es similar a la solicitud GET con algunas diferencias menores:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// users.js")]),s._v("\nrouter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("post")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("req"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" next")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("json")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        message"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Handling POST request of the /users'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])])]),t("p",[s._v("No olvide exportar su ruta para que el archivo app.js pueda acceder a su archivo users.js:")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// users.js")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" router"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("Ahora que tenemos nuestras rutas "),t("strong",[s._v("GET")]),s._v(" y "),t("strong",[s._v("POST")]),s._v(", intentemos enviar una solicitud en Postman.\nNo olvide reiniciar su servidor para aplicar los cambios. Para eso, puede matar el servidor presionando la combinación de teclas Ctrl+C e iniciarlo nuevamente con el comando:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("$ node server.js\n")])])]),t("p",[t("strong",[s._v("Solicitud GET: localhost:3000/users")])]),s._v(" "),t("p",[t("strong",[s._v("Solicitud POST: localhost:3000/users")])]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("Tenga en cuenta que ya no puede enviar una solicitud a la "),t("strong",[s._v("ruta raíz")]),s._v(" (localhost:3000) ya que no hay controladores para eso. Además, como se especifican las rutas de los usuarios, solo aceptará la solicitud GET y POST y fallará (devolverá un error) en cualquier otro tipo.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);