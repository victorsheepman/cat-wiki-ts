import { useEffect } from 'react'
import { useStore, fetchApi, getBreedsFromAPi } from './store'
import { Layout } from './container/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home,MoreBreeds, CatDetail } from './pages';



export const CatWiki = () => {   
    const {dispatch} = useStore()
    useEffect(() => {
        dispatch(fetchApi());
        dispatch(getBreedsFromAPi())
      }, [dispatch]);

    
  return (
      <Router>  
        <Layout>
          <Routes>
            <Route path="/"  Component={Home} />
            <Route path="/detail/:id"  Component={CatDetail} />
            <Route path="/more"  Component={MoreBreeds} />
          </Routes>
        </Layout>
      </Router>
    
  )
}
