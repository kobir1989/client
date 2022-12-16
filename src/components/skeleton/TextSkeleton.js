import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const TextSkeleton = ({ w, h, row = 1, lineWidth }) => {
    const rowArr = [];
    for (let i = 0; i < row; i++) {
        rowArr.push(i)
    }
    return (
        <Box>
            {rowArr.map((row, i) => (
                <Box sx={{ width: w || 300, height: 40, }} key={i}>
                    <Skeleton animation="wave" width={lineWidth || "100%"} />
                    <Skeleton animation="wave" width={lineWidth ||  "80%"} />
                </Box>
            ))}
        </Box>

    )
}

export default TextSkeleton;

