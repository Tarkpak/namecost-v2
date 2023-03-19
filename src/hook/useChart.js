import React, { useEffect } from 'react'
import * as echarts from 'echarts'
import useWindowSize from './useWindowSize';

function useChart(chartRef, options) {
  let myChart = null
  const windowSize = useWindowSize();

  function renderChart() {
    const chart = echarts.getInstanceByDom(chartRef.current)
    if (chart) {
      myChart = chart
    } else {
      myChart = echarts.init(chartRef.current)
    }
    myChart.setOption(options)
  }

  useEffect(() => {
    renderChart()
  }, [options])

  useEffect(() => {
    myChart && myChart.resize();
  }, [windowSize])

  useEffect(() => {
    return () => {
      myChart && myChart.dispose()
    }
  }, [])

  return
}

export default useChart

