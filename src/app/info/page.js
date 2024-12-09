import Link from "next/link";

const Info = () => {
    return (
        <div className="bg-cover bg-center bg-no-repeat min-h-screen"
        style={{
          backgroundImage: "url('/images/stars-galaxy-bg.png')",
        }}>            
            <div className="title">
                <h1>Información</h1>
            </div>
            <div id="estrellas">
                <img src="/path/to/image1.jpg" className="img-estrella" alt="Image 1" />
                <img src="/path/to/image2.jpg" className="img-estrella" alt="Image 2" />
                <img src="/path/to/image3.jpg" className="img-estrella" alt="Image 3" />
                <img src="/path/to/image4.jpg" className="img-estrella" alt="Image 4" />
                <img src="/path/to/image5.jpg" className="img-estrella" alt="Image 5" />
                <img src="/path/to/image6.jpg" className="img-estrella" alt="Image 6" />
                <img src="/path/to/image7.jpg" className="img-estrella" alt="Image 7" />
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
};

export default Info;