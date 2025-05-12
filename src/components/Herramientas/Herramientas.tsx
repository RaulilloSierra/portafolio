import "./Herramientas.css";

type HerramientasProps = {
  herr: string;
};

export default function Herramientas({ herr }: HerramientasProps) {
  return <img src={`./skills/${herr}.png`} alt={herr} className="herramienta-container" />;
}
