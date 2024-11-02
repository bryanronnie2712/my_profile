// components/BubbleChart.js
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

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

    // Draw circles for each data point
    const node = svg
      .attr("width", width)
      .attr("height", height)
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("r", (d) => d.radius)
      .attr("fill", (d) => color(d.category))
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5);

    // Define text labels
    node.append("title").text((d) => d.name);

    node
      .attr("width", width)
      .attr("height", height)
      .selectAll("g") // Group elements for each bubble
      .data(data)
      .enter()
      .append("g")
      .attr("transform", (d) => `translate(${d.x}, ${d.y})`);

    node
      .append("circle")
      .attr("r", (d) => d.radius)
      .attr("fill", (d) => color(d.category))
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5);

    // Append text (name) in the center of each bubble
    node
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.3em")
      .style("font-size", "10px")
      .style("fill", "#fff")
      .attr("stroke", "#fff")
      .text((d) => d.name);

    // Append icon (using an SVG URL or base64-encoded SVG)
    // node
    //   .append("image")
    //   .attr("xlink:href", "your-icon-url.svg") // Replace with icon URL or base64 string
    //   .attr("width", 15) // Adjust icon size as needed
    //   .attr("height", 15)
    //   .attr("x", -7.5) // Center the icon horizontally
    //   .attr("y", -7.5); // Center the icon vertically

    simulation.on("tick", () => {
      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    });

    return () => simulation.stop();
  }, [data, searchTerm]);

  return <svg ref={svgRef}></svg>;
};

export default BubbleChart;
