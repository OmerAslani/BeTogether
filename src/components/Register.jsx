import './Register.css';

const Login = () => {
    return(
        
        
            <div class="wrapper fadeInDown">
            <div id="formContent">
            
        
            
            <div class="fadeIn first">
                <h2>BeTogether</h2>
            </div>
        
            
            <form class="form-log">
                <input type="text" id="login" class="fadeIn second" name="name" placeholder="First name"></input>
                <input type="text" id="text" class="fadeIn third" name="login" placeholder="Last name"></input>
                <input type="text" id="email" class="fadeIn third" name="login" placeholder="Email"></input>
                <input type="password" id="password" class="fadeIn third" name="login" placeholder="Password"></input>
                <input type="password" id="password" class="fadeIn third" name="login" placeholder="Confirm Password"></input>
                <input type="submit" class="fadeIn fourth" value="Create Account"></input>
            
            </form>
        
            
            <div id="formFooter">
                <a class="underlineHover" href="#">Log in</a>
            </div>
        
            </div>
        </div>
      
    )
}

export default Login