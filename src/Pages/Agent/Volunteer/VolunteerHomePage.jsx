import React, { useState } from "react";
import BlogForm from "./VolunteerForm/BlogForm";
import EventForm from "./VolunteerForm/EventForm";
import CauseForm from "./VolunteerForm/CauseForm";
import DataTable from "./TableData";

const VolunteerHomePage = () => {
  const [currentView, setCurrentView] = useState("event");
  const [events, setEvents] = useState([]);
  const [causes, setCauses] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const handleEventSubmit = (event) => {
    setEvents([...events, event]);
  };

  const handleCauseSubmit = (cause) => {
    setCauses([...causes, cause]);
  };

  const handleBlogSubmit = (blog) => {
    setBlogs([...blogs, blog]);
  };

  const handleEdit = (item) => {
    console.log("Edit:", item);
  };

  const handleDeleteEvent = (event) => {
    setEvents(events.filter((e) => e !== event));
  };

  const handleDeleteCause = (cause) => {
    setCauses(causes.filter((c) => c !== cause));
  };

  const handleDeleteBlog = (blog) => {
    setBlogs(blogs.filter((b) => b !== blog));
  };

  const eventColumns = [
    { header: "Image", accessor: "image" },
    { header: "Title", accessor: "title" },
    { header: "Date", accessor: "date" },
    { header: "Location", accessor: "location" },
  ];

  const causeColumns = [
    { header: "Image", accessor: "image" },
    { header: "Title", accessor: "title" },
    { header: "Goal", accessor: "goal" },
    { header: "Rise", accessor: "rise" },
    { header: "To Go", accessor: "toGo" },
    { header: "Description", accessor: "description" },
    { header: "Author", accessor: "author" },
  ];

  const blogColumns = [
    { header: "Title", accessor: "title" },
    { header: "Content", accessor: "content" },
    { header: "Author", accessor: "author" },
    { header: "Date", accessor: "date" },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen">
      <header className="p-4 flex justify-between items-center bg-white shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800">
          Volunteer Dashboard
        </h1>
        <div>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300">
            Logout
          </button>
        </div>
      </header>
      <div className="flex">
        <aside className="w-64 p-4 bg-white shadow-lg">
          <ul className="space-y-4">
            <li
              className={`flex items-center p-4 rounded-lg cursor-pointer transition duration-300 ${
                currentView === "event"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => setCurrentView("event")}
            >
              <span className="w-6 h-6 mr-2 bg-blue-500 rounded-full"></span>
              <span>Add Event</span>
            </li>
            <li
              className={`flex items-center p-4 rounded-lg cursor-pointer transition duration-300 ${
                currentView === "cause"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => setCurrentView("cause")}
            >
              <span className="w-6 h-6 mr-2 bg-green-500 rounded-full"></span>
              <span>Add Cause</span>
            </li>
            <li
              className={`flex items-center p-4 rounded-lg cursor-pointer transition duration-300 ${
                currentView === "blog" ? "bg-red-500 text-white" : "bg-gray-100"
              }`}
              onClick={() => setCurrentView("blog")}
            >
              <span className="w-6 h-6 mr-2 bg-red-500 rounded-full"></span>
              <span>Add Blog</span>
            </li>
          </ul>
        </aside>
        <main className="flex-1 p-6 bg-white shadow-lg rounded-lg">
          {currentView === "event" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Add New Event</h2>
              <EventForm addEvent={handleEventSubmit} />
              <hr className="my-8" />
              <h2 className="text-2xl font-semibold mb-4">Events</h2>
              <DataTable
                data={events}
                columns={eventColumns}
                onEdit={handleEdit}
                onDelete={handleDeleteEvent}
              />
            </div>
          )}
          {currentView === "cause" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Add New Cause</h2>
              <CauseForm addCause={handleCauseSubmit} />
              <hr className="my-8" />
              <h2 className="text-2xl font-semibold mb-4">Causes</h2>
              <DataTable
                data={causes}
                columns={causeColumns}
                onEdit={handleEdit}
                onDelete={handleDeleteCause}
              />
            </div>
          )}
          {currentView === "blog" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Add New Blog</h2>
              <BlogForm addBlog={handleBlogSubmit} />
              <hr className="my-8" />
              <h2 className="text-2xl font-semibold mb-4">Blogs</h2>
              <DataTable
                data={blogs}
                columns={blogColumns}
                onEdit={handleEdit}
                onDelete={handleDeleteBlog}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default VolunteerHomePage;
