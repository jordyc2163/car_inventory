import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'make', headerName: 'Brand', width: 130 },
    { field: 'model', headerName: 'Series', width: 130 },
    {
        field: 'year',
        headerName: 'Year',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.make || ''} ${params.row.model || ''}`,
    },
];

const rows = [
    { id: 1, model: '', make: '', year: null },
    { id: 2, model: '', make: '', year: null },
    { id: 3, model: '', make: '', year: null },
    { id: 4, model: '', make: '', year: null },
    { id: 5, model: '', make: '', year: null },
    { id: 6, model: '', make: null, year: null },
    { id: 7, model: '', make: '', year: null },
    { id: 8, model: '', make: '', year: null },
    { id: 9, model: '', make: '', year: null },
];

export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2> Cars in Inventory </h2>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}

