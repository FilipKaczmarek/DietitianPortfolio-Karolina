import React from "react";
import PropTypes from "prop-types";

import '../AboutMe.css'

export const DesktopContent = ({ className }) => {
  return (
    <div className={`${className ? className : ""} h-full grid-cols-3 grid-rows-[1fr_minmax(1fr,_auto)_1fr]`}>
      <div className="col-start-2 col-end-4 row-start-1 row-end-2">
        <img
          className="max-w-[80%] h-auto"
          src="./images/randomPerson.jpg"
          alt="Picter of me cooking"
        />
      </div>
      <div className="col-start-1 col-end-2 row-start-1 row-end-2 justify-self-end place-self-center">
          <h1 className="text-3xl pb-3 italic vertical-writing pr-3">Hello!</h1>
        </div>
      <div className="col-start-1 col-end-4 row-start-2 row-end-3">
        <h3 className="text-3xl pb-3 italic text-center">My name is Karo</h3>
        <p className="pb-3 px-3 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero unde
          dolorum maxime, harum nulla ipsum, doloribus, id dolor asperiores
          eligendi ad! Id soluta tempora eveniet, totam perferendis architecto
          eius tempore.
        </p>
        <p className="pb-3 px-3 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero unde
          dolorum maxime, harum nulla ipsum, doloribus, id dolor asperiores
          eligendi ad! Id soluta tempora eveniet, totam perferendis architecto
          eius tempore.
        </p>
        <p className="pb-3 px-3 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero unde
          dolorum maxime, harum nulla ipsum, doloribus, id dolor asperiores
          eligendi ad! Id soluta tempora eveniet, totam perferendis architecto
          eius tempore.
        </p>
        <p className="pb-3 px-3 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          recusandae molestias. Ullam, voluptate, eaque architecto minima
          sapiente qui quibusdam reprehenderit vel excepturi maxime ipsum
          similique voluptatum veniam magni illo nam.
        </p>
      </div>
      <div className="col-start-1 col-end-4 row-start-3 row-end-4 flex justify-center items-center">
        <img
          className="max-w-[80%] h-auto"
          src="./images/randomPerson.jpg"
          alt="Picter of me cooking"
        />
      </div>
    </div>
  );
};

DesktopContent.propTypes = {};

export default DesktopContent;
