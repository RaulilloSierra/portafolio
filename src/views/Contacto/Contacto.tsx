import { useState } from "react";
import { TbCopy, TbCopyCheckFilled } from "react-icons/tb";
import { IoSendSharp } from "react-icons/io5";
import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import "./Contacto.css";
import { Link } from "react-router-dom";

export default function Contacto() {
  const email = "raulitosierradiaz@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // Mensaje temporal
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  const handleEmail = () => {
    window.location.href = "mailto:raulitosierradiaz@gmail.com";
  };

  return (
    <div className="contacto">
      <h2>Contacto</h2>
      <p className="contacto-introduccion">
        Si quieres contactarme, puedes hacerlo a través del siguiente correo
        electrónico:
      </p>
      <div className="contacto-email">
        <p className="">{email}</p>
        <button onClick={handleCopy} className="copiar-correo">
          {copied ? <TbCopyCheckFilled className="copied" /> : <TbCopy />}
        </button>
        <button onClick={handleEmail} className="enviar-correo">
          <IoSendSharp />
        </button>
      </div>
      <p className="contacto-introduccion">
        También me podrás encontrar por los siguientes canales:
      </p>
      <div className="contacto-medios">
        <Link
          to="https://www.linkedin.com/in/raul-jesus-sierra-diaz/"
          target="_blank"
          className="contacto-link linkedin"
        >
          <FaLinkedin />
        </Link>
        <Link
          to="https://wa.me/+573204357941"
          target="_blank"
          className="contacto-link whatsapp"
        >
          <FaWhatsappSquare />
        </Link>
      </div>
    </div>
  );
}
