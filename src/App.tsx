import { useAuthState } from 'react-firebase-hooks/auth';
import { Audio } from 'react-loader-spinner';

import { auth } from './firebase';
import NavBar from './components/NavBar/NavBar';
import ChatBox from './components/ChatBox/ChatBox';
import Welcome from './components/Welcome/Welcome';
import './App.scss'

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading)
    return (
      <Audio
        height="80"
        width="80"
        color="white"
        ariaLabel="three-dots-loading"
        wrapperClass='spinnerWrapper'
      />
    );

  return (
    <>
      {!user ? (
        <Welcome />
      ) : (
        <>
          <NavBar />
          <ChatBox />
        </>
      )}
    </>
  );
}

export default App;
