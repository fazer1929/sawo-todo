import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Quadrant from "./Pages/Quadrant/Quadrant";
import SawoAuth from "./Components/SawoAuth/SawoAuth";
import { AuthProvider } from "./AuthContext";
function App() {
  return (
    <AuthProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/auth" component={SawoAuth} />
          <Route path="/" component={Quadrant} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
