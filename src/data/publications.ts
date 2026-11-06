import type { ImageMetadata } from "astro";
import neh45 from "@assets/papers/neh45.png";
import keap1 from "@assets/papers/keap1.png";
import thesis from "@assets/papers/thesis.png";

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  url: string;
  image: ImageMetadata;
  imageAlt: string;
}

export const publications: Publication[] = [
  {
    title:
      "Exploring the Conformational Landscape of the Neh4 and Neh5 Domains of Nrf2 Using Two Different Force Fields and Circular Dichroism",
    authors: "Chang, M.; Wilson, C. J.; et al.",
    venue: "J. Chem. Theory Comput. 17 (5), 3145–3156",
    year: 2021,
    url: "https://doi.org/10.1021/acs.jctc.0c01243",
    image: neh45,
    imageAlt: "Table-of-contents graphic for the Neh4 and Neh5 Nrf2 paper",
  },
  {
    title: "KEAP1 Cancer Mutants: A Large-Scale Molecular Dynamics Study of Protein Stability",
    authors: "Wilson, C. J.; Chang, M.; et al.",
    venue: "Int. J. Mol. Sci. 22 (10), 5408",
    year: 2021,
    url: "https://doi.org/10.3390/ijms22105408",
    image: keap1,
    imageAlt: "Graphical abstract for the KEAP1 cancer mutants paper",
  },
  {
    title:
      "Elucidating the Structural and Dynamical Properties of the Intrinsically Disordered Protein Nrf2 Using Molecular Dynamics Simulations",
    authors: "Chang, M.",
    venue: "MSc thesis, Western University",
    year: 2021,
    url: "https://uwo.scholaris.ca/items/1070e423-7f03-408a-ac98-947b2c387db5",
    image: thesis,
    imageAlt: "Preview of the MSc thesis on Nrf2",
  },
];

export const education = [
  { degree: "MSc, Computational Biochemistry", school: "Western University", years: "2019 – 2021" },
  {
    degree: "BMSc, Computational Biochemistry",
    school: "Western University",
    years: "2015 – 2019",
  },
];
