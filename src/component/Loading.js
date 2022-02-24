import React from 'react';
import { Bars } from 'react-loader-spinner';



const Loading = () => (
  <div style = {spinnerStyle}>
    <Bars type = "TailSpin" color = "#ffa500" height = "80" width ="80" />
  </div>
)

const spinnerStyle = {
  width: "100%",
  height: "100",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
}

export default Loading;