import React from 'react';
import classes from'./Header.module.css'
const Header =(props)=>{
  if(props.LoginData.id==='')
{props.loginThunk()}
  

return (
        <div className={classes.Header}>
       <img src='https://img-premium.flaticon.com/png/512/564/564419.png?token=exp=1621366057~hmac=aec4460dd087b64bfa60267bd6b56921'></img>
      
       <div className={classes.Login}>Hello :{props.LoginData.login} </div>
     </div>)
}
export default Header;