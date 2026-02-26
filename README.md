

##  Descripción

**Coffee Listing** es una aplicación React creada con Vite que demuestra conceptos fundamentales de React como:
- Hooks (`useState`, `useEffect`)
- Componentes funcionales y reutilizables
- Props y Lifting State Up
- Renderizado condicional
- Listas y keys
- Consumo de APIs con fetch

La aplicación consume datos reales desde una API pública y permite filtrar cafés por disponibilidad.

## 👥 Integrantes

- Estudiante
María del Carmen Guerra Ruiz
Jorge Arnulfo Montoya Manchola
##  Cómo Ejecutar

### Requisitos
- Node.js (v16 o superior)
- npm 

### Pasos

2. **Instalar dependencias**
  
   npm install
   

3. **Ejecutar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Acceder a la aplicación**
   - La aplicación se abrirá automáticamente en `http://localhost:5173`
   - Si no, copia la URL del terminal

5. **Construir para producción**
   ```bash
   npm run build
   ```

## 🛠️ Tecnologías Usadas

- **React 19** - Librería de UI
- **Vite 7** - Bundler y servidor de desarrollo
- **JavaScript ES6+** - Lenguaje de programación
- **CSS3** - Estilos responsivos
- **Fetch API** - Consumo de APIs

##  Características

 **Consumo de API Real** - Obtiene datos desde GitHub  
 **Filtros Dinámicos** - Filtra por "Todos" o "Disponibles"  
**Skeleton Loading** - Animación mientras carga  
**Diseño Responsivo** - Funciona en móvil, tablet y desktop  
**Grid Adaptable** - 1 columna móvil, 2 tablet, 3 desktop  
 **Badges** - Muestra "Popular" y "Sold Out"  
 **Sin Librerías Externas** - Solo React y CSS puro  

##  Componentes

### Card.jsx
Tarjeta reutilizable que muestra:
- Imagen del café
- Nombre
- Precio
- Rating y votos
- Badge "Popular" (condicional)
- Estado "Available" o "Sold Out" (condicional)

### List.jsx
Mapea el array de cafés y renderiza múltiples `Card` con keys únicas.

### FilterBar.jsx
Botones para filtrar entre "All Products" y "Available Now" con estado activo visual.

### Skeleton.jsx
6 tarjetas simuladas con animación shimmer mientras se cargan los datos.



##  Conceptos React Implementados

1. **useState** - Gestión de estado (cafés, loading, filtro)
2. **useEffect** - Fetch de datos cuando monta el componente
3. **Props** - Paso de datos entre componentes
4. **Renderizado Condicional** - Muestra Skeleton, Empty State, o Lista
5. **Listas y Keys** - Map con keys únicas
6. **Lifting State Up** - El filtro vive en App y se pasa a FilterBar
7. **Eventos** - onClick en botones de filtro
8. **Componentes Funcionales** - Todos los componentes son funcionales

##  API Utilizada

```
https://raw.githubusercontent.com/devchallenges-io/web-dev-projects/master/data/simple-coffee-listing.json
```


##  Notas

- El código está escrito de forma clara y comprensible
- Sin sobreingeniería ni patrones avanzados
- Comentarios simples explicando la lógica
- Estilos limpios con CSS puro
- Sin Redux, Context API, ni librerías externas

## 🔗 Links Útiles

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [devChallenges](https://devchallenges.io)

---
