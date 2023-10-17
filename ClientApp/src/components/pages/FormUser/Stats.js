import React from "react";

const Stats = ({ data }) => (
  <section style={{ marginRight: "2em" }}>
    <h1 style={{ fontSize: "2em" }}>
      <b style={{ color: `${data.color}` }}>react-dat-gui</b>
    </h1>
    <h2>Use the controls and watch your changes happen in real time!</h2>
    <section>
    <div>
        <b>Slider value:</b> {data.width}
      </div>
      <div>
        <b>Slider value:</b> {data.height}
      </div>
    </section>
  </section>
);

export default Stats;


