import React from 'react'
import Title from './Title'
import SearchCountry from './SearchCountry'
import Cumulative from './Cumulative'
export default function Heading() {
    return (
        <div className="heading">
          <Title/>
          <SearchCountry/>
          <Cumulative/>
        </div>
    )
}
