import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import seniorImg from '../images/SeniorImages/senior1.jpg'
import seniorImg2 from '../images/SeniorImages/senior2.jpg'
import seniorImg3 from '../images/SeniorImages/senior3.jpg'
import seniorImg4 from '../images/SeniorImages/senior4.jpg'
import seniorImg5 from '../images/SeniorImages/senior5.jpg'
import seniorImg6 from '../images/SeniorImages/senior6.jpg'
import seniorImg7 from '../images/SeniorImages/senior7.jpg'
import seniorImg8 from '../images/SeniorImages/senior8.jpg'
import seniorImg9 from '../images/SeniorImages/senior9.jpg'
import seniorImg10 from '../images/SeniorImages/senior10.jpg'
import seniorImg11 from '../images/SeniorImages/senior11.jpg'
import seniorImg12 from '../images/SeniorImages/senior12.jpg'

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
    img: seniorImg,
    title: 'Senior Male Sitting',
    rows: 2,
    cols: 2,
  },
  {
    img: seniorImg2,
    title: 'Senior Female Sitting',
  },
  {
    img: seniorImg3,
    title: 'Male Senior Trees',
  },
  {
    img: seniorImg4,
    title: 'MaleSeniorCapGown',
    cols: 2,
  },
  {
    img: seniorImg5,
    title: 'SeniorBench',
    cols: 2,
  },
  {
    img: seniorImg6,
    title: 'FemaleSeniorCapGown',
    rows: 2,
    cols: 2,
  },
  {
    img: seniorImg7,
    title: 'SeniorFeild',
  },
  {
    img: seniorImg8,
    title: 'SeniorPark',
  },
  {
    img: seniorImg9,
    title: 'SeniorLaying',
    rows: 2,
    cols: 2,
  },
  {
    img: seniorImg10,
    title: 'SeniorBuilding',
  },
  {
    img: seniorImg11,
    title: 'SeniorBuilding2',
  },
  {
    img: seniorImg12,
    title: 'FemaleSeniorSunny',
    cols: 2,
  },
];
