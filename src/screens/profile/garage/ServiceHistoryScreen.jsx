import { Stack } from '@mui/material'
import React from 'react'
import ServiceHistoryComponent from '../../../components/profile/garage/ServiceHistoryComponent'

const ServiceHistoryScreen = () => {
    return (
        <Stack width={'100%'} overflow={'auto'}>
            <ServiceHistoryComponent />
        </Stack>
    )
}

export default ServiceHistoryScreen