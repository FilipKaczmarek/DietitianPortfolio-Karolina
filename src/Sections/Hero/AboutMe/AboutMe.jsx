import React from "react";
import PropTypes from "prop-types";

import './AboutMe.css'

export const AboutMe = () => {
  return (
    <div className="w-screen min-h-[85vh] bg-[#fcbfb5] py-4">
      <div className="max-w-screen-xl mx-auto h-full grid grid-cols-2 grid-rows-4 lg:grid-cols-3 lg:grid-rows-2 gap-4 justify-items-center">
        <div className="col-start-1 col-end-3 row-start-2 row-end-3 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 flex justify-center	items-center lg:justify-end lg:items-end">
          <img
            className="max-w-[80%] h-auto picture--first"
            src="./images/randomPerson.jpg"
            alt="Picter of me cooking"
          />
        </div>
        <div className="col-start-1 col-end-3 row-start-1 row-end-2 lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-2 lg:col-span-2 px-6 lg:px-0 lg:p-6 leading-relaxed">
          <h1 className="text-6xl pb-3 italic">Hello there!</h1>
          <h3 className="text-3xl pb-3 italic">My name is Karo</h3>
          <p className="pb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            unde dolorum maxime, harum nulla ipsum, doloribus, id dolor
            asperiores eligendi ad! Id soluta tempora eveniet, totam perferendis
            architecto eius tempore.
          </p>
          <p className="pb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            unde dolorum maxime, harum nulla ipsum, doloribus, id dolor
            asperiores eligendi ad! Id soluta tempora eveniet, totam perferendis
            architecto eius tempore.
          </p>
          <p className="pb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            unde dolorum maxime, harum nulla ipsum, doloribus, id dolor
            asperiores eligendi ad! Id soluta tempora eveniet, totam perferendis
            architecto eius tempore.
          </p>
        </div>
        <div className="col-start-1 col-end-3 row-start-3 row-end-4 lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:col-span-2 px-6 lg:px-0 lg:p-6 leading-relaxed">
          <p className="pb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            recusandae molestias. Ullam, voluptate, eaque architecto minima
            sapiente qui quibusdam reprehenderit vel excepturi maxime ipsum
            similique voluptatum veniam magni illo nam.
          </p>
          <p className="pb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            unde dolorum maxime, harum nulla ipsum, doloribus, id dolor
            asperiores eligendi ad! Id soluta tempora eveniet, totam perferendis
            architecto eius tempore.
          </p>
          <p className="pb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            unde dolorum maxime, harum nulla ipsum, doloribus, id dolor
            asperiores eligendi ad! Id soluta tempora eveniet, totam perferendis
            architecto eius tempore.
          </p>
        </div>
        <div className="col-start-1 col-end-3 row-start-4 row-end-5 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3 flex justify-center	items-center lg:justify-end lg:items-end">
          <img
            className="max-w-[80%] h-auto picture--second"
            src="./images/randomPerson.jpg"
            alt="Picter of me cooking"
          />
        </div>
      </div>
    </div>
  );
};

AboutMe.propTypes = {};

export default AboutMe;
