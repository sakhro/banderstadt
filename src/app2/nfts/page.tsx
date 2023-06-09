import { CollectionNfts } from "$/components/CollectionNfts";
import { Image } from "$/components/Image";
import { Link } from "$/components/Link";
import {
  CBA_LINK,
  COSSACKS_CONTRACT_ADDRESS,
  SMART_CONTRACT_LINK,
} from "$/constants/common";
import { FileContextProvider } from "$/contexts/FileContext/FileContext";
import { runContractTotalSupply } from "$/services/moralis";

import NFT_COVER from "../../../public/static/images/nfts-cover.png";

export default async function NftsPage() {
  const totalSupply = await runContractTotalSupply(COSSACKS_CONTRACT_ADDRESS);

  return (
    <FileContextProvider>
      <section className="max-w-6xl grid grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl mb-8 font-medium text-primary/80">
            Cossacks NFT Collection
          </h1>
          <p className="pb-4">
            Дана колекція створена для підтримки України у російсько-українській
            війні.
          </p>
          <p className="pb-4">
            100% коштів з продажу NFT будуть перераховані у фонд{" "}
            <Link href={CBA_LINK} target="_blank">
              {'"'}
              Повернись Живим{'"'}
            </Link>
            .
          </p>
          <p className="pb-4">
            Смарт контракт задеплоєний на BSC, коли сума з продажів назбирується
            більше 1 BNB, я їх свапаю в ETH і відправляю у фонд.
          </p>
          <p className="pb-4">
            Ви запитаєте для чого така спецоперація, чому зразу не на ETH або
            чому не перечисляти автоматично у фонд?
            <br />А томущо на момент створення колекції, деплой контракту
            коштував дурні гроші (їх легше було зразу задонатити і не паритись)
            + я зауважив що фонд наче не використовував BNB на той момент.
          </p>
          <p className="pb-4">
            Ви можете переглянути{" "}
            <Link href={SMART_CONTRACT_LINK} target="_blank">
              Smart Contract
            </Link>{" "}
            де більше деталей щодо контракту і переказу коштів у фонд.
          </p>
          <p className="pb-4">Наразі продано {totalSupply} / 450</p>
        </div>
        <div>
          <Image
            alt="Cossacs"
            src={NFT_COVER}
            className="h-full object-cover rounded-2xl overflow-hidden"
          />
        </div>
        <div className="col-span-2">
          <CollectionNfts totalSupply={Number(totalSupply)} />
        </div>
      </section>
    </FileContextProvider>
  );
}
