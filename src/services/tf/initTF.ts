import * as tf from "@tensorflow/tfjs";

const WEIGHTS = "/static/model/web_model/model.json";

export type NetType = tf.GraphModel<string | tf.io.IOHandler>;

export const initTF = () =>
  tf.ready().then(async () => {
    const net = await tf.loadGraphModel(WEIGHTS);
    const inputShape = net.inputs[0].shape as number[];

    const dummyInput = tf.ones(inputShape);
    const warmupResult = await net.executeAsync(dummyInput);

    tf.dispose(warmupResult);
    tf.dispose(dummyInput);

    return {
      net,
      inputShape,
    };
  });
