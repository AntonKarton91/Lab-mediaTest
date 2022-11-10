import React, {useEffect, useState} from 'react';
import PaperComponent from "../UI/Paper.Component";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import DeleteButton from "../UI/DeleteButton";
import {deleteUserAction} from "../Store/UsersSlice";

const Table = styled.table`
    background-color: transparent;
`
const TableRow = styled.tr`
  background-color: transparent;
`
const TableHead = styled.th`
  background-color: transparent;
`
const TableItem = styled.td`
  background-color: transparent;
`
const TableBody = styled.thead`
  background-color: transparent;
`

const BottomWindowComponent = () => {
    const userList = useSelector(state => state.userList.list)
    const dispatch = useDispatch()
    const {page, sortBy, searchBy} = useSelector(state => state.userList)

    // useEffect()

    // function getListLength(list) {
    //
    // }
    //
    // function getList(list) {
    //     const listLength = list.length
    // }

    function deleteUser(userID) {
        dispatch(deleteUserAction(userID))
    }

    return (
        <PaperComponent top='263px' height={'500px'}>
            <Table>
            <thead>
                <TableRow>
                    <TableHead>Имя пользователя</TableHead>
                    <TableHead>E-mail</TableHead>
                    <TableHead>Дата регистрации</TableHead>
                    <TableHead>Рейтинг</TableHead>
                </TableRow>
                </thead>
                <tbody>
                    {
                        userList.map(row => {
                            return (
                                <TableRow key={row.id}>
                                    <TableItem>{row.username}</TableItem>
                                    <TableItem>{row.email}</TableItem>
                                    <TableItem>{row.registration_date}</TableItem>
                                    <TableItem>{row.rating}</TableItem>
                                    <TableItem>
                                        <div onClick={() => deleteUser(row.id)}>
                                            <DeleteButton/>
                                        </div>
                                    </TableItem>
                                </TableRow>
                            )
                        })
                    }
                </tbody>

            </Table>
        </PaperComponent>
    );
};

export default BottomWindowComponent;