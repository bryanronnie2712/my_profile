// components/BubbleChart.js
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const BubbleChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = Math.min(900, window.innerWidth * 0.95);
    const height = Math.min(500, window.innerHeight * 0.60);
    
    // Clear previous chart content
    svg.selectAll("*").remove();

    // Define the color scale
    const color = d3.scaleOrdinal(d3.schemeDark2).domain(d3.range(0,10));

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

    const centerX = width / 2;
    const centerY = (yMin + yMax) / 2;

    // Create groups for each bubble
    const node = svg
      .attr("width", width)
      .attr("height", adjustedHeight + 10) // Adjust height to remove blank space
      .attr("viewBox", `0 ${yMin} ${width} ${adjustedHeight}`) // Shift viewBox to start at yMin
      .selectAll("g")
      .data(nodes)
      .enter()
      .append("g")
      .attr("transform", `translate(${centerX},${centerY})`)
      .attr("class", "node")
      .style("opacity", 0);

    // Append circles to each group
    const circles = node.append("circle")
      .attr("id", d => d.id)
      .attr("r", 0)
      .style("fill", d => color(d.data.category))
      .attr("fill", (d) => color(d.data.category))
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .attr("cursor", "pointer")          // Change border color
      .on("mouseover", function (event, d) {
        d3.select(this)
          .attr("stroke", "#000")          // Change border color
          .attr("stroke-width", 2)         // Increase border width
          .attr("fill", d3.rgb(color(d.data.category)).darker(1));  // Darken fill color
      })
      .on("mouseout", function (event, d) {
        d3.select(this)
          .attr("stroke", "#fff")          // Reset border color
          .attr("stroke-width", 1.5)       // Reset border width
          .attr("fill", color(d.data.category)); // Reset fill color;
      });


    // Append text to the center of each circle
    const labels = node.append("text")
      .attr("dy", "0.3em")  // Center text vertically
      .style("text-anchor", "middle") // Center text horizontally
      .style("fill", "#fff") // Text color
      .style("font-size", d => Math.min(2 * d.r / d.data?.name?.length, d.r / 3) + "px")  // Dynamically adjust font size
      .attr("cursor", "pointer")          // Change border color
      .style("opacity", 0)
      .text(d => d.data.name)
      .on("mouseover", function (event, d) {
        d3.select(this.parentNode).select("circle")  // Select parent circle
          .attr("stroke", "#000")                    // Change border color
          .attr("cursor", "pointer")                 // Change cursor style
          .attr("stroke-width", 2)                   // Increase border width
          .attr("fill", d3.rgb(color(d.data.category)).darker(1));  // Darken fill color
      })
      .on("mouseout", function (event, d) {
        d3.select(this.parentNode).select("circle")  // Select parent circle
          .attr("stroke", "#fff")                    // Reset border color
          .attr("stroke-width", 1.5)                 // Reset border width
          .attr("fill", color(d.data.category));          // Reset fill color
      });

    node.append("title").text((d) => d.data.name);

    // Intro animation: float out from center, expand bubbles, fade labels
    const baseDelay = 120;
    const t = d3.transition().duration(1100).ease(d3.easeBackOut.overshoot(1.6));

    node
      .transition(t)
      .delay((d, i) => i * baseDelay)
      .style("opacity", 1)
      .attr("transform", d => `translate(${d.x},${d.y})`);

    circles
      .transition(t)
      .delay((d, i) => i * baseDelay + 100)
      .attr("r", d => d.r);

    labels
      .transition()
      .delay((d, i) => i * baseDelay + 450)
      .duration(600)
      .ease(d3.easeCubicOut)
      .style("opacity", 1);


  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default BubbleChart;
