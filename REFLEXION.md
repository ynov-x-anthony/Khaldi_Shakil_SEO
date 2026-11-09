# REFLEXION.md : à compléter

1. `robots.txt` empêche-t-il, à lui seul, le duplicate content entre
   `/produits?tri=prix` et `/produits?tri=prix-asc` ? Pourquoi ?

   Non. robots.txt contrôle seulement le crawl, pas l'indexation. Donc google ne sait pas que ce sont les deux url sont des duplicate

2. Pourquoi la balise canonique est-elle l'outil adapté ici, plutôt que
   `robots.txt` ou une meta `noindex` ?

   Les deux URLs ont le même contenu et doivent rester accessibles aux visiteurs. On veut juste dire à Google laquelle indexer.

3. Si demain `/admin` existe sur ce site et ne doit jamais être exploré par
   Google, quelle ligne ajoutes-tu dans `robots.txt` ?

   Disallow: /admin