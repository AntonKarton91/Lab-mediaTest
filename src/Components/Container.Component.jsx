import React, {useEffect} from 'react';
import styled from "styled-components";
import PaperComponent from "../UI/Paper.Component";
import TopWindowComponent from "./TopWindow.Component";
import SortComponent from "./Sort.Component";
import BottomWindowComponent from "./BottomWindow.Component";
import {useDispatch} from "react-redux";
import {fetchUserList} from "../Store/acyncActions/listAcyncActions";

const Container = styled.div`
  width: 961px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
`
const Title = styled.h1`
  position: absolute;
  width: 279px;
  height: 28px;
  left: 0px;
  top: 12px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #333333;
  `


const ContainerComponent = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserList())
    }, [])

    return (
        <Container>
            <Title>Список пользователей</Title>
            <TopWindowComponent/>
            <SortComponent/>
            <BottomWindowComponent/>
        </Container>
    );
};

export default ContainerComponent;