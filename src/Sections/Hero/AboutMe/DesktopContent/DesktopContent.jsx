import React from "react";
import PropTypes from "prop-types";

export const DesktopContent = ({ className }) => {
  return (
    <div
      className={`${
        className ? className : ''
      } max-w-screen-xl mx-auto h-full grid-cols-3 grid-rows-2 gap-4 justify-items-center`}
    >
      <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex justify-center	items-center lg:justify-end lg:items-end">
        <img
          className="max-w-[80%] h-auto picture--first"
          src="./images/randomPerson.jpg"
          alt="Picter of me cooking"
        />
      </div>
      <div className="col-start-2 col-end-4 row-start-1 row-end-2 col-span-2 p-6 leading-relaxed">
        <h1 className="text-6xl pb-3 italic">Hello there!</h1>
        <h3 className="text-3xl pb-3 italic">My name is Karo</h3>
        <p className="pb-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero unde
          dolorum maxime, harum nulla ipsum, doloribus, id dolor asperiores
          eligendi ad! Id soluta tempora eveniet, totam perferendis architecto
          eius tempore.
        </p>
        <p className="pb-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero unde
          dolorum maxime, harum nulla ipsum, doloribus, id dolor asperiores
          eligendi ad! Id soluta tempora eveniet, totam perferendis architecto
          eius tempore.
        </p>
        <p className="pb-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero unde
          dolorum maxime, harum nulla ipsum, doloribus, id dolor asperiores
          eligendi ad! Id soluta tempora eveniet, totam perferendis architecto
          eius tempore.
        </p>
      </div>
      <div className="col-start-1 col-end-3 row-start-2 row-end-3 col-span-2 p-6 leading-relaxed">
        <p className="pb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          recusandae molestias. Ullam, voluptate, eaque architecto minima
          sapiente qui quibusdam reprehenderit vel excepturi maxime ipsum
          similique voluptatum veniam magni illo nam.
        </p>
        <p className="pb-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero unde
          dolorum maxime, harum nulla ipsum, doloribus, id dolor asperiores
          eligendi ad! Id soluta tempora eveniet, totam perferendis architecto
          eius tempore.
        </p>
        <p className="pb-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero unde
          dolorum maxime, harum nulla ipsum, doloribus, id dolor asperiores
          eligendi ad! Id soluta tempora eveniet, totam perferendis architecto
          eius tempore.
        </p>
      </div>
      <div className="col-start-3 col-end-4 row-start-2 row-end-3 flex justify-center	items-center lg:justify-end lg:items-end">
        <img
          className="max-w-[80%] h-auto picture--second"
          src="./images/randomPerson.jpg"
          alt="Picter of me cooking"
        />
      </div>
    </div>
  );
};

DesktopContent.propTypes = {};

export default DesktopContent;
