import styled from 'styled-components'
import { Link } from 'react-scroll'

import BtnBg from 'images/white-list-btn-bg.png'

export const Button = styled(Link)`
    border-radius: 9px;
    background-image: url(${BtnBg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    white-space: nowrap;
    padding: 10px 56px;
    color: white;
    font-size: 20px;
    line-height: 30px;
    font-family: Poppins;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;   
`
