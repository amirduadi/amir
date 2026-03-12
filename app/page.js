"use client";
import { useState, useEffect } from "react";

const messages = [
  { name: "יעל", text: "תודה לאבי על העזרה בפרויקט 🙌" },
  { name: "רועי", text: "אלוף השבוע 🏆" },
  { name: "דני", text: "תודה לצוות הלילה 👏" }
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const msg = messages[index];

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontSize: "40px",
      textAlign: "center",
      background: "#111",
      color: "white"
    }}>
      <h1>🎉 לוח פירגונים 🎉</h1>

      <div style={{
        marginTop: 40,
        padding: 40,
        borderRadius: 20,
        background: "#222"
      }}>
        <p>{msg.text}</p>
        <strong>— {msg.name}</strong>
      </div>
    </div>
  );
}
