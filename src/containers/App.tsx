import { Provider } from "react-redux";
import store from "redux/store";
import "styles/main.scss";
import Home from "./Home";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
