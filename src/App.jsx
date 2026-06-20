import { Routes, Route } from 'react-router-dom';
import { routes } from './routes/Route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './style/StyleComponent';
// import Footer from "./components/footer/Footer";
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />

      <Routes>
        {routes.map((item, index) => {
          const Component = item.Element;
          return (
            <Route
              key={index}
              path={item.path}
              element={<Component />}
            />
          );
        })}
      </Routes>

      {/* <Footer /> */}
      <Navigation />
    </div>
  );
}

export default App;