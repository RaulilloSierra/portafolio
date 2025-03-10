import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaGithubSquare, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import Herramientas from "../../components/Herramientas/Herramientas";
import { proyectos } from "../../data";
import "./Proyectos.css";

export default function Proyectos() {
  const listRef = useRef<HTMLUListElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    if (listNode) {
      const listItems = listNode.querySelectorAll("li");
      const currentItem = listItems[currentIndex]?.querySelector("img");
      if (currentItem) {
        currentItem.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentIndex]);

  const scrollToImage = (direct: "prev" | "next") => {
    setCurrentIndex((curr) => {
      if (direct === "prev") {
        return curr > 0 ? curr - 1 : 0;
      } else {
        return curr < proyectos.length - 1 ? curr + 1 : curr;
      }
    });
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="proyecto">
      <h2 className="proyecto-titulo">Proyectos</h2>
      <p className="proyecto-introduccion">
        Estos son algunos de los proyectos en los que he trabajado, destacando
        los más relevantes. Si quieres ver más a fondo mi trabajo, te invito a
        visitar mi{" "}
        <span>
          <Link
            className="proyecto-github"
            to="https://github.com/RaulilloSierra"
            target="_blank"
          >
            Github
          </Link>
        </span>
      </p>
      <div className="proyectos-container">
        <div className="slider-container">
          <div className="leftArrow" onClick={() => scrollToImage("prev")}>
            <IoIosArrowBack />
          </div>
          <div className="rightArrow" onClick={() => scrollToImage("next")}>
            <IoIosArrowForward />
          </div>
          <div className="container-images">
            <ul ref={listRef}>
              {proyectos?.map((item) => {
                return (
                  <li key={item.id}>
                    <img
                      className="imagen-proyecto"
                      src={item.imagen}
                      alt={item.nombre}
                    />
                    <div className="texto-proyecto">
                      <h3 className="titulo-proyecto">
                        {item.nombre} - {item.categoria}
                      </h3>
                      <div className="herramientas-proyecto">
                        {item.herramientas.map((herr) => (
                          <Herramientas herr={herr} />
                        ))}
                      </div>

                      <p className="descripcion-proyecto">{item.descripcion}</p>
                      <div className="enlaces-proyecto">
                        <Link
                          to={item.url}
                          target="_blank"
                          className="url-proyecto"
                        >
                          <FaLink />
                        </Link>
                        <Link
                          to={item.github}
                          target="_blank"
                          className="github-proyecto"
                        >
                          <FaGithubSquare />
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="dots-container">
            {proyectos.map((_, index) => (
              <div
                key={index}
                className={`dot-container-item ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
              >
                &#9865;
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
