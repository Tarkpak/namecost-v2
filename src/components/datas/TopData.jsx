/* This example requires Tailwind CSS v2.0+ */
import { useRef } from 'react'
import useChart from '@/hook/useChart'

import { MyTypeSelect } from '@/components/common/datas/MyTypeSelect'
import { MyTypeSelectPlus } from '@/components/common/datas/MyTypeSelectPlus'
import { BannerWords } from '@/components/common/BannerWords'

const tooltip = {
  trigger: 'axis',
  axisPointer: {
    type: 'shadow',
  },
}

const grid = {
  left: '3%',
  right: '4%',
  bottom: '3%',
  containLabel: true,
}
const xAxis = {
  type: 'value',
  boundaryGap: [0, 0.01],
}

const Chart = ({ data = {} }) => {
  const chartRef = useRef(null)
  const options = {
    tooltip: tooltip,
    legend: {},
    grid: grid,
    xAxis: xAxis,
    yAxis: {
      type: 'category',
      data: data.category?.split(','),
    },
    series: [
      {
        name: data.date,
        type: 'bar',
        data: data.bardata?.split(','),
      },
    ],
  }
  useChart(chartRef, options)
  return (
    <>
      <MyTypeSelectPlus
        chartRef={chartRef}
        data={data.category}
        infos="* Inclue Godaddy , Dropcatch and Namejet datas."
      />
    </>
  )
}

const Registrarhidden = () => {
  return (
    <>
      <span className="hidden sm:inline">Top </span>Reg
      <span className="hidden sm:inline">istrar</span>
    </>
  )
}
const Nshidden = () => {
  return (
    <>
      <span className="hidden sm:inline">Top </span>N
      <span className="hidden sm:inline">ame</span>S
      <span className="hidden sm:inline">erver</span>
    </>
  )
}
const Sslhidden = () => {
  return (
    <>
      <span className="hidden sm:inline">Top </span>SSL
    </>
  )
}
const Mxhidden = () => {
  return (
    <>
      <span className="hidden sm:inline">Top </span>MX
    </>
  )
}
const Typeselect = [
  {
    id: 1,
    label: <Registrarhidden />,
    content: (data) => <Chart data={data}/>,
  },
  {
    id: 2,
    label: <Nshidden />,
    content: (data) => <Chart data={data}/>,
  },
  {
    id: 3,
    label: <Sslhidden />,
    content: (data) => <Chart data={data}/>,
  },
  {
    id: 4,
    label: <Mxhidden />,
    content: (data) => <Chart data={data}/>,
  },
]

const AuctionIcons = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-world-www"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M19.5 7a8.998 8.998 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path>
        <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
        <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4.004"></path>
        <path d="M19.5 17a8.998 8.998 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path>
        <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path>
        <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4.004"></path>
        <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path>
        <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path>
        <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path>
      </svg>
    </>
  )
}

const CatchIcons = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-sort-descending"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="4" y1="6" x2="13" y2="6"></line>
        <line x1="4" y1="12" x2="11" y2="12"></line>
        <line x1="4" y1="18" x2="11" y2="18"></line>
        <polyline points="15 15 18 18 21 15"></polyline>
        <line x1="18" y1="6" x2="18" y2="18"></line>
      </svg>
    </>
  )
}
export function TopData() {
  return (
    <>
      <div className="relative   min-h-full rounded-lg bg-white md:grid md:place-items-center">
        <div className="mx-auto min-w-full max-w-max">
          <main>
            <div className="mx-auto max-w-7xl pt-2 sm:px-4 sm:pt-4">
              <div className="mb-8 px-2 sm:px-0">
                <div className="">
                  <div className="text-gray-500">
                    <BannerWords
                      wt={'TOP Domain Registrars, NS, SSL, MX provider'}
                      wb={'Find the best domains service provider for you.'}
                      iconl={<AuctionIcons />}
                      iconr={<CatchIcons />}
                    />

                    <MyTypeSelect filters={Typeselect} />
                  </div>
                </div>
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
