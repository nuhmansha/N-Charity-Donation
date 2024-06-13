import React, { useState } from "react";
import EventCart from "./EventCart";
// import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BannerImage1 } from "../../../../Utils/images";
import Pagination from "../../../Components/Common/Pagination";

const EventPage = ({limit}) => {
  const location = useLocation();
  const sampleEvents = [
    {
      id: 1,
      image: BannerImage1,
      title: "Use Hashtags To Support Online",
      date: "JANUARY 17, 2024 @ 12:00 AM - JANUARY 30, 2024 @ 11:59 PM",
      location: "Mitchell, 57301 United States",
    },
    {
      id: 2,
      image: BannerImage1,
      title: "Use Hashtags To Support Online",
      date: "JANUARY 17, 2024 @ 12:00 AM - JANUARY 30, 2024 @ 11:59 PM",
      location: "Mitchell, 57301 United States",
    },
    {
      id: 3,
      image: BannerImage1,
      title: "Use Hashtags To Support Online",
      date: "JANUARY 17, 2024 @ 12:00 AM - JANUARY 30, 2024 @ 11:59 PM",
      location: "Mitchell, 57301 United States",
    },
    {
      id: 4,
      image: BannerImage1,
      title: "Use Hashtags To Support Online",
      date: "JANUARY 17, 2024 @ 12:00 AM - JANUARY 30, 2024 @ 11:59 PM",
      location: "Mitchell, 57301 United States",
    }, {
      id: 5,
      image: BannerImage1,
      title: "Use Hashtags To Support Online",
      date: "JANUARY 17, 2024 @ 12:00 AM - JANUARY 30, 2024 @ 11:59 PM",
      location: "Mitchell, 57301 United States",
    },
    {
      id: 6,
      image: BannerImage1,
      title: "Use Hashtags To Support Online",
      date: "JANUARY 17, 2024 @ 12:00 AM - JANUARY 30, 2024 @ 11:59 PM",
      location: "Mitchell, 57301 United States",
    }, {
      id: 7,
      image: BannerImage1,
      title: "Use Hashtags To Support Online",
      date: "JANUARY 17, 2024 @ 12:00 AM - JANUARY 30, 2024 @ 11:59 PM",
      location: "Mitchell, 57301 United States",
    },
    {
      id: 8,
      image: BannerImage1,
      title: "Use Hashtags To Support Online",
      date: "JANUARY 17, 2024 @ 12:00 AM - JANUARY 30, 2024 @ 11:59 PM",
      location: "Mitchell, 57301 United States",
    }, {
      id: 9,
      image: BannerImage1,
      title: "Use Hashtags To Support Online",
      date: "JANUARY 17, 2024 @ 12:00 AM - JANUARY 30, 2024 @ 11:59 PM",
      location: "Mitchell, 57301 United States",
    },
    {
      id: 10,
      image: BannerImage1,
      title: "Use Hashtags To Support Online",
      date: "JANUARY 17, 2024 @ 12:00 AM - JANUARY 30, 2024 @ 11:59 PM",
      location: "Mitchell, 57301 United States",
    },
  ];
  const [currentPage,setCurrentPage] = useState(1);
  const eventsPerPage = 8;

  const  indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

  const totalEvents =
  location.pathname === "/events" ? sampleEvents.length : limit;
const displayedEvents =
  location.pathname === "/events"
    ? sampleEvents.slice(indexOfFirstEvent, indexOfLastEvent)
    : sampleEvents.slice(0, limit);

const totalPages = Math.ceil(totalEvents / eventsPerPage);

const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
};
  return (
    <div className="mt-20 container mx-auto p-6">
      <div className="flex flex-col md:flex-row lg:space-x-6 items-center">
        <div className="w-full md:w-2/3">
          {displayedEvents.map((event) => (
            <EventCart key={event.id} event={event} />
          ))}
        </div>
       
      </div>
      {location.pathname === "/events" && totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default EventPage;
