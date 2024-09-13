import { colors, Pagination, PaginationItem, Stack } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function MoviePaging({count, onChange}) {
  return (
    <Stack spacing={2} className='paging-section' alignItems='center'>
    <Pagination
     onChange={onChange}
      count={count}
      color='secondary'
      variant="outlined" 
      renderItem={(item) => (
        <PaginationItem
          slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
          {...item}
          className='paging-item'
        />
      )}
    />
  </Stack>
  )
}

export default MoviePaging