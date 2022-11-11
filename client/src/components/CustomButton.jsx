import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { grey, teal, deepPurple, purple } from '@mui/material/colors'

const CustomButton = ({ text, handleClick, disabled = false, children, link }) => {
  return (
    <Button
      startIcon={children}
      style={{
        backgroundColor: disabled ? grey : purple['A700'],
        textTransform: 'none',
        padding: '10px 20px',
      }}
      onClick={handleClick}
      disabled={disabled}
      href = {link}

    >
      <Typography variant='h5' color='white'>
        {text}
      </Typography>
    </Button>
  )
}

export default CustomButton
