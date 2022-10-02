import React from "react";
import Footer from "../Components/Footer";
import HomePageHeader from "../Components/HomePageHeader";
import ImgCategoryContainerComponent from "../Components/ImgCategoryContainerComponent";
import {
  appliancesData,
  cleaningPestData,
  homeRepairsData,
  newCategoryLaunchesData,
  salonSpaData,
  ucLuxuryExperienceData,
} from "../Data/data";

function HomePage() {
  return (
    <div>
      <HomePageHeader />
      <ImgCategoryContainerComponent
        array={newCategoryLaunchesData}
        heading="New Category Launches"
        subHeading=""
      />
      <ImgCategoryContainerComponent
        array={appliancesData}
        heading="Appliances"
        subHeading="Servicing, Reparing, Installation & Uninstallation"
      />
      <ImgCategoryContainerComponent
        array={salonSpaData}
        heading="Salon, Spa and Massage services"
        subHeading="Hygienic & Single use Products | Low-contact services"
      />
      <ImgCategoryContainerComponent
        array={cleaningPestData}
        heading="Cleaning & Pest Control"
        subHeading=""
      />
      <ImgCategoryContainerComponent
        array={ucLuxuryExperienceData}
        heading="UC Luxury Experience"
        subHeading="Top Professionals | Best Brands | Premium Experience"
      />
      <ImgCategoryContainerComponent
        array={homeRepairsData}
        heading="Home Repairs"
        subHeading=""
      />
      <img
        style={{ width: "100%", marginTop: "15px", borderRadius: "10px" }}
        src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_809/t_high_res_template/categories/category_v2/category_a4e46fa0.png"
        alt="missing pic"
      />
      <img
        style={{ width: "100%", marginTop: "15px", borderRadius: "10px" }}
        src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_809/t_high_res_template/images/growth/home-screen/1624344861242-558286.png"
        alt="missing pic"
      />
      <img
        style={{ width: "100%", marginTop: "15px", borderRadius: "10px" }}
        src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_809/t_high_res_template/categories/category_v2/category_3cffdf20.png"
        alt="missing pic"
      />
      <Footer/>
    </div>
  );
}

export default HomePage;
