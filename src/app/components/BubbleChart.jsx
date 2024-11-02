// components/BubbleChart.js
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

// const BubbleChart = ({ data, searchTerm }) => {
//   const svgRef = useRef();

//   useEffect(() => {
//     const svg = d3.select(svgRef.current);
//     svg.selectAll("*").remove(); // Clear previous chart

//     const width = 1000;
//     const height = 500;

//     const color = d3.scaleOrdinal(d3.schemeCategory10);

//     // Define bubble simulation
//     const simulation = d3
//       .forceSimulation(data)
//       .force("charge", d3.forceManyBody().strength(5))
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .force(
//         "collision",
//         d3.forceCollide().radius((d) => d.radius + 1)
//       );

//     // Draw circles for each data point
//     const node = svg
//       .attr("width", width)
//       .attr("height", height)
//       .selectAll("circle")
//       .data(data)
//       .enter()
//       .append("circle")
//       .attr("r", (d) => d.radius)
//       .attr("fill", (d) => color(d.category))
//       .attr("stroke", "#fff")
//       .attr("stroke-width", 1.5)
//       .on("mouseover", function (event, d) {
//         d3.select(this)
//           .attr("stroke", "#000")          // Change border color
//           .attr("stroke-width", 3)         // Increase border width
//           .attr("fill", d3.rgb(color(d.category)).darker(1));  // Darken fill color
//       })
//       .on("mouseout", function (event, d) {
//         d3.select(this)
//           .attr("stroke", "#fff")          // Reset border color
//           .attr("stroke-width", 1.5)       // Reset border width
//           .attr("fill", color(d.category)); // Reset fill color;
//       });

//     // Add text to each circle
//     const texts = svg
//     .attr("width", width)
//     .attr("height", height)
//       .selectAll("text")
//       .data(data)
//       .enter()
//       .append("text")
//       .attr("text-anchor", "middle")
//       .text((d) => d.name)
//       .attr("font-size", (d) => d.radius/3)
//       .attr("font-weight", 500)
//       .attr("fill", "white")
//       .attr("cursor", "default")
//       ;

//     // Define hover text labels
//     node.append("title").text((d) => d.name);
//     texts.append("title").text((d) => d.name);

//     // Update positions on each tick of the simulation
//     simulation.on("tick", () => {
//       node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
      
//       // Position text in the center of each circle
//       texts
//         .attr("x", (d) => d.x)
//         .attr("y", (d) => d.y + d.radius/8); // Adjust y to center the text vertically
//     });

//     return () => simulation.stop();
//   }, [data, searchTerm]);

//   return <svg ref={svgRef}></svg>;
// };

const BubbleChart = ({ data, searchTerm }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous chart

    const width = 600;
    const height = 400;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Define bubble simulation
    const simulation = d3
      .forceSimulation(data)
      .force("charge", d3.forceManyBody().strength(5))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collision",
        d3.forceCollide().radius((d) => d.radius + 1)
      );

    // Create group elements for each bubble
    const group = svg
      .attr("width", width)
      .attr("height", height)
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .on("mouseover", function (event, d) {
        d3.select(this).select("circle")
          .attr("stroke", "#000")          // Change border color
          .attr("stroke-width", 3)         // Increase border width
          .attr("fill", d3.rgb(color(d.category)).darker(1)); // Darken fill color
        d3.select(this).select("text")
          .attr("font-weight", "bold")     // Make text bold
          .attr("font-size", (d) => d.radius/3)
          .attr("fill", "#000");           // Change text color
      })
      .on("mouseout", function (event, d) {
        d3.select(this).select("circle")
          .attr("stroke", "#fff")          // Reset border color
          .attr("stroke-width", 1.5)       // Reset border width
          .attr("fill", color(d.category)); // Reset fill color
        d3.select(this).select("text")
          .attr("font-weight", "normal")   // Reset text weight
          .attr("font-size", (d) => d.radius/3)
          .attr("fill", "black");          // Reset text color
      });

    // Append circles to each group
    group
      .append("circle")
      .attr("r", (d) => d.radius)
      .attr("fill", (d) => color(d.category))
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5);

    // Append text to each group
    group
      .append("text")
      .attr("text-anchor", "middle")
      .text((d) => d.name)
      .attr("font-size", (d) => d.radius/3)
      .attr("font-weight", 500)
      .attr("fill", "black")
      .attr("cursor", "default")
      .attr("dy", (d) => d.radius/8); // Center text vertically within the circle

    // Update positions on each tick of the simulation
    simulation.on("tick", () => {
      group.attr("transform", (d) => `translate(${d.x}, ${d.y})`);
    });

    return () => simulation.stop();
  }, [data, searchTerm]);

  return <svg ref={svgRef}></svg>;
};


export default BubbleChart;
