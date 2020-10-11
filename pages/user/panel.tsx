import {GlobalStyle} from "../../styles/Global.style";
import Header from "../../components/Header";
import React from "react";
import * as S from "../../styles/user/Panel.style";

const Panel = () => {
    return(
      <>
          <GlobalStyle />
          <Header />
          <S.Container>
              <S.Box>
                  
              </S.Box>
          </S.Container>
      </>
    );
}
export default Panel