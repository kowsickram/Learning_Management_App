import React from 'react';

const CourseDetails = ({ menuItems }) => {
  // Extract id from URL params
  const path = window.location.pathname;
  const id = path.split('/').pop();
  const course = menuItems.find((item) => item.id === parseInt(id));

  return (
    <div className="container mx-auto">
      <div className="my-4 p-4 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center bg-orange-950">
          {course.name}
        </h1>
        <center>
          <img
            src={`/images/${course.image}`}
            alt={course.name}
            className="mb-4 max-h-48 max-w-xl rounded-md"
          />
          <p className="text-xl font-bold">Duration: {course.duration} Hours</p>
          <p className="text-lg">Price: ₹ {course.price}</p>
          {/* Add more details about the course here */}
        </center>
      </div>
    </div>
  );
};

export default CourseDetails;
