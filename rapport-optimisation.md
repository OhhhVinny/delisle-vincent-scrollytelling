# Rapport d’optimisation du projet ScrollyTelling

[Page Speed Insights - Rapport du 12 mai 2024, 8:01:50](https://pagespeed.web.dev/analysis/https-vincent-tim-momo-com/l24pepdhd0?form_factor=desktop)

## Problème #1

### Nom du problème

La taille des requêtes réseaux sont trop élévées en raison de fichiers volumineux

### Action concrète pour résoudre le problème

Changer le framerate ainsi que le format original des spritesheets lyx_reveille et lyx_dors

### Résultat

Changement du framerate de 24 à 12 ainsi que 12 steps aulieu de 48 pour les spritesheets lyx_reveille et lyx_dors ainsi que leurs formats de 750x750 à 500x500. Cela a réduit grandement la taille des requête réseaux mais n'a pas réduit le temps de chargement

## Problème #2

### Nom du problème

Le format PNG est plus ancien et moin optimisé que les formats AVIF et WebP ce qui réduit la vitesse de chargement

### Action concrète pour résoudre le problème

Aulieu de changer le format, il y aura un changement du framerate ainsi que le format original des spritesheets lyx_reveille et lyx_dors

### Résultat

Changement du framerate de 24 à 12 ainsi que 12 steps aulieu de 48 pour les spritesheets lyx_reveille et lyx_dors ainsi que leurs formats de 750x750 à 500x500. Cela a réduit grandement la taille des fichier mais n'a pas réduit le temps de chargement

## Problème #3

### Nom du problème

Les images hors de l'écran sont chargées avant interactivité ce qui réduit la performance

### Action concrète pour résoudre le problème

Appliquer le "lazy-loading" à tous les balises images dans le html pour réduire de temps de chargement de la page.

### Résultat

L'ajout des "lazy-loading" n'a pas amélioré la vitesse du site.

## Rapport projet ScrollyTelling après optimisation

[Page Speed Insights - Rapport du 13 mai 2024, 12:36:11](https://pagespeed.web.dev/analysis/https-vincent-tim-momo-com/zmpu70upqa?form_factor=desktop)
