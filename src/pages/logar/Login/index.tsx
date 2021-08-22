import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

function Login() {
  const [editName, setEditName] = useState(false);
  const [name, setName] = useState("Nome");
  const [editingName, setEditingName] = useState("Nome");
  return (
    <div>
      <div className={styles.title}>
        <h2>Galer</h2>
        <h2>A</h2>
        <h2>r</h2>
        <h2>t</h2>
      </div>

      <div className={styles.retangulo}>
        <Input
          type="text"
          value={editName ? editingName : name}
          style={{
            border: "solid 1px",
            padding: "0.2rem 0 0.2rem 0.5rem",
            borderRadius: "1rem",
            outline: "none",
          }}
          disabled={!editName}
          onChange={(event) => setEditingName(event.target.value)}
        />
      </div>
    </div>
  );
}

export default Login;
