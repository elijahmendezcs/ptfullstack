import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import weddingImg from '../images/WeddingImages/wedding.jpg'
import weddingImg2 from '../images/WeddingImages/wedding2.jpg'
import weddingImg3 from '../images/WeddingImages/wedding3.jpg'
import weddingImg4 from '../images/WeddingImages/wedding4.jpg'
import weddingImg5 from '../images/WeddingImages/wedding5.jpg'
import weddingImg6 from '../images/WeddingImages/wedding6.jpg'
import weddingImg7 from '../images/WeddingImages/wedding7.jpg'
import weddingImg8 from '../images/WeddingImages/wedding8.jpg'
import weddingImg9 from '../images/WeddingImages/wedding9.jpg'
import weddingImg10 from '../images/WeddingImages/wedding10.jpg'
import weddingImg11 from '../images/WeddingImages/wedding11.jpg'
import weddingImg12 from '../images/WeddingImages/wedding12.jpg'


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <div className="mt-[900px] px-4 min-h-screen">
      {/* Adjust margin-top (mt-16) to match your header height */}
      <ImageList
        sx={{
          width: '100%',
          height: 'auto',
        }}
        variant="quilted"
        cols={4}
        rowHeight={250} // Adjust row height as needed
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 250, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: weddingImg,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: weddingImg2,
    title: 'Burger',
  },
  {
    img: weddingImg3,
    title: 'Camera',
  },
  {
    img: weddingImg4,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: weddingImg5,
    title: 'Hats',
    cols: 2,
  },
  {
    img: weddingImg6,
    title: 'Honey',
    rows: 2,
    cols: 2,
  },
  {
    img: weddingImg7,
    title: 'Basketball',
  },
  {
    img: weddingImg8,
    title: 'Fern',
  },
  {
    img: weddingImg9,
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: weddingImg10,
    title: 'Tomato basil',
  },
  {
    img: weddingImg11,
    title: 'Sea star',
  },
  {
    img: weddingImg12,
    title: 'Bike',
    cols: 2,
  },
];
