LOOP — dossier PWA prêt à publier

Fichiers :
- index.html : application
- manifest.webmanifest : configuration d'installation
- sw.js : cache hors-ligne / mode application
- icons/ : icônes Android, iPhone/iPad et maskable

Publication GitHub Pages :
1. Envoyer TOUT le contenu de ce dossier à la racine du dépôt.
2. Dans GitHub > Settings > Pages, publier la branche main depuis /(root).
3. Ouvrir l'URL GitHub Pages sur le téléphone.

Installation :
- Android / Chrome : menu ⋮ > Installer l'application.
- iPhone / Safari : Partager > Sur l'écran d'accueil.

Important :
- La PWA doit être servie en HTTPS (GitHub Pages le fait automatiquement).
- Ne pas ouvrir index.html directement depuis le stockage du téléphone : le service worker ne fonctionnerait pas.
