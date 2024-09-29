
import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="font-lato">
            <div className="h-12">
                Navbar
            </div>
            <div className="min-h-[calc(100vh-285px)]">
                <Outlet></Outlet>
            </div>
            <div>
                Footer
            </div>
        </div>
    );
};

export default MainLayout;
