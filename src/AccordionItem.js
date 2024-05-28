export default function AccordionItem({
  faq,
  index,
  onOpen,
  curOpen,
  children,
}) {
  const open = index === curOpen;
  function toggleAnswer() {
    onOpen(open ? null : index);
  }

  return (
    <div className={`item ${open ? "open" : ""}`} onClick={toggleAnswer}>
      <div className="question">
        <span className="number">0{index + 1}</span>
        <span className="title">{faq.title}</span>
        <span className="icon">{open ? "-" : "+"}</span>
      </div>
      <div className="answer">
        <p>{children}</p>
      </div>
    </div>
  );
}
