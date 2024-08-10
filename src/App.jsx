import { Suspense, lazy } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

const Footer = lazy(() => import("./Layouts/Footer"));
const Header = lazy(() => import("./Layouts/Header"));

const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/login" element={<Login />} />

            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </Suspense>

        <Footer />
      </div>
      <ToastContainer newestOnTop />
    </>
  );
}

export default App;
