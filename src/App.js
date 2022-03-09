import { BrowserRouter, Route, Switch } from "react-router-dom";
import Top_sidebar from "./components/Top_sidebar";
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";
import Formations from "./pages/Formations";
import Webmap from "./pages/Webmap";
import Credits from "./pages/Credits";
import NotFound from "./pages/NotFound";

const App = () => {

  return (
    <div className="App">
      <div className="main-container">
        <div className="container">
        <section>
          <Top_sidebar />
          </section>
          <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/connaissances" exact component={Knowledges} />
                <Route path="/experiences" exact component={Experiences} />
                <Route path="/portfolio" exact component={Portfolio} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/formations" exact component={Formations} />
                <Route path="/plan" exact component={Webmap} />
                <Route path="/credits" exact component={Credits} />
                <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
