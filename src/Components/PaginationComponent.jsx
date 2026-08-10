import React from 'react';
import { Pagination } from '@mui/material';



const PaginationComponent = ({ page, count, onChange }) => {

    return (
        <Pagination
            count={count}
            page={page}
            onChange={(e, val) => onChange(val)}
            color="primary"
        />
    );
};

export default PaginationComponent;