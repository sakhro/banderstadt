import fs from "fs";
import path from "path";
import Database from "better-sqlite3";
import sortBy from "ramda/src/sortBy";
import prop from "ramda/src/prop";

const dbDirectory = path.resolve(process.cwd(), "public/static/db");
const cossacksFile = fs.readFileSync(path.join(dbDirectory, "cossacks.sqlite"));

export interface INft {
  id: number;
  name: string;
  description: string;
  image: string;
  rarity_rank: number;
}

const sortById = sortBy(prop("id"));

export const getContractNfts = () => {
  const DB = new Database(cossacksFile, {
    fileMustExist: true,
  });
  const offset = 0;
  const limit = 450;
  const scoreTable = "punk_scores";
  const orderByStmt = `ORDER BY ${scoreTable}.rarity_rank ASC`;
  const punksQuery = `SELECT punks.*, ${scoreTable}.rarity_rank FROM punks INNER JOIN ${scoreTable} ON (punks.id = ${scoreTable}.punk_id) ${orderByStmt}  LIMIT :offset,:limit`;

  const nfts = DB.prepare(punksQuery).all({
    limit,
    offset,
  });

  return sortById<INft>(nfts as INft[]);
};
