"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase_app from "../config";
import registerUser from "../apis/registerUser";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const auth = getAuth(firebase_app);

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const token = await user.getIdToken();
        const data = await registerUser("test", "123456789", token);
        console.log(data);
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className={styles.description}>
      <div>
        <input
          type="text"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Sign up</button>
      </div>
    </main>
  );
}
