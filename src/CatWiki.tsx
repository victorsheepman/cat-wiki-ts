import { useEffect } from 'react'
import { useStore } from './store'
import { fetchApi } from './api';

export const CatWiki = () => {   
    const {dispatch, state} = useStore()
    useEffect(() => {
        dispatch(fetchApi());
      }, [dispatch]);

    
  return (
    <div>
        {state.breeds.map(breed=><h1>{breed.id}</h1>)}
        {<h1>{state.status}</h1>}
    </div>
  )
}
