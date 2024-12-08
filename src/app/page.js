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
          <Link href={"/about"}>
            <p>about us</p>
          </Link>
          <div className="mt-10">
            <FileUpload />
          </div>
        </div>
      </div>
    </>
  );
}
