import { Button, Radio } from "antd";
import React from "react";
import "./BettingCard.css";
import { useParams, useNavigate } from "react-router-dom";

export const BettingCard = ({ data, setUserBetting }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [value, setValue] = React.useState();
  const [disabled, setDisabled] = React.useState(true);
  const [card, setCard] = React.useState();
  const navigate = useNavigate();
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
    const bet = {
      id: id,
      item: `Спасибо, ваша ставка МАТЧ ${card.nameOne.toUpperCase()} - ${card.nameTwo.toUpperCase()}, СТАВКА ${value.toUpperCase()} принята`,
    };
    setUserBetting(bet);
    navigate("/");
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
            <Radio value={"победа хозяев"}>победа хозяев</Radio>
            <Radio value={"ничья"}>ничья</Radio>
            <Radio value={"победа гостей"}>победа гостей</Radio>
          </Radio.Group>
          <Button type="primary" onClick={submit} style={{ marginTop: 16 }} disabled={disabled}>
            Сделать ставку
          </Button>
        </div>
      </div>
    </div>
  );
};
