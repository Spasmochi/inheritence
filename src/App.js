import React from "react";
import "./styles/styles.css";
import "./styles/tailwind.css";
import { Card } from "./components/layouts/Cards";
import { Layout } from "./components/layouts/Layout";
import { Header } from "./components/text/Header";
import { Text } from "./components/text/Text";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

export default function App() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <Layout
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div className="App">
        <Header>Family Inheritence</Header>
        <Text>Start editing to see some magic happen!</Text>
        <Card props={props} calc={calc} set={set} trans={trans1}>
          This is a card
        </Card>
      </div>
    </Layout>
  );
}
