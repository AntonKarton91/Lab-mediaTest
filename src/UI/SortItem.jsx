import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setSortTypeAction} from "../Store/UsersSlice";

const Item = styled.div`
  color: ${props => props.isSelected === props.selectType || props.isSelected === props.selectType + '-' 
          ? "#333333" 
          : "#9EAAB4"};
  border-bottom: 1px dashed;
  margin-right: 9px;
  cursor: pointer;
`

const SortItem = ({children, selectType}) => {
    const {sortBy} = useSelector(state => state.userList)
    const dispatch = useDispatch()

    return (
        <Item onClick={() => dispatch(setSortTypeAction(selectType))} isSelected={sortBy} selectType={selectType}>
            {children}
        </Item>
    );
};

export default SortItem;