# 🧠 Daily Quiz

Une application de quiz web qui propose chaque jour 10 questions de culture générale.  
Le projet est développé avec **Svelte** et **Tailwind CSS**.

## ✨ Fonctionnalités

- 10 questions aléatoires par session
- Correction instantanée après soumission
- Affichage du score
- Chargement dynamique des questions via une API (Open Trivia DB)
- Responsive & stylé avec Tailwind CSS

## 🧪 Technologies utilisées

- [Svelte](https://svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Open Trivia DB](https://opentdb.com/) (API de questions — temporaire)
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

## 📌 À venir

- Intégration d’une API en français
- Page d’accueil avec score précédent
- Système de quiz quotidien basé sur la date


## 🧑‍💻 Auteur

Développé avec ❤️ par stvncz
