import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
const Header = () => {
    const { cartTotalQuantity } = useSelector((state => state.cartRed))


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand " href="#">
                        <span >Shopping</span>

                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className={(navdata) => navdata.isActive ? "nav-link active" : "nav-link"} aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/products" className={(navdata) => navdata.isActive ? "nav-link active" : "nav-link"} >Products</NavLink>
                            </li>

                        </ul>
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item">
                                <NavLink to="/cart" className={(navdata) => navdata.isActive ? "nav-link active me-3" : "nav-link me-3"} >
                                    <span className="badge rounded-pill bg-primary me-1">
                                        {cartTotalQuantity}
                                    </span>
                                    <i className="bi bi-basket fs-4"></i>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Header