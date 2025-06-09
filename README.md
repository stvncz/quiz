# 🧠 Daily Quiz

Une application de quiz web qui propose chaque jour 5 questions de culture générale.  
Le projet est développé avec **Svelte** et **Tailwind CSS**.

> ✨ Disponible en ligne : [quiz.stvn.cz](https://quiz.stvn.cz)

## ✨ Fonctionnalités

- 5 questions aléatoires par session
- Correction instantanée après soumission
- Affichage du score
- Chargement dynamique des questions via une [Quizz API](https://quizzapi.jomoreschi.fr/)
- Responsive & stylé avec Tailwind CSS

## 🧪 Technologies utilisées

- [Svelte](https://svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- API Node.js perso (récupération des questions, gestion du quiz journalier et validation)
- [Vite](https://vitejs.dev/) pour le développement

## 🚀 Lancer le projet en local

```bash
# 1. Cloner le projet
git clone https://github.com/tonpseudo/daily-quiz.git
cd daily-quiz

# 2. Installer les dépendances
npm install

# 3. Démarrer le serveur de développement
npm run dev
```

## 📁 Structure du projet

src/
├── components/         # Composants Svelte : Question, Quiz, Loader, etc.
├── App.svelte          # Entrée principale de l'application
├── main.js             # Point d'entrée JS
├── api.js              # Appels à l'API de questions
└── assets/             # Images, JSON, etc.

## 🔐 Environnement & déploiement

Un fichier .env peut être utilisé pour définir l'URL de l'API.
Un script de déploiement local deploy.sh est disponible (non versionné) pour publication rapide sur le serveur via rsync ou scp.


## 📌 À venir

- Possibilité de rejouer le quiz de la veille
- Historique des scores
- N'hésitez pas à proposer!


## 🧑‍💻 Auteur

Développé avec ☕ par stvncz
