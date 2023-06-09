import { useState } from "react";
import not from "ramda/src/not";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IProps {
  question?: string;
  answers: string[];
  isOpen?: boolean;
}

export const QnA: React.FC<IProps> = (props) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);

  const toggleState = () => setIsOpen(not);

  return (
    <Accordion expanded={isOpen} onChange={toggleState}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="subtitle1">{props.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {props.answers.map((paragraph, idx) => (
          <Typography gutterBottom key={idx} variant="body2">
            {paragraph}
          </Typography>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

QnA.defaultProps = {
  isOpen: false,
};
