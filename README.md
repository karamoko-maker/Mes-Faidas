# Mes Faidas v4

Carnet de zikr personnel, en français, pensé pour le téléphone.

## Fonctionnalités

- **Sourates** : rituels des sourates 47 (Muhammad), 77 (Al-Moursalate), 78 (An-Naba) et 14 (Ibrahim), avec formule clé en arabe, phonétique et traduction.
- **Besoins** : avoir un enfant, piété du cœur, mariage et foyer, guérison, sérénité, protection.
- **Chapelet à toucher** : compteur circulaire qui passe tout seul à l’étape suivante, avec vibration.
- **Suivi des cycles** : 3, 7 ou 40 jours, avec une perle par jour accompli.
- **Salât** :
  - horaires du jour pour 7 villes de Côte d’Ivoire (méthode Ligue islamique mondiale : Fajr 18°, Isha 17°) ;
  - nombre de rak’as, lecture à voix haute ou basse, sunna de chaque prière ;
  - bouton « Rappel de la prière » (son + vibration, à l’heure ou 5 à 15 min avant) ;
  - guide animé façon manga, position par position, avec ce qu’il faut dire ;
  - textes complets : Fâtiha, Al-Ikhlâs, Tachahhoud, Salât Ibrâhîmiyya.
- **Apparence** : thème clair ou sombre, 5 couleurs, 3 polices arabes, taille de l’arabe réglable.

Les données (progression, réglages) restent dans le navigateur du téléphone (`localStorage`). Aucun serveur, aucun compte.

## Structure

```
mes-faidas/
├── index.html            Page principale
├── css/style.css         Styles de l’app (par-dessus Bootstrap 5.3.3)
├── js/app.js             Contenu des modules et logique
├── icon.svg              Icône
├── manifest.webmanifest  Installation sur l’écran d’accueil
└── .nojekyll             Pour GitHub Pages
```

Bootstrap 5.3.3 et les polices (Google Fonts) sont chargés depuis Internet.

## Mettre en ligne avec GitHub Pages

1. Crée un dépôt sur GitHub, par exemple `mes-faidas`.
2. Envoie le contenu du dossier `mes-faidas/` à la racine du dépôt (bouton **Add file → Upload files**, ou `git push`).
3. Dans le dépôt : **Settings → Pages → Source : Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
4. Après une minute, l’app est en ligne à l’adresse `https://<ton-pseudo>.github.io/mes-faidas/`.
5. Sur le téléphone, ouvre ce lien puis **Ajouter à l’écran d’accueil** pour l’utiliser comme une app.

## Tester en local

Ouvre `index.html` dans un navigateur, ou lance un petit serveur :

```bash
cd mes-faidas
python3 -m http.server 8000
```

puis va sur http://localhost:8000.

## Modifier le contenu

Les modules sont dans `js/app.js`, dans le tableau `MODULES`. Chaque module a :
`id`, `kind` (`sourate` ou `besoin`), `name`, `arName`, `objectif`, `cycles`, `concept` (formule clé), `steps` (étapes avec `label`, `ar`, `n` = nombre de répétitions), et en option `secret`, `option`, `care`.

Pense à changer le numéro de version dans le `<title>` de `index.html` à chaque modification.

## Limites

- Le rappel de la prière ne sonne que si l’app est ouverte.
- Les horaires sont calculés : compare-les avec ceux de ta mosquée.
- Les nombres (7, 70, 100, 313) et la plupart des rituels viennent de la tradition des praticiens. Les du‘as citées sont tirées du Coran ou de la Sunna.
