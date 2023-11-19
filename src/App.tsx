import React from "react";
import { Layout, Space } from "antd";
import { BettingList } from "./components/BettingList/BettingList";
import { Routes, Route, Link } from "react-router-dom";
import { BettingCard } from "./components/BettingCard/BettingCard";

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  height: 100,
  color: "#fff",
};

const data = [
  { id: "655491e4e6ac37b5589416d1", nameOne: "Литва", nameTwo: "Италия", date: "2023-11-15" },
  { id: "65561aafdf8267358333872b", nameOne: "Латвия", nameTwo: "Хорватия", date: "2023-11-16" },
  { id: "655620ed5d057c5008d2c3e4", nameOne: "Германия", nameTwo: "Польша", date: "2023-11-17" },
  { id: "655620f25d057c5008d2c3e6", nameOne: "Россия", nameTwo: "Грузия", date: "2023-11-18" },
];

const userBetting = [
  {
    userId: "1231312123",
    betting: [
      { id: "655491e4e6ac37b5589416d1", bet: "1" },
      { id: "65561aafdf8267358333872b", bet: "2" },
    ],
  },
];
console.log(userBetting);

const App: React.FC = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout style={{ height: "100vh" }}>
        <Header style={headerStyle}>
          <Link to="/">Ставки на спорт</Link>
        </Header>
        <Content style={contentStyle}>
          <Routes>
            <Route path="/" element={<BettingList data={data} />} />
            <Route path="/:id" element={<BettingCard data={data} userBetting={userBetting} />} />
          </Routes>
        </Content>
      </Layout>
    </Space>
  );
};

export default App;
