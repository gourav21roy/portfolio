import SplashImage from "../../../Assets/Images/code-typing-animate.svg";

export function Splash() {
  return (
    <div className="flex md:flex-row justify-between md:m-16 m-3 flex-col splash">
      <div className="about  text-c3 text-center p-2  text-lg font-body">
        <div className="self-center bg-slate-700 h-full bg-opacity-50 rounded-md p-3">
          <span className="text-c1 text-2xl font-bold">Software Engineer</span>
          <br></br>
          <br></br>
          <span>
            Currently developing 🚀 Loyalty Rewards Management @ FIS to make
            everyday expense rewarding. 💸 😃
          </span>
          <div>
            <button
              className="mt-5 place-self-stretch bg-c1 bg-opacity-70 p-2 rounded-md"
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
      </div>

      <div className="splashImg self-center w-3/4 md:p-">
        <img src={SplashImage} alt="Splash"></img>
      </div>
    </div>
  );
}
