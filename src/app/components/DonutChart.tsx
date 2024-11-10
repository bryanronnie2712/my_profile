import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DonutChart = ({ suitability }: {suitability: any}) => {
  const svgRef:any = useRef();

  useEffect(() => {
    const width = 200;
    const height = 200;
    const thickness = 6;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Create background arc
    const backgroundArc:any = d3.arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius)
      .startAngle(0)
      .endAngle(2 * Math.PI);

    svg.append('path')
      .attr('d', backgroundArc())
      .attr('fill', '#e6e6e6')
      .attr('stroke', 'black') // Add black outline stroke
      .attr('stroke-width', 1);

    // Create foreground arc (with animation)
    const foregroundArc:any = d3.arc()
      .innerRadius(radius - thickness)
      .outerRadius(radius)
      .startAngle(0);

    const foregroundPath = svg.append('path')
      .datum({ endAngle: 0 }) // Initialize with end angle at 0
      .attr('fill', suitability < 40 ? "red" : (suitability < 75 ? 'yellow' :'green'))
      .attr('d', foregroundArc)
      .attr('stroke', 'black') // Add black outline stroke
      .attr('stroke-width', 1);

    // Animate the foreground arc from 0 to the target angle
    foregroundPath.transition()
      .duration(2000)
      .attrTween('d', function (d) {
        const targetAngle = (suitability / 100) * 2 * Math.PI;
        const interpolate = d3.interpolate(d.endAngle, targetAngle);
        return function (t) {
          d.endAngle = interpolate(t);
          return foregroundArc(d);
        };
      });

    // Add percentage text inside the donut
    svg.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '.35em')
      .attr('font-size', '24px')
      .attr('fill', suitability < 40 ? "red" : (suitability < 75 ? 'yellow' :'green'))
      .text(`${suitability}%`);
  }, [suitability]);

  return <svg ref={svgRef}></svg>;
};

export default DonutChart;
