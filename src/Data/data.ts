import { Proyectos } from "../types";

export const proyectos: Proyectos[] = [
  {
    id: 1,
    nombre: "Food App",
    categoria: "Full Project",
    descripcion:
      "Una SPA que usa diferentes páginas para buscar recetas en la API de Spoonacular, ver el detalle de la receta y crear tus propias recetas",
    imagen: "src/img/foodapp.png",
    herramientas: [
      "javascript",
      "react",
      "redux",
      "css",
      "css",
      "node",
      "express",
      "sequelize",
      "postgresql",
    ],
    url: "https://food-api-client.netlify.app",
    github: "https://github.com/RaulilloSierra/Food-app",
  },
  {
    id: 2,
    nombre: "Guitar LA",
    categoria: "Front-end",
    descripcion: "Una página web donde podrás comprar bellas guitarras",
    imagen: "src/img/guitarla.png",
    herramientas: ["typescript", "css", "react"],
    url: "https://gregarious-macaron-6e2920.netlify.app/",
    github: "https://github.com/RaulilloSierra/guitarLA-TS-Reducer",
  },
  {
    id: 3,
    nombre: "Buscador de Clima",
    categoria: "Front-end",
    descripcion:
      "Un lugar donde podrás buscar el clima de cualquier ciudad del mundo, usando la API de Open Weather",
    imagen: "src/img/climaapi.png",
    herramientas: ["typescript", "css", "react", "zod"],
    url: "https://merry-tiramisu-14a198.netlify.app/",
    github: "https://github.com/RaulilloSierra/clima-api",
  },
  {
    id: 4,
    nombre: "Seguimiento de pacientes",
    categoria: "Front-end",
    descripcion:
      "Una aplicación web donde puedes registrar el ingreso de pacientes a tu clínica veteriniaria y darles de alta",
    imagen: "src/img/pacientescitas.png",
    herramientas: ["typescript", "tailwind", "react", "zod", "zustand"],
    url: "https://pacientes-citas-681907.netlify.app/",
    github: "https://github.com/RaulilloSierra/pacientes-citas",
  },
  {
    id: 5,
    nombre: "Cotizador de criptomonedas",
    categoria: "Front-end",
    descripcion:
      "Una aplicación web donde puede realizar una cotización en tiempo real de las criptomonedas más populares en el momento en difentes divisas gracias a la API de CryptoCompare",
    imagen: "src/img/cryptoapp.png",
    herramientas: ["typescript", "css", "react", "zod", "zustand"],
    url: "https://whimsical-dasik-55056c.netlify.app/",
    github: "https://github.com/RaulilloSierra/crypto-cotizador/",
  },
  {
    id: 6,
    nombre: "Calculadora de gastos",
    categoria: "Front-end",
    descripcion:
      "Una calculadora dinámica donde podrá medir sus gastos mensuales mediante un presupuesto definido, filtrando que tipos de gastos tiene y almacenando la información en su almacenamiento local",
    imagen: "src/img/controlgastos.png",
    herramientas: ["typescript", "tailwind", "react"],
    url: "https://bejewelled-kitsune-ebfb35.netlify.app/",
    github: "https://github.com/RaulilloSierra/controlgastos/",
  },
];
