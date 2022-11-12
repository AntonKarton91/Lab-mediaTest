import React from 'react';
import styled from "styled-components";

const PagButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 20%;
  color: ${props => props.currentPage === props.page ? 'white' : '#777575'};
  background-color: ${props => props.currentPage === props.page ? '#0CB4F1' : 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 2px #777575;
  }
`

const PaginateButton = ({children, currentPage}) => {
    return (
        <PagButton page={children} currentPage={currentPage}>
            {children}
        </PagButton>
    );
};

export default PaginateButton;