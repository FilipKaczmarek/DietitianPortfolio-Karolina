import React from "react";
import PropTypes from "prop-types";

import ServicesCard from "../../../Components/ServicesCard/ServicesCard.jsx";

export const Services = ({ className }) => {
  return (
    <div className="max-w-screen-xl mx-auto flex lg:flex-row lg:justify-around flex-col justify-center items-center my-[50px] py-10">
      <ServicesCard
        title={"Diet Plan"}
        cardContent={
          "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
        }
        imgSrc={"./images/healthyBowl.jpg"}
        imgAlt={
          "Picture a bowl of healthy foods (lettuce, corn, chickpeas, etc.)"
        }
      />
      <ServicesCard
        title={"Recipes"}
        cardContent={
          "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
        }
        imgSrc={"./images/recipe.jpg"}
        imgAlt={
          "Picture a bowl of healthy foods (lettuce, corn, chickpeas, etc.)"
        }
      />
      <ServicesCard
        title={"Diet & Fitness Consulting"}
        cardContent={
          "Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
        }
        imgSrc={"./images/fitness.jpg"}
        imgAlt={
          "Picture a bowl of healthy foods (lettuce, corn, chickpeas, etc.)"
        }
      />
    </div>
  );
};

Services.propTypes = {
  className: PropTypes.string,
};

export default Services;
