import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import Routes from './Routes/Routes';

// context
import UserContext from './Context/userContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setLoading(true);
    auth.onAuthStateChanged((user) => {
      if(user) {
        setIsAuthenticated(true);
        const userRef = db.ref(`Users/${user.uid}`);
        userRef.on('value', (snapshot) => {
          setUserData(snapshot.val());
          console.log('User data changed')
          setLoading(false);
          if(snapshot.val().admin && snapshot.val().admin === true) {
            setIsAdmin(true);
          }
          else {
            setIsAdmin(false);
          }
        });
      }
      else {
        setIsAuthenticated(false);
        setLoading(false);
        setIsAdmin(false);
        auth.signOut();
      }
    })
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
        <Routes isAuthenticated={isAuthenticated} loading={loading} isAdmin={isAdmin} />
    </UserContext.Provider>
  );
}

export default App;
