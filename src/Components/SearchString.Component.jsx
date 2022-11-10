import React from 'react';
import styled from "styled-components";
import svg from '../images/source_icons_search.svg'
import {useDispatch, useSelector} from "react-redux";
import {setSearchStringAction} from "../Store/UsersSlice";

const SearchStringContainer = styled.div`
  position: absolute;
  width: 901px;
  height: 34px;
  left: 16px;
  top: 12px;
  background: #ECEFF0;
  border-radius: 4px;
`
const SearchIcon = styled.img`
  position: absolute;
  left: 3px;
  top: 5px;
  bottom: 5px;
  background-color: transparent;
`
const SearchInput = styled.input`
  position: absolute;
  right: 10px;
  //min-width: 159px;
  height: 16px;
  left: 31px;
  top: 9px;
  bottom: 9px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #9EAAB4;
  border: none;
  outline: none;
  background-color: transparent;
  &::placeholder {
    color: #9EAAB4;
  }
`



const SearchStringComponent = () => {
    const userList = useSelector(state => state.userList.list)
    const dispatch = useDispatch()
    const {page, sortBy, searchBy} = useSelector(state => state.userList)


    function searching(str) {
        dispatch(setSearchStringAction(str))
    }

    return (
        <SearchStringContainer>
            <SearchIcon src={svg} />
            <SearchInput placeholder={'Поиск по имени или e-mail'} onChange={e => searching(e.target.value)}/>
        </SearchStringContainer>
    );
};

export default SearchStringComponent;