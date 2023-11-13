import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default function Course(){
  const [menuItems, setMenuItems] = useState([]);
  const storedUser = JSON.parse(sessionStorage.getItem("user"));
  const sampleMenuItems = [
    { id: 1, name: 'Basics of HTML&CSS',duration: 9, price: 499,image:"html.jpeg",description:"Learn the fundamental building blocks of web development with HTML and CSS.", },
    { id: 2, name: 'ReactJS',duration: 9, price: 499,image:"reactjs.jpeg",description:"Learn the fundamental Frontend development with ReactJS.",},
    { id: 3, name: 'NodeJS',duration: 9, price: 499,image:"nodejs.jpeg",description:"Learn the fundamentals of Backend Developement With NodeJS", },
    { id: 4, name: 'MySQL',duration: 9, price: 499,image:"mysql.jpg",description:"Learn the fundamentals SQL Database With Mysql", },
    { id: 5, name: 'Mongodb', duration: 9,price: 499,image:"mongodb.jpeg",description:"Learn the fundamentals of Nosql Database with MongoDB", },
    { id: 6, name: 'R Programming',duration: 9, price:699,image:"r.jpg",description:"Learn the fundamentals of R Programming", },
    { id: 7, name: 'MS Excel',duration: 9, price:699,image:"msexcel.jpg",description:"Learn the fundamentals of Microsoft Excel", },
    { id: 8, name: 'Python',duration: 9, price:699, image:"pyhton.jpg",description:"Learn the fundamentals of Python", },
    { id: 9, name: 'Java',duration: 9, price:699,image:"java.jpg",description:"Learn the fundamentals Java", },
  ];

  useEffect(() => {
    setMenuItems(sampleMenuItems);
  }, []);

  const addToCart = (item) => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    if (storedUser && storedUser.email) {
      const data = {
        ...item,
        email: storedUser.email
      };

      axios.post('http://localhost:4000/api/addToCart', data)
        .then(response => {
          console.log('Item added to cart:', response.data);
          toast.success("Added To Cart Successfully");
        })
        .catch(error => {
          console.error('Error adding item to cart:', error);
        });
    } else {
      console.error('User not found in session storage');
    }
  };

  return (
    <>
    <ToastContainer position="bottom-right" theme="dark" draggable autoClose={5000} />
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4 text-center bg-orange-950">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
           <center> <img
              src={`/images/${item.image}`}
              alt={item.name}
              className="mb-4 max-h-48 max-w-xl rounded-md"
            />
            <p className="text-xl font-bold">{item.name}</p>
            <p className="text-xl font-bold">{item.duration} Hours</p>
            <p className="text-lg">₹ {item.price}</p>
            <p className="text-lg">{item.description}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Enroll
            </button>
            </center>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
};


