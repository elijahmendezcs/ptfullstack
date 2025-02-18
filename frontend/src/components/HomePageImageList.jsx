import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import homeImg2 from "@/images/BlackAndWhiteImages/blackandwhite3.jpg";
import homeImg11 from "@/images/BlackAndWhiteImages/blackandwhite5.jpg";
import homeImg4 from "@/images/BlackAndWhiteImages/blackandwhite1.JPG";
import homeImg5 from "@/images/BlackAndWhiteImages/blackandwhite6.JPG";
import homeImg6 from "@/images/BlackAndWhiteImages/blackandwhite7.JPG";
import homeImg12 from "@/images/BlackAndWhiteImages/blackandwhite12.jpg";
import homeImg8 from "@/images/Architecture/arch8.jpg";
import homeImg9 from "@/images/Architecture/arch9.jpg";
import homeImg10 from "@/images/BlackAndWhiteImages/blackandwhite14.jpg";

const itemData = [
  {
    img: homeImg8,
    title: "Senior Male Sitting",
  },
  {
    img: homeImg2,
    title: "Senior Female Sitting",
  },
  {
    img: homeImg12,
    title: "Male Senior Trees",
  },
  {
    img: homeImg4,
    title: "Male Senior Cap and Gown",
  },
  {
    img: homeImg5,
    title: "Senior Bench",
  },
  {
    img: homeImg6,
    title: "Female Senior Cap and Gown",
  },
  {
    img: homeImg10,
    title: "Senior Field",
  },
  {
    img: homeImg11,
    title: "Senior Park",
  },
  {
    img: homeImg9,
    title: "Senior Laying",
  },
];

export default function ResponsiveImageGrid() {
  const [currentIndex, setCurrentIndex] = useState(null); // Current image index for the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state
  const [isAnimating, setIsAnimating] = useState(false); // Modal animation state
  const [isImageFading, setIsImageFading] = useState(false); // Image fade transition state

  // Determine grid columns and gap based on screen size using MUI breakpoints
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  let cols, gap;
  if (isXs) {
    cols = 1;
    gap = 4;
  } else if (isMd) {
    cols = 2;
    gap = 6;
  } else {
    cols = 3;
    gap = 8;
  }

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300); // 300ms for the animation duration
  };

  const closeModal = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(null);
      setIsModalOpen(false);
      setIsAnimating(false);
    }, 300);
  };

  const goToPrevious = () => {
    setIsImageFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : itemData.length - 1
      );
      setIsImageFading(false);
    }, 300); // 300ms for fade-out transition
  };

  const goToNext = () => {
    setIsImageFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < itemData.length - 1 ? prevIndex + 1 : 0
      );
      setIsImageFading(false);
    }, 300); // 300ms for fade-out transition
  };

  return (
    <div className="mb-[60px] mt-5 px-4 min-h-screen">
      <ImageList
        sx={{
          width: "100%",
          height: "auto",
          margin: "0 auto",
        }}
        cols={cols}
        gap={gap}
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
