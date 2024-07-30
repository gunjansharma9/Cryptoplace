import React, { useEffect,useState } from 'react'
import Chart from 'react-google-charts'
import "./LineChart.css"

const LineChart = ({historicalData}) => {
    const [data,setData] = useState([["Date","Prices"]])

    useEffect(() => {
        let dataCopy = [["Date","Prices"]];
        if(historicalData.prices){
            historicalData.prices.map((item)  => {
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
            })
            // slice is to remove last four character of date that is /year or /2024
            setData(dataCopy);
        }
    },[historicalData])
  return (
    <Chart
        chartType='LineChart'
        data={data}
        height="100%"
        legendToggle
    />
  )
}

export default LineChart
