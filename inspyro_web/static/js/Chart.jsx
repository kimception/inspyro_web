import React from "react";
import RTChart from "react-rt-chart";

export default class Chart extends React.Component {
  componentDidMount() {
    setInterval(() => this.forceUpdate(), 1000);
  }

  render() {
    var data = {
      date: new Date(),
      CameraOutput: 1,
      Threshold: .8
    };

    var chart = {
      point: {
        show: false
      },
      axis: {
        y: {
          min: 0,
          max: 1
        }
      },
    }

    return <RTChart
    chart = {
      chart
    }
    fields = {
      ['Threshold', 'CameraOutput']
    }
    data = {
      data
    }
    />
  }
}
