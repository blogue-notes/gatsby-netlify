import React from "react"
import Header from "../pages/components/Header"
import Footer from "../pages/components/Footer"

const PrimaryLayout = props => (
  <div>
    <Header></Header>
    <main className="container">
      <div className="row justify-content-md">
        <div className={props.column}>{props.children}</div>
      </div>
    </main>
    <Footer></Footer>
  </div>
)

export default PrimaryLayout
