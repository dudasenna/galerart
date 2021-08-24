import styles from "./styles.module.scss";
import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Cadastro() {
  let [name, setName] = useState();
  let [fullname, setFullName] = useState();
  let [senha, setSenha] = useState();
  let [fullsenha, setFullSenha] = useState();
  let [repsenha, setRepSenha] = useState();
  let [fullrepsenha, setFullRepSenha] = useState();
  const InputEvent = (event: any) => {
    setName(event.target.value);
    // console.log("name", name);
  };
  const InputEventtwo = (event: any) => {
    setSenha(event.target.value);
    // console.log("senha:", senha);
  };
  const InputEventthree = (event: any) => {
    setRepSenha(event.target.value);
    // console.log("senha:", repsenha);
  };

  //quando clica em entrar
  const submit = (e: any) => {
    e.preventDefault();
    setFullName(name);
    setFullSenha(senha);
    setFullRepSenha(repsenha);
    console.log("name", name);
    console.log("senha", senha);
    console.log("rep:", repsenha);
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
              <div>Colocar icone voltar aqui- </div>
              {/* </Link> */}
              <div> Cadastro</div>
            </div>

            <input type="text" placeholder="Seu email" onChange={InputEvent} />
            <input
              type="text"
              placeholder="Sua senha"
              onChange={InputEventtwo}
            />
            <input
              type="text"
              placeholder="Repita sua senha"
              onChange={InputEventthree}
            />

            <button className={styles.btn}> Entrar</button>
          </form>
          {/* <div className={styles.final}>Não possui uma conta?</div>{" "}
          <div className={styles.fim}>Cadastrar</div>{" "}
          <div className={styles.fim}>Esqueceu a senha?</div> */}
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
