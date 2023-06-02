import { Route } from "wouter";
import { Home } from "./pages/Home/Home";
import { SearchResults } from "./pages/SearchResults/SearchResults";
import { GifPage } from "./pages/GifPage/GifPage";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/search/:keyword" component={SearchResults} />
      <Route path="/gif/:id" component={GifPage}/>
    </div>
  );
}

export default App;
