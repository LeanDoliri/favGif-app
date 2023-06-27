import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Router } from "wouter";
import { Home } from "./pages/Home/Home";
import { SearchResults } from "./pages/SearchResults/SearchResults";
import { GifPage } from "./pages/GifPage/GifPage";
import "./App.css";
import { FavsProvider } from "./Contexts/FavsContext";

function App() {
  return (
    <Router>
      <div className="App">
        <FavsProvider>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/gif/:id" component={GifPage} />
        </FavsProvider>
      </div>
    </Router>
  );
}

export default App;
