import { Image } from "$/components/Image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { Link } from "$/components/Link";
import { CBA_LINK, SMART_CONTRACT_LINK } from "$/constants/common";
import { CollectionNfts } from "$/components/CollectionNfts";
import { Web3Buttons } from "$/components/Web3Buttons";
import { UserProvider } from "$/contexts/UserProvider";
import { ContractProvider } from "$/contexts/ContractProvider";
import { Web3Provider } from "$/contexts/Web3Provider";

import NFT_COVER from "../../../public/static/images/nfts-cover.png";
import { TotalSupply } from "$/components/TotalSupply";

export const NftsPage = () => (
  <UserProvider>
    <Web3Provider>
      <ContractProvider>
        <Grid container spacing={{ xs: 2, md: 6 }}>
          <Grid item xs={12} md={6}>
            <Image
              alt="Cossacs"
              src={NFT_COVER}
              style={{
                width: "100%",
                objectFit: "cover",
                height: "100%",
                borderRadius: 8,
                overflow: "hidden",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom variant="h4" color="primary">
              Cossacks NFT Колекція
            </Typography>
            <Typography gutterBottom variant="body2">
              Дана колекція створена для підтримки України у
              російсько-українській війні.
            </Typography>
            <Typography gutterBottom variant="body2">
              100% коштів з продажу NFT будуть перераховані у фонд{" "}
              <Link href={CBA_LINK} target="_blank">
                {'"'}
                Повернись Живим{'"'}
              </Link>
              .
            </Typography>
            <Typography gutterBottom variant="body2">
              Смарт контракт задеплоєний на BSC, коли сума з продажів
              назбирується більше 1 BNB, я їх свапаю в ETH і відправляю у фонд.
            </Typography>
            <Typography gutterBottom variant="body2">
              Ви запитаєте для чого така спецоперація, чому зразу не на ETH або
              чому не перечисляти автоматично у фонд?
              <br />А томущо на момент створення колекції, деплой контракту
              коштував дурні гроші (їх легше було зразу задонатити і не
              паритись) + я зауважив що фонд наче не використовував BNB на той
              момент.
            </Typography>
            <Typography gutterBottom variant="body2">
              Ви можете переглянути{" "}
              <Link href={SMART_CONTRACT_LINK} target="_blank">
                Smart Contract
              </Link>{" "}
              де більше деталей щодо контракту і переказу коштів у фонд.
            </Typography>
            <TotalSupply />
            <Web3Buttons />
          </Grid>
          <Grid item xs={12}>
            <CollectionNfts />
          </Grid>
        </Grid>
      </ContractProvider>
    </Web3Provider>
  </UserProvider>
);
