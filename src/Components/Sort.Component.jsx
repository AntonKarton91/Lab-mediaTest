import React, {useEffect} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import SortItem from "../UI/SortItem";

const SortContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 14px;
  left: 0;
  top: 234px;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
`

const SortTitle = styled.div`
  color: #9EAAB4;
  margin-right: 9px;
`

const SortComponent = () => {
    const dispatch = useDispatch()

    return (
        <SortContainer>
            <SortTitle>Сортировка:</SortTitle>
            <SortItem selectType={'Date'}>Дата регистрации</SortItem>
            <SortItem selectType={'Rating'}>Рейтинг</SortItem>
        </SortContainer>
    );
};

export default SortComponent;