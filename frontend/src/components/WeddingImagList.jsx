import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import weddingImg from '../images/WeddingImages/wedding.jpg';
import weddingImg2 from '../images/WeddingImages/wedding2.jpg';
import weddingImg3 from '../images/WeddingImages/wedding3.jpg';
import weddingImg4 from '../images/WeddingImages/wedding4.jpg';
import weddingImg5 from '../images/WeddingImages/wedding5.jpg';
import weddingImg6 from '../images/WeddingImages/wedding6.jpg';
import weddingImg7 from '../images/WeddingImages/wedding7.jpg';
import weddingImg8 from '../images/WeddingImages/wedding8.jpg';
import weddingImg9 from '../images/WeddingImages/wedding9.jpg';
import weddingImg10 from '../images/WeddingImages/wedding10.jpg';
import weddingImg11 from '../images/WeddingImages/wedding11.jpg';
import weddingImg12 from '../images/WeddingImages/wedding12.jpg';

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
  { img: weddingImg, title: 'Breakfast', rows: 2, cols: 2 },
  { img: weddingImg2, title: 'Burger' },
  { img: weddingImg3, title: 'Camera' },
  { img: weddingImg4, title: 'Coffee', cols: 2 },
  { img: weddingImg5, title: 'Hats', cols: 2 },
  { img: weddingImg6, title: 'Honey', rows: 2, cols: 2 },
  { img: weddingImg7, title: 'Basketball' },
  { img: weddingImg8, title: 'Fern' },
  { img: weddingImg9, title: 'Mushrooms', rows: 2, cols: 2 },
  { img: weddingImg10, title: 'Tomato basil' },
  { img: weddingImg11, title: 'Sea star' },
  { img: weddingImg12, title: 'Bike', cols: 2 },
];
