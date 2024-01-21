import { React, useState } from "react";
import styles from './AuthPage.module.css';
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(undefined);
  const [mode, setMode] = useState('light');

  const toggleTheme = () =>{
      setMode((curr) => (curr==='light'?'dark':'light'))
      console.log(mode)
    }
  
  return (
    <main className={styles.AuthPage} id={mode}>
      <DarkModeToggle
        mode={mode}
        dark="Dark"
        light="Light"
        size="sm"
        inactiveTrackColor="#e2e8f0"
        inactiveTrackColorOnHover="#f8fafc"
        inactiveTrackColorOnActive="#cbd5e1"
        activeTrackColor="#334155"
        activeTrackColorOnHover="#1e293b"
        activeTrackColorOnActive="#0f172a"
        inactiveThumbColor="#1e293b"
        activeThumbColor="#e2e8f0"
        onChange={toggleTheme} />
      <div>
        {showLogin ? <SignUpForm setUser={setUser} mode={mode} /> : <LoginForm setUser={setUser} mode={mode}/>}
      </div>
      <div className={styles.ButtonCont}>

        <h3 onClick={() => setShowLogin(true)}>SIGN UP</h3>
        <h3 onClick={() => setShowLogin(!showLogin)}>LOG IN</h3>
      </div>
    </main>
  );
}

