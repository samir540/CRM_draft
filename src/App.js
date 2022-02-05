import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <Routes>
      {isLoggedIn ? (
        <Route path='/admin/*' element={<AdminPage />} />
      ) : (
        <Route
          path='/login'
          element={<LoginPage onLoginHandler={loginHandler} />}
        />
      )}

      <Route
        path='*'
        element={<Navigate replace to={`/${isLoggedIn ? 'admin' : 'login'}`} />}
      />
    </Routes>
  );
}

export default App;
