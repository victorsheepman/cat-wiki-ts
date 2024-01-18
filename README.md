# Documentación de la Aplicación CatWiki

CatWiki es una aplicación web que permite a los usuarios explorar y aprender sobre diferentes razas de gatos. La aplicación utiliza TheCatAPI para obtener información sobre las razas de gatos. A continuación, se presenta una actualización de la documentación que incorpora el uso de Vite en lugar de Create React App (CRA).

## Índice

1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Componentes de React](#componentes-de-react)
3. [Llamadas a la API en React y Redux](#llamadas-a-la-api-en-react-y-redux)
4. [Enrutamiento](#enrutamiento)
6. [Cómo Ejecutar la Aplicación](#cómo-ejecutar-la-aplicación)

## 1. Estructura del Proyecto

- `src/api`: Servicios utilizados para hacer llamadas adicionales a la API.
- `src/components`: Contiene componentes React.
- `src/App.jsx`: Componente principal de la aplicación.
- `src/CatWiki.jsx`: Componente donde se encuentran las rutas.
- `src/store`: Almacenamiento Redux, con slices para gestionar el estado de la aplicación, thunks con las llamadas a la API y los hooks que se usan del reducer.


## 2. Componentes de React

La aplicación React está dividida en varios componentes:

- `BreedArticle`: Muestra un artículo resumido de las razas más buscadas.
- `CatDetail`: Muestra una vista detallada de la raza del gato.
- `MoreBreeds`: Muestra la página con búsquedas populares, razas principales, etc.
- `BreedList`: Muestra una lista de breedCard.

## 3. Llamadas a la API en React y Redux
Las llamadas a la API ahora se manejan mediante createAsyncThunk de Redux Toolkit en lugar de la función fetch.

Ejemplo de llamada a la API en un componente React utilizando Redux:


```jsx
// Dentro de un componente React
import { useDispatch } from 'react-redux';
import { fetchApi, getBreedsFromAPI, getBreedById } from '../redux/catSlice';

const YourComponent = () => {
  const dispatch = useDispatch();

  // Llamada a la API para obtener una lista limitada de razas de gatos
  dispatch(fetchApi());

  // Llamada a la API para obtener la lista completa de razas de gatos (formato para opciones de un dropdown)
  dispatch(getBreedsFromAPI());

  // Llamada a la API para obtener detalles de una raza de gato específica
  dispatch(getBreedById('specificBreedId'));

  // Resto del código del componente
};
```

## 4. Enrutamiento

Se utiliza React Router para la navegación entre las diferentes secciones de la aplicación. La aplicación incluye rutas para la página de inicio, detalles de la raza y otras funciones opcionales.

```jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/detail/:id" element={<CatDetail />} />
        <Route path="/more" element={<MoreBreeds />} />
      </Routes>
    </Router>
  );
}
```

## 6. Cómo Ejecutar la Aplicación
Iniciar el Servidor:

```
cd Cat-wiki-ts
npm install
npm run dev
```