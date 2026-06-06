# Guide de Test Complet - Système Multilingue (FR/EN/AR)

## Objectif
Tester complètement le système multilingue sur Android et iOS, en vérifiant le RTL pour l'arabe et que toutes les traductions s'affichent correctement.

---

## 1. Configuration de Test

### Prérequis
- Appareil Android (version 7.0+) ou iOS (version 13+)
- Expo Go installé sur l'appareil
- QR code Expo disponible : `exps://8081-i6zdvi0l1q754zky1kk2q-e8179c0f.us2.manus.computer`

### Étapes de Configuration
1. Ouvrir Expo Go sur l'appareil
2. Scanner le QR code ou entrer l'URL
3. Attendre le chargement complet de l'application

---

## 2. Tests de Sélection de Langue

### Test 2.1 : Affichage de la Page de Bienvenue
- **Objectif** : Vérifier que la page de bienvenue s'affiche correctement avec la barre de langue
- **Étapes** :
  1. Lancer l'application
  2. Vérifier que la page de bienvenue s'affiche avec le carousel d'images
  3. Vérifier que la barre de langue est visible en bas avec 3 boutons (FR/EN/AR)
  4. Vérifier que le bouton "Français" est actif par défaut (surligné en couleur primaire)
- **Résultat attendu** : Page de bienvenue affichée correctement avec barre de langue visible

### Test 2.2 : Sélection de Langue - Français
- **Objectif** : Vérifier que la sélection du français fonctionne correctement
- **Étapes** :
  1. Cliquer sur le bouton "Français" dans la barre de langue
  2. Vérifier que le bouton devient actif (surligné)
  3. Cliquer sur "Explorer" ou "Géoparc M'goun"
  4. Vérifier que l'écran suivant s'affiche en français
- **Résultat attendu** : Application affichée en français, bouton actif

### Test 2.3 : Sélection de Langue - English
- **Objectif** : Vérifier que la sélection de l'anglais fonctionne correctement
- **Étapes** :
  1. Retourner à la page de bienvenue (via les paramètres ou le bouton retour)
  2. Cliquer sur le bouton "English" dans la barre de langue
  3. Vérifier que le bouton devient actif
  4. Cliquer sur "Explore" ou "M'goun Geopark"
  5. Vérifier que l'écran suivant s'affiche en anglais
- **Résultat attendu** : Application affichée en anglais, bouton actif

### Test 2.4 : Sélection de Langue - العربية
- **Objectif** : Vérifier que la sélection de l'arabe fonctionne correctement et que le RTL s'active
- **Étapes** :
  1. Retourner à la page de bienvenue
  2. Cliquer sur le bouton "العربية" dans la barre de langue
  3. Vérifier que le bouton devient actif
  4. Cliquer sur "استكشف" ou "جيوبارك مكون"
  5. Vérifier que l'écran suivant s'affiche en arabe avec RTL activé
- **Résultat attendu** : Application affichée en arabe avec RTL, texte aligné à droite

---

## 3. Tests du RTL (Right-to-Left) pour l'Arabe

### Test 3.1 : Alignement du Texte Arabe
- **Objectif** : Vérifier que le texte arabe est aligné à droite
- **Étapes** :
  1. Sélectionner la langue arabe
  2. Naviguer vers chaque écran (home, geosites, itineraries, map, settings)
  3. Vérifier que tous les textes sont alignés à droite
  4. Vérifier que les icônes et éléments UI sont correctement positionnés
- **Résultat attendu** : Tous les textes alignés à droite, interface correctement orientée

### Test 3.2 : Direction des Listes et Cartes
- **Objectif** : Vérifier que les listes et cartes s'affichent correctement en RTL
- **Étapes** :
  1. Sélectionner la langue arabe
  2. Naviguer vers l'écran des géosites
  3. Vérifier que la liste des géosites s'affiche correctement
  4. Vérifier que les cartes et images sont correctement positionnées
- **Résultat attendu** : Listes et cartes affichées correctement en RTL

### Test 3.3 : Boutons et Formulaires en Arabe
- **Objectif** : Vérifier que les boutons et formulaires s'affichent correctement en RTL
- **Étapes** :
  1. Sélectionner la langue arabe
  2. Naviguer vers les paramètres
  3. Vérifier que les boutons et champs de formulaire s'affichent correctement
  4. Vérifier que le texte des boutons est aligné correctement
- **Résultat attendu** : Boutons et formulaires affichés correctement en RTL

---

## 4. Tests des Traductions

### Test 4.1 : Écran d'Accueil (Home)
- **Objectif** : Vérifier que toutes les traductions s'affichent correctement
- **Étapes** :
  1. Sélectionner chaque langue (FR, EN, AR)
  2. Naviguer vers l'écran d'accueil
  3. Vérifier que tous les textes sont traduits correctement
  4. Vérifier qu'aucun texte en dur n'apparaît
- **Résultat attendu** : Toutes les traductions affichées correctement

### Test 4.2 : Écran des Géosites
- **Objectif** : Vérifier que les traductions des géosites s'affichent correctement
- **Étapes** :
  1. Sélectionner chaque langue (FR, EN, AR)
  2. Naviguer vers l'écran des géosites
  3. Vérifier que les noms des géosites sont traduits
  4. Vérifier que les catégories et difficultés sont traduites
  5. Vérifier que les boutons de filtre sont traduits
- **Résultat attendu** : Toutes les traductions des géosites affichées correctement

### Test 4.3 : Écran des Itinéraires
- **Objectif** : Vérifier que les traductions des itinéraires s'affichent correctement
- **Étapes** :
  1. Sélectionner chaque langue (FR, EN, AR)
  2. Naviguer vers l'écran des itinéraires
  3. Vérifier que les noms des itinéraires sont traduits
  4. Vérifier que les niveaux de difficulté sont traduits
  5. Vérifier que les labels (jours, géosites) sont traduits
- **Résultat attendu** : Toutes les traductions des itinéraires affichées correctement

### Test 4.4 : Écran de la Carte
- **Objectif** : Vérifier que les traductions de la carte s'affichent correctement
- **Étapes** :
  1. Sélectionner chaque langue (FR, EN, AR)
  2. Naviguer vers l'écran de la carte
  3. Vérifier que les boutons de géolocalisation sont traduits
  4. Vérifier que les labels de la carte sont traduits
  5. Vérifier que le bottom sheet affiche les traductions correctes
- **Résultat attendu** : Toutes les traductions de la carte affichées correctement

### Test 4.5 : Écran des Paramètres
- **Objectif** : Vérifier que les traductions des paramètres s'affichent correctement
- **Étapes** :
  1. Sélectionner chaque langue (FR, EN, AR)
  2. Naviguer vers l'écran des paramètres
  3. Vérifier que tous les labels sont traduits
  4. Vérifier que le bouton "Changer la langue" est traduit
- **Résultat attendu** : Toutes les traductions des paramètres affichées correctement

---

## 5. Tests de Cohérence Multilingue

### Test 5.1 : Pas de Mélange de Langues
- **Objectif** : Vérifier que l'application n'affiche que la langue sélectionnée
- **Étapes** :
  1. Sélectionner chaque langue (FR, EN, AR)
  2. Naviguer vers tous les écrans
  3. Vérifier qu'aucun texte d'une autre langue n'apparaît
  4. Vérifier que les traductions manquantes sont remplacées par des clés (ex: "home.title")
- **Résultat attendu** : Uniquement la langue sélectionnée affichée

### Test 5.2 : Persistance de la Langue
- **Objectif** : Vérifier que la langue sélectionnée persiste après la fermeture de l'application
- **Étapes** :
  1. Sélectionner une langue (ex: anglais)
  2. Naviguer vers plusieurs écrans
  3. Fermer l'application
  4. Relancer l'application
  5. Vérifier que la langue sélectionnée est toujours l'anglais
- **Résultat attendu** : Langue persistée correctement

### Test 5.3 : Changement de Langue
- **Objectif** : Vérifier que le changement de langue fonctionne correctement
- **Étapes** :
  1. Sélectionner une langue (ex: français)
  2. Naviguer vers plusieurs écrans
  3. Retourner à la page de bienvenue via les paramètres
  4. Sélectionner une autre langue (ex: arabe)
  5. Vérifier que l'application s'affiche immédiatement en arabe
- **Résultat attendu** : Changement de langue effectué correctement

---

## 6. Tests de Performance

### Test 6.1 : Temps de Chargement
- **Objectif** : Vérifier que les traductions ne ralentissent pas l'application
- **Étapes** :
  1. Mesurer le temps de chargement de chaque écran
  2. Comparer les temps entre les différentes langues
  3. Vérifier qu'il n'y a pas de ralentissement significatif
- **Résultat attendu** : Temps de chargement similaire pour toutes les langues

### Test 6.2 : Utilisation Mémoire
- **Objectif** : Vérifier que les traductions n'augmentent pas significativement l'utilisation mémoire
- **Étapes** :
  1. Vérifier l'utilisation mémoire au démarrage
  2. Naviguer vers tous les écrans
  3. Vérifier l'utilisation mémoire finale
  4. Comparer avec les versions précédentes
- **Résultat attendu** : Utilisation mémoire acceptable

---

## 7. Rapport de Test

### Éléments à Documenter
- ✅ Sélection de langue fonctionne correctement
- ✅ RTL s'active correctement pour l'arabe
- ✅ Toutes les traductions s'affichent correctement
- ✅ Pas de mélange de langues
- ✅ Persistance de la langue
- ✅ Changement de langue fonctionne
- ✅ Performance acceptable
- ⚠️ Problèmes identifiés et solutions proposées

---

## 8. Checklist de Test Final

- [ ] Test 2.1 : Affichage de la page de bienvenue ✓
- [ ] Test 2.2 : Sélection de langue - Français ✓
- [ ] Test 2.3 : Sélection de langue - English ✓
- [ ] Test 2.4 : Sélection de langue - العربية ✓
- [ ] Test 3.1 : Alignement du texte arabe ✓
- [ ] Test 3.2 : Direction des listes et cartes ✓
- [ ] Test 3.3 : Boutons et formulaires en arabe ✓
- [ ] Test 4.1 : Écran d'accueil ✓
- [ ] Test 4.2 : Écran des géosites ✓
- [ ] Test 4.3 : Écran des itinéraires ✓
- [ ] Test 4.4 : Écran de la carte ✓
- [ ] Test 4.5 : Écran des paramètres ✓
- [ ] Test 5.1 : Pas de mélange de langues ✓
- [ ] Test 5.2 : Persistance de la langue ✓
- [ ] Test 5.3 : Changement de langue ✓
- [ ] Test 6.1 : Temps de chargement ✓
- [ ] Test 6.2 : Utilisation mémoire ✓

---

## 9. Instructions pour les Testeurs

### Sur Android
1. Installer Expo Go depuis Google Play Store
2. Scanner le QR code ou entrer l'URL
3. Attendre le chargement complet
4. Suivre les tests ci-dessus

### Sur iOS
1. Installer Expo Go depuis App Store
2. Scanner le QR code avec la caméra
3. Attendre le chargement complet
4. Suivre les tests ci-dessus

### Signaler les Problèmes
- Prendre des captures d'écran des problèmes
- Noter l'heure et la langue sélectionnée
- Décrire les étapes pour reproduire le problème
- Envoyer un rapport détaillé

---

## 10. Prochaines Étapes Après les Tests

1. **Corriger les bugs identifiés** - Résoudre tous les problèmes trouvés
2. **Optimiser les performances** - Si nécessaire
3. **Ajouter les traductions manquantes** - Compléter les traductions
4. **Déployer l'application** - Une fois tous les tests passés

