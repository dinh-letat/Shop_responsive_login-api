import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ACCESSTOKEN, settings, USER_LOGIN } from '../../util/config';
import {history} from '../../index';
export default function HeaderHome() {
    const { userProfile } = useSelector(state => state.userReducer);
    const renderLogin = () => {
        if(userProfile.name) {
            return <>
            <NavLink className="nav-link" to="/profile">Hello ! {userProfile.name}
            </NavLink> 
            <button className="nav-link" style={{background:'none',border:'none'}} onClick={()=>{
                settings.eraseCookie(ACCESSTOKEN,0);
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(ACCESSTOKEN);
                //Sau khi đăng xuất xong chuyển về trang login đồng thời reload lại page clear redux
                window.location.href = '/login';

            }} >Đăng xuất 
            </button> 
            </>
        }
        return <NavLink className="nav-link" to="/login">Login</NavLink>
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">Shoes Shop</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        {renderLogin()}
                    </li>
                </ul>

                <form className="d-flex my-2 my-lg-0">
                    <input className="form-control me-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}
