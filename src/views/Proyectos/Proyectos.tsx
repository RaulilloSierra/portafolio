import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  FaGithubSquare,
  FaLink,
} from "react-icons/fa";
import { proyectos } from "../../data/data";
import "./Proyectos.css";
import { Link } from "react-router-dom";

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
    <>
      <h2 className="proyecto-titulo">Proyectos</h2>
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
              {proyectos.map((item) => {
                return (
                  <li key={item.id}>
                    <img
                      className="imagen-proyecto"
                      src={item.imagen}
                      alt={item.nombre}
                    />
                    <div className="texto-proyecto">
                      <h3 className="titulo-proyecto">{item.nombre} - {item.categoria}</h3>
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
    </>
  );
}
