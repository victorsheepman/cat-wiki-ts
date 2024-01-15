import { useEffect } from 'react'
import { useStore, fetchApi } from './store'
import { Layout } from './container/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages';



export const CatWiki = () => {   
    const {dispatch} = useStore()
    useEffect(() => {
        dispatch(fetchApi());
      }, [dispatch]);

    
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/"  Component={Home} />
        </Routes>
      </Router>
    </Layout>
  )
}
