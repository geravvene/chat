import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import GoogleSignin from '@img/btn_google_signin_dark_pressed_web.png';
import { auth } from '../../firebase';
import style from './Welcome.module.scss'


const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <main className={style.wrapper}>
      <h2>Welcome to MyChat</h2>
      <button>
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
        />
      </button>
    </main>
  );
};

export default Welcome;
