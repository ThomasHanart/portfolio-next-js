"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("À propos");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>À propos de moi</SectionHeading>
      <p>
        Je m'appelle <span className="font-medium">Thomas Hanart</span>, j'ai <span className="font-medium">20 </span> 
        ans, et je suis actuellement en <span className="font-medium">3ème année</span> d'études supérieures en 
        <span className="font-medium"> BUT Informatique</span>. Je suis <span className="italic">actuellement </span>
        à la recherche d'un stage qui commencerait à partir du <span className="font-medium">18 mars </span> et 
        durerait entre <span className="font-medium">12 et 16 semaines</span>.
      </p>

      <p>⁯</p>

      <p className="mb-3">
        <span className="italic">Mon aspect favori</span> dans la programmation est la 
        résolution de problèmes. J'apprécie beaucoup pouvoir apporter une solution à 
        quoi que ce soit. Je suis principalement mené à utiliser{" "}
        <span className="font-medium">
          Java, Python et Git
        </span>
        . Je suis également familier avec les outils de <span className="italic">base de données</span>, 
        de <span className="italic">back-end</span> et de <span className="italic">front-end. </span>
        Je me renseigne souvent sur les <span className="font-medium">nouvelles technologies</span>.
      </p>
    </motion.section>
  );
}
