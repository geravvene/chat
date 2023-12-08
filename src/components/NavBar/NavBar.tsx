import { auth } from '../../firebase';
import style from './NavBar.module.scss';

const NavBar = () => {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className={style.wrapper}>
      <h3>MyChat</h3>
      <button onClick={signOut}>
        Sign Out
      </button>
    </nav>
  );
};

export default NavBar;
