import { createContext, useEffect, useState } from "react";

export const QueueContext = createContext({});

export const QueueProvider = ({ children }) => {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    const state = JSON.parse(localStorage.getItem("cart"));
    if (state !== null) {
      setQueue(state);
    }
  }, []);

  const addMusic = (item) => {
    if (checkMusic(item) === undefined) {
      const list = [...queue, item];
      localStorage.setItem("cart", JSON.stringify(list));
      setQueue(list);
    } else {
      console.log("error");
    }
  };
  const checkMusic = (item) => {
    const find = queue.find((elem) => elem.id === item.id);
    return find;
  };

  const removeMusic = (id) => {
    const list = queue.filter((elem) => elem.id !== id);
    localStorage.setItem("cart", JSON.stringify(list));
    setQueue(list);
  };
  return (
    <QueueContext.Provider value={{ queue, addMusic, removeMusic }}>
      {children}
    </QueueContext.Provider>
  );
};
