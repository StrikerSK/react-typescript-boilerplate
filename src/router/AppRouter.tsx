import * as React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FirstParagraph from "../components/FirstParagraph";

export default () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirstParagraph/>}/>
                <Route path="/test" element={<h1>Hello custom page</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}