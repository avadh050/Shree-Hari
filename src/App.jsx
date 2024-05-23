import React from 'react'
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'


const App = () => {
  return (
   <>
   <div className='h-full'>
   <Header/>
    <Main></Main>
    <Footer/>
    </div>
   </>
  )
}

export default App