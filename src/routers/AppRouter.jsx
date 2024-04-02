import React from 'react'
import { CardCards } from '../Components/CardCards'
import { CardResumen } from '../Components/CardResumen'
import NotFound from '../Components/NotFound'
import { Route, Routes } from 'react-router-dom'
import { Header } from '../Components/Header'

export const AppRouter = () => {
    return (
            <Routes>
                <Route path='/*' element={<CardCards />} />
                <Route path='/resumen/:capNumero' element={<CardResumen />} />
                <Route path="/404" component={<NotFound />} />
            </Routes>
    )
}
