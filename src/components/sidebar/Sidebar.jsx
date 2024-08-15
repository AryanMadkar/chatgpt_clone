import React, { useContext, useState } from "react";
import { assets } from "./../../assets/assets";
import { Context } from "../../context/Context";
const Sidebar = () => {
  const [extended, setextended] = useState(false);
  const { prevPrompt, onSend, setrecentPrompt,newChat } = useContext(Context);

  const loadprompt = async (prompt) => {
    setrecentPrompt(prompt);
    await onSend(prompt);
  };
  return (
    <div className="  inline-flex flex-col justify-between py-[25px] px-[15px] min-h-[100vh] min-w-fit  bg-black text-white   border-white    ">
      <div className="top flex flex-col  justify-around ">
        <img
          onClick={() => {
            setextended((prev) => !prev);
          }}
          className=" border-2 border-black  bg-white m-[0.2rem] w-[30px] rounded-md  block ml-[10px] cursor-pointer"
          src={assets.menu_icon}
          alt="menu"
        />
        {extended ? (
          <div className="new-chat mt-[20px] inline-flex items-center gap-[10px] p-[10px] rounded-lg text-[14px] cursor-pointer border-2 border-black text-black bg-white hover:shadow-[0_10px_20px_rgba(225,_0,_0,_0.7)] "  onClick={()=>[
        newChat()
      ]}>
            <img
              className="w-[20px] h-auto"
              src={assets.plus_icon}
              alt="chat"
            />
            <p>New chat</p>
          </div>
        ) : null}

        {extended ? (
          <div className="recent flex flex-col ">
            <p className="recent_title mt-[30px] mb-[20px]">Recent</p>
            {prevPrompt.map((item) => {
              return (
                <div
                  className="mt-[0.5rem] recent-entry flex items-start gap-[10px] p-[10px]
          pr-[40px] rounded-[50px] cursor-pointer  hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] overflow-hidden"
                  onClick={() => {
                    loadprompt(item);
                  }}
                >
                  <img
                    className="w-[20px] h-auto"
                    src={assets.message_icon}
                    alt=""
                  />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      {extended ? (
        <div className="bottom  rounded-lg flex flex-col ">
          <div
            className="bottom_item bg-white text-black mt-[0.2rem] recent-entry flex items-start gap-[10px] p-[10px]
          
          pr-[40px] rounded-[50px] cursor-pointer hover:border-2 hover:border-black hover:shadow-[0_10px_20px_rgba(51,225,51,_0.7)]"
          >
            <img className="w-[20px] h-auto" src={assets.question_icon} />
            <p>help</p>
          </div>
          <div
            className="bottom_item bg-white text-black mt-[0.2rem] recent-entry flex items-start gap-[10px] p-[10px]
          pr-[40px] rounded-[50px] cursor-pointer hover:border-2 hover:border-black hover:shadow-[0_10px_20px_rgba(0,_0,104,_0.7)]"
          >
            <img className="w-[20px] h-auto" src={assets.history_icon} />
            <p>History</p>
          </div>
          <div
            className="bottom_item bg-white text-black mt-[0.2rem] recent-entry flex items-start gap-[10px] p-[10px]
          pr-[40px] rounded-[50px] cursor-pointer hover:border-2 hover:border-black hover:shadow-[0_10px_20px_rgba(225,128,0,_0.7)]"
          >
            <img className="w-[20px] h-auto" src={assets.setting_icon} />
            <p>Setting</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Sidebar;
