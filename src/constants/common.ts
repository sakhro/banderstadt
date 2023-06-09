export const DEMO_VIDEO_PATH = "/static/videos/demo.mp4";

export const IS_DEV_ENV = process.env.NEXT_PUBLIC_ENV === "development";

export const COSSACKS_CONTRACT_ADDRESS =
  "0x4dB15d4E3fD60EFb41EF9f593f959aF9172D36b9";

const DEV_SMART_CONTRACT_LINK = `https://testnet.bscscan.com/address/${COSSACKS_CONTRACT_ADDRESS}`;
const PROD_SMART_CONTRACT_LINK = `https://bscscan.com/address/${COSSACKS_CONTRACT_ADDRESS}`;

export const SMART_CONTRACT_LINK = IS_DEV_ENV
  ? DEV_SMART_CONTRACT_LINK
  : PROD_SMART_CONTRACT_LINK;

export const CBA_LINK = "https://www.comebackalive.in.ua/donate";

export const IPFS_GATEWAY = "https://prexsell-staging.infura-ipfs.io/ipfs/";

export const BSC_CHAIN_ID = 56;
const PROD_RPC_URL = "https://bsc-dataseed.binance.org";

export const RPCs = {
  [BSC_CHAIN_ID]: PROD_RPC_URL,
};
