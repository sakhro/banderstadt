import * as tf from "@tensorflow/tfjs";
import is from "ramda/es/is";

import { NetType } from "$/services/tf/initTF";
import { hexToRgba } from "$/helpers/hexToRgba";

const THRESHOLD = 0.5;
const BOX_COLOR = "#FF3838";

interface IModel {
  net: NetType | null;
  inputShape: number[];
}

const preprocess = (
  videoEl: HTMLVideoElement,
  modelWidth: number,
  modelHeight: number
) => {
  let xRatio = 0,
    yRatio = 0;

  const input = tf.tidy(() => {
    const img = tf.browser.fromPixels(videoEl);

    const [h, w] = img.shape.slice(0, 2);

    const maxSize = Math.max(w, h);

    const imgPadded = img.pad([
      [0, maxSize - h],
      [0, maxSize - w],
      [0, 0],
    ]);

    xRatio = maxSize / w;
    yRatio = maxSize / h;

    return tf.image
      .resizeBilinear(imgPadded as any, [modelWidth, modelHeight])
      .div(255.0)
      .expandDims(0);
  });

  return [input, xRatio, yRatio];
};

export const renderBoxes = (
  canvasRef: HTMLCanvasElement,
  boxes_data: Float32Array | Int32Array | Uint8Array,
  scores_data: Float32Array | Int32Array | Uint8Array,
  [modelWidth, modelHeight]: [number, number]
) => {
  const ctx = canvasRef.getContext("2d");

  if (!ctx) return;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  for (let i = 0; i < scores_data.length; ++i) {
    if (scores_data[i] > THRESHOLD) {
      let [x1, y1, x2, y2] = boxes_data.slice(i * 4, (i + 1) * 4);
      x1 *= canvasRef.width * modelWidth;
      x2 *= canvasRef.width * modelWidth;
      y1 *= canvasRef.height * modelHeight;
      y2 *= canvasRef.height * modelHeight;
      const width = x2 - x1;
      const height = y2 - y1;

      ctx.fillStyle = hexToRgba(BOX_COLOR, 0.2);
      ctx.fillRect(x1, y1, width, height);

      ctx.strokeStyle = BOX_COLOR;
      ctx.lineWidth = Math.max(
        Math.min(ctx.canvas.width, ctx.canvas.height) / 300,
        1
      );
      ctx.strokeRect(x1, y1, width, height);
    }
  }
};

export const detectVideo = async (
  model: IModel,
  videoEl: HTMLVideoElement | null,
  canvasEl: HTMLCanvasElement | null
) => {
  const [modelWidth, modelHeight] = model.inputShape.slice(1, 3);

  const handleFrame = async () => {
    if (!model.net || !videoEl || !canvasEl) return;

    if (videoEl.videoWidth === 0 && videoEl.srcObject === null) {
      const ctx = canvasEl.getContext("2d");

      if (ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      }

      return;
    }

    tf.engine().startScope();

    const [input, xRatio, yRatio] = preprocess(
      videoEl,
      modelWidth,
      modelHeight
    );

    await model.net.executeAsync(input).then((res) => {
      if (!is(Array, res)) return;

      const [boxes, scores] = res.slice(0, 2);
      const boxes_data = boxes.dataSync();
      const scores_data = scores.dataSync();

      renderBoxes(canvasEl, boxes_data, scores_data, [xRatio, yRatio]);
      tf.dispose(res);
    });

    requestAnimationFrame(handleFrame);
    tf.engine().endScope();
  };

  handleFrame();
};
