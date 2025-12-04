import React from "react"
import Landing from "./components/Landing"
import Goals from "./components/Goals"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('landing')

  function changePage(newPage){
    console.log('changed page')
    setCurrentPage(newPage)
  }

  return (
    <>
    <Header/>
    {currentPage === 'landing' && <Landing onClick={changePage}/>}
    {currentPage === 'goals' && <Goals/>}
    <Footer/>
    </>
  )
}


