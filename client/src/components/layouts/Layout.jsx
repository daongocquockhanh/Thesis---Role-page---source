import { AppBar, Chip, Toolbar, Box, Typography } from '@mui/material'
import React from 'react'
import useEth from '../../contexts/EthContext/useEth'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import KeyIcon from '@mui/icons-material/Key';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from '../../assets/metamask.png'
import { grey, teal, deepPurple } from '@mui/material/colors'

const HeaderAppBar = () => {
  const {
    state: { accounts, role },
  } = useEth()

  return (
    <AppBar position='static' style={{ backgroundColor: 'grey' }}>
      <Toolbar>
        <Box display='flex' justifyContent='space-left' alignItems='left' width='100%'>
          <a href='/'>
            <ArrowBackIcon style={{ color: deepPurple[700], fontSize: '22px' }} />
          </a>
          <Box flexGrow={1} />
          <Box display='flex' alignItems='center'>
            <Box mb={0.1}>
              <KeyIcon style={{ color: deepPurple[700], fontSize: '22px' }} />
            </Box>
            <Box ml={0.5} mr={2}>
              <Typography variant='h6' color='black'>
                {accounts ? accounts[0] : 'Wallet not connected'}
              </Typography>
            </Box>
            <Chip
              label={role === 'unknown' ? 'not registered' : role}
              style={{ fontSize: '12px', backgroundColor: deepPurple['A700'], color: 'white' }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default HeaderAppBar
