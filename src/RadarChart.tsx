import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3'
import { select, Selection } from 'd3-selection'


const RadarChart: React.FC = () => {
  const ref = useRef<SVGSVGElement | null>(null)
  const [selection, setSelection] = useState<null | Selection<SVGSVGElement | null, unknown, null, undefined>>(null)

  useEffect(() => {
    if(!selection) {
      setSelection(select(ref.current))
    } else {
      let features = ['熱量', '外向性', '身だしなみ', '独自性', '動画品質'];
      let data: {[index: string]: number} = {}
      features.forEach(f => data[f] = 1 + Math.floor(Math.random() * 5));
      
      let radialScale = d3.scaleLinear()
          .domain([0,5])
          .range([0,60])
      let ticks = [1,2,3,4,5];
      ticks.forEach(t =>
        selection.append('circle')
          .attr('cx', 120)
          .attr('cy', 120)
          .attr('fill', 'none')
          .attr('stroke', 'gray')
          .attr('r', radialScale(t))
      );
      const angleToCoordinate = (angle: number, value: number) => {
        let x = Math.cos(angle) * radialScale(value);
        let y = Math.sin(angle) * radialScale(value);
        return {'x': 120 + x, 'y': 120 - y};
      }
      for (let i = 0; i < features.length; i++) {
        let ft_name = features[i];
        let angle = (Math.PI / 2) + (2 * Math.PI * -i / features.length);
        let line_coordinate = angleToCoordinate(angle, 5);
        let label_coordinate = angleToCoordinate(angle, 7.5);

        selection.append('line')
          .attr('x1', 120)
          .attr('y1', 120)
          .attr('x2', line_coordinate.x)
          .attr('y2', line_coordinate.y)
          .attr('stroke', 'black')

        selection.append("text")
          .attr('x', label_coordinate.x)
          .attr('y', label_coordinate.y)
          .attr('font-size', 12)
          .attr('text-anchor', 'middle')
          .attr('transform', `translate(0, 5)`)
          .text(ft_name);
      }
      
      const getPathCoordinates = (data_point: {[index: string]: number}) => {
        let coordinates = [];
        for (let i =0; i < features.length; i++) {
          let ft_name = features[i];
          let angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
          coordinates.push(angleToCoordinate(angle, data_point[ft_name]));
        }
        return coordinates;
      }

      let coordinates = getPathCoordinates(data);
      let points: [number, number][] = coordinates.map((point) => [point.x, point.y]);

      let path = d3.path();
      path.moveTo(points[0][0], points[0][1]);
      for (let j = 1; j < features.length; j++) {
        path.lineTo(points[j][0], points[j][1]);
      }
      path.closePath();
      console.log(points);

      selection.append('path')
        .attr('d', path.toString())
        .attr('stroke-width', 2)
        .attr('stroke', '#17D4E5')
        .attr('fill', 'rgba(23, 212, 229, 0.5)')
        .attr('stroke-opacity', 1)
        .attr('opacity', 0.5)

      selection.append('g')
        .selectAll('circle')
        .data(points)
        .enter().append('circle')
        .attr('cx', d => d[0])
        .attr('cy', d => d[1])
        .attr('r', 4)
        .attr('fill', '#17D4E5')
    }
  }, [selection])

  return (
    <div>
      <svg ref={ref} width={240} height={240} />
    </div>
  );
};

export default RadarChart;
