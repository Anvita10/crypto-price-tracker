
import { createSlice } from '@reduxjs/toolkit';
import btcLogo from '../assets/btc.png';
import ethLogo from '../assets/eth.png';
import usdtLogo from '../assets/usdt.png';
import bnb from '../assets/bnb.png';
import solana from "../assets/solana.svg";

import chart from '../assets/7d_chart.svg';

const initialState = {
  data: [
    {
      id: 'btc',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 65500,
      percent_change_1h: 0.5,
      percent_change_24h: -1.2,
      percent_change_7d: 3.4,
      market_cap: 1200000000000,
      volume_24h: 35000000000,
      circulating_supply: 19000000,
      max_supply: 21000000,
      logo: btcLogo,
      chart: chart
    },
    {
      id: 'eth',
      name: 'Ethereum',
      symbol: 'ETH',
      price: 3200,
      percent_change_1h: -0.3,
      percent_change_24h: 1.8,
      percent_change_7d: 5.0,
      market_cap: 400000000000,
      volume_24h: 18000000000,
      circulating_supply: 117000000,
      max_supply: null,
      logo: ethLogo,
      chart: chart
    },
    {
      id: 'usdt',
      name: 'Tether',
      symbol: 'USDT',
      price: 1,
      percent_change_1h: 0,
      percent_change_24h: 0,
      percent_change_7d: 0,
      market_cap: 83000000000,
      volume_24h: 25000000000,
      circulating_supply: 83000000000,
      max_supply: null,
      logo: usdtLogo,
      chart: chart
    },
    {
      id: 'bnb',
      name: 'BNB',
      symbol: 'BNB',
      price: 600,
      percent_change_1h: 0.1,
      percent_change_24h: 0.4,
      percent_change_7d: 2.3,
      market_cap: 92000000000,
      volume_24h: 1800000000,
      circulating_supply: 153000000,
      max_supply: 200000000,
      logo: bnb,
      chart: chart
    },
    {
      id: 'sol',
      name: 'Solana',
      symbol: 'SOL',
      price: 145,
      percent_change_1h: -0.2,
      percent_change_24h: 2.1,
      percent_change_7d: 8.6,
      market_cap: 65000000000,
      volume_24h: 3200000000,
      circulating_supply: 448000000,
      max_supply: null,
      logo: solana,
      chart: chart
    },
    
  ]
  
};

const getRandomChange = () => (Math.random() * 4 - 2).toFixed(2);
const getRandomVolume = () => Math.floor(Math.random() * 50000000000);
const getRandomPrice = (base) => parseFloat((base * (1 + (Math.random() - 0.5) * 0.02)).toFixed(2));

const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    updateAssets: (state) => {
      state.data = state.data.map(asset => ({
        ...asset,
        price: getRandomPrice(asset.price),
        percent_change_1h: parseFloat(getRandomChange()),
        percent_change_24h: parseFloat(getRandomChange()),
        percent_change_7d: parseFloat(getRandomChange()),
        volume_24h: getRandomVolume()
      }));
    }
  }
});

export const { updateAssets } = assetsSlice.actions;
export default assetsSlice.reducer;
