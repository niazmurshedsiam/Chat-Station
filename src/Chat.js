import { IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Chat.css";
import MicNoneIcon from "@material-ui/icons/MicNone";
import Message from "./Message";
import { useSelector } from "react-redux";
import db from "./firebase";
import { selectChatId, selectChatName } from "./features/chatSlice";
import firebase from "firebase";
import { selectUser } from "./features/userSlice";
import FlipMove from 'react-flip-move';

const Chat = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <h4>
          To: <span className="chat_name">{chatName}</span>
        </h4>
        <strong>Detail</strong>
      </div>

      <div className="chat_messages">
        <FlipMove>
          {messages.map(({ id, data }) => (
            <Message key={id} contents={data} />
          ))}
        </FlipMove>
      </div>

      <div className="chat_input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Text"
            type="text"
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicNoneIcon></MicNoneIcon>
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
