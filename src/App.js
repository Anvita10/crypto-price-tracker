import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAssets } from './redux/assetsSlice';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Avatar } from '@mui/material';
import { TextField } from '@mui/material';
import { useState } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const assets = useSelector(state => state.assets.data);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateAssets());
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const getColor = (value) => (value > 0 ? 'green' : value < 0 ? 'red' : 'grey');

  const filteredAssets = assets.filter(asset =>
    asset.name.toLowerCase().includes(search.toLowerCase()) ||
    asset.symbol.toLowerCase().includes(search.toLowerCase())
  );
  

  return (
    <Container maxWidth="xl" sx={{ paddingTop: 4 }}>
      <Typography variant="h4" gutterBottom align="center">Crypto Price Tracker</Typography>
      <TextField 
        label="Search by Name" 
        variant="outlined" 
        fullWidth 
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="crypto table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Logo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Symbol</TableCell>
              <TableCell>Price ($)</TableCell>
              <TableCell>1h %</TableCell>
              <TableCell>24h %</TableCell>
              <TableCell>7d %</TableCell>
              <TableCell>Market Cap</TableCell>
              <TableCell>24h Volume</TableCell>
              <TableCell>Circulating Supply</TableCell>
              <TableCell>Max Supply</TableCell>
              <TableCell>7D Chart</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAssets.map((asset, index) => (
              <TableRow key={asset.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell><Avatar src={asset.logo} alt={asset.symbol} /></TableCell>
                <TableCell>{asset.name}</TableCell>
                <TableCell>{asset.symbol}</TableCell>
                <TableCell>{asset.price.toLocaleString()}</TableCell>
                <TableCell sx={{ color: getColor(asset.percent_change_1h) }}>{asset.percent_change_1h}%</TableCell>
                <TableCell sx={{ color: getColor(asset.percent_change_24h) }}>{asset.percent_change_24h}%</TableCell>
                <TableCell sx={{ color: getColor(asset.percent_change_7d) }}>{asset.percent_change_7d}%</TableCell>
                <TableCell>{asset.market_cap.toLocaleString()}</TableCell>
                <TableCell>{asset.volume_24h.toLocaleString()}</TableCell>
                <TableCell>{asset.circulating_supply.toLocaleString()}</TableCell>
                <TableCell>{asset.max_supply ? asset.max_supply.toLocaleString() : '∞'}</TableCell>
                <TableCell><img src={asset.chart} alt="7d chart" width={70} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default App;


