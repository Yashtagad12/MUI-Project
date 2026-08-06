import React from 'react';
import { Pagination } from '@mui/material';



export default function PaginationComponent({ page, count, onChange }) {

    return (
        <Pagination
            count={count}
            page={page}
            onChange={(e, val) => onChange(val)}
            color="primary"
        />
    );
};