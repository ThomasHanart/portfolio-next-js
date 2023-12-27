# Partie 1

## Qu'est-ce que Next.js ?
Next.js est un framework React open source robuste utilisé dans le développement d'applications Web. Il a été introduit en 2016 par Vercel, anciennement connu sous le nom de ZEIT, et a depuis été largement adopté par la communauté du développement Web.

## Pourquoi utiliser Next.js ?
À la base, Next.js se concentre sur l’amélioration des performances, de l’évolutivité et de la convivialité SEO des applications React. Il y parvient en intégrant de manière transparente les capacités de rendu côté serveur (SSR) et de génération de sites statiques (SSG), permettant aux développeurs de pré-afficher des pages Web côté serveur pour des performances optimisées.

## Avantages de Next.js
Next.js fournit également des fonctionnalités telles que le routage dynamique et les routes API, rendant la création d'applications Web dynamiques et interactives plus accessible. Le routage dynamique permet des structures d'URL flexibles, tandis que les routes API permettent aux développeurs de créer des points de terminaison d'API sans serveur au sein de leurs applications Next.js.

Le framework dispose de solides capacités de récupération de données. Avec Next.js, les développeurs peuvent implémenter diverses techniques de récupération de données, notamment la récupération de données côté serveur avec getServerSideProps et la récupération de données statiques avec getStaticProps et getStaticPaths.

Next.js s'intègre parfaitement à l'écosystème React plus large. Les développeurs peuvent exploiter les outils de l'écosystème React, tels que Redux, GraphQL et TypeScript, permettant aux développeurs d'exploiter leurs connaissances et leurs flux de travail existants.



# Partie 2

La réalisation de mon site web portfolio en Next.js a été découpée en composants selon les parties en lesquelles j'ai décidé de découper le site : l'accueil servant de courte présentation, le à propos parlant un peu plus de moi, mes projets, mes compétences, mon parcours et un moyen de me contacter. Le site est très compact, tout son contenu tenant sur une page et sa présentation étant fluide et condensée grâce à Tailwind.

Les informations affichées dans la barre de menu, mes compétences, mon parcours et mes projets sont stockées dans le fichier data.ts du composant lib, et les fichiers tels que mon CV, mon image de profil et les images utilisées pour mes projets sont stockés directement dans le composant public.



# Lien d'accès au Portfolio déployé sur Vercel

https://portfolio-next-js-puce.vercel.app/
