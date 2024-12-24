import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import LandScapeImg from "../images/LandscapeImages/landscape.jpg";
import LandScapeImg2 from "../images/LandscapeImages/landscape2.jpg";
import LandScapeImg3 from "../images/LandscapeImages/landscape3.jpg";
import LandScapeImg4 from "../images/LandscapeImages/landscape4.jpg";
import LandScapeImg5 from "../images/LandscapeImages/landscape5.jpg";
import LandScapeImg6 from "../images/LandscapeImages/landscape6.jpg";
import LandScapeImg7 from "../images/LandscapeImages/landscape7.jpg";
import LandScapeImg8 from "../images/LandscapeImages/landscape8.jpg";
import LandScapeImg9 from "../images/LandscapeImages/landscape9.jpg";
import LandScapeImg10 from "../images/LandscapeImages/landscape10.jpg";
import LandScapeImg11 from "../images/LandscapeImages/landscape11.jpg";
import LandScapeImg12 from "../images/LandscapeImages/landscape12.jpg";

export default function QuiltedImageList() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isImageFading, setIsImageFading] = useState(false);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
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
    }, 300);
  };

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
    <div className="mt-[900px] min-h-screen bg-gray-100">
      <ImageList
        className="mb-[60px]"
        sx={{
          width: "100%",
          height: "auto",
        }}
        variant="quilted"
        cols={4}
        rowHeight={250}
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
              src={itemData[currentIndex].img}
              alt={itemData[currentIndex].title}
              className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
                isImageFading ? "opacity-0" : "opacity-100"
              }`}
            />

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-transparent hover:bg-opacity-20 p-4 text-3xl rounded-full focus:outline-none"
              onClick={goToPrevious}
            >
              &#8592;
            </button>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-transparent hover:bg-opacity-20 p-4 text-3xl rounded-full focus:outline-none"
              onClick={goToNext}
            >
              &#8594;
            </button>

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
  { img: LandScapeImg, title: "Landscape 1", rows: 2, cols: 2 },
  { img: LandScapeImg2, title: "Landscape 2" },
  { img: LandScapeImg3, title: "Landscape 3" },
  { img: LandScapeImg4, title: "Landscape 4", cols: 2 },
  { img: LandScapeImg5, title: "Landscape 5", cols: 2 },
  { img: LandScapeImg6, title: "Landscape 6", rows: 2, cols: 2 },
  { img: LandScapeImg7, title: "Landscape 7" },
  { img: LandScapeImg8, title: "Landscape 8" },
  { img: LandScapeImg9, title: "Landscape 9", rows: 2, cols: 2 },
  { img: LandScapeImg10, title: "Landscape 10" },
  { img: LandScapeImg11, title: "Landscape 11" },
  { img: LandScapeImg12, title: "Landscape 12", cols: 2 },
];
