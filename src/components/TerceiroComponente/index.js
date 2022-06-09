import React from 'react'
import "./styles.css"

const TerceiroComponente = () => {
    return(
    <form>
        <h1></h1>
        <label>
            <b>Digite o primeiro numero</b>
            <input type ="text"/>
        </label>
        <label style={{display:'block'}}>
            <b>Digite o segundo numero</b>
            <input type="text"/>
        </label>
        <input type="submit" valeu="Entrar"/>
    </form>
    );
    }
    
    export default TerceiroComponente;