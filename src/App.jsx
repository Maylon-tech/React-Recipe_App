
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Pages from './pages/Pages'
import Category from './components/Categories/Category'

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Category />
      <Pages />
    </Router>
  )
}

export default App
