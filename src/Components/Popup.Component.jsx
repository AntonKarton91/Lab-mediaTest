import React from 'react';
import styled from "styled-components";
import PopupButton from "../UI/PopupButton";
import {useDispatch} from "react-redux";
import {deleteUserAction, setIsPopupActiveAction} from "../Store/UsersSlice";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`

const PopupContainer = styled.div`
  width: 357px;
  height: 134px;
  background: #F7F7F7;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
`
const PopupTitle = styled.div`
  background-color: transparent;
  margin: 36px auto auto 36px;
  width: 285px;
  height: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
`
const Buttons = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 212px;
  margin: 24px auto;
  cursor: pointer;
  
`
const PopupComponent = () => {
    const dispatch = useDispatch()

    function deleteUser(){
        dispatch(deleteUserAction())
    }

    return (
        <Wrapper>
            <PopupContainer>
                <PopupTitle>Вы уверены, что хотите удалить пользователя?</PopupTitle>
                <Buttons>
                    <div onClick={deleteUser}>
                        <PopupButton bgColor={'#E0E0E0'} color={'#828282'}>Да</PopupButton>
                    </div>
                    <div onClick={() => dispatch(setIsPopupActiveAction(false))}>
                        <PopupButton bgColor={'#0CB4F1'} color={'#FFFFFF'}>Нет</PopupButton>
                    </div>
                </Buttons>
            </PopupContainer>
        </Wrapper>
    );
};

export default PopupComponent;