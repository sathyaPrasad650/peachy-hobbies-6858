import AllRoutes from './All Routes/AllRoutes';
// import HomePage from './Pages/HomePage';
import styles from "./Styles/App.module.css"



function App() {
  return (
    // <div className="App">
    <div className={styles.app}>
      <AllRoutes />
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
