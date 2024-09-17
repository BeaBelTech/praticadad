import "./card.css";
import check from "../assets/check.svg";
import wrong from "../assets/close.svg";

const card = ({
  title,
  topic1_status,
  topic1_text,
  topic2_status,
  topic2_text,
  topic3_status,
  topic3_text,
  topic4_status,
  topic4_text,
  preco,
}) => {
  return (
    <div className="container">
      <h1 className="titulo">{title}</h1>
      <div className="container_topics">
        {
          (topic1_status == "inativo" ? (
            <p className={topic1_status}>
              <img src={wrong} alt="" />
              {topic1_text}
            </p>
          ) : (
            <p className={topic1_status}>
              <img src={check} alt="" />
              {topic1_text}
            </p>
          ))
        }
        {
          (topic2_status == "inativo" ? (
            <p className={topic2_status}>
              <img src={wrong} alt="" />
              {topic2_text}
            </p>
          ) : (
            <p className={topic2_status}>
              <img src={check} alt="" />
              {topic2_text}
            </p>
          ))
        }
        {
          (topic3_status == "inativo" ? (
            <p className={topic3_status}>
              <img src={wrong} alt="" />
              {topic3_text}
            </p>
          ) : (
            <p className={topic3_status}>
              <img src={check} alt="" />
              {topic3_text}
            </p>
          ))
        }
        {
          (topic4_status == "inativo" ? (
            <p className={topic4_status}>
              <img src={wrong} alt="" />
              {topic4_text}
            </p>
          ) : (
            <p className={topic4_status}>
              <img src={check} alt="" />
              {topic4_text}
            </p>
          ))
        }
      </div>
      <div className="info">
        <h2 className="preco">${preco}</h2>
        <p>Per month</p>
      </div>
      <button className="button">Try now</button>
    </div>
  );
};

export default card;
