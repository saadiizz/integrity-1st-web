import { Stack } from '@mui/material'
import React from 'react'
import AllOffers from '../../../components/profile/dashboard/AllOffers'

const AllOffersScreen = () => {
    return (
        <Stack width={'100%'} overflow={'auto'}>
            <AllOffers />
        </Stack>
    )
}

export default AllOffersScreen