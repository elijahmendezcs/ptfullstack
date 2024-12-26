import React from 'react'
import ImageList from "../components/SeniorImageList"
import { Typography } from '@mui/material'
const Senior = () => {
  return (
    <><div className="flex flex-col items-left justify-center flex-grow px-20">

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
      </Typography>
    </div>
    <div className='flex flex-col items-right justify-center flex-grow px-20'>
      <Typography
      sx={{
        fontFamily: '"arial"',
        fontSize: "px",
        fontStyle: "",
        fontWeight: 400,
        marginTop: "10px",
        }}
      >
      This is where the project description goes. Give an overview or go in depth - what it’s all about, what inspired you, how you created it, or anything else you’d like visitors to know. To add Project descriptions, go to Manage Projects.
      </Typography>  
    </div>
    <div className='flex items-center justify-center h-screen'>
        <ImageList />
      </div></>
     )
  
}

export default Senior
