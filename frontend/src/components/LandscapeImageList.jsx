import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import LandScapeImg from '../images/LandscapeImages/landscape.jpg';
import LandScapeImg2 from '../images/LandscapeImages/landscape2.jpg';
import LandScapeImg3 from '../images/LandscapeImages/landscape3.jpg';
import LandScapeImg4 from '../images/LandscapeImages/landscape4.jpg';
import LandScapeImg5 from '../images/LandscapeImages/landscape5.jpg';
import LandScapeImg6 from '../images/LandscapeImages/landscape6.jpg';
import LandScapeImg7 from '../images/LandscapeImages/landscape7.jpg';
import LandScapeImg8 from '../images/LandscapeImages/landscape8.jpg';
import LandScapeImg9 from '../images/LandscapeImages/landscape9.jpg';
import LandScapeImg10 from '../images/LandscapeImages/landscape10.jpg';
import LandScapeImg11 from '../images/LandscapeImages/landscape11.jpg';
import LandScapeImg12 from '../images/LandscapeImages/landscape12.jpg';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState('');

  const handleClickOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage('');
  };

  return (
    <div className="mt-[900px] min-h-screen bg-gray-100">
      <ImageList
        className="mb-[60px]"
        sx={{
          width: '100%',
          height: 'auto',
        }}
        variant="quilted"
        cols={4}
        rowHeight={250}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            className="relative group m-0 p-0 overflow-hidden"
            onClick={() => handleClickOpen(item.img)}
          >
            <img
              {...srcset(item.img, 250, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              className="transition-opacity duration-300 ease-in-out group-hover:opacity-90 group-hover:delay-150 cursor-pointer"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          className: 'bg-transparent p-0', // Remove extra styling to focus only on the image
        }}
      >
        <DialogContent className="p-0 flex justify-center items-center relative">
          <img
            src={selectedImage}
            alt="Preview"
            className="w-full max-h-screen object-contain" // Make image responsive within the screen
          />
          <IconButton
            onClick={handleClose}
            className="absolute top-2 right-2 bg-white text-black opacity-70 hover:opacity-100"
          >
            <CloseIcon />
          </IconButton>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const itemData = [
  { img: LandScapeImg, title: 'Breakfast', rows: 2, cols: 2 },
  { img: LandScapeImg2, title: 'Burger' },
  { img: LandScapeImg3, title: 'Camera' },
  { img: LandScapeImg4, title: 'Coffee', cols: 2 },
  { img: LandScapeImg5, title: 'Hats', cols: 2 },
  { img: LandScapeImg6, title: 'Honey', rows: 2, cols: 2 },
  { img: LandScapeImg7, title: 'Basketball' },
  { img: LandScapeImg8, title: 'Fern' },
  { img: LandScapeImg9, title: 'Mushrooms', rows: 2, cols: 2 },
  { img: LandScapeImg10, title: 'Tomato basil' },
  { img: LandScapeImg11, title: 'Sea star' },
  { img: LandScapeImg12, title: 'Bike', cols: 2 },
];
