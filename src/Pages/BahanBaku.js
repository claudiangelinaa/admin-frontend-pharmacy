import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import { fetchBahanBaku } from "../Store/Actions/bahanBakuAction";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@material-ui/core";
import axios from 'axios';
import { url } from '../helpers/urlConfig';

const BahanBaku = () => {
  const {bahanBaku} = useSelector(state => state.bahanBakuReducer);
  const [dialogAddStock, setDialogAddStock] = useState(false);
  const [currStock, setCurrStock] = useState(0);
  const [addStock, setAddStock] = useState(0);
  const [selectedBahanBakuId, setSelectedBahanBakuId] = useState(0);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchBahanBaku())
  }, []); 

  const handleCloseDialog = () => {
    setDialogAddStock(false)
    setAddStock(0)
  }

  const handleSubmitStock = () => {
    axios.post(`${url}/bahanbaku/${selectedBahanBakuId}/update/stock`, {
      stock: parseInt(currStock) + parseInt(addStock)
    })
    .then((res) => {
      alert(`Tambah stock sukses`)
      setDialogAddStock(false)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleOpenDialog = (bahanBakuId, bahanBakuCurrStock) => {
    setSelectedBahanBakuId(bahanBakuId);
    setCurrStock(bahanBakuCurrStock);
    setDialogAddStock(true);
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'nama',
      headerName: 'Nama Bahan Baku',
      width: 150,
      editable: true,
    },
    {
      field: 'harga',
      headerName: 'Harga',
      type: 'number',
      width: 150,
      editable: true,
    },
    {
      field: 'stock',
      headerName: 'Stock per Botol',
      type: 'number',
      width: 160,
      editable: true,
    },
    {
      field: 'stock_satuan',
      headerName: 'Stock Satuan',
      description: 'This column has a value getter and is not sortable.',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      type: 'action',
      width: 160,
      renderCell: (params) => (
        <Button variant="outlined" size="small" onClick={() => handleOpenDialog(params.id, params.getValue(params.id, 'stock'))}>
          Add Stock
        </Button>
      )
    },
  ];

  const rows = bahanBaku

  return (
    <div className="px-5">
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>

      <div>
        <Dialog open={dialogAddStock} onClose={() => handleCloseDialog()}>
          <DialogTitle>Add Stock</DialogTitle>
          <DialogContent>
            <TextField
              className="mx-2"
              variant="outlined"
              type="number"
              placeholder="Stock"
              value={addStock}
              onChange={(e) => setAddStock(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleCloseDialog()}>Cancel</Button>
            <Button onClick={() => handleSubmitStock()}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}

export default BahanBaku
