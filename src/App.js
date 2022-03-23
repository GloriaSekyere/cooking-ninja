import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useTheme } from './hooks/useTheme'

//components
import Navbar from './components/Navbar'
import ThemeColor from './components/ThemeColor';

//pages
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'

//styles
import './App.css'


function App() {
  const { mode } = useTheme()

  return (
    <div className={`App ${mode==='light' ? '': 'dark'}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeColor />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/create">
            <Create />
          </Route>

          <Route path="/recipe/:id">
            <Recipe />
          </Route>

          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
