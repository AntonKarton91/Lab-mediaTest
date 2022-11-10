import React from 'react';
import styled from "styled-components";

const Button = styled.div`
  width: 50px;
  height: 50px;
  background-color: antiquewhite;
  cursor: pointer;
`

const DeleteButton = () => {
    return (
        <Button>
            x
        </Button>
    );
};

export default DeleteButton;