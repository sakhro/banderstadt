import { useContractContext } from "$/contexts/ContractProvider";
import { Typography } from "@mui/material";

export const TotalSupply = () => {
  const { minted } = useContractContext();

  return (
    <Typography gutterBottom my={4} variant="body2" fontWeight={700}>
      Наразі продано {minted} / 450
    </Typography>
  );
};
