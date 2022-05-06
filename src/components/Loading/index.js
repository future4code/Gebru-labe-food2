import React, {useState, useEffect} from 'react'
import * as S from './styles'

export function Loading(){

    const [open, setOpen] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
          setOpen(false);
        }, 2000);
        return () => clearTimeout(timer);
      }, []);

    return(
        open &&
        <S.PageWrap>
            <img src={require('../../assets/logo.svg')} alt="logo"/>
        </S.PageWrap> 
    )
}

export default Loading