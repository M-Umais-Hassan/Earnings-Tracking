import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import Routes from './Routes/Routes';

// context
import UserContext from './Context/userContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    auth.onAuthStateChanged((user) => {
      if(user) {
        setIsAuthenticated(true);
        const userRef = db.ref(`Users/${user.uid}`);
        userRef.on('value', (snapshot) => {
          setUserData(snapshot.val());
          setLoading(false);
        });
      }
      else {
        setIsAuthenticated(false);
        setLoading(false);
      }
    })
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
        <Routes isAuthenticated={isAuthenticated} loading={loading} />
    </UserContext.Provider>
  );
}

export default App;
