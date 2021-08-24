import styles from "./styles.module.scss";
import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Login() {
  let [name, setName] = useState();
  let [fullname, setFullName] = useState();
  let [senha, setSenha] = useState();
  let [fullsenha, setFullSenha] = useState();

  const InputEvent = (event: any) => {
    setName(event.target.value);
    // console.log("name", name);
  };
  const InputEventtwo = (event: any) => {
    setSenha(event.target.value);
    // console.log("senha:", lastname);
  };

  //quando clica em entrar
  const submit = (e: any) => {
    e.preventDefault();
    setFullName(name);
    setFullSenha(senha);
    console.log("name", name);
    console.log("senha", senha);
  };

  return (
    <div className={styles.container}>
      <div className={styles.centro}>
        <div className={styles.title}>
          <h2>Galer</h2>
          <h2>A</h2>
          <h2>r</h2>
          <h2>t</h2>
        </div>
        <div className={styles.box}>
          {" "}
          <form className={styles.form} onSubmit={submit}>
            <div className={styles.alinhar}>
              {" "}
              {/* <Link> */}
              {/* <div>Voltar</div> </Link> */}
              <div>Login</div>
            </div>

            <input
              type="text"
              placeholder="  Seu email"
              onChange={InputEvent}
            />
            <input
              type="text"
              placeholder="  Sua senha"
              onChange={InputEventtwo}
            />

            <button className={styles.btn}> Entrar</button>
          </form>
          <div className={styles.final}>Não possui uma conta?</div>{" "}
          <Link className={styles.fim} to="/cadastro">
            <div>Cadastrar</div>{" "}
          </Link>
          <Link to="/recuperarsenha" className={styles.fim}>
            <div>Esqueceu a senha?</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
