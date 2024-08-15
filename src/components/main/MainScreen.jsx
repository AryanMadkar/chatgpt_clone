import React, { useContext } from "react";
import { assets } from "./../../assets/assets";
import { Context } from "../../context/Context";

const MainScreen = () => {
  const {
    onSend,
    recentPrompt,
    showresult,
    loading,
    resultData,
    setinput,
    input,
  } = useContext(Context);
  return (
    <div className="min-h-[100vh] overflow-x-hidden flex-col  flex pb-[15vh] relative w-[100%] bg-black text-white main">
      <div className="nav flex items-center justify-between text-[22px] p-[20px] text-white border-b-2 rounded-2xl shadow-[0_10px_20px_rgba(0,225,225,_0.7)] border-white  relative">
        <p>Gemeni</p>
        <img className="w-[40px] rounded-[50%] h-auto" src={assets.user_icon} />
      </div>

      {!showresult ? (
        <>
          <div className="greet mx-[50px] text-[56px] font-semibold p-[20px]">
            <p>
              <span id="lion" className="">
                Hello, Aryan
              </span>
            </p>
            <p>How Can T Help You Today </p>
          </div>
          <div className="flex items-center justify-evenly ">
            <div className="cards  bg-white text-black rounded-2xl">
              <p>suggest beautiful places to see on an upcoming road trip</p>
              <img src={assets.compass_icon} />
            </div>
            <div className="cards border-2 border-white ">
              <p>Briefly summerize this concept: urban planning</p>
              <img src={assets.bulb_icon} />
            </div>
            <div className="cards bg-white text-black rounded-2xl">
              <p>Brainstorm team bonding activities for our work retreat</p>
              <img src={assets.message_icon} />
            </div>
            <div className="cards">
              <p>imporove your code and develop the best </p>
              <img src={assets.code_icon} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="result w-full mt-8 ml-3 flex flex-col justify-between items-start">
            <div className="result_title flex hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]   w-fit items-center justify-start rounded-3xl bg-gray-800 p-[1rem]">
              <img
                className="h-[3rem] mr-4 w-auto rounded-full"
                src={assets.user_icon}
              ></img>
              <p className="">{recentPrompt}</p>
            </div>
            <div className="rounded-3xl bg-[#173B45] p-[1rem] result_data flex  w-fit max-w-[95%] items-start mt-5 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)]  justify-start">
              <img
                className="h-[3rem] mr-4 w-auto rounded-full"
                src={assets.gemini_icon}
              />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr className="bg-white" />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              )}
            </div>
          </div>
        </>
      )}

      <div className="main-container  w-fullm-auto">
        <div className="main_bootom absolute z-[999]  bottom-0 w-full h-fit max-w-[950px] py-0 px-[20px] m-auto ml-40">
          <div className="search_box flex items-center justify-between gap-[20px] bg-white px-[10px] py-[20px] rounded-[50px]">
            <input
              value={input}
              onChange={(e) => {
                setinput(e.target.value);
              }}
              className="outline-none border-none w-[90%] text-center font-semibold text-sm text-black"
              type="text"
              placeholder="Search for Doubts..."
            />
            <div className="flex  items-center justify-between">
              <img
                className="h-[30px] hover:scale-125 mx-2 w-auto cursor-pointer"
                src={assets.gallery_icon}
              />
              <img
                className="h-[30px] hover:scale-125 mx-2 w-auto cursor-pointer"
                src={assets.mic_icon}
              />
              <img
                onClick={() => {
                  onSend();
                }}
                className="h-[30px] hover:scale-125 mx-2 w-auto cursor-pointer"
                src={assets.send_icon}
              />
            </div>
          </div>
          <p className="bottominfo text-sm mt-3">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
