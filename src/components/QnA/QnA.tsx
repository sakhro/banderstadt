"use client";
import { useState } from "react";
import not from "ramda/src/not";
import { ReactSVG } from "react-svg";

import styles from "./QnA.module.css";

interface IProps {
  question?: string;
  answers: string[];
  isOpen?: boolean;
}

export const QnA: React.FC<IProps> = (props) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);

  const toggleState = () => setIsOpen(not);

  return (
    <section className="my-10 overflow-hidden">
      {props.question && (
        <div className="flex cursor-pointer items-center" onClick={toggleState}>
          <h2 className="flex-1 text-xl mb-2 font-bold">{props.question}</h2>
          <ReactSVG
            src="/static/icons/chevron-down.svg"
            className={`flex-none transition-transform ${styles.icon} ${
              isOpen ? "" : "-rotate-90"
            }`}
          />
        </div>
      )}
      {!!props.answers.length && (
        <div
          className={`transition-[max-height] max-h-0 ${
            isOpen ? "max-h-screen" : ""
          }`}
        >
          {props.answers.map((paragraph, idx) => (
            <p key={idx} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </section>
  );
};

QnA.defaultProps = {
  isOpen: false,
};
