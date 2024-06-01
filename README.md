# Cómo Correr un Proyecto de React Hecho con Vite

Este documento te guiará a través de los pasos necesarios para configurar y ejecutar un proyecto de React utilizando Vite.

#### Prerrequisitos

- Node.js (versión 14.0.0 o superior)
- npm (versión 6.0.0 o superior) o Yarn

#### Instalación

1. **Clonar el Repositorio**

```bash
git clone <URL-del-repositorio>
cd <nombre-del-repositorio>
```

2. **Instalar Dependencias**

Usando npm:

```bash
npm install
```

Usando Yarn:

```bash
yarn install
```

#### Ejecución del Proyecto

1. **Iniciar el Servidor de Desarrollo**

Usando npm:

```bash
npm run dev
```

Usando Yarn:

```bash
yarn dev
```

El servidor se iniciará y podrás acceder a tu aplicación en `http://localhost:3000`.

#### Construcción para Producción

1. **Construir el Proyecto**

Usando npm:

```bash
npm run build
```

Usando Yarn:

```bash
yarn build
```

Esto generará una carpeta `dist` con los archivos optimizados para producción.

2. **Previsualizar la Construcción**

Usando npm:

```bash
npm run preview
```

Usando Yarn:

```bash
yarn preview
```

Esto iniciará un servidor para previsualizar la aplicación construida en `http://localhost:5000`.

#### Scripts Adicionales

- **Linting**

Usando npm:

```bash
npm run lint
```

Usando Yarn:

```bash
yarn lint
```

- **Formateo de Código**

Usando npm:

```bash
npm run format
```

Usando Yarn:

```bash
yarn format
```

#### Problemas Comunes

- **Error al instalar dependencias:** Asegúrate de tener la versión correcta de Node.js y npm/Yarn.
- **Puerto en uso:** Si el puerto 3000 está ocupado, puedes cambiarlo en el archivo `vite.config.js`.

¡Listo! Ahora deberías poder correr y desarrollar tu proyecto de React con Vite sin problemas.
