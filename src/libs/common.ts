import { formatUnits } from "ethers/lib/utils";
import { BigNumber } from "ethers";
export const str = (v: any) => JSON.stringify(v);

export const clienId = '35a0de0260fbb978f93ab4f2133bd99b'

export function convertAmount(dataRewards: BigNumber){
   return (
     Math.round(parseFloat(formatUnits(dataRewards, 18)) * 100) / 100)
       .toLocaleString('en-US',
     { minimumFractionDigits: 2, maximumFractionDigits: 2 }
   )
 }

// --- Sepoila Test Contracts ---
/*
export const FARMER_ADDRESS = '0x019f1920b82Fa3346328890FAF495498e88EdAEF';
export const TOOLS_ADDRESS = '0xf64288dad9Dc82b3e26E0C5bd123A12F66d81409';
export const REWARDS_ADDRESS = '0xe374bCf270BE1c97Aec4ADCabb4E1e8114aA98c9';
export const STAKING_ADDRESS = '0xA520A8f9d9d8C0c4456D12E9D6B32Af82Fa290b3';
*/

// --- Base Production Contracts ---

export const FARMER_ADDRESS = '0x37902C894F1b95F2fAC33b3680E653827F1Dc69d';
export const TOOLS_ADDRESS = '0x13CE10a3e09FA8000BA8A13fCbe8813f476584e7';
export const REWARDS_ADDRESS = '0xA9B631ABcc4fd0bc766d7C0C8fCbf866e2bB0445';
export const STAKING_ADDRESS = '0xBBc4f75874930EB4d8075FCB3f48af2535A8E848';
