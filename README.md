# Saving Throw

**Projet réalisé dans le cadre de la nuit de l'info de 2024.**

L'objectif de ce site est de montrer les parrallès entre les systèmes humains et les systèmes océaniques. Cette transmission de connaissances est réalisée grâce à la gamification à travers des défis et des quizz

## Rapport : Choix Techniques pour un Projet Web en Green Coding

### Introduction

Dans le cadre de notre projet web, nous avons mis en œuvre plusieurs pratiques de green coding afin de minimiser l'empreinte carbone de notre site et d'optimiser ses performances. Voici une synthèse des décisions prises, ainsi que des pistes d’amélioration envisagées.

Choix Techniques Implémentés

#### 1. Utilisation d’images basse résolution

Nous avons opté pour des images basse résolution (pixelisées) afin de réduire leur poids et le temps de chargement.

Cette approche diminue le transfert de données sur le réseau, économisant énergie et bande passante.

#### 2. Optimisation des appels de fonctions

Afin d'éviter la redondance des appels de fonctions, nous avons réorganisé et regroupé notre logique. Cela permet de réduire les cycles inutiles de calcul au niveau du navigateur.

#### 3. Limitation des requêtes et absence de base de données (BDD)

Le projet a été conçu sans base de données, privilégiant des contenus statiques.

Nous avons limité le nombre de requêtes HTTP grâce à une meilleure structuration des fichiers et l’usage de cache navigateur.

#### 4. Favorisation du CSS pour les animations

Nous avons choisi d'utiliser des animations en CSS au lieu de JavaScript ou de fichiers GIF, réduisant ainsi la consommation de ressources.

Le CSS natif permet des animations fluides avec un impact négligeable sur le processeur.

#### 5. Eco Score

Lors du dernier test réalisé, notre projet a obtenu un Eco Score de 90/100, témoignant de l’efficacité de nos choix.

### Idées Envisagées (Contraintes de Temps)

Bien que le projet réponde déjà à de nombreux critères de sobriété énergétique, certaines pistes n’ont pas pu être explorées par manque de temps :

#### Conversion des images en WebP

Le format WebP offre une meilleure compression que les formats traditionnels (JPEG/PNG), réduisant le poids des fichiers sans perte notable de qualité.

#### Lazy Loading des images

Implémenter le chargement paresseux (“lazy loading”) aurait permis de charger les images uniquement lorsque l’utilisateur atteint la section correspondante, évitant des chargements inutiles.

#### Transformation des icônes communes en composants CSS/HTML purs

Les icônes réutilisées sur plusieurs pages auraient pu être remplacées par des composants en CSS et HTML au lieu de dépendre d’images ou de fichiers tiers.

### Conclusion

Ces décisions reflètent notre engagement envers un développement web plus durable. L’optimisation des performances et la réduction de l’impact énergétique sont des priorités qui guideront également nos futurs projets. Avec davantage de temps, les idées mentionnées ci-dessus pourraient être mises en œuvre pour aller encore plus loin dans cette démarche.

## Collaborateurs

- [Romane Malherbe](https://github.com/funnyLoop)
- [Enzo Calleya](https://github.com/Enzouz12)
- [Julien Linget](https://github.com/neswatch)
