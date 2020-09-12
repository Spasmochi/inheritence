import React from "react";
import "./styles.css";
import { Card } from "./components/Cards";
import { Layout } from "./components/Layout";

export default function App() {
  return (
    <Layout>
      <div className="App">
        <h1>Family Inheritence</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Card>This is a card</Card>
      </div>
    </Layout>
  );
}
