import AllRoutes from './All Routes/AllRoutes';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import styles from "./Styles/App.module.css"



function App() {
  return (
    // <div className="App">
    <div className={styles.app}>
      <AllRoutes />
      <HomePage />
      <Footer />

    </div>
  );
}

export default App;
