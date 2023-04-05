import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Landingpage from '../../Landing Page/Landingpage'

import SingleSliderPage from '../Single Page/SingleSliderPage'


const MyRoute = [
    
    {path : '/' , element : <Landingpage />},

    {path : '/BestInBeauty/:id' , element : <SingleSliderPage/>},

]



function AllRoutes() {
  return (

    <>
    
        <Routes>

                {MyRoute.map((el) => {

                   return <Route key = {el.path} path = {el.path} element = {el.element}></Route>

                })}


        </Routes>
    
    
    </>
  
  )
}

export default AllRoutes