
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Pages from './pages/Pages'
import Category from './components/Categories/Category'
import Search from './components/Search/Search'

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Search />
      <Category />
      <Pages />
    </Router>
  )
}

export default App
