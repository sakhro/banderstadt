interface IProps {
  question?: string;
  answers: string[];
}

export const QnA: React.FC<IProps> = (props) => (
  <section className="my-10">
    {props.question && (
      <h2 className="text-xl mb-2 font-bold">{props.question}</h2>
    )}
    {props.answers.map((paragraph, idx) => (
      <p key={idx} className="mb-4">
        {paragraph}
      </p>
    ))}
  </section>
);
