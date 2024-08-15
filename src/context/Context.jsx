import { createContext, useState } from "react";
import run from "./../config/gemeni";
export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setinput] = useState("");
  const [recentPrompt, setrecentPrompt] = useState("");
  const [prevPrompt, setprevPrompt] = useState([]);
  const [showresult, setshowresult] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultData, setresultData] = useState("");

  const delapara = (index, nextword) => {
    setTimeout(() => {
      setresultData((prev) => prev + nextword);
    }, 75 * index);
  };

  const newChat  = () =>{
    setinput("");
    setloading(false)
    setshowresult(false);
  }

  const onSend = async (prompt) => {
    setresultData("");
    setloading(true);
    setshowresult(true);
    let res12;
    if (prompt !== undefined) {
      res12 = await run(prompt);
      setrecentPrompt(prompt);
    } else {
      setprevPrompt((prev) => [...prev, input]);
      setrecentPrompt(input)
      res12 = await run(input);
    }

    let responseArray = res12.split("**");
    let newresponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newresponse += responseArray[i];
      } else {
        newresponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newres = newresponse.split("*").join(`<br/>`);
    let newresarray = newres.split(" ");
    for (let i = 0; i < newresarray.length; i++) {
      const nextword = newresarray[i];
      delapara(i, nextword + " ");
    }
    setloading(false);
    setinput("");
  };

  const context_value = {
    prevPrompt,
    setprevPrompt,
    onSend,
    setrecentPrompt,
    recentPrompt,
    showresult,
    loading,
    resultData,
    input,
    setinput,
    newChat,
  };
  return (
    <Context.Provider value={context_value}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
