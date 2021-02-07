import React, { useEffect } from 'react';
import { Input } from 'antd';
import { searchUser } from '../../service';
import { useDispatch } from "react-redux";
import { setListUsers, setLoading, setTotalUsers, setSearch } from '../../store';
import history from '../../history';
const { Search } = Input;

export default function Navbar() {
    
    const onSearch = async value => {
        // history.push(`/${value}`);
        window.location.href = `/${value}`;
    }
    return (
        <div className="nav-bar">
           <Search placeholder="input username" onSearch={onSearch} style={{ width: "60%" }} />
        </div>
    )
}
