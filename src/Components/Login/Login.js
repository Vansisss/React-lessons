import React from 'react'
import { render } from 'react-dom'
import { Redirect } from 'react-router';
import { Form, Field } from 'react-final-form'



const Login = (props) => {
   const onSubmit =  async values => {
    let statusLogged = await props.postloginThunk(values)
  
    if(statusLogged===1){
      props.changelog()
      }
      
    }
    if (props.Log===true) return <Redirect to={'/profile/17422'}/>
   return(
     
  <div>
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <Field name="email" component="input" type="text" placeholder="email" />
          </div>
          <div>
            <label>Password</label>
            <Field name="password" component="input" type="text" placeholder="password" />
          </div>
          <div>
            <label>Remember me</label>
            <Field name="rememberMe" component="input" type="checkbox" />
          </div>
         
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
        
        </form>
      )}
    />
 </div> )
}


    export default Login