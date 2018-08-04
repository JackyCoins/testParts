//region Import libraries
import styled from "styled-components";
//endregion

//region Import styles
import styles from "../../../styles";
//endregion

//region Button
const Button = styled.button`
  border: 1px solid ${styles.colors.colorAquamarine};
  font-size: 20px;
  color: ${styles.colors.colorAquamarine}
  height: 50px;
  width: 200px;
  cursor: pointer;
  transition: border-color .3s, color .3s;
  border-radius: 20px;
   
  :hover {
    border-color: ${styles.colors.colorBrightBlue}
    color: ${styles.colors.colorBrightBlue}
  }
`;
//endregion

export default Button;
