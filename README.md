# Documentación de la Aplicación CatWiki

CatWiki es una aplicación web que permite a los usuarios explorar y aprender sobre diferentes razas de gatos. La aplicación utiliza TheCatAPI para obtener información sobre las razas de gatos. A continuación, se presenta una actualización de la documentación que incorpora el uso de Vite en lugar de Create React App (CRA).

## Índice

1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [API del Lado del Servidor](#api-del-lado-del-servidor)
3. [Componentes de React](#componentes-de-react)
4. [Llamadas a la API en React y Redux](#llamadas-a-la-api-en-react-y-redux)
5. [Enrutamiento](#enrutamiento)
6. [Cómo Ejecutar la Aplicación](#cómo-ejecutar-la-aplicación)

## 1. Estructura del Proyecto

- `src/api`: Servicios utilizados para hacer llamadas adicionales a la API.
- `src/components`: Contiene componentes React.
- `src/App.jsx`: Componente principal de la aplicación.
- `src/CatWiki.jsx`: Componente donde se encuentran las rutas.
- `src/store`: Almacenamiento Redux, con slices para gestionar el estado de la aplicación, thunks con las llamadas a la API y los hooks que se usan del reducer.
- `catwiki-server`: Servidor Node.js.
  - `server.js`: Lógica del lado del servidor y rutas de la API.

## 2. API del Lado del Servidor

El servidor está construido con Node.js y Express. Proporciona puntos finales de API para obtener razas de gatos y otra información relevante.

### Puntos Finales:

1. **GET `/api/breeds`**
   - Obtiene una lista de razas de gatos.

   Ejemplo de Respuesta:
   ```json
   [
     { "id": "abys", "name": "Abisinio", ... },
     { "id": "beng", "name": "Bengala", ... },
     // ...
   ]
