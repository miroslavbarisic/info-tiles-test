import React, {useEffect, useState, useReducer} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MUIDataTable from "mui-datatables";
import Grid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

import {
    devices,
    getDevices,

} from '../../redux/features/devices/devicesSlice';


const getKey =(myObject) => {

const keys = Object.keys(myObject);

for (const key of keys) {
  return(key, myObject[key].name);
}


}

const Devices = () => {
    const dispatchAction = useDispatch();

    // Slice
    const devicesData = useSelector(devices);

    // State
    const [page, setPage] = useState(1);
    const [rowsPage, setRowsPage] = useState(10);
    const [total, setTotal] = useState(100);


    useEffect(() => {
        const body =

            {
                "serviceId": '9d732215-4573-4086-9ade-b2ef17414f4c',
                "dataSourceType": "iot",
                "page": page,
                "pageSize": rowsPage,
                "orderTypes": 3,
            };
        dispatchAction(
            getDevices(body)
        );
    }, []);


    const changePage = page => {
        setPage(page);

        const body =

            {
                "serviceId": '9d732215-4573-4086-9ade-b2ef17414f4c',
                "dataSourceType": "iot",
                "page": page,
                "pageSize": rowsPage,
                "orderTypes": 3,
            };


        dispatchAction(
            getDevices(body)
        );
    };

    const changeRowsPerPage = changeRowsPerPage => {
        setPage(1);
        setRowsPage(changeRowsPerPage);


        const body =

            {
                "serviceId": '9d732215-4573-4086-9ade-b2ef17414f4c',
                "dataSourceType": "iot",
                "page": page,
                "pageSize": changeRowsPerPage,
                "orderTypes": 3,
            };


        dispatchAction(
            getDevices(body)
        );
    };


    const defaultColumns = [
        'displayName','status','zones','units','telemetryTypes','isDisabled'
    ]

    const columns = devicesData?.data?.headers?.map(item=>{

       return {
            name: item?.field,
            label: item?.title,


            options: {
                display: defaultColumns.includes(item?.field) ,
                sort: false,
                customBodyRender: value => {

                    if(typeof value === 'object' && value !== null){

                    return getKey(value)


                    }else if(typeof value === 'boolean'&& value !== null){

                        return value===true?<CheckIcon/>:<ClearIcon/>

                    }
                    else {
                        return value
                    }


                },

            }
        }

    })


    const options = {
        filterType: "dropdown",
        filter: false,
        responsive: "standard",
        selectableRows: "none",
        download: false,
        print: false,
        viewColumns: true,
        search: false,
        rowsPerPageOptions: [10, 25, 50],
        pagination: true,
        page,
        rowsPerPage: rowsPage,
        count: total,
        serverSide: true,
        onTableChange: (action, tableState) => {
            switch (action) {
                case "changePage":
                    setPage(tableState.page);
                    changePage(tableState.page);
                    break;
                case "changeRowsPerPage":
                    setPage(1);
                    setRowsPage(tableState.rowsPerPage);
                    changeRowsPerPage(tableState.rowsPerPage);
                    break;
            }
        },

    };

    return (
        <>


            <Grid container spacing={3} style={{padding: '20px'}}>
                <Grid item xs={12} sm={12} md={12}>
                    <MUIDataTable
                        title={'Device list'}
                        data={devicesData?.data?.devices}
                        columns={columns}
                        options={options}
                    />
                </Grid>
            </Grid>


        </>
    );
};

export default Devices;
