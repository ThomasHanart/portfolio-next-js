import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import play4everImg from "@/public/play4ever.png";
import ludothequeImg from "@/public/ludotheque.png";
import fractalsImg from "@/public/fractals.png";

export const links = [
  {
    name: "🏠",
    hash: "#home",
  },
  {
    name: "À propos",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Parcours",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Baccalauréat",
    location: "Lycée polyvalent d'Artois, Noeux-les-Mines",
    description:
      "J'ai obtenu mon baccalauréat avec mention 'Très Bien' avec les spécialités Anglais et NSI (Numériques et Sciences de l'Informatique).",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Stage en Informatique",
    location: "Draka Comteq France, Billy-Berclau",
    description:
      "Lors de mon stage en BUT2, j'ai pu découvrir le C#, un langage que je n'ai pas étudié à l'IUT. J'ai notamment appris à gérer l'affichage de fenêtres avec Windows Forms, tout cela en découvrant le monde de l'entreprise",
    icon: React.createElement(CgWorkAlt),
    date: "avril 2023 - juin 2023",
  },
  {
    title: "Développeur back-end",
    location: "IUT de Lens, Lens",
    description:
      "Je continue ma formation en BUT Informatique et je pense m'insérer dans le monde professionnel une fois que j'aurai obtenu mon diplôme, plus particulièrement sur le côté back-end de divers projets qui s'offrent à moi.",
    icon: React.createElement(FaReact),
    date: "Maintenant",
  },
] as const;

export const projectsData = [
  {
    title: "Projet 'Play4Ever'",
    description:
      "Réalisation en groupe d'un site web d'une entreprise organisatrice d'événements LAN / eSport. Le but étant de consolider nos acquis en HTML et CSS, ce site se devait d'être responsive mais avant tout attirer les clients.",
    tags: ["HTML", "CSS"],
    imageUrl: play4everImg,
  },
  {
    title: "Projet 'Ludothèque'",
    description:
      "Ce projet permettait de naviguer un site permettant d'accéder à une liste de jeux, d'en ajouter, de rajouter des commentaires et de modifier son profil, le tout géré par des droits spécifiques.",
    tags: ["PHP", "TypeScript", "Angular", "Laravel"],
    imageUrl: ludothequeImg,
  },
  {
    title: "Projet 'Fractals'",
    description:
      "Rélisation de différents fractals qui serviraient comme exposition d'artistique. Leur création nécessitait la maîtrise des nombres complexes. De plus, la couleur était modifiable ainsi que son intensité.",
    tags: ["Java"],
    imageUrl: fractalsImg,
  },
] as const;

export const skillsData = [
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "C#",
  "PHP",
  "Bash"
] as const;
