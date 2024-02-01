import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {auth} from './chat-app/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import {Home} from './chat-app/components/Home.js';
import {LogInAuth} from './chat-app/components/SignIn.js';
import SignUpAuth from './chat-app/components/Signup.js';
import { DataProvider } from './chat-app/contextFile/dataProvider.js';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return 'Loading please wait..';
  }

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Home /> : <LogInAuth />} />
          <Route path="/SignUp" element={<SignUpAuth />} />
          <Route path="/LogIn" element={user ? <Navigate to="/" /> : <LogInAuth />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
