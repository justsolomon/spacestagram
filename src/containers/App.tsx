import { Provider } from "react-redux";
import store from "redux/store";
import "styles/main.scss";

function App() {
  return (
    <Provider store={store}>
      <h1 className="App">Spacestagram</h1>
    </Provider>
  );
}

export default App;
