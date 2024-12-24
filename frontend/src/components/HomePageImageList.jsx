import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import homeImg from '../images/RealPhotos/home1.jpg';
import homeImg2 from '../images/RealPhotos/home2.jpg';
import homeImg3 from '../images/RealPhotos/home3.jpg';
import homeImg4 from '../images/RealPhotos/home4.jpg';
import homeImg5 from '../images/RealPhotos/home5.jpg';
import homeImg6 from '../images/RealPhotos/home6.jpg';
import homeImg7 from '../images/RealPhotos/home7.jpg';
import homeImg8 from '../images/RealPhotos/home8.jpg';
import homeImg9 from '../images/RealPhotos/home9.jpg';

export default function ResponsiveImageGrid() {
  const [currentIndex, setCurrentIndex] = useState(null); // Track the current image index
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentIndex(null);
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : itemData.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < itemData.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="mt-[20px] px-4 min-h-screen mb-[60px]">
      <ImageList
        sx={{
          width: '100%',
          height: 'auto',
        }}
        cols={3} // Set the grid to 3 columns
        gap={8} // Adjust the gap between images (optional)
      >
        {itemData.map((item, index) => (
          <ImageListItem
            key={item.img}
            className="group cursor-pointer"
            onClick={() => openModal(index)} // Open modal on click
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="transition-opacity duration-300 ease-in-out group-hover:opacity-90 group-hover:delay-150"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Modal for Image Preview */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal} // Close modal on overlay click
        >
          <div
            className="relative max-w-[90%] max-h-[90%] flex items-center justify-center bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Current Image */}
            <img
              src={itemData[currentIndex].img}
              alt={itemData[currentIndex].title}
              className="w-full h-full object-contain"
            />

            {/* Navigation Buttons */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-500 px-4 py-2 rounded-r-lg focus:outline-none"
              onClick={goToPrevious}
            >
              &#8592; {/* Left Arrow */}
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-500 px-4 py-2 rounded-l-lg focus:outline-none"
              onClick={goToNext}
            >
              &#8594; {/* Right Arrow */}
            </button>

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-700 px-2 py-1 rounded-md focus:outline-none"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const itemData = [
  {
    img: homeImg,
    title: 'Senior Male Sitting',
  },
  {
    img: homeImg2,
    title: 'Senior Female Sitting',
  },
  {
    img: homeImg3,
    title: 'Male Senior Trees',
  },
  {
    img: homeImg4,
    title: 'Male Senior Cap and Gown',
  },
  {
    img: homeImg5,
    title: 'Senior Bench',
  },
  {
    img: homeImg6,
    title: 'Female Senior Cap and Gown',
  },
  {
    img: homeImg7,
    title: 'Senior Field',
  },
  {
    img: homeImg8,
    title: 'Senior Park',
  },
  {
    img: homeImg9,
    title: 'Senior Laying',
  },
];
