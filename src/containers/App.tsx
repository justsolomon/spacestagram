import { Provider } from "react-redux";
import store from "redux/store";
import Home from "./Home";
import "styles/main.scss";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
