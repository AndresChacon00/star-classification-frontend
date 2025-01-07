import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import FileUpload from "@/components/FileUpload";
export default function Home() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat min-h-screen"
        style={{
          backgroundImage: "url('/images/stars-galaxy-bg.png')",
        }}
      >
        <div className="font-[family-name:var(--font-geist-sans)]">
          <div className="p-10 text-6xl text-white font-bold glow text-shadow">
            <h1>Clasificador de Estrellas</h1>
          </div>
          <div className="flex flex-col items-center">
            <p className="pb-0 mb-2">
              Carga tu archivo scv con los datos de las estrellas en el formato:
            </p>
            <img
              src="images/example.png"
              width="582"
              height="115"
              alt="Archivo cargado"
              className="mx-20"
            />
            <div className="mt-10">
              <a
                href="/template.csv"
                download="template.csv"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Descargar Plantilla CSV
              </a>
            </div>
            <div className="mt-10 text-white">
              <p>Brown Dwarf {"->"} Star Type = 0</p>
              <p>Red Dwarf {"->"} Star Type = 1</p>
              <p>White Dwarf {"->"} Star Type = 2</p>
              <p>Main Sequence {"->"} Star Type = 3</p>
              <p>Supergiant {"->"} Star Type = 4</p>
              <p>Hypergiant {"->"} Star Type = 5</p>
            </div>
          </div>
          <div>
            <Link href={"/about"}>
              <div className="fixed bottom-4 right-4">
                <button className="bg-slate-500 text-white p-4 rounded-full shadow-lg">
                  Info
                </button>
              </div>
            </Link>

            <Link href={"/info"}>
              <div className="fixed bottom-4 left-4">
                <button className="bg-slate-500 text-white p-4 rounded-full shadow-lg">
                  Estrellas
                </button>
              </div>
            </Link>
            <FileUpload />
          </div>
        </div>
      </div>
    </>
  );
}
