import React from "react";

const DefaultFooter = () => {
  return (
    <>
      <footer>
        <div className="relative bg-blue-200 pt-8 pb-6">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap text-center lg:text-left pt-6">
              <div className="w-full lg:w-6/12 px-4"></div>
            </div>
            <hr className="my-6 border-amber-400 " />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-white font-medium py-1">
                  <>{new Date().getFullYear()} Naver Boostcamp AI Tech </>
                  <p>자연어 한접시</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default DefaultFooter;