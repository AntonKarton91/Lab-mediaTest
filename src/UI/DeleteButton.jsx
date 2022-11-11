import React from 'react';
import styled from "styled-components";

import svg from '../images/cancel.svg'

const DelIcon = styled.img`
  width: 16.02px;
  height: 16px;
  background-color: transparent;
`

const Button = styled.div`
  width: 50px;
  height: 50px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DeleteButton = () => {
    return (
        <Button>
            <DelIcon src={svg}/>
        </Button>
    );
};

export default DeleteButton;