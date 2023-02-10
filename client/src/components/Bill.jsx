import { Card, CardContent, IconButton, Typography, Grid, Box } from '@mui/material'
import React from 'react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { grey } from '@mui/material/colors'
import moment from 'moment'
import GetAppIcon from '@mui/icons-material/GetApp';
import { useNavigate } from 'react-router-dom'

const Bill = ({ bill }) => {
    const [cid, name, userId, adminId, timestamp] = bill
    const navigate = useNavigate()

    return (
        <Card>
            <CardContent >
                <Grid container spacing={0}>
                    <Grid item xs={1}>
                        <AttachMoneyIcon style={{ fontSize: 40, color: grey[700] }} />
                    </Grid>
                    <Grid item xs={3}>
                        <Box display='left' flexDirection='column'>
                            <Typography variant='h6' color={grey[600]}>
                                Name of file
                            </Typography>
                            <Typography style={{ fontSize: 12 , textAlign: 'left'}}  variant='h6'>{name}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box display='flex' flexDirection='column'>
                            <Typography variant='h6' color={grey[600]}>
                                Uploader
                            </Typography>
                            <Typography variant='h6'>{adminId}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
                        <Box display='flex' flexDirection='column'>
                            <Typography variant='h6' color={grey[600]}>
                                Time stamp
                            </Typography>
                            <Typography variant='h6'>{moment.unix(timestamp).format('MM-DD-YYYY HH:mm')}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <a href={`https://med-chain.infura-ipfs.io/ipfs/${cid}`} target='_blank' rel='noopener noreferrer'>
                            <Typography variant='h6' color={grey[600]}>
                                Download
                            </Typography>
                            <IconButton>
                                <GetAppIcon fontSize='large' />
                            </IconButton>
                        </a>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Bill
