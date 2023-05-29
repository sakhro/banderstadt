import { useEffect, useState } from "react";

import { initTF, NetType } from "$/services/tf/initTF";

const WEIGHTS = "/static/model/web_model/model.json";

interface IState {
  net: NetType | null;
  inputShape: number[];
}

export const useTFModel = () => {
  const [model, setModel] = useState<IState>({
    net: null,
    inputShape: [0, 1, 2],
  });

  useEffect(() => {
    initTF().then(setModel);
  }, []);

  return model;
};
