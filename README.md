# 🔍 SEO : Challenges

4 challenges pratiques, un par quête codable du module SEO. **Une branche = un challenge en mode starter** : une petite app Vite + React + TypeScript (React Router) qui contient déjà des problèmes de référencement bien réels, à toi de les corriger.

Les quêtes `seo-01` (fonctionnement des moteurs) et `seo-02` (mots-clés) sont 100% théorie/quiz et n'ont pas de branche ici : elles se travaillent directement depuis le fichier de quête.

Chaque branche est **indépendante** : pas besoin d'avoir fini le challenge précédent pour attaquer le suivant.

## Sommaire

| # | Challenge | Branche | Ce que tu corriges |
|---|-----------|---------|---------------------|
| 3 | SEO on-page | [`seo-03-on-page`](../../tree/seo-03-on-page) | `<title>`/meta description par route, URLs propres, hiérarchie de titres, maillage |
| 4 | SEO technique | [`seo-04-technique`](../../tree/seo-04-technique) | `robots.txt`, `sitemap.xml`, balise canonique, duplicate content |
| 5 | Core Web Vitals | [`seo-05-core-web-vitals`](../../tree/seo-05-core-web-vitals) | Corriger un LCP, un CLS et un INP dégradés |
| 6 | SPA React, SSR & SEA | [`seo-06-spa-sea`](../../tree/seo-06-spa-sea) | Meta tags dynamiques par route + un mini-brief SEA |

## Comment démarrer un challenge

Ne clone pas directement ce repo : utilise le bouton **Use this template** pour créer ta propre copie.

1. En haut de la page GitHub du repo, clique sur **Use this template** puis **Create a new repository**.
2. Coche bien **Include all branches** (sinon tu n'auras que `main`, sans les branches des challenges).
3. Nomme ton nouveau repo `nom_prenom_seo-challenge` (remplace par ton nom et prénom), choisis la visibilité, puis valide avec **Create repository**.
4. Clone ensuite ton propre repo, pas celui-ci :

```bash
git clone git@github.com:<ton-compte-github>/nom_prenom_seo-challenge.git
cd nom_prenom_seo-challenge
git checkout seo-04-technique   # par exemple
npm install
npm run dev
```

Le `README.md` de chaque branche contient la mission et des indices progressifs repliés (`<details>`) : essaie d'abord sans les ouvrir.

## Ressources du module

- Les quêtes complètes (théorie + quiz) : `seo-01` à `seo-06` du dossier `quests-a11y-seo/`
- Outils : [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) (DevTools Chrome), [Google Search Console](https://search.google.com/search-console), [PageSpeed Insights](https://pagespeed.web.dev/)
