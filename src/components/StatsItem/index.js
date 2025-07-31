import { Stack } from '@mui/material'
import React from 'react'
import colors from '../../constants/colors'

export default function StatsItem({number, title}) {
    return (
        <Stack spacing={2} borderLeft={'1px #ccc solid'} pl={2}>
            <h1 style={{textAlign: 'start', color: colors.dark.primary, fontWeight: '400', fontSize:'40px'}}>{number}</h1>
            <span style={{color: '#333', fontSize: '14px', marginBottom: 0, lineHeight: 1.7}}>{title}</span>
        </Stack>
    )
}
