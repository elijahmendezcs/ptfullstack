import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// Import local images
import maternityImg from '../images/FamilyImages/maternity.jpg';
import maternityImg2 from '../images/FamilyImages/maternity2.jpg';
import maternityImg3 from '../images/FamilyImages/maternity3.jpg';
import maternityImg4 from '../images/FamilyImages/maternity4.jpg';
import maternityImg5 from '../images/FamilyImages/maternity5.jpg';
import maternityImg6 from '../images/FamilyImages/maternity6.jpg';
import maternityImg7 from '../images/FamilyImages/maternity7.jpg';
import maternityImg8 from '../images/FamilyImages/maternity8.jpg';
import maternityImg9 from '../images/FamilyImages/maternity9.jpg';
import maternityImg10 from '../images/FamilyImages/maternity10.jpg';
import maternityImg11 from '../images/FamilyImages/maternity11.jpg';
import maternityImg12 from '../images/FamilyImages/maternity12.jpg';
// Helper function for responsive image sources
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
    img: maternityImg, // Local image imported above
    title: 'Couple',
    rows: 2,
    cols: 2,
  },
  {
    img: maternityImg2,
    title: 'Couple2',
  },
  {
    img: maternityImg3,
    title: 'BabyAndMother',
  },
  {
    img: maternityImg4,
    title: 'BabySlepping',
    cols: 2,
  },
  {
    img: maternityImg5,
    title: 'Baby',
    cols: 2,
  },
  {
    img: maternityImg6,
    title: 'Mother Beach',
    rows: 2,
    cols: 2,
  },
  {
    img: maternityImg7,
    title: 'Mother Sunflowers',
  },
  {
    img: maternityImg8,
    title: 'Mother Forest',
  },
  {
    img: maternityImg9,
    title: 'Mother Dress',
    rows: 2,
    cols: 2,
  },
  {
    img: maternityImg10,
    title: 'Mother and baby',
  },
  {
    img: maternityImg11,
    title: 'Mother and Son Feild',
  },
  {
    img: maternityImg12,
    title: 'Mom and Son',
    cols: 2,
  },
];

