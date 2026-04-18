function Card() {
  return (
    <div className="bg-black py-12">
      <h2 className="text-3xl font-bold text-white mb-6 text-center tracking-wide py-10">
        Watch Anywhere, Anytime
      </h2>
      <div className="flex justify-center gap-6 flex-wrap">
        
        {/* Card 1 */}
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Movie poster"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white text-xl">Movie Title</h2>
            <p className="text-white/80">
              Watch the best movies and series only on Netflix.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-red-600 hover:bg-red-700 border-none text-white">
                Watch Now
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Movie poster"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white text-xl">Series Title</h2>
            <p className="text-white/80">
              Binge-worthy series you can't miss. New episodes every week.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-red-600 hover:bg-red-700 border-none text-white">
                Watch Now
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Movie poster"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white text-xl">Original Series</h2>
            <p className="text-white/80">
              Netflix exclusive originals only here. Watch anywhere, anytime.
            </p>
            <div className="card-actions justify-end">
              <button className="btn bg-red-600 hover:bg-red-700 border-none text-white">
                Watch Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Card;