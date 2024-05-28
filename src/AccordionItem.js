import { useState } from "react";
export default function AccordionItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  function toggleAnswer() {
    setOpen((o) => (o = !o));
  }

  return (
    <div className={`item ${open ? "open" : ""}`} onClick={toggleAnswer}>
      <div className="question">
        <span className="number">0{index + 1}</span>
        <span className="title">{faq.title}</span>
        <span className="icon">{open ? "-" : "+"}</span>
      </div>
      <div className="answer">
        <p>{faq.text}</p>
      </div>
    </div>
  );
}
