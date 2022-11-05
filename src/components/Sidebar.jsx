import { ArrowRightOnRectangleIcon, Cog6ToothIcon, HomeIcon, Squares2X2Icon, UsersIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <h1>CAIT</h1>
                <div className="category-wrapper">
                    <div className="category active">
                        <Squares2X2Icon className="icon" />
                        <p>My Apps</p>
                    </div>
                    <div className="category">
                        <UsersIcon className="icon" />
                        <p>Resources</p>
                    </div>
                </div>
            </div>
            <div className="sidebar-bottom">
                <div className="category-wrapper">
                    <div className="category">
                        <HomeIcon className="icon" />
                        <p>My Organisation</p>
                    </div>
                    <div className="category">
                        <Cog6ToothIcon className="icon" />
                        <p>Settings</p>
                    </div>
                    <div className="category">
                        <ArrowRightOnRectangleIcon className="icon" />
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Sidebar;