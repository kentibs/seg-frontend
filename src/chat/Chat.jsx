import { useState, useRef, useEffect } from "react";
import styles from "./Chat.module.css";
import { firestore } from "../firebase";
import { PiTextOutdentBold } from "react-icons/pi";
import { MdRecordVoiceOver } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

import { botJsonData } from "../data/bot_json_data";
// import YouTube from "react-youtube";

import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import ai from "/aipic.jpg";

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: uuidv4(),
      bot: "Hello human! How may I help you today?",
      user: "",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const messagesRef = useRef();
  const colletionRef = collection(firestore, "seg_bot");

  const [active, setActive] = useState("text");

  // Create a new SpeechSynthesisUtterance object outside the function
  var msg = new SpeechSynthesisUtterance();

  // Listen for the voiceschanged event before fetching voices
  speechSynthesis.onvoiceschanged = function () {
    // Get the list of available voices
    var voices = window.speechSynthesis.getVoices();

    // Select a desired voice (you can customize this part)
    var desiredVoice = voices.find(
      (voice) => voice.voiceURI === "Google US English"
    );

    // Set the selected voice
    msg.voice = desiredVoice;
  };

  function randomString() {
    const randomList = [
      "Oops, seems I lost track of what you just said. Please rephrase",
      "Oh! It appears you spoke something I don't understand yet. Do you mind rephrasing",
      "Do you mind trying to rephrase that? It seems am yet to learn about that",
      "I'm terribly sorry dear, I didn't quite catch that. Try rephrasing.",
    ];

    const listCount = randomList.length;
    const randomItem = Math.floor(Math.random() * listCount);

    return randomList[randomItem];
  }

  function extractUserName(inputString) {
    const namePattern = /(?:I\s+am\s+called|My\s+name\s+is)\s+([^\s.,;?!]+)/i;
    const match = inputString.match(namePattern);
    return match ? match[1] : null;
  }

  function calculateResponse(inputString) {
    const splitMessage = inputString.toLowerCase().split(/\s+|[,;?!.-]\s*/);
    const scoreList = [];

    const userName = extractUserName(inputString);

    if (userName) {
      const randomResponses = [
        `Hey ${userName}! Nice to hear from you. I am Botly by the way`,
        `Wow, I like your name ${userName}! Did your grandmother give it to you?`,
        `It feels nice to know you ${userName}! How are you?`,
        `You have a nice name ${userName}! I wish we could shake hands but sadly, I am yet to have some`,
        `Great knowing you ${userName}! I am Botly by the way.`,
      ];

      const listCount = randomResponses.length;
      const randomItem = Math.floor(Math.random() * listCount);

      return randomResponses[randomItem];
    }

    for (const response of botJsonData) {
      let responseScore = 0;
      let requiredScore = 0;
      const requiredWords = response.required_words;

      if (requiredWords.length > 0) {
        for (const word of splitMessage) {
          if (requiredWords.includes(word)) {
            requiredScore += 1;
          }
        }
      }

      if (requiredScore === requiredWords.length) {
        for (const word of splitMessage) {
          if (response.user_input.includes(word)) {
            responseScore += 1;
          }
        }
      }

      scoreList.push(responseScore);
    }

    const bestResponse = Math.max(...scoreList, 0);
    if (bestResponse !== 0) {
      const responseIndex = scoreList.indexOf(bestResponse);
      const possibleResponses = botJsonData[responseIndex].bot_response;

      const listCount = possibleResponses.length;
      const randomItem = Math.floor(Math.random() * listCount);
      const selectedResponse = possibleResponses[randomItem];
      return selectedResponse;
    }

    return randomString();
  }

  // const talk = (response, onComplete) => {
  //   // Check for Speech Synthesis support
  //   if ("speechSynthesis" in window) {
  //     // var msg = new SpeechSynthesisUtterance();
  //     msg.text = response;

  //     // Listen for the end event before executing the callback
  //     msg.onend = () => {
  //       if (onComplete && typeof onComplete === "function") {
  //         onComplete();
  //       }
  //     };

  //     speechSynthesis.speak(msg);
  //   } else {
  //     console.error("Speech synthesis not supported in this browser.");
  //   }
  // };
  const initialMessage = {
    id: uuidv4(),
    bot: "Hello human! Botly, your one and only friendly assistant at your service. I can do several things like playing music, telling you news updates, tell you the weather in any area you want, quickly surf the internet for you etc. Use me as you please",
    user: "",
  };

  const getTime = () => {
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    return formattedTime;
  };

  useEffect(() => {
    const getTestData = async () => {
      try {
        const docSnap = await getDocs(colletionRef);

        if (!docSnap.empty) {
          const data = await docSnap.docs.map((doc) => doc.data());
          data.unshift(initialMessage);
          // message.unshift(data);
          setMessages(() => data);
          // setMessages([
          //   ...messages,
          //   { id: item.id, user: item.user, bot: item.bot },
          // ]);

          console.log("Document data:", data);
        } else {
          console.log("No such document!");
        }
      } catch (e) {
        console.log("Error getting cached document:", e);
      }
    };
    getTestData();
    // console.log(tests);
  }, []);

  useEffect(() => {
    // Set initial messages
    setMessages(messages);

    // Scroll to the bottom of the messages when new messages are added
    scrollToBottom();
  }, []);

  useEffect(() => {
    // Scroll to the bottom of the messages whenever new messages are added
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("starting without try");

    try {
      console.log("starting");
      // const response = await fetch("http://127.0.0.1:8000/botly", {
      // const response = await fetch("https://botly-backend.onrender.com/botly", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ text: newMessage }),
      //   mode: "cors",
      // });

      // const responseData = await response.json(); // Parse the JSON content

      if (
        ["time", "how are you by the sun"].some((keyword) =>
          newMessage.includes(keyword)
        )
      ) {
        const time = getTime();
        const dbMessages = {
          id: uuidv4(),
          user: newMessage,
          bot: `Current time is ${time}.`,
          createdAt: new Date().getTime(),
        };
        const updatedMessages = [
          ...messages,
          { id: uuidv4(), bot: `Current time is ${time}.`, user: newMessage },
        ];
        const messageDataRef = doc(colletionRef, dbMessages.id);
        await setDoc(messageDataRef, dbMessages);
        setMessages(updatedMessages);
        return;
      }

      if (newMessage.includes("calculate") || newMessage.includes("solve")) {
        const expression = newMessage.replace(/(calculate|solve)\s+/i, "");
        try {
          const result = eval(expression);

          const botResponse = `The result of the calculation is ${result}`;
          const dbMessages = {
            id: uuidv4(),
            user: newMessage,
            bot: botResponse,
            createdAt: new Date().getTime(),
          };
          const updatedMessages = [
            ...messages,
            { id: uuidv4(), bot: botResponse, user: newMessage },
          ];
          const messageDataRef = doc(colletionRef, dbMessages.id);
          await setDoc(messageDataRef, dbMessages);
          setMessages(updatedMessages);
          return;
        } catch (error) {
          console.log(
            "Sorry, I couldn't perform the calculation. Please check your expression."
          );
          return;
        }
      }
      const response = calculateResponse(newMessage);

      console.log("done");
      // if (response.status !== 200) {
      //   throw new Error(`Error: ${response.statusText}`);
      // }
      console.log("resonse:", response);
      // const botResponse = responseData.bot;

      const dbMessages = {
        id: uuidv4(),
        user: newMessage,
        bot: response,
        createdAt: new Date().getTime(),
      };

      const unsubscribe = await onSnapshot(
        doc(firestore, "seg_bot", dbMessages.id),
        (snapshot) => {
          console.log("snapshot:", snapshot.data());
        }
      );
      console.log("before snapshot execution");
      unsubscribe();
      console.log("after snapshot execution");

      const updatedMessages = [
        ...messages,
        { id: uuidv4(), bot: response, user: newMessage },
      ];

      const messageDataRef = doc(colletionRef, dbMessages.id);
      await setDoc(messageDataRef, dbMessages);

      console.log("before snapshot execution");
      unsubscribe();
      console.log("after snapshot execution");
      setMessages(updatedMessages);
      setNewMessage("");
    } catch (error) {
      console.error("Error submitting user input:", error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };

  const handleActiveTabChange = (tab) => {
    setActive(tab);
    scrollToBottom();
  };

  function convertIsoStringToCustomFormat(isoString) {
    const inputDate = new Date(isoString);

    if (isNaN(inputDate)) {
      return;
    }

    let hours = inputDate.getHours();
    let minutes = inputDate.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Add leading zeros if needed
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    const formattedTime = `${hours}:${minutes} ${ampm}`;
    return formattedTime;
  }

  return (
    <div className={styles["chat-container"]}>
      <div className={styles["tab"]}>
        <span
          className={`${styles["tab_option"]} 
          }`}
          onClick={() => handleActiveTabChange("voice")}
        >
          <MdRecordVoiceOver />
          <span> Voiced </span>
        </span>
        <span
          className={`${styles["tab_option"]} 
          }`}
          onClick={() => handleActiveTabChange("text")}
        >
          <span>Text </span>
          <PiTextOutdentBold />
        </span>
      </div>
      {active === "text" ||
        (active === "voice" && (
          <>
            <div className={styles["chat-messages"]} ref={messagesRef}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  ref={messagesRef}
                  className={`${styles["message"]} ${
                    styles[`${message?.user}`]
                  }`}
                >
                  {message?.user && (
                    <div className={styles["user-icon"]}>
                      {/* <span>👤</span>  */}
                      <span className={styles["user"]}>{message?.user}</span>
                      <span className={styles["time-user"]}>
                        {convertIsoStringToCustomFormat(message?.createdAt)}
                      </span>
                    </div>
                  )}
                  {message?.bot && (
                    <>
                      <div className={styles["bot-container"]}>
                        <span className={styles["bot-image"]}>
                          <img
                            src={ai}
                            alt="ai_image"
                            className={styles["bot-image"]}
                          />
                        </span>
                        {/* <span className={styles["bot-image"]}>🤖</span> */}
                        <div className={styles["bot-icon"]}>
                          <span className={styles["bot-msg"]}>
                            {message?.bot}
                          </span>
                          <span className={styles["time"]}>
                            {convertIsoStringToCustomFormat(message?.createdAt)}
                          </span>
                          {/* <span>{botResponse}</span> */}
                        </div>
                      </div>
                    </>
                  )}

                  {/* <div className="message-text">{message.text}</div> */}
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <form className={styles["chat-input"]} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={handleInputChange}
                className={styles["input_field"]}
              />
              <button type="submit">
                <IoMdSend />
              </button>
            </form>
          </>
        ))}
    </div>
  );
};

export default Chat;
