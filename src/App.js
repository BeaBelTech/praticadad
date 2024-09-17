import './App.css';
import Card from './components/Card.jsx'

const card1_infos = [
  { id: 1, title: "Free", topic1_status: "ativo", topic1_text: "PNG templates", topic2_status: "inativo", topic2_text: "Figma responsive components", topic3_status: "inativo", topic3_text: "Constant updates", topic4_status: "inativo", topic4_text: "Custom templates", preco: 0 }
];

const card2_infos = [
  { id: 2, title: "Premium", topic1_status: "ativo", topic1_text: "PNG templates", topic2_status: "ativo", topic2_text: "Figma responsive components", topic3_status: "inativo", topic3_text: "Constant updates", topic4_status: "inativo", topic4_text: "Custom templates", preco: 199 }
];

const card3_infos = [
  { id: 3, title: "Pro", topic1_status: "ativo", topic1_text: "PNG templates", topic2_status: "ativo", topic2_text: "Figma responsive components", topic3_status: "ativo", topic3_text: "Constant updates", topic4_status: "ativo", topic4_text: "Custom templates", preco: 399 }
];


function App() {
  return (
    <div className="App">
      {card1_infos.map((card) => (
        <Card key={card.id} title={card.title} topic1_status={card.topic1_status} topic1_text={card.topic1_text}
          topic2_status={card.topic2_status}
          topic2_text={card.topic2_text}
          topic3_status={card.topic3_status}
          topic3_text={card.topic3_text}
          topic4_status={card.topic4_status} topic4_text={card.topic4_text}
          preco={card.preco}
        />
      ))}
      {card2_infos.map((card) => (
        <Card key={card.id} title={card.title} topic1_status={card.topic1_status} topic1_text={card.topic1_text}
          topic2_status={card.topic2_status}
          topic2_text={card.topic2_text}
          topic3_status={card.topic3_status}
          topic3_text={card.topic3_text}
          topic4_status={card.topic4_status} topic4_text={card.topic4_text}
          preco={card.preco}
        />
      ))}
      {card3_infos.map((card) => (
        <Card key={card.id} title={card.title} topic1_status={card.topic1_status} topic1_text={card.topic1_text}
          topic2_status={card.topic2_status}
          topic2_text={card.topic2_text}
          topic3_status={card.topic3_status}
          topic3_text={card.topic3_text}
          topic4_status={card.topic4_status} topic4_text={card.topic4_text}
          preco={card.preco}
        />
      ))}
    </div>
  );
}

export default App;
