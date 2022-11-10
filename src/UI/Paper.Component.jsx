import React from 'react';
import styled from "styled-components";

const Paper = styled.div`
  position: absolute;
  width: 100%;
  height: ${props => props.height};
  left: 0;
  right: 0;
  top: ${props => props.top};
  background: #FFFFFF;
  box-shadow: 0px 18px 15px rgba(148, 148, 148, 0.15);
  border-radius: 7px;
  bottom: ${props => props.bottom};
`

const PaperComponent = (props) => {
    return (
        <Paper {...props}>
            {props.children}
        </Paper>
    );
};

export default PaperComponent;