import SplashImage from "../../../Assets/Images/code-typing-animate.svg";

export function Splash() {
  return (
    <div className="flex md:columns-2 md:flex-row justify-between md:m-16 m-3 flex-col splash">
      <div className="flex flex-col about  text-c3 text-center p-2  text-lg font-body">
        <div className="w-4/5 my-5 md:my-2 self-center py-5 md:py-2 flex flex-col justify-center shadow-md shadow-slate-800 bg-slate-700 h-full bg-opacity-50 rounded-md p-3">
          <h2 className="text-c1 text-2xl font-bold">Software Engineer</h2>
          <br></br>
          <span>
            Currently developing 🚀 Loyalty Rewards Management @ FIS to make
            everyday expense rewarding. 💸 😃
          </span>
        </div>
        <div>
          <button
            className="mt-5 font-body my-5 md:my-2 place-self-stretch shadow-slate-800 shadow-lg hover:shadow bg-c1 bg-opacity-70 p-2 rounded-md"
            onClick={() => {
              var element = document.getElementById("work");
              element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              });
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="splashImg self-center w-3/4 ">
        <img src={SplashImage} alt="Splash"></img>
      </div>
    </div>
  );
}
