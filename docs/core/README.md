# Módulos principales

Los módulos principales incluyen funcionalidades mínimas básicas de Node.js, se compilan en su distribución binaria y se cargan automáticamente cuando se inicia Node.js.

A diferencia de otros módulos, no tienen que instalarse manualmente. El módulo central debe importarse primero para usarlo en la aplicación.

```JS
const data = require ("nombre-del-módulo");
```

Aquí hay una lista de algunos de los módulos principales de Node.js:

- **assert:** proporciona un conjunto de pruebas de afirmación
- **buffer:** contiene funcionalidad para manejar datos binarios
- **dns:** para búsquedas de DNS y funciones de resolución de nombres
- **events:** proporciona una forma de trabajar con eventos
- **fs:** incluye funcionalidad para trabajar con archivos
- **http:** incluye funcionalidad para crear un servidor HTTP Node.js
- **querystring:** proporciona funcionalidad de manejo de cadenas de consulta URL

:::tip
El módulo **os** proporciona información sobre el sistema operativo de la computadora.
