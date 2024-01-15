import { useEffect } from 'react'
import { useStore, fetchApi } from './store'
import { Layout } from './container/Layout';

export const CatWiki = () => {   
    const {dispatch} = useStore()
    useEffect(() => {
        dispatch(fetchApi());
      }, [dispatch]);

    
  return (
    <Layout/>
  )
}
