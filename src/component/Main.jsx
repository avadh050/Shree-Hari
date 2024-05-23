import React, { useState, useRef, useEffect } from 'react';
import img1 from '../assets/phone.jpeg'
import img2 from '../assets/mail.jpeg'
import img3 from '../assets/whatsapp.jpeg'
import img4 from '../assets/inquiry.png'
import img5 from '../assets/service.png'
import img6 from '../assets/qr.jpeg'
import img7 from '../assets/map.jpeg'
import img8 from '../assets/instagram.jpeg'



const Main = () => {
  const [isInquiryFormOpen, setIsInquiryFormOpen] = useState(false);
  const [isServiceListOpen, setIsServiceListOpen] = useState(false);
  const serviceListRef = useRef(null);

  const contactOptions = [
    {
      id: 1,
      link: "tel:+91 8320316525",
      img: {img1},
      heading: "Call",
    },
    {
      id: 2,
      link: "mailto:example@example.com",
      img: {img2},
      heading: "Email",
    },
    {
      id: 3,
      link:" https://api.whatsapp.com/send?phone=8320316525&text=hello",
      img: {img3},
      heading: "WhatsApp",
    },
    {
      id: 4,
      img: {img4},
      heading: "Inquiry",
      onClick: () => setIsInquiryFormOpen(true),
    },
    {
      id: 5,
      img: {img5},
      heading: "Service",
      onClick: () => setIsServiceListOpen(true),
    },
    {
      id: 6,
      img: {img6},
      heading: "QR Code",
    },
    {
      id: 7,
      img: {img7},
      heading: "Location",
    },
    {
      id: 8,
      link: "https://instagram.com/yourprofile",
      img: {img8},
      heading: "Instagram",
    },
  ];

  const services = [
    "A.C. oncealed  Piping",
    "A.C. Services",
    "A.C. Repairing"
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (serviceListRef.current && !serviceListRef.current.contains(event.target)) {
        setIsServiceListOpen(false);
      }
    };

    if (isServiceListOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServiceListOpen]);

  return (
    
    <div className="container mx-auto p-4 ">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10">
        {contactOptions.map(option => (
          <div key={option.id} className="flex flex-col items-center">
            {option.link ? (
              <a href={option.link} target="_self" rel="noopener noreferrer">
                <img className="h-16 w-16 object-contain" src={option.img} alt={option.heading} />
              </a>
            ) : (
              <img 
                className="h-16 w-16 object-contain cursor-pointer" 
                src={option.img} 
                alt={option.heading} 
                onClick={option.onClick} 
              />
            )}
            <p className="mt-2 text-center">{option.heading}</p>
          </div>
        ))}
      </div>

      {isInquiryFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
            <h2 className="text-2xl mb-4 font-bold">Inquiry Form</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" name="name" required />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="mobile">Mobile Number</label>
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="tel" id="mobile" name="mobile" required />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">Email (optional)</label>
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" name="email" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="subject">Subject (optional)</label>
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="subject" name="subject" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="message">Message (optional)</label>
                <textarea className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" name="message" rows="4"></textarea>
              </div>
              <div className="flex justify-end">
                <button 
                  type="button" 
                  className="mr-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" 
                  onClick={() => setIsInquiryFormOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isServiceListOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div ref={serviceListRef} className="bg-white p-8 rounded shadow-lg w-full max-w-md">
            <h2 className="text-2xl mb-4 font-bold">Our Services</h2>
            <ul className="list-disc list-inside">
              {services.map((service, index) => (
                <li key={index} className="mb-2">{service}</li>
              ))}
            </ul>
            <div className="flex justify-end">
              <button 
                type="button" 
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" 
                onClick={() => setIsServiceListOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
