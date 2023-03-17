import imgArrachera from "../../assets/img/arrachera.jpg";
import imgCopasVino from "../../assets/img/copas-vino.jpg";

function HistorySection() {
  return (
    <div className="container mx-auto flex flex-col xl:flex-row px-10 py-6">
      <div className="xl:w-2/4 xl:pr-6">
        <h1 className="font-bold text-5xl my-6">Historia</h1>
        <p className="text-lg text-justify">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original. Fue popularizado en los 60s con la creación de las
          hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
          recientemente con software de autoedición, como por ejemplo Aldus
          PageMaker, el cual incluye versiones de Lorem Ipsum.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-around py-4 px-2 xl:w-2/4 xl:pl-6 gap-6">
        <div className="w-56 md:w-64 self-start">
          <img
            src={imgArrachera}
            alt="Imagen de arrachera"
            className="rounded-xl"
          />
        </div>
        <div className="w-60 md:w-72 self-end">
          <img src={imgCopasVino} alt="Copas de vino" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default HistorySection;
