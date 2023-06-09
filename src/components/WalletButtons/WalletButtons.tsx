import compose from "ramda/src/compose";
import andThen from "ramda/src/andThen";

import { Button } from "$/components/Button";
import { Image } from "$/components/Image";
import { useConnectWallet } from "$/components/ConnectWalletButton/useConnectWallet";

import metamaskImage from "../../../public/static/images/metamask.webp";
import wcImage from "../../../public/static/images/wallet-connect.png";

interface IProps {
  hideModal: VoidFunction;
}

export const WalletButtons: React.FC<IProps> = (props) => {
  const { isMMLoading, isWCLoading, connectWalletConnect, connectMetaMask } =
    useConnectWallet();

  return (
    <ul className="flex flex-col gap-4">
      <li className="flex-1">
        <Button
          fullWidth
          variant="outlined"
          isLoading={isMMLoading}
          isDisabled={isWCLoading}
          onClick={compose(andThen(props.hideModal), connectMetaMask)}
        >
          <Image src={metamaskImage} alt="MetaMask" height={32} />
          MetaMask
        </Button>
      </li>
      <li className="flex-1">
        <Button
          fullWidth
          isLoading={isWCLoading}
          variant="outlined"
          isDisabled={isMMLoading}
          onClick={compose(andThen(props.hideModal), connectWalletConnect)}
        >
          <Image src={wcImage} alt="Wallet Connect" height={32} />
          Wallet Connect
        </Button>
      </li>
    </ul>
  );
};
