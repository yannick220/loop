LOOP — PWA V93 prête pour GitHub Pages

CONTENU
- index.html : version complète LOOP V93
- manifest.webmanifest : installation PWA
- sw.js : cache hors-ligne
- icons/ : icônes officielles LOOP (#FFD100 sur fond bleu nuit)

GITHUB PAGES
1. Décompresser LOOP_PWA_V93.zip.
2. Envoyer le CONTENU du dossier LOOP_PWA_V93 à la racine du dépôt GitHub
   (index.html, manifest.webmanifest, sw.js et le dossier icons).
3. GitHub > Settings > Pages.
4. Source : Deploy from a branch.
5. Branch : main / /(root).
6. Ouvrir l’URL GitHub Pages en HTTPS.

INSTALLATION
- Android / Chrome : menu ⋮ > Installer l’application.
- iPhone / Safari : Partager > Sur l’écran d’accueil.

IMPORTANT
- Ne pas ouvrir index.html directement depuis le stockage du téléphone :
  le service worker nécessite HTTPS ou localhost.
- Si une ancienne version reste en cache après mise à jour sur GitHub,
  fermer/réouvrir l’app ou supprimer l’ancienne installation puis réinstaller.
