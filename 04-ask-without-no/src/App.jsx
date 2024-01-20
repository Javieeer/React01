import { useEffect, useRef, useState } from "react";

const FollowMouse = () => {
  const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const textoRef = useRef(null);

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enable) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enable]);

  useEffect(() => {
    document.body.classList.toggle("no-cursor", enable);
  }, [enable]);

  useEffect(() => {
    const cuadroTexto = textoRef.current;

    if (cuadroTexto) {
      const cuadroRect = cuadroTexto.getBoundingClientRect();

      // Verificar colisión y mover cuadro de texto si es necesario
      if (
        position.x < cuadroRect.right &&
        position.x > cuadroRect.left &&
        position.y < cuadroRect.bottom &&
        position.y > cuadroRect.top
      ) {
        cuadroTexto.style.transform = `translate(${Math.random()*300}px, ${Math.random()*300}px)`;
      }
    }
  }, [position]);

  return (
    <>
    <section>
      <div style={{
        backgroundColor: "rgba(100, 100, 100)",
        border: "none",
        borderRadius: "2vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 50
      }}>
        <strong>¿VEMOS UNA PELICULA?</strong>
      </div>
      <div style={{
        display: "grid",
        justifyContent: "space-between",
        gridTemplateColumns: "100px 100px"
      }}>
        <button style={{
            backgroundColor: "rgba(100, 100, 100)",
            border: "1px solid black",
            borderRadius: "2vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            color: "white"
        }}>
            <strong>SI</strong>
        </button>
        <button
          ref={textoRef}
          style={{
            backgroundColor: "rgba(100, 100, 100)",
            border: "1px solid black",
            borderRadius: "2vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            transform: "translate(0, 0)",
            color: "white"
          }}
        >
          <strong>NO</strong>
        </button>
      </div>
    </section>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnable(!enable)}>
        {enable ? "Parar de" : "Comenzar a"} responder
      </button>
    </>
  );
};

function App() {
  return (
    <>
      <main>
        <FollowMouse />
      </main>
    </>
  );
}

export default App;
