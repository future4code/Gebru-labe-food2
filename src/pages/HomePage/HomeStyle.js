import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';

export const MainStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 0;
`

export const ButtonNoStyle = styled.button`
    background: none;
    border: none;
`

export const SearchIconStyled = styled(SearchIcon)`
    position: absolute;
    padding: 10px;
`

export const TextFieldStyled = styled(TextField)`
  width: 328px;
  height: 56px;
  padding: 16px 8px 16px 17px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
`

export const Search = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 10px;
`