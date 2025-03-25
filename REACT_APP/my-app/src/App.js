import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComp from "./components/ParentComp";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheets from "./components/Stylesheets";
import Inline from "./components/Inline";
import "./components/appStyles.css";
import styles from "./components/appStyles.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import PureParentComp from "./components/PureParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalsDemo from "./components/PortalsDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import Counter1 from "./components/Counter1";
import Hover1 from "./components/Hover1";
import User from "./components/User";
import RenderProps from "./components/RenderProps";
import Context1 from "./components/Context1";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div className="App">
      {/* <UserProvider value="Mahesh"> // first checks for provider if no takes values from createContext as default. */}
      {/* <Context1 /> */}
      {/* </UserProvider> */}
      {/* <RenderProps>
        {(count, handleFunc) => {
          return <Counter1 count={count} handleFunc={handleFunc} />;
        }}
      </RenderProps>
      <RenderProps>
        {(count, handleFunc) => {
          return <Hover1 count={count} handleFunc={handleFunc} />;
        }}
      </RenderProps> */}
      {/* <RenderProps
        render={(count, handleFunc) => {
          return <Counter1 count={count} handleFunc={handleFunc} />;
        }}
      />
      <RenderProps
        render={(count, handleFunc) => {
          return <Hover1 count={count} handleFunc={handleFunc} />;
        }}
      /> */}
      {/* <User name="Mounika" /> */}
      {/* <User
        render={() => {
          return "Mounika";
        }}
      /> */}
      {/* <User
        render={(isLoggedIn) => {
          return isLoggedIn ? "Mounika" : "Guest";
        }}
      /> */}
      {/* <Hover1 />
      <Counter1 /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Spiderman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <Hero /> */}
      {/* <PortalsDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <PureParentComp /> */}
      {/* <PureComp /> */}
      {/* <Table/> */}
      {/* <FragmentDemo/> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Hawai</h1>
      <Inline /> */}
      {/* <Stylesheets primary={false} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComp /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Hello /> */}
      {/* <Greet name="Mike">
        <p>This is children</p>
      </Greet>
      <Greet name="Lucy" />
      <Greet name="John" />
      <Welcome name="Lilly" /> */}
    </div>
  );
}

export default App;
