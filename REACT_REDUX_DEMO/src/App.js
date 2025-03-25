import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
/* import IcecreamContainer from "./components/IcecreamContainer"; */
import PuffContainer from "./components/PuffContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
import CounterContainer from "./components/CounterContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterContainer />
        {/* <UserContainer /> */}
        {/* <ItemContainer cake />
        <ItemContainer />
        <NewCakeContainer />
        <PuffContainer />
        <IcecreamContainer />
        <HooksCakeContainer />
        <CakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
