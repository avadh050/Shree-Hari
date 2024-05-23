import React, { useState } from 'react';
// import img1 from "../Image/phone.jpeg"

const Main = () => {
  const [isInquiryFormOpen, setIsInquiryFormOpen] = useState(false);

  const contactOptions = [
    {
      id: 1,
      link: "tel:+1234567890",
      img: 'src/Image/phone.jpeg',
      heading: "Call",
    },
    {
      id: 2,
      link: "mailto:example@example.com",
      img: "src/Image/mail.jpeg",
      heading: "Email",
    },
    {
      id: 3,
      img: "src/Image/whatsapp.jpeg",
      heading: "WhatsApp",
    },
    {
      id: 4,
      img: "src/Image/inquiry.png",
      heading: "Inquiry",
      onClick: () => setIsInquiryFormOpen(true),
    },
    {
      id: 5,
      img: "src/Image/share.jpeg",
      heading: "Share",
    },
    {
      id: 6,
      img: "src/Image/qr.jpeg",
      heading: "QR Code",
    },
    {
      id: 7,
      img: "src/Image/map.jpeg",
      heading: "Location",
    },
    {
      id: 8,
      link: "https://instagram.com/yourprofile",
      img: "src/Image/instagram.jpeg",
      heading: "Instagram",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-10">
        {contactOptions.map(option => (
          <div key={option.id} className="flex flex-col items-center">
            {option.link ? (
              <a href={option.link} target="_blank" rel="noopener noreferrer">
                <img className="h-16 w-16 object-contain" src={option.img} />
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
    </div>
  );
};

export default Main;
