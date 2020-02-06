import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

* {
  margin: 0;
  padding: 0;
  outline:0;
  box-sizing:border-box;

}
body{
  background: #463333;
  color: #495057;
  -webkit-font-smoothing: antialiased;
}

body,
input,
button, 
textarea {
  font-size:14px;
  font-family: "Roboto", sans-serif;
}

html,
body,
#root {
  height: 100%;
}

button{
  cursor: pointer;
}

img{
  max-width: 100%;
  height:auto;
}

`;
