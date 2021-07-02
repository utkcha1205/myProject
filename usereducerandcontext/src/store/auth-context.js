import React, { useState , useEffect} from 'react';

const AuthContext = React.createContext({
    isLoggedIn:false,
    onLogout: () => {},
    onlogin: (email,password) => {}
});

export const AuthContextProvider = (props) =>{

    const[isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        let valid = localStorage.getItem('isLoggedIn')
        if(valid === 'true'){
          setIsLoggedIn(true);
        }
    
      },[])

    const logoutHandler = () =>{
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }

    const loginHandler = () =>{
        localStorage.setItem('isLoggedIn', 'true')
        setIsLoggedIn(true)
    }

    return <AuthContext.Provider 
    value={{
        isLoggedIn:isLoggedIn,
        onLogout:logoutHandler,
        onLogin:loginHandler
    }}
    >{props.children}</AuthContext.Provider>
}


export default AuthContext;