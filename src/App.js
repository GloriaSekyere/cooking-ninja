import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
  return (
    <div className="App">
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
