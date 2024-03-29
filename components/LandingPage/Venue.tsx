import React from "react";

const Venue = () => {
  return (
    <div
      className="h-screen relative  bg-fixed  w-full flex justify-center items-center bg-no-repeat bg-cover"
    >
      <div className="h-full w-full z-20 flex justify-center items-center">
        <div
          className="bg-stale-300 h-3/4 w-3/4 rounded-xl shadow-lg flex flex-col justify-center items-center shadow-white/40 bg-cover bg-no-repeat"
          style={{ backgroundImage: "url(/assets/images/venue.jpg)" }}
        >
          <div className="h-full w-full bg-black/70 flex justify-center items-center">
            <h1 className="md:text-5xl text-3xl text-center px-10 font-bold ">
              SEE YOUR ALL AT <br/><span className="textGrad ">KOCHI</span> ON MAY{" "}
              <span className="textGrad">7TH</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
