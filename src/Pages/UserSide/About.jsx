import React from "react";
import Navbar from "../../Components/Common/Navbar";
import Background from "../../assets/images/childrens-charity-challanges.png";
import Volunteer from "./Volunteer/Volunteer";
import Footer from "../../Components/Common/Footer";

function About() {
  return (
    <div className="">
      {/* <Navbar /> */}
      <div className=" mt-5 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">
          Givest is The Non Profitable <br></br> Organization.
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={Background}
              alt="Charity"
              className="mt-3 w-96 h-96 rounded"
            />
          </div>
          <div className="md:w-2/2">
            {/* <h1 className="text-4xl font-bold mb-4">Givest is The Non Profitable Organization.</h1> */}
            <p className="mt-5 text-lg  font-bold mb-4">
              Lorem Ipsum simply dummy text the printing and typesettin
              industry. Lorem Ipsum has been the industry's standard dumm text
              ever since the unknown.
            </p>
            <p className="text-base mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="mt-10 flex flex-col md:flex-row md:space-x-2">
              <div className="bg-pink-600 text-white p-4 rounded-md mb-4 md:mb-0 md:w-1/2">
                <h3 className="font-bold">Our Mission</h3>
                <p className="mt-2 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since Lorem Ipsum c.
                </p>
              </div>
              <div className="bg-yellow-500 text-white p-4 rounded-md mb-4 md:mb-0 md:w-1/2">
                <h3 className="font-bold">Our Vision</h3>
                <p className="mt-2 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since Lorem Ipsum c.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* meet our volunteer  */}

      
      <Volunteer/>

      {/* <Footer/> */}

    </div>
  );
}
export default About;
