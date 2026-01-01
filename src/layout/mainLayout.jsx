import { NavLink,Outlet } from "react-router";

export default MainLayout =()=>{
    return(
        <div>
             <nav style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
            <NavLink to="/" end>home</NavLink>
            <NavLink to="/about" end>about</NavLink>
         </nav>
         <Outlet />
        </div>
    )
} 