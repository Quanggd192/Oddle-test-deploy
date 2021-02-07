import React, { useEffect } from "react";
import "./index.scss";
import { Row, Col, Pagination } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setListUsers, setLoading, setSearch, setTotalUsers } from '../../store';
import { searchUser } from '../../service';

// const { Column } = Table;
export default function ListUsers(props) {
  useEffect(() => {
    (async () => {
        let query = props.match.params.query;
        dispatch(setSearch(query));
        dispatch(setLoading());
        let result = await searchUser(query);
        setLoading(false);
        let listUsers = result.data.items;
        dispatch(setListUsers(listUsers));
        dispatch(setTotalUsers(result.data.total_count));
    })()
})
  const dispatch = useDispatch();
  const users = useSelector((state) => state.listUsers);
  const count = useSelector((state) => state.totalUsers);
  const query = useSelector((state) => state.search);

  const onChangePage = async (page) => {
    dispatch(setLoading());
    let result = await searchUser(query, page);
    setLoading(false);
    let listUsers = result.data.items;
    dispatch(setListUsers(listUsers));
}
  return (
    <div className="gitusers-container">
      
      <Row>
        <Col span={8}>Avatar</Col>
        <Col span={8}>Username</Col>
        <Col span={8}>Action</Col>
      </Row>
      <br/>
      {users.map((user, index) => {
        return <Row key={index}>
          <Col span={8}><img src={user.avatar_url} style={{width: "50px", height: "50px"}}/></Col>
          <Col span={8}>{user.login}</Col>
          <Col span={8}><Link to={`user/${user.login}`}>See info</Link></Col>
        </Row>;
      })}
      <br/>
      <Pagination onChange={(page, pageSize) => {onChangePage(page)}} defaultCurrent={1} total={count}/>
    </div>
  );
}
