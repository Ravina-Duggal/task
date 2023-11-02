import { Outlet } from "react-router-dom";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

export default function Master(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}