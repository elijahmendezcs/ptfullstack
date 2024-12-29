import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// Replace these imports with the paths to your actual 7 images
import vibrantImg from "../images/VibrantImages/vibrant.jpg";
import vibrantImg2 from "../images/VibrantImages/vibrant2.jpg";
import vibrantImg3 from "../images/VibrantImages/vibrant3.jpg";
import vibrantImg4 from "../images/VibrantImages/vibrant4.jpg";
import vibrantImg5 from "../images/VibrantImages/vibrant5.jpg";
import vibrantImg6 from "../images/VibrantImages/vibrant6.jpg";
import vibrantImg7 from "../images/VibrantImages/vibrant7.jpg";

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
    <div className="mt-[900px] px-4 min-h-screen mb-[60px] flex justify-center">
      {/* This wrapper sets a max width so the gallery isn't too wide */}
      <div className="max-w-4xl w-full">
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

/**
 * 7 total images:
 * - 1 big horizontal on top (cols=3, rows=2) => 3 columns wide, 2 * 200px tall
 * - 5 bigger middle images (all rows=2 => 400px tall), with a mix of cols=1 or 2
 * - 1 big horizontal at bottom (cols=3, rows=2)
 */
const itemData = [
  // Top image, same as before
  {
    img: vibrantImg,
    title: "Top Large Horizontal",
    cols: 3,
    rows: 2,
  },

  // MIDDLE IMAGES: now each is 2 rows tall => 400px
  {
    img: vibrantImg2,
    title: "Senior Female Sitting",
    cols: 2, // spans 2/3 width
    rows: 2, // 400px tall
  },
  {
    img: vibrantImg3,
    title: "Male Senior Trees",
    cols: 1, // 1/3 width
    rows: 2, // 400px tall
  },
  {
    img: vibrantImg4,
    title: "Male Senior Cap & Gown",
    cols: 2,
    rows: 2,
  },
  {
    img: vibrantImg5,
    title: "Senior Bench",
    cols: 1,
    rows: 2,
  },
  {
    img: vibrantImg6,
    title: "Female Senior Cap & Gown",
    cols: 3, // here it spans all 3 columns
    rows: 2,
  },

  // Bottom image, same as before
  {
    img: vibrantImg7,
    title: "Bottom Large Horizontal",
    cols: 3,
    rows: 2,
  },
];
