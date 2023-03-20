import { useState, useEffect, useRef } from 'react'
import { useFormContext } from 'react-hook-form'

const RangeSlider = ({
  initialMin,
  initialMax,
  min,
  max,
  step,
  priceCap,
  children,
}) => {
  const progressRef = useRef(null)
  const [minValue, setMinValue] = useState(initialMin)
  const [maxValue, setMaxValue] = useState(initialMax)
  const { setValue } = useFormContext()

  const handleMin = (e) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) > parseInt(maxValue)) {
      } else {
        setMinValue(parseInt(e.target.value))
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseInt(e.target.value))
      }
    }
  }

  const handleMax = (e) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) < parseInt(minValue)) {
      } else {
        setMaxValue(parseInt(e.target.value))
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseInt(e.target.value))
      }
    }
  }

  useEffect(() => {
    progressRef.current.style.left = (minValue / max) * step * 100 + '%'
    progressRef.current.style.right =
      (step - (maxValue / max) * step) * 100 + '%'
    setValue('seo-filter', [minValue, maxValue].toString())
  }, [minValue, maxValue, max, step])

  return (
    <div className="">
      <div className="">
        <div className="text-range-mm my-1 flex items-center justify-between text-sm font-semibold">
          <div className="rounded-md">
            <span className="p-2 text-xs"> {minValue}</span>
          </div>
          <div className="ml-2"> {children} </div>
          <div className=" ">
            <span className="p-2 text-xs"> {maxValue}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="slider relative h-1 rounded-md bg-gray-300">
            <div
              className="progress bg-filter absolute h-1 rounded "
              ref={progressRef}
            ></div>
          </div>

          <div className="range-input relative  ">
            <input
              onChange={handleMin}
              type="range"
              min={min}
              step={step}
              max={max}
              value={minValue}
              title={minValue}
              className="range-min pointer-events-none absolute  -top-1  h-1   w-full  appearance-none bg-transparent"
            />

            <input
              onChange={handleMax}
              type="range"
              min={min}
              step={step}
              max={max}
              value={maxValue}
              title={maxValue}
              className="range-max pointer-events-none absolute  -top-1 h-1  w-full appearance-none  bg-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RangeSlider
