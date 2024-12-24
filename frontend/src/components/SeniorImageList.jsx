import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import seniorImg from "../images/SeniorImages/senior1.jpg";
import seniorImg2 from "../images/SeniorImages/senior2.jpg";
import seniorImg3 from "../images/SeniorImages/senior3.jpg";
import seniorImg4 from "../images/SeniorImages/senior4.jpg";
import seniorImg5 from "../images/SeniorImages/senior5.jpg";
import seniorImg6 from "../images/SeniorImages/senior6.jpg";
import seniorImg7 from "../images/SeniorImages/senior7.jpg";
import seniorImg8 from "../images/SeniorImages/senior8.jpg";
import seniorImg9 from "../images/SeniorImages/senior9.jpg";
import seniorImg10 from "../images/SeniorImages/senior10.jpg";
import seniorImg11 from "../images/SeniorImages/senior11.jpg";
import seniorImg12 from "../images/SeniorImages/senior12.jpg";

export default function QuiltedImageList() {
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
    <div className="mt-[900px] px-4 min-h-screen mb-[60px]">
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
  { img: seniorImg, title: "Senior Male Sitting", rows: 2, cols: 2 },
  { img: seniorImg2, title: "Senior Female Sitting" },
  { img: seniorImg3, title: "Male Senior Trees" },
  { img: seniorImg4, title: "MaleSeniorCapGown", cols: 2 },
  { img: seniorImg5, title: "SeniorBench", cols: 2 },
  { img: seniorImg6, title: "FemaleSeniorCapGown", rows: 2, cols: 2 },
  { img: seniorImg7, title: "SeniorFeild" },
  { img: seniorImg8, title: "SeniorPark" },
  { img: seniorImg9, title: "SeniorLaying", rows: 2, cols: 2 },
  { img: seniorImg10, title: "SeniorBuilding" },
  { img: seniorImg11, title: "SeniorBuilding2" },
  { img: seniorImg12, title: "FemaleSeniorSunny", cols: 2 },
];
