import React from 'react'
import { Route, Routes } from "react-router-dom";
import HeaderMain from './Headers/HeaderMain';
import Users from './Content/Users';
import Status from './Content/Status';
function Layouts() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HeaderMain />}>
                    <Route path='Users' element={<Users />} />
                    <Route path='Status' element={<Status />} />
                   
                </Route>
            </Routes>
        </>
    )
}

export default Layouts