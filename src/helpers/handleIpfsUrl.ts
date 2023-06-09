import { IPFS_GATEWAY } from "$/constants/common";

export const handleIpfsUrl = (url: string) =>
  url.replace("ipfs://", IPFS_GATEWAY);
