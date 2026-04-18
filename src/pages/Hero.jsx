import bgImage from "../assets/images/bg4.jpeg";

function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bgImage})`,          
            backgroundSize: "cover",        
            backgroundPosition: "center",   
            backgroundRepeat: "no-repeat", 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/40 to-transparent"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-6xl font-bold">Let's Make Your Own Cinema</h1>
            <p className="mb-8 text-white/80 text-lg font-light tracking-wide">
                Watch what you love. <span className="font-semibold text-red-600 shadow-md">Love what you watch.</span>
            </p>
            <button className="btn btn-ghost bg-red-600 w-25 rounded-3xl shadow-md">Play</button>
          </div>
        </div>
      </div>
    </>
    )
}

export default Hero;