import React from "react"

import { Helmet } from "react-helmet"

import s from "./main.module.css"
import "./layout.css"

export default function Main() {
  return (
    <div className={s.main}>
      <Helmet>
        <title>Home | STEM Model United Nations</title>
      </Helmet>
      <h1>STEM Model United Nations</h1>
      <h2>Coming Soon.</h2>
    </div>
  )
}
