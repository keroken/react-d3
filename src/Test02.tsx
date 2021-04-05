import React, { useEffect, useRef, useState } from 'react';
import { select, Selection } from 'd3-selection'
import { max, scaleBand, scaleLinear } from 'd3';

const data = [
  {
    name: 'foo',
    number: 9000
  },
  {
    name: 'bar',
    number: 2340
  },
  {
    name: 'baz',
    number: 3658
  },
  {
    name: 'hoge',
    number: 7529
  },
  {
    name: 'piyo',
    number: 8275
  },
]

const Test02: React.FC = () => {
  const ref = useRef<SVGSVGElement | null>(null)
  const [selection, setSelection] = useState<null | Selection<SVGSVGElement | null, unknown, null, undefined>>(null)

  const maxValue = max(data, d => d.number)
  const y = scaleLinear()
      .domain([0, maxValue!])
      .range([0, 500])

  const x = scaleBand()
      .domain(data.map(d => d.name))
      .range([0, 800])
      .paddingInner(0.3)
      .paddingOuter(0.8)

  useEffect(() => {
    if(!selection) {
      setSelection(select(ref.current))
    } else {
      selection
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('width', x.bandwidth)
        .attr('x', d => {
          const xValue = x(d.name)
          if (xValue) {
            return xValue
          }
          return null
        })
        .attr('fill', 'orange')
        .attr('height', d => y(d.number))
    }
  }, [selection, x, y])

  return (
    <div>
      <svg ref={ref} width={1200} height={500} />
    </div>
  );
};

export default Test02;
