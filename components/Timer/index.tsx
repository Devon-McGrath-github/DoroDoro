import React from 'react'
import { useState, useEffect } from 'react';

// set intiial time
const INITIAL_TIME: number = 120

export default function CountdownTimer() {
  // useState to set time remaining
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_TIME)
  

  const secondsToDisplay = secondsRemaining % 60
  const minutesToDisplay = ( secondsRemaining - secondsToDisplay ) / 60
  

  // requires use effect,

  useEffect(() => {

    // add if statement so timer stops at 0 
    const interval = setInterval(() => {
      setSecondsRemaining(secondsRemaining => secondsRemaining - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  // return seconds left as an element on the page

  return (
    <div>
      {/* need to add function to display 2 digits (clock format) */}
      timer: {minutesToDisplay} : {secondsToDisplay}
    </div>
  )
}