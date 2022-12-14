import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const TextSkeleton = ({ w, h, row = 1 }) => {
    const rowArr = [];
    for (let i = 0; i < row; i++) {
        rowArr.push(i)
    }
    console.log(rowArr)
    return (
        <Box>
            {rowArr.map((row, i) => (
                <Box sx={{ width: w || 300, height: h || 20, }} key={i}>
                    <Skeleton animation="wave" />
                </Box>
            ))}
        </Box>

    )
}

export default TextSkeleton;

