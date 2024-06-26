import React, { useState, useEffect, useRef } from 'react';
import phoneImg from '../Image/phone.jpeg';
import mailImg from '../Image/mail.jpeg';
import whatsappImg from '../Image/whatsapp.jpeg';
import inquiryImg from '../Image/inquiry.png';
import serviceImg from '../Image/service.png';
import qrImg from '../Image/qr.jpeg';
import mapImg from '../Image/map.jpeg';
import instagramImg from '../Image/instagram.jpeg';
import qucodeImg from '../Image/qrcode.png'

const Main = () => {
  const [isInquiryFormOpen, setIsInquiryFormOpen] = useState(false);
  const [isServiceListOpen, setIsServiceListOpen] = useState(false);
  const [isQRCodePopupOpen, setIsQRCodePopupOpen] = useState(false);
  const serviceListRef = useRef(null);

  const contactOptions = [
    {
      id: 1,
      link: "tel:+918320316525",
      img: phoneImg,
      heading: "Call",
    },
    {
      id: 2,
      link: "mailto:avdhraiyani06@gmail.com",
      img: mailImg,
      heading: "Email",
    },
    {
      id: 3,
      img: whatsappImg,
      heading: "WhatsApp",
      link: "https://api.whatsapp.com/send?phone=+918320316525&text=hello",
    },
    {
      id: 4,
      img: inquiryImg,
      heading: "Inquiry",
      onClick: () => setIsInquiryFormOpen(true),
    },
    {
      id: 5,
      img: serviceImg,
      heading: "Service",
      onClick: () => setIsServiceListOpen(true),
    },
    {
      id: 6,
      img: qrImg,
      heading: "QR Code",
      onClick: () => setIsQRCodePopupOpen(true),
    },
    {
      id: 7,
      img: mapImg,
      heading: "Location",
      link: "https://maps.app.goo.gl/9xkD2oUb4s9qEQ7z7",
    },
    {
      id: 8,
      link: "https://instagram.com/a_k_k_i__patel_07",
      img: instagramImg,
      heading: "Instagram",
    },
  ];

  const services = [
    "A.C. Consil Piping",
    "A.C. Services",
    "A.C. Repairing",
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
    <div className="container mx-auto p-4">
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
                <label className="block text-sm font-bold mb-2" htmlFor="name">Name *</label>
                <input className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" name="name" required />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="mobile">Mobile Number *</label>
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

      {isQRCodePopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <img src={qucodeImg} alt="QR Code" className="h-52 w-52 object-contain" />
            <div className="flex justify-end mt-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setIsQRCodePopupOpen(false)}
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
