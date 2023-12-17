import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <div style={{display: "flex", gap: "1rem"}}>
        <p><Link to="/login">Login</Link></p>
        <p><Link to="/register">Register</Link></p>
        <p><Link to="/unauthorized">Unauthorized</Link></p>
        <p><Link to="/home">Home</Link></p>
        <p><Link to="/users">Users</Link></p>
        <p><Link to="/products">Products</Link></p>
      </div>

      <Outlet />
    </div>
  )
}

export default Layout