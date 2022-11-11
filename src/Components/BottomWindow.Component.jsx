import React, {useEffect, useMemo, useState} from 'react';
import PaperComponent from "../UI/Paper.Component";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import DeleteButton from "../UI/DeleteButton";
import {deleteUserAction, setIsPopupActiveAction} from "../Store/UsersSlice";

const TableContainer = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  right: 12px;
  bottom: 0;
  overflow-y: auto;
  background: transparent;
`

const Table = styled.table`
  text-align: left;
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;
  //height: 100%;
  background: transparent;

`
const TableRow = styled.tr`
  max-height: 20px;
  background-color: transparent;
`
const TableHead = styled.th`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: #9EAAB4;
  background-color: transparent;
`
const TableItem = styled.td`
  height: 20px;
  background-color: transparent;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #ACACAC;
`
const TableFirstItem = styled.td`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #0CB4F1;
  background-color: transparent;
`

const BottomWindowComponent = () => {
    const userList = useSelector(state => state.userList.list)
    const dispatch = useDispatch()
    const {page, sortBy, searchBy, isLoading, deleteUser} = useSelector(state => state.userList)


    const getSortedList = useMemo(() => {
        if (sortBy) {
            if (sortBy === 'Date') {
                return [...userList].sort((a, b) => a.registration_date > b.registration_date ? 1 : -1)
            } else if (sortBy === 'Date-') {
                return [...userList].sort((a, b) => a.registration_date < b.registration_date ? 1 : -1)
            } else if (sortBy === 'Rating') {
                return [...userList].sort((a, b) => a.rating > b.rating ? 1 : -1)
            } else if (sortBy === 'Rating-') {
                return [...userList].sort((a, b) => a.rating < b.rating ? 1 : -1)
            }
        } else {
            return userList
        }
    }, [sortBy, isLoading, deleteUser])

    function getList() {
        if (searchBy) {
            return getSortedList
                .filter(item => String(item.username).toLowerCase().match(searchBy.toLowerCase())
                    || String(item.email).toLowerCase().match(searchBy.toLowerCase()))
        } else return getSortedList
    }

    useEffect(() => {
        getList()
    }, [deleteUser])

    function popupActivate(userID) {
        dispatch(setIsPopupActiveAction({
            st: true,
            userID
        }))
    }

    return (
        <PaperComponent top='263px' bottom={'0'}>
            {
                isLoading ? <div style={{backgroundColor: 'transparent'}}>Loading...</div>
                    : <TableContainer>
                        <Table>
                            <thead style={{backgroundColor: 'transparent', margin: '0'}}>
                            <TableRow>
                                <TableHead style={{width: '27%'}}>Имя пользователя</TableHead>
                                <TableHead style={{width: '27%'}}>E-mail</TableHead>
                                <TableHead style={{width: '27%'}}>Дата регистрации</TableHead>
                                <TableHead style={{width: '157.17px'}}>Рейтинг</TableHead>
                            </TableRow>
                            </thead>
                            <tbody style={{backgroundColor: 'transparent'}}>
                            {
                                getList().map(row => {
                                    return (
                                        <TableRow key={row.id}>
                                            <TableFirstItem>{row.username}</TableFirstItem>
                                            <TableItem>{row.email}</TableItem>
                                            <TableItem>{new Date(row.registration_date)
                                                .toLocaleDateString('ru-RU', {day: 'numeric', month: 'numeric'})}.
                                                {String(new Date(row.registration_date).getFullYear()).slice(2)}</TableItem>
                                            <TableItem>{row.rating}</TableItem>
                                            <TableItem>
                                                <div onClick={() => popupActivate(row.id)}
                                                     style={{backgroundColor: 'transparent'}}
                                                >
                                                    <DeleteButton/>
                                                </div>
                                            </TableItem>
                                        </TableRow>
                                    )
                                })
                            }
                            </tbody>

                        </Table>
                    </TableContainer>
            }

        </PaperComponent>
    );
};

export default BottomWindowComponent;