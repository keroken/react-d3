import React, { useEffect, useRef, useState } from 'react';
import { select, Selection } from 'd3-selection'

const data = [
  {
    units: 150,
    color: 'purple',
  },
  {
    units: 100,
    color: 'orange',
  },
  {
    units: 50,
    color: 'red',
  },
  {
    units: 75,
    color: 'teal',
  },
  {
    units: 120,
    color: 'blue',
  },
]

const Test01: React.FC = () => {
  const ref = useRef(null)
  const [selection, setSelection] = useState<null | Selection<null, unknown, null, undefined>>(null)

  useEffect(() => {
    if(!selection) {
      setSelection(select(ref.current))
    } else {
      const rects = selection
        .selectAll('rect')
        .data(data)
        .attr('width', 100)
        .attr('height', d=>d.units)
        .attr('fill', d=>d.color)
        .attr('x', (_, i)=>i*100)

      rects
        .enter()
        .append('rect')
        .attr('width', 100)
        .attr('height', d=>d.units)
        .attr('fill', d=>d.color)
        .attr('x', (_, i)=>i*100)
    }
  }, [selection])

  return (
    <div>
      <svg ref={ref} width={500}>
        <rect />
        <rect />
        <rect />
      </svg>
    </div>
  );
};

export default Test01;
