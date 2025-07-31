import React from 'react'
import { Stack } from '@mui/material'

export function Stats({title, text}) {
  return (
    <div style={{paddingTop:'13%', display:"flex", width:'100%', justifyContent: 'space-around'}}>
      <Stack spacing={1} borderLeft={'1px #ccc solid'} pl={2}>
          <span style={{color: '#fff', fontSize: '30px', marginBottom: 0, lineHeight: 1.7}}>{title}</span>
          <div style={{textAlign: 'start', color:'#fff', fontWeight: '300', fontSize: '20px'}}>{text}</div>
      </Stack>
</div>
  )
}

