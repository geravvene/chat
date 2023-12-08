import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@/firebase';
import { IMessageWithId } from '@/types';
import style from './Message.module.scss';

interface IMessage {
  message: IMessageWithId;
}

function Message({ message }: IMessage) {
  const [user] = useAuthState(auth);

  return (
    <div
      className={`${style.message} ${
        message.uid === user!.uid ? style.right : ''
      }`}
    >
      <img src={message.avatar} alt="user avatar" />
      <div>
        <p className={style.username}>{message.name}</p>
        <p className={style.text}>{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
