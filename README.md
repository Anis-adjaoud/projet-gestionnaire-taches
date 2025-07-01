# partiel_outils_code

### Configuration et Organisation

1. On a d'abord créé le repo Git princial.
2. Ensuite on a ajouté les autres collaborateurs.
3. Dans les settings de GitHub, on a rajouté des rules pour que la Pull request soit obligatoire et soumise à une validation par des reviewers pour pusher sur la branche principal main, afin de protéger la branche main qui est la branche de production.
4. Git Flow :
    On a décidé d'utiliser le gitFlow suivant :
    Branche principal pour la production "main".
    Branche de développement "develop".
    Branches de travail "feature...".
    Branches de fix de bugs "fix...".
    Pour chaque nouveau dev ou nouvelle fonctionnalité, on crée une nouvelle branche feature à partir de main, on code dessus, ensuite on push, on merge dans develop et ensuite on crée une pull request pour merger dans main.
    Cette PR doit etre revue et approuvée par un autre collaborateur.

### Développement Collaboratif
1. Création de l'arborescence :
projet-gestionnaire-taches/
├── frontend/         
├── backend/           
├── tests/           
├── README           
└── .github/       

2. Développement :
    - Tests et Qualité :
    On a implementé plusieurs tests : 
        Tests unitaires (utils.test.js) : réalisés avec Jest pour tester les fonctions critiques du backend (vérification des statuts, priorités, validation d’inputs).
        
        Tests d'intégrations (backend.test.js) : implementés afin d'assurer le bon fonctionnement des appels API (GET et POST) 

        Tests E2E (login.test.js) : certains scénarios utilisateur ont été testés avec Selenium pour simuler une navigation réelle dans l’application.

        Linting : avec ESLint pour garantir une base de code homogène.

        Métriques de couverture : génération d’un rapport de couverture avec Jest (Objectif > 70%).


    - CI/CD et Déploiement :

    On a créé une pipeline CI configurée avec Github Actions qui lance tous les tests automatiquement implementés à chaque push ou pull request, et execute le linting et vérifie la couverture du code.
    Cette automatisation nous a permis d’assurer la stabilité du projet à chaque nouvelle modification.
    Après l'implementation de cette pipeline et la correction des erreurs rencontrées, on a pu faire un push qui a passé tout le pipeline, et créé une pull request pour mettre dans main, ceci est visible dans Actions sur GitHub.

### Exécution du Projet en Local
En executant les commandes fournies on a lancé l'application en local, en démarrant le backend et le frontend, puis en accèdant à l'interface via http://localhost:3000.

