
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Pages from './pages/Pages'
import Category from './components/Categories/Category'
import Search from './components/Search/Search'
import Header from './components/Header/Header'

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Search />
      <Category />
      <Pages />
    </Router>
  )
}

export default App
