
import { Provider } from 'react-redux'
import { CatWiki } from './CatWiki'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <CatWiki />
    </Provider>
  )
}

export default App
