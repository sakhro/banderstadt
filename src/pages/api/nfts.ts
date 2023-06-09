/**
 * This functionality is inspired by https://github.com/fukuball/rarity-analyser
 */
import { NextApiRequest, NextApiResponse } from "next";
import { getContractNfts } from "$/services/sqlite3";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const nfts = getContractNfts();

    res.status(200).json(nfts);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
}
