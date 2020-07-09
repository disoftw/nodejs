# npm (Node Package Manager)

**npm** es el administrador de paquetes para Node.js, y como vamos a aprender sobre Node, necesitamos saber cómo usar npm para instalar, eliminar, actualizar y hacer muchas otras operaciones con paquetes.

El **paquete.json** es el archivo clave para la gestión de paquetes npm. Configura **dependencias** de paquetes y otras cosas. package.json se encuentra en el directorio raíz de la aplicación.

Aquí hay algunos comandos esenciales de npm:

    npm init

Esto iniciará un cuestionario de línea de comando que concluirá con la creación de un package.json en el directorio en el que inició el comando.

    npm install

Instale las dependencias en la carpeta local `node_modules` leyendo desde **package.json**.

    npm install <package_name>

Esto creará el directorio `node_modules` en su directorio actual (si aún no existe) y descargará el paquete a ese directorio. La opción **--save** agrega el módulo a las dependencias **package.json**.

    npm uninstall 'package_name' --save

Esto eliminará el paquete de node_modules y el archivo **package.json**.

    npm install 'package_name' --global

Esto instalará el paquete globalmente dentro del directorio node_modules.

    npm update

Esto actualizará los paquetes en el directorio node_modules y el archivo **package.json**.

:::warning ¡IMPORTANTE!
Durante cualquier operación en la que npm modifique el **node_modules** o **package.json**, el archivo **package-lock.json** se genera o modifica.