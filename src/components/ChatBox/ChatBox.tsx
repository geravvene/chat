import { useEffect, useRef, useState } from 'react';

import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from 'firebase/firestore';

import { db } from '@/firebase';
import Message from '../Message/Message';
import SendMessage from '../SendMessage/SendMessage';
import { IMessageWithId } from '@/types';
import style from './ChatBox.module.scss';

const ChatBox = () => {
  const [messages, setMessages] = useState<IMessageWithId[]>([]);

  const scroll = useRef<null | HTMLElement>(null);

  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      orderBy('createdAt'),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages: any[] = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setMessages(fetchedMessages);
    });
    return unsubscribe;
  }, []);

  return (
    <main>
      <div className={style.wrapper}>
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  );
};

export default ChatBox;
