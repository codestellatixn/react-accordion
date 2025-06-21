import {useState} from "react";
import "./App.css";

const faqs = [
  {
    title: "Who is the leader of Kessoku Band?",
    text: "Nijika. She's the glue holding this chaos together.",
  },
  {
    title: "Is Kessoku Band a real band?",
    text: `They exist in our hearts, and that's what truly matters.`,
  },
  {
    title: "Who is the most chaotic member?",
    text: "Bocchi onstage, Ryo offstage.",
  },
  {
    title: "Who gets the most fan attention?",
    text: `Kita is basically an idol, but ironically, Bocchi's awkwardness makes her the most mysterious and "cool" member.`,
  },
  {
    title: "Why does Nijika have so much energy?",
    text: "Scientists are still trying to figure this out.",
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <Accordion data={faqs} />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h2 className="heading">Kessoku Band FAQ ✨</h2>
      <p className="sub-header">Bocchi the Rock!</p>
    </div>
  );
}

function Accordion({data}) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccodionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </div>
  );
}

function AccodionItem({num, title, text}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((current) => !current);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && (
        <p className={`content-box ${isOpen ? "show" : ""}`}>{text}</p>
      )}
    </div>
  );
}
