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

const BubbleChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = Math.min(900, window.innerWidth * 0.95);
    const height = Math.min(500, window.innerHeight * 0.60);
    
    // Clear previous chart content
    svg.selectAll("*").remove();

    // Define the color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Define the pack layout
    const pack = d3.pack()
      .size([width, height])
      .padding(1.5);

    // Process data into a hierarchical structure
    const root = d3.hierarchy({ children: data })
      .sum(d => d.radius)
      .each(d => {
        if (d.id) {
          const id = d.id;
          const i = id.lastIndexOf(".");
          d.id = id;
          d.package = id.slice(0, i);
          d.class = id.slice(i + 1);
        }
      });

    // Generate the nodes
    const nodes = pack(root).leaves();

    // Determine minimum and maximum y-coordinates to calculate vertical bounds
    const yMin = d3.min(nodes, d => d.y - d.r);
    const yMax = d3.max(nodes, d => d.y + d.r);

    // Adjust the SVG height based on the calculated bounds
    const adjustedHeight = yMax - yMin;

    // Create groups for each bubble
    const node = svg
      .attr("width", width)
      .attr("height", adjustedHeight + 10) // Adjust height to remove blank space
      .attr("viewBox", `0 ${yMin} ${width} ${adjustedHeight}`) // Shift viewBox to start at yMin
      .selectAll("g")
      .data(nodes)
      .enter()
      .append("g")
      .attr("transform", d => `translate(${d.x},${d.y})`)
      .attr("class", "node");

    // Append circles to each group
    node.append("circle")
    .attr("id", d => d.id)
    .attr("r", d => d.r)
    .style("fill", d => color(d.category))
    .attr("fill", (d) => color(d.category))
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.5)
    .attr("cursor", "pointer")          // Change border color
    .on("mouseover", function (event, d) {
      d3.select(this)
        .attr("stroke", "#000")          // Change border color
        .attr("stroke-width", 3)         // Increase border width
        .attr("fill", d3.rgb(color(d.category)).darker(1));  // Darken fill color
    })
    .on("mouseout", function (event, d) {
      d3.select(this)
        .attr("stroke", "#fff")          // Reset border color
        .attr("stroke-width", 1.5)       // Reset border width
        .attr("fill", color(d.category)); // Reset fill color;
    });


    // Append text to the center of each circle
    node.append("text")
      .attr("dy", "0.3em")  // Center text vertically
      .style("text-anchor", "middle") // Center text horizontally
      .style("fill", "#fff") // Text color
      .style("font-size", d => Math.min(2 * d.r / d.data.name.length, d.r / 3) + "px")  // Dynamically adjust font size
      .attr("cursor", "pointer")          // Change border color
      .text(d => d.data.name)
      .on("mouseover", function (event, d) {
        d3.select(this.parentNode).select("circle")  // Select parent circle
          .attr("stroke", "#000")                    // Change border color
          .attr("cursor", "pointer")                 // Change cursor style
          .attr("stroke-width", 3)                   // Increase border width
          .attr("fill", d3.rgb(color(d.category)).darker(1));  // Darken fill color
      })
      .on("mouseout", function (event, d) {
        d3.select(this.parentNode).select("circle")  // Select parent circle
          .attr("stroke", "#fff")                    // Reset border color
          .attr("stroke-width", 1.5)                 // Reset border width
          .attr("fill", color(d.category));          // Reset fill color
      });

    node.append("title").text((d) => d.name);


  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default BubbleChart;
