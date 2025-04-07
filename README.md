# Portfolio de Landry Tido

[![Deploy with Vercel](https://vercel.com/button)](https://landry-portfolio.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Made with Next.js](https://img.shields.io/badge/Made%20with-Next.js-000000?logo=next.js)](https://nextjs.org/)

Un portfolio moderne et interactif développé avec **Next.js**, mettant en avant mes compétences et projets en développement web.

![Aperçu du portfolio](https://via.placeholder.com/800x400?text=Aperçu+du+Portfolio)

## 📋 Table des matières

- [Fonctionnalités](#-fonctionnalités)
- [Technologies Utilisées](#-technologies-utilisées)
- [Structure du Projet](#-structure-du-projet)
- [Installation et Utilisation](#-installation-et-utilisation)
- [Déploiement](#-déploiement)
- [Responsivité](#-responsivité)
- [Personnalisation](#️-personnalisation)
- [Contribution](#-contribution)
- [Licence](#-licence)
- [Contact](#-contact)

## ✨ Fonctionnalités

- **Design Moderne** : Interface utilisateur élégante avec animations fluides grâce à **Framer Motion**
- **Mode Clair/Sombre** : Bascule intuitive entre les thèmes avec **next-themes**
- **Multilinguisme** : Support complet pour le français et l'anglais
- **Formulaire de Contact** : Envoi de messages via **EmailJS** sans backend
- **Responsive** : Expérience optimisée sur tous les appareils (mobile, tablette, bureau)
- **Performance Optimisée** : Temps de chargement rapides grâce à Next.js
- **SEO Friendly** : Métadonnées optimisées pour les moteurs de recherche
- **Suivi des Analyses** : Intégration de **Vercel Analytics** pour les statistiques de visite

## 🚀 Technologies Utilisées

| Technologie                                               | Utilisation                                           |
| --------------------------------------------------------- | ----------------------------------------------------- |
| [Next.js](https://nextjs.org/)                            | Framework React pour le SSR et la génération statique |
| [TypeScript](https://www.typescriptlang.org/)             | Typage statique pour un code robuste                  |
| [Tailwind CSS](https://tailwindcss.com/)                  | Framework CSS utilitaire pour un design responsive    |
| [Framer Motion](https://www.framer.com/motion/)           | Bibliothèque d'animations réactives                   |
| [React Icons](https://react-icons.github.io/react-icons/) | Collection d'icônes populaires pour React             |
| [EmailJS](https://www.emailjs.com/)                       | Service d'envoi d'emails côté client                  |
| [next-themes](https://github.com/pacocoursey/next-themes) | Gestion des thèmes dans Next.js                       |
| [Vercel Analytics](https://vercel.com/analytics)          | Analyse du trafic et comportement utilisateur         |

## 📂 Structure du Projet

```
landrytido-portfolio/
├── public/
│   ├── locales/       # Fichiers de traduction
│   └── projects/      # Images des projets
├── src/
│   ├── components/    # Composants React réutilisables
│   │   ├── layout/    # Composants de mise en page
│   │   ├── ui/        # Composants d'interface utilisateur
│   │   └── sections/  # Sections principales du portfolio
│   ├── contexts/      # Contextes React (thème, langue)
│   ├── hooks/         # Hooks personnalisés
│   ├── pages/         # Pages du site
│   ├── styles/        # Fichiers CSS globaux et par composant
│   ├── types/         # Définitions de types TypeScript
│   └── utils/         # Fonctions utilitaires
└── package.json       # Dépendances et scripts
```

## 🔧 Installation et Utilisation

1. **Clonez le dépôt** :

   ```bash
   git clone https://github.com/Landrytido/Portfolio-.git
   cd Portfolio-
   ```

2. **Installez les dépendances** :

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Variables d'environnement** :
   Créez un fichier `.env.local` à la racine du projet :

   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
   NEXT_PUBLIC_EMAILJS_USER_ID=votre_user_id
   ```

4. **Démarrez le serveur de développement** :

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

   Accédez à [http://localhost:3000](http://localhost:3000) dans votre navigateur.

5. **Compilez pour la production** :

   ```bash
   npm run build
   # ou
   yarn build
   ```

6. **Lancez la version de production** :
   ```bash
   npm run start
   # ou
   yarn start
   ```

## 🌐 Déploiement

Le portfolio est déployé sur [Vercel](https://vercel.com) et accessible à l'adresse suivante :
[https://landry-portfolio.vercel.app](https://landry-portfolio.vercel.app)

Pour déployer votre propre version :

1. Créez un compte sur [Vercel](https://vercel.com)
2. Connectez votre dépôt GitHub
3. Importez le projet et configurez les variables d'environnement
4. Déployez !

## 📱 Responsivité

Le site est optimisé pour offrir une expérience utilisateur fluide sur tous les appareils :

| Type d'appareil | Taille d'écran | Optimisations                              |
| --------------- | -------------- | ------------------------------------------ |
| Bureau          | ≥ 1024px       | Navigation complète, animations avancées   |
| Tablette        | 768px - 1023px | Interface adaptée, éléments redimensionnés |
| Mobile          | ≤ 767px        | Menu hamburger, disposition en colonne     |

## 🛠️ Personnalisation

### Thèmes

Les thèmes clair et sombre sont gérés avec `next-themes`. Personnalisez les couleurs dans `tailwind.config.js` :

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#...",
          dark: "#...",
        },
        // Ajoutez vos couleurs personnalisées ici
      },
    },
  },
  // ...
};
```

### Langues

Pour ajouter une nouvelle langue :

1. Créez un nouveau fichier dans `public/locales/[LANG]/translation.json`
2. Ajoutez la nouvelle langue dans les options du sélecteur de langue
3. Mettez à jour la logique de changement de langue dans le composant concerné

### Projets

Pour ajouter ou modifier des projets :

1. Ajoutez les images dans `public/projects/`
2. Modifiez le fichier `src/components/sections/ProjectsSection.tsx`
3. Mettez à jour les traductions pour les descriptions de projets

## 👥 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Validez vos modifications (`git commit -m 'Add amazing feature'`)
4. Poussez vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT).

## 📞 Contact

Landry Tido - [landrytido727@gmail.com](mailto:landrytido727@gmail.com)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/landry-tido-atikeng)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Landrytido)

---

Développé avec ❤️ par Landry Tido
