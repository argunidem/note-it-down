import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('Logged In');
        setLoggedIn(true);
      } else {
        console.log('Logged Out');
        setLoggedIn(false);
      }
      setCheckingStatus(false);
    });
  }, [auth]);

  return (
    <Fragment>
      <Router>
        <Navbar loggedIn={loggedIn} status={checkingStatus} />
        <div className='w-full px-3 pt-52 xs:w-5/6 xs:mx-auto xs:px-5 sm:w-4/5 max-w-7xl'>
          <Routes>
            <Route
              path='/'
              element={
                <Home loggedIn={loggedIn} checkingStatus={checkingStatus} />
              }
            />
            <Route
              path='/profile'
              element={
                <PrivateRoute loggedIn={loggedIn} status={checkingStatus} />
              }
            >
              <Route path='/profile' element={<Profile />} />
            </Route>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
          </Routes>
        </div>
        <Footer />
      </Router>

      <ToastContainer />
    </Fragment>
  );
};

export default App;
