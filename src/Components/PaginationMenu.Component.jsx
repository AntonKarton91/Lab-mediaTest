import React from 'react';
import styled from "styled-components";
import PaginateButton from "../UI/PaginateButton";
import {useDispatch, useSelector} from "react-redux";
import {decrementPageAction, incrementPageAction, setPageAction} from "../Store/UsersSlice";

const PaginateContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 5px;
  background-color: transparent;
  right: 0;
  top: -40px;
`

const PaginationMenuComponent = ({totalPages}) => {
    const dispatch = useDispatch()
    const {currentPage} = useSelector(state => state.userList)
    const pageList = [...Array(totalPages+1).keys()].slice(1)

    return (
        <PaginateContainer>
            <div onClick={() => dispatch(decrementPageAction())}>
                <PaginateButton>{'<'}</PaginateButton>
            </div>
            {
                pageList.map(but => {
                    return (
                        <div key={but}  onClick={() => dispatch(setPageAction(but))}>
                            <PaginateButton currentPage={currentPage}>{but}</PaginateButton>
                        </div>
                    )
                })
            }
            <div onClick={() => dispatch(incrementPageAction(totalPages))}>
                <PaginateButton>{'>'}</PaginateButton>
            </div>
        </PaginateContainer>
    );
};

export default PaginationMenuComponent;