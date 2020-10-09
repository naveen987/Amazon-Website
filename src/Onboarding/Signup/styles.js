import styled from '@emotion/styled';
import { Button, Divider, Input } from 'antd';

export const StyledButton = styled(Button)`
    background: #f0c14b;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    width:100%;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    display: inline-block;
    padding: 0;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    font-size: 13px;
    line-height: 19px;
    height:31px;
    border-radius:3px;
`;

export const Container = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    padding:20px;
    align-items: center;
`;

export const LoginContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const StyledImage = styled.img`
    width:100px;
    margin-bottom:20px;
`;

export const LoginCard = styled.div`
    width:296px;
    padding: 20px 26px;
    border-radius: 4px;
    border: 1px #ddd solid;
    background-color: #fff;
`;

export const StyledInput = styled(Input)`
    width:97.4%;
    height:31px;
    margin-bottom:14px;
    border-color:none;
`;

export const Header = styled.div`
    font-weight: 400;
    font-size: 28px;
    line-height: 1.2;
    margin-bottom: 10px;
    display:flex;
`;

export const Label = styled.div`
    display: flex;
    font-size: 13px;
    line-height: 19px;
    padding-left: 2px;
    padding-bottom: 2px;
    font-weight: 700;
`;

export const PrivacyText = styled.div`
    font-size:12px;
    line-height:1.5;
    margin-top:18px;
    width:100%;
    text-decoration:none;
`;

export const StyledLink = styled.a`
    text-decoration:none;
`;

export const StyledDivider = styled(Divider)`
    margin-top:20px;
    line-height: 1;
    font-size: 12px;
    color: #767676;
    font-weight: 400;
    z-index: 2;
    position: relative;
    display: inline-block;
    background-color: #fff;
    padding: 0 8px 0 7px;
`;

export const StyledButtons = styled(Button)`
    border-color: #adb1b8 #a2a6ac #8d9096;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    display: inline-block;
    padding: 0;
    text-align: center;
    text-decoration: none!important;
    vertical-align: middle;
    width:350px;
    height:31px;
    margin-top:20px;
    border-radius:3px;
`;
