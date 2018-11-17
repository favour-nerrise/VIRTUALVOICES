import React, { Component } from 'react';
import { PolarArea } from 'react-chartjs';

export default class Emotion extends Component {

  render() {
    if(!this.props.emotion){
      return null;
    }
    const keys = Object.keys(this.props.emotion);
    const values = Object.values(this.props.emotion).map(v=>Math.round(v*100));
    const data = [
      {
        value: values[0],
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: keys[0]
      },
      {
        value: values[1],
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: keys[1]
      },
      {
        value: values[2],
        color: "#FDB45C",
        highlight: "#FFC870",
        label: keys[2]
      },
      {
        value: values[3],
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: keys[3]
      },
      {
        value: values[4],
        color: "#4D5360",
        highlight: "#616774",
        label: keys[4]
      }
    ];

    const options = {
      //Boolean - Show a backdrop to the scale label
      scaleShowLabelBackdrop : true,
    
      //String - The colour of the label backdrop
      scaleBackdropColor : "rgba(255,255,255,0.75)",
    
      // Boolean - Whether the scale should begin at zero
      scaleBeginAtZero : true,
    
      //Number - The backdrop padding above & below the label in pixels
      scaleBackdropPaddingY : 2,
    
      //Number - The backdrop padding to the side of the label in pixels
      scaleBackdropPaddingX : 2,
    
      //Boolean - Show line for each value in the scale
      scaleShowLine : true,
    
      //Boolean - Stroke a line around each segment in the chart
      segmentShowStroke : true,
    
      //String - The colour of the stroke on each segment.
      segmentStrokeColor : "#fff",
    
      //Number - The width of the stroke value in pixels
      segmentStrokeWidth : 2,
    
      //Number - Amount of animation steps
      animationSteps : 200,
    
      //String - Animation easing effect.
      animationEasing : "easeOutElastic",
    
      //Boolean - Whether to animate the rotation of the chart
      animateRotate : true,
    
      //Boolean - Whether to animate scaling the chart from the centre
      animateScale : true,
      // {% raw %}
      //String - A legend template
      legendTemplate : `
      "<ul class=\"<%=name.toLowerCase()%>-legend\">
        <% for (var i=0; i<segments.length; i++){%>
          <li>
            <span style=\"background-color:<%=segments[i].fillColor%>\">
              <%if(segments[i].label){%>
                <%=segments[i].label%>
              <%}%>
            </span>
          </li>
        <%}%>
      </ul>"`
      // {% endraw %}
    };
    
    const colors = ["red","grey","yellow","purple","green"]

    return (
      <div className="chart z-depth-2">
        <PolarArea data={data} options={options} width="300" height="300"></PolarArea>
        <div className="chart-legend">
          {keys.map((key, i) => (
            <div className="chart-legend-key">
              <div className={`chart-legend-key-circle ${colors[i]}`}></div>
              <h3>{key}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}