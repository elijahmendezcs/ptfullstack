import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import ArchImg1 from "../images/Architecture/arch1.jpg";
import ArchImg2 from "../images/Architecture/arch2.jpg";
import ArchImg3 from "../images/Architecture/arch3.jpg";
import ArchImg4 from "../images/Architecture/arch4.jpg";
import ArchImg5 from "../images/Architecture/arch5.jpg";
import ArchImg6 from "../images/Architecture/arch6.jpg";
import ArchImg7 from "../images/Architecture/arch7.jpg";
import ArchImg8 from "../images/Architecture/arch8.jpg";
import ArchImg9 from "../images/Architecture/arch9.jpg";

export default function ResponsiveImageGrid() {
  const [currentIndex, setCurrentIndex] = useState(null); // Track the current image index
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state
  const [isAnimating, setIsAnimating] = useState(false); // Track animation state
  const [isImageFading, setIsImageFading] = useState(false); // Track image fade state

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300); // 300ms matches the animation duration
  };

  const closeModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(null);
      setIsModalOpen(false);
      setIsAnimating(false);
    }, 300); // 300ms matches the animation duration
  };

  const goToPrevious = () => {
    setIsImageFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : itemData.length - 1
      );
      setIsImageFading(false);
    }, 300); // 300ms matches fade-out duration
  };

  const goToNext = () => {
    setIsImageFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < itemData.length - 1 ? prevIndex + 1 : 0
      );
      setIsImageFading(false);
    }, 300); // 300ms matches fade-out duration
  };

  return (
    <div className="mt-5 min-h-screen px-4justify-center">
      <ImageList
        sx={{
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "0 auto",
          width: "100%",
          height: "auto",
          "@media (max-width: 900px)": { cols: 2, gap: 6 }, // Adjust for medium screens
          "@media (max-width: 600px)": { cols: 1, gap: 4 }, // Adjust for small screens
        }}
        cols={3} // Default columns for larger screens
        gap={8}
      >
        {itemData.map((item, index) => (
          <ImageListItem
            key={item.img}
            className="group cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="transition-opacity duration-300 ease-in-out group-hover:opacity-90"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
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
            {/* Current Image */}
            <img
              src={itemData[currentIndex].img}
              alt={itemData[currentIndex].title}
              className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
                isImageFading ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Previous Arrow */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-transparent hover:bg-opacity-20 p-4 text-3xl rounded-full focus:outline-none"
              onClick={goToPrevious}
            >
              &#8592;
            </button>

            {/* Next Arrow */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-transparent hover:bg-opacity-20 p-4 text-3xl rounded-full focus:outline-none"
              onClick={goToNext}
            >
              &#8594;
            </button>

            {/* Close Button */}
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
  );
}

const itemData = [
  {
    img: ArchImg1,
    title: "Senior Male Sitting",
  },
  {
    img: ArchImg2,
    title: "Senior Female Sitting",
  },
  {
    img: ArchImg3,
    title: "Male Senior Trees",
  },
  {
    img: ArchImg4,
    title: "Male Senior Cap and Gown",
  },
  {
    img: ArchImg5,
    title: "Senior Bench",
  },
  {
    img: ArchImg6,
    title: "Female Senior Cap and Gown",
  },
  {
    img: ArchImg7,
    title: "Senior Field",
  },
  {
    img: ArchImg8,
    title: "Senior Field",
  },
  {
    img: ArchImg9,
    title: "Senior Field",
  },
  {},
];
