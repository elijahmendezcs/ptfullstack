import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import familyImg from "../images/FamilyImages/family.jpg";
import familyImg2 from "../images/FamilyImages/family2.jpg";
import familyImg3 from "../images/FamilyImages/family3.jpg";
import familyImg4 from "../images/FamilyImages/family4.jpg";
import familyImg5 from "../images/FamilyImages/family5.jpg";
import familyImg6 from "../images/FamilyImages/family6.jpg";
import familyImg7 from "../images/FamilyImages/family7.jpg";
import familyImg8 from "../images/FamilyImages/family8.jpg";
import familyImg9 from "../images/FamilyImages/family9.jpg";
import familyImg10 from "../images/FamilyImages/family10.jpg";
import familyImg11 from "../images/FamilyImages/family11.jpg";
import familyImg12 from "../images/FamilyImages/family12.jpg";

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
  { img: familyImg, title: "Couple", rows: 2, cols: 2 },
  { img: familyImg2, title: "Couple2" },
  { img: familyImg3, title: "BabyAndMother" },
  { img: familyImg4, title: "BabySlepping", cols: 2 },
  { img: familyImg5, title: "Baby", cols: 2 },
  { img: familyImg6, title: "Mother Beach", rows: 2, cols: 2 },
  { img: familyImg7, title: "Mother Sunflowers" },
  { img: familyImg8, title: "Mother Forest" },
  { img: familyImg9, title: "Mother Dress", rows: 2, cols: 2 },
  { img: familyImg10, title: "Mother and baby" },
  { img: familyImg11, title: "Mother and Son Field" },
  { img: familyImg12, title: "Mom and Son", cols: 2 },
];
