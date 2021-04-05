import React, { useEffect, useRef, useState } from 'react';
import { select, Selection } from 'd3-selection'
import { axisBottom, axisLeft, max, scaleBand, scaleLinear } from 'd3';
import styled from 'styled-components'
import randomstring from 'randomstring'

const initialData = [
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
  marginTop: 50,
  marginLeft: 100
}

const Test04: React.FC = () => {
  const ref = useRef<SVGSVGElement | null>(null)
  const [selection, setSelection] = useState<null | Selection<SVGSVGElement | null, unknown, null, undefined>>(null)
  const [data, setData] = useState(initialData)

  const maxValue = max(data, d => d.number)
  let y = scaleLinear()
      .domain([0, maxValue!])
      .range([dimensions.chartHeight, 0])

  let x = scaleBand()
      .domain(data.map(d => d.name))
      .range([0, dimensions.chartWidth])
      .paddingInner(0.1)

  useEffect(() => {
    if(!selection) {
      setSelection(select(ref.current))
    } else {
      selection
        .append('g')
        .attr('transform', `translate(${dimensions.marginLeft}, ${dimensions.marginTop})`)
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('width', x.bandwidth)
        .attr('height', d => dimensions.chartHeight  - y(d.number))
        .attr('x', d => {
          const xValue = x(d.name)
          if (xValue) {
            return xValue
          }
          return null
        })
        .attr('y', d => y(d.number))
        .attr('fill', 'orange')
        
    }
  }, [data, selection, x, y])

  useEffect(() => {
    if (selection) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      y = scaleLinear()
        .domain([0, maxValue!])
        .range([dimensions.chartHeight, 0])

      // eslint-disable-next-line react-hooks/exhaustive-deps
      x = scaleBand()
        .domain(data.map(d => d.name))
        .range([0, dimensions.chartWidth])
        .paddingInner(0.1)

      const rects = selection.selectAll('rect').data(data)

      rects
        .exit()
        .remove()
      
      rects
        .attr('width', x.bandwidth)
        .attr('height', d => dimensions.chartHeight  - y(d.number))
        .attr('x', d => {
          const xValue = x(d.name)
          if (xValue) {
            return xValue
          }
          return null
        })
        .attr('y', d => y(d.number))
        .attr('fill', 'orange')

      rects
        .enter()
        .append('rect')
        .attr('width', x.bandwidth)
        .attr('height', d => dimensions.chartHeight  - y(d.number))
        .attr('x', d => {
          const xValue = x(d.name)
          if (xValue) {
            return xValue
          }
          return null
        })
        .attr('y', d => y(d.number))
        .attr('fill', 'orange')
    }
  }, [data])

  const addRandom = () => {
    const dataToBeAdded = {
      name: randomstring.generate(10),
      number: Math.floor(Math.random()*(8000) + 1000)
    }
    console.log(dataToBeAdded.number)
    setData([...data, dataToBeAdded])
  }

  const removeLast = () => {
    if (data.length === 0) {
      return
    }
    const slicedData = data.slice(0, data.length -1)
    setData(slicedData)
  }

  return (
    <StyledBase>
      <svg ref={ref} width={dimensions.width} height={dimensions.height} />
      <button onClick={addRandom}>Add Random</button>
      <button onClick={removeLast}>Remove Last</button>
    </StyledBase>
  );
};

const StyledBase = styled.div`
  margin: 50px;
`

export default Test04;
