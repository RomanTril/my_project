import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import {Footer,Header} from "../components";


const MainLayout = () => {

    const {background, color} = useSelector(state => state.themeReducer);

    return (

        <div className="pageTheme" style={{color,background}}>

            <Header />
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayout};