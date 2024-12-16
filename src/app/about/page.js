import Link from "next/link";

export default function About() {
  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen"
    style={{
      backgroundImage: "url('/images/stars-galaxy-bg.png')",
    }}>
    <div className="font-[family-name:var(--font-geist-sans)]" >
      <div className="p-10 text-6xl text-white font-bold glow text-shadow">
        <h1>Información de la IA</h1>
      </div>

      <div>
        <p>Es un modelo de red neuronal supervisado que clasifica estrellas en base a sus características físicas. Esta IA utiliza métodos de aprendizaje automático para procesar datos astronómicos y asignar un tipo estelar a cada registro analizado. A continuación, se detallan sus aspectos principales:
            <br/>
            <br/>
            Inteligencia Artificial Utilizada
            <br/>
            <li>Tipo: Redes neuronales artificiales (Artificial Neural Networks).</li>

            <li>Arquitectura:</li>
            &emsp;&emsp;- Tres capas ocultas.
            <br></br>
            &emsp;&emsp;- Una capa de salida.
            <br></br>
            &emsp;&emsp;- Uso de dropout para prevenir el sobreentrenamiento.

            <br/>
            <br/>
            <li>Precisión inicial: Aproximadamente 90%.</li>
            <br/>
            <br/>
            Algoritmos Complementarios
            <br/>
            Además de redes neuronales, se exploran otros métodos:
            <br/>
            &emsp;- Nearest-Neighbor Classification.
            <br></br>
            &emsp;- Support Vector Machines (SVM).
        </p>
      </div>
    </div>
      <Link href={"/"}>
            <div className="fixed top-10 right-4">
            <button className="bg-slate-500 text-white p-3 pl-6 pr-6 rounded-full shadow-lg">
              Volver
            </button>
            </div>
        </Link>
    </div>
  );
}
