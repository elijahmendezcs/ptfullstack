import React from 'react'
import ImageList from "../components/SeniorImageList"
import { Typography } from '@mui/material'
const Senior = () => {
  return (
       <div className="flex items-center justify-center h-screen">
        <Typography
        sx={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: "30px",
          fontStyle: "italic",
          fontWeight: 400,
          marginTop: "20px",
        }}
         >
          Senior 
        </Typography >
         <ImageList />
       </div>
     )
  
}

export default Senior
