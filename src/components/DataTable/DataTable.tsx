import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks/';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';
import { CarForm } from '../../components'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1, width: 90 },
    {
        field: 'make',
        headerName: 'Make',
        width: 90,
    },
    {
        field: 'model',
        headerName: 'Model',
        width: 90,
    },
    {
        field: 'series',
        headerName: 'Series',
        width: 90,
    },
    {
        field: 'description',
        headerName: 'Description',
        width: 90,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 90,
    },
    {
        field: 'condition',
        headerName: 'Condition',
        width: 90,
    },
    {
        field: 'max_speed',
        headerName: 'Max Speed',
        width: 90,
    },
    {
        field: 'horsepower',
        headerName: 'Horsepower',
        width: 90,
    }
];

interface gridData {
    data: {
        id?: string;
        name?: string;
    }
}

export const DataTable = () => {
    let { carData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])

    let handleOpen = () => setOpen(true)
    let handleClose = () => setOpen(false)

    let deleteData = async () => {
        await serverCalls.delete(`${gridData[0]}`)
        getData();
    }
    console.log(gridData) // a list of id's from the checked rows

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={carData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                onSelectionModelChange={newSelectionModel => setData(newSelectionModel)}
                {...carData}
            />
            {/* when Data Grid is deleted the dashboard is able to load up. not sure what's happening */}
            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

            {/*Dialog Pop Up begin */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update A Drone</DialogTitle>
                <DialogContent>
                    <DialogContentText>Drone id: {gridData[0]}</DialogContentText>
                    <CarForm id={`${gridData[0]}`} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

