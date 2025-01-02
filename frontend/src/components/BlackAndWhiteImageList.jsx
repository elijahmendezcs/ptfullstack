import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// Imports to your actual images...
import BlackandWhiteImg from "../images/BlackandWhiteImages/blackandwhite.jpg";
import BlackandWhiteImg2 from "../images/BlackandWhiteImages/blackandwhite2.jpg";
import BlackandWhiteImg3 from "../images/BlackandWhiteImages/blackandwhite3.jpg";
import BlackandWhiteImg4 from "../images/BlackandWhiteImages/blackandwhite4.jpg";
import BlackandWhiteImg5 from "../images/BlackandWhiteImages/blackandwhite5.jpg";
import BlackandWhiteImg6 from "../images/BlackandWhiteImages/blackandwhite6.jpg";
import BlackandWhiteImg7 from "../images/BlackandWhiteImages/blackandwhite7.jpg";


export default function QuiltedImageList() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isImageFading, setIsImageFading] = useState(false);

  // Open the modal, set the current index, trigger fade-in animation
  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Close the modal, reset the index, trigger fade-out animation
  const closeModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(null);
      setIsModalOpen(false);
      setIsAnimating(false);
    }, 300);
  };

  // Go to previous image with a fade-out effect
  const goToPrevious = () => {
    setIsImageFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : itemData.length - 1
      );
      setIsImageFading(false);
    }, 300);
  };

  // Go to next image with a fade-out effect
  const goToNext = () => {
    setIsImageFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < itemData.length - 1 ? prevIndex + 1 : 0
      );
      setIsImageFading(false);
    }, 300);
  };

  return (
    <div className="px-4 mb-[60px]">
      {/* Constrain the gallery width so it’s not full screen */}
      <div className="max-w-4xl mx-auto w-full">
        <ImageList
          variant="quilted"
          cols={3}
          rowHeight={200}
          className="mb-[60px]"
          sx={{
            width: "100%",
            height: "auto",
          }}
        >
          {itemData.map((item, index) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
              className="group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="transition-opacity duration-300 ease-in-out group-hover:opacity-90"
              />
            </ImageListItem>
          ))}
        </ImageList>

        {isModalOpen && (
          <div
            className={`fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 transition-opacity duration-300 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
            onClick={closeModal}
          >
            <div
              className="relative w-[95vw] h-[95vh] flex items-center justify-center bg-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={itemData[currentIndex]?.img}
                alt={itemData[currentIndex]?.title}
                className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
                  isImageFading ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Left arrow */}
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-transparent hover:bg-opacity-20 p-4 text-3xl rounded-full focus:outline-none"
                onClick={goToPrevious}
              >
                &#8592;
              </button>

              {/* Right arrow */}
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-transparent hover:bg-opacity-20 p-4 text-3xl rounded-full focus:outline-none"
                onClick={goToNext}
              >
                &#8594;
              </button>

              {/* Close (X) button */}
              <button
                className="absolute top-4 right-4 text-white bg-transparent hover:bg-opacity-20 p-3 text-2xl rounded-full focus:outline-none"
                onClick={closeModal}
              >
                &#10005;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const itemData = [
  {
    img: BlackandWhiteImg2,
    title: "Black and White Elementary School",
    cols: 1,
    rows: 2,
  },
  {
    img: BlackandWhiteImg,
    title: "BlackandWhite Forest",
    cols: 2,
    rows: 2,
  },
  {
    img: BlackandWhiteImg4,
    title: "Black and White Wooden Post",
    cols: 2,
    rows: 2,
  },
  {
    img: BlackandWhiteImg3,
    title: "Black and White Barn",
    cols: 1,
    rows: 2,
  },
  {
    img: BlackandWhiteImg5,
    title: "Black and White Fence and Treee",
    cols: 3,
    rows: 2,
  },
  {
    img: BlackandWhiteImg6,
    title: "Black and White Bridge",
    cols: 1,
    rows: 2,
  },
  {
    img: BlackandWhiteImg7,
    title: "Black and White Double Doors",
    cols: 2,
    rows: 2,
  
  },
];
