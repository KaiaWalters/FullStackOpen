import React from 'react'

const StatisticLine = ({title,value}) => {
    return (
        <>
          <>{title}: {value} %</> 
          <br/>
        </>
    )
}

export default StatisticLine