
import './App.scss';
import Navbar from "../Navbar/Navbar"
import Main from "../Main/Main"
import Contact from "../Contact/Contact"
import Work from "../work/work"
import Footer from "../Footer/Footer"
import { Switch, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"


function App() {
  const location = useLocation()
  return (
      <div className="app">
        <Navbar />
          <AnimatePresence>
            <Switch location={location} key={location.key}>
                  <Route exact path="/" component={Main} />
                  <Route path="/projects" component={Work} />
                  <Route path="/contact" component={Contact} />
            </Switch>
          </AnimatePresence>
        <Footer />

      </div>

  );
}

export default App;
