import * as React from 'react';
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
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                width: '100%', // Make each image fill its container
                height: 'auto', // Maintain aspect ratio
                objectFit: 'cover', // Ensure images fill their space appropriately
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
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