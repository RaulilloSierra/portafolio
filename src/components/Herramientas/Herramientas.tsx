import "./Herramientas.css";

type HerramientasProps = {
  herr: string;
};

export default function Herramientas({ herr }: HerramientasProps) {
  return <p className={`herramienta-container ${herr}`}>{herr}</p>;
}
