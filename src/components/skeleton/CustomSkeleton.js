import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const CustomSkeleton = ({ variant, h, w, row = 1 }) => {
   const rowArr = [];
   for (let i = 0; i < row; i++) {
      rowArr.push(i)
   }
   return (
      <Box>
         {rowArr.map((row, i) => (
            <Box sx={{ width: 300, }} key={i}>
               <Skeleton variant={variant || "circular"} width={w || 40} height={h || 40} />

            </Box>
         ))}
      </Box>

   )
}
export default CustomSkeleton;