import React, { useEffect, useRef, useState } from 'react';
import { select, Selection } from 'd3-selection'
import { axisBottom, axisLeft, max, scaleBand, scaleLinear } from 'd3';
import styled from 'styled-components'

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

const dimensions = {
  width: 800,
  height: 500,
  chartWidth: 700,
  chartHeight: 400,
  marginLeft: 100
}

const Test03: React.FC = () => {
  const ref = useRef<SVGSVGElement | null>(null)
  const [selection, setSelection] = useState<null | Selection<SVGSVGElement | null, unknown, null, undefined>>(null)

  const maxValue = max(data, d => d.number)
  const y = scaleLinear()
      .domain([0, maxValue!])
      .range([0, dimensions.chartHeight])

  const x = scaleBand()
      .domain(data.map(d => d.name))
      .range([0, dimensions.chartWidth])
      .paddingInner(0.3)

  const yAxis = axisLeft(y)
  const xAxis = axisBottom(x)

  useEffect(() => {
    if(!selection) {
      setSelection(select(ref.current))
    } else {
      const xAxisGroup = selection
        .append('g')
        .attr('transform', `translate(${dimensions.marginLeft}, ${dimensions.chartHeight})`)
        .call(xAxis)
      const yAxisGroup = selection
        .append('g')
        .attr('transform', `translate(${dimensions.marginLeft}, 0)`)
        .call(yAxis)

      selection
        .append('g')
        .attr('transform', `translate(${dimensions.marginLeft},0)`)
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
  }, [selection, x, xAxis, y, yAxis])

  return (
    <StyledBase>
      <svg ref={ref} width={dimensions.width} height={dimensions.height} />
    </StyledBase>
  );
};

const StyledBase = styled.div`
  margin: 50px;
`

export default Test03;
