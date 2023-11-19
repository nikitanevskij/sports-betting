import { Button, Radio } from "antd";
import React from "react";
import "./BettingCard.css";
import { useParams } from "react-router-dom";

export const BettingCard = ({ data, userBetting }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [value, setValue] = React.useState();
  const [disabled, setDisabled] = React.useState(true);
  const [card, setCard] = React.useState();
  const { id } = useParams();

  const findCard = (params) => {
    const result = data.filter((item) => item.id === params)[0];
    setCard(result);
  };
  React.useEffect(() => {
    setIsLoading(true);
    findCard(id);
    setIsLoading(false);
  }, []);

  const onChange = (e) => {
    setDisabled(false);
    setValue(e.target.value);
  };

  const submit = () => {
    // const findBet = userBetting && userBetting[0].betting.findIndex((item) => item.id === id);
  };
  if (isLoading) {
    return <h2 className="betting-card__text">Loading...</h2>;
  }
  return (
    <div className="betting-card">
      <div className="container">
        <div className="betting-card__block">
          <h2 className="betting-card__text">{card.nameOne}</h2>
          <div className="betting-card__date">
            <h3>Сегодня</h3>
            <p>{card.date}</p>
          </div>

          <h2 className="betting-card__text">{card.nameTwo}</h2>
        </div>
        <div className="betting-card__chooice">
          <Radio.Group onChange={onChange} value={value} className={{ rowGap: "20px" }}>
            <Radio value={1}>победа хозяев</Radio>
            <Radio value={2}>ничья</Radio>
            <Radio value={3}>победа гостей</Radio>
          </Radio.Group>
          <Button type="primary" onClick={submit} style={{ marginTop: 16 }} disabled={disabled}>
            Сделать ставку
          </Button>
        </div>
      </div>
    </div>
  );
};
