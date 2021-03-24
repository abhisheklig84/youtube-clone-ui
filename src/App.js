import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos.js";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 

function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route exact path="/">
        <Header/>
          <div className="app_page">
            <Sidebar/>
            <RecommendedVideos/>
          </div>
        </Route>
        <Route exact path="/search:searchTerm">
          <Header/>
          <h1>search page</h1>  
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
