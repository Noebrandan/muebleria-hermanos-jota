
# Muebleria hermanos Jota
Hermanos Jota es una plataforma web que presenta una colección exclusiva de muebles de diseño argentino. El proyecto combina estética minimalista con funcionalidad moderna, ofreciendo una experiencia de navegación fluida y atractiva para los usuarios interesados en mobiliario de alta calidad.

# Integrantes:
- Noelia Agustina Brandan
- Gonzalo Quintana

# Tecnologías utilizadas:
- Node.js
- Express.js
- React
- HTML5
- CSS
- Javascript

# Arquitectura del proyecto:
Este proyecto está organizado como un **monorepo** con dos aplicaciones principales: Backend (express.js) y Frontend (HTML/CSS/JS).

# Decisiones de arquitectura:
**Backend** API REST con datos locales, middlewares de logging y manejo de errores.
**Frontend** Diseño responsive mobile-first con javascript.

# Instalaciones:
### Backend
```bash
cd backend
npm install
npm run dev
```
**Servidor:** `http://localhost:3001`

### Frontend
```bash
# Opción 1: Abrir directamente
open html/productos.html
# Opción 2: Servidor local
npm install -g http-server
http-server -p 8080
```

# API endpoints
- `GET /api/productos` - Lista todos los productos
- `GET /api/productos/:id` - Obtiene un producto por ID

##  Frontend

**Páginas:** `index.html`, `productos.html`, `producto.html`, `contacto.html`  
**Características:** Responsive, búsqueda, carrito, formulario de contacto

## Backend

**Middlewares:** Logger (consola) y manejo de errores (404/500)  
**Datos:** Array local en `backend/src/data/products.js`
