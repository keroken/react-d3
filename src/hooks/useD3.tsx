import React, { useEffect, useRef} from 'react';
import * as d3 from 'd3';

export const useD3 = (renderChartFn: (arg0: d3.Selection<null, unknown, null, undefined>) => void, dependencies: React.DependencyList | undefined) => {
  const ref = useRef(null);

  useEffect(() => {
    renderChartFn(d3.select(ref.current));
    return() => {};
  }, dependencies);
  return ref;
};

