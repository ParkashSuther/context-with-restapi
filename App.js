import React, { useEffect, useState } from 'react';
import HomePage from './HomePage'
import { UserProvider } from './UserContext'
import List from './loading/List';
import withListLoading from './loading/WithListLoading';
function App() {
  const user = { name: 'Tania', loggedIn: true }
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `------your rest api ------------`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos });
      });
  }, [setAppState]);
  return (
    <UserProvider value={appState.repos}>
      <HomePage />
    </UserProvider>
  )
}

export default App;
