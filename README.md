# 📌 Sistema Tiquetazo

Sistema de pedidos desarrollado con React y Vite. Se utiliza Redux Toolkit para la gestión del estado global y json-server para simular una API con menús, categorías y mesas.

## 🚀 Funcionalidad

Tiquetazo facilita la toma de pedidos en restaurantes, permitiendo a los clientes:

✔️ Realizar pedidos sin necesidad de un mesero.
✔️ Compartir la mesa con otras personas y agregar productos por separado.
✔️ Pagar individualmente sin complicaciones.

## 🛠 Instalación y ejecución

### 🔹 Levantar el frontend

- Clonar el repositorio y posicionarse en la carpeta del proyecto:
  cd sistema-tiquetazo
- Instalar las dependencias:
  npm install
- Iniciar el servidor de desarrollo:
  npm run dev

### 🔹 Levantar la API Fake

- En la misma carpeta del proyecto, ejecutar:
  json-server --watch db.json --port 5000

## 📌 Tecnologías utilizadas

- React + Vite ⚡
- Redux Toolkit para manejo de estado global
- json-server para simular la API
- Radix UI para modales accesibles
- React Icons para iconografía
- Google Fonts para una tipografía más estilizada
