# ![](../images/logo-vscode.png)

# Visual Studio Code & extensions

## Un mot d’histoire…

Le monde des éditeurs de code est vaste et ancien ; Linux est traditionnellement dominé par Vim et Emacs, et Windows a longtemps pataugé avec Notepad++ et UltraEdit…  À partir de 2005, on a vu arriver une nouvelle génération d'éditeurs en interface graphique, inaugurée par TextMate, qui n’était toutefois disponible que sur OSX.  Il a fallu l’arrivée de Sublime Text, disponible sur les 3 plates-formes principales, pour changer radicalement la donne.

Toutefois, « ST » est le fruit du travail d’une personne, pour l’essentiel, et constitue un logiciel propriétaire payant.  Par ailleurs, même dans sa version 3, enfin finalisée au 2e semestre 2017 après plusieurs années de beta, on constate de nombreux manques.

Dans l’intervalle, Atom est sorti, qui reprend tous les bons points de ST mais est par ailleurs un logiciel open-source avec beaucoup plus de possibilités pour ses plugins. L’inconvénient est qu’il reste un peu lent, et crashe parfois de façon inexplicable.  Qui plus est, même dans sa toute dernière version, « Atom IDE », il n’offre pas une proposition de valeur forte pour le développement web et Node.

C’est dans ce paysage assez concurrentiel qu’a débarqué Visual Studio Code, un projet **open-source** piloté par Microsoft, à ne pas confondre avec leur mammouth propriétaire, Visual Studio tout court.  «Code» est un éditeur, pas un EDI, même s’il en a les caractéristiques principales grâce à diverses fonctionnalités intégrées et à des extensions populaires.

## Les principaux avantages de Code

Code est basé sur le même socle technique qu’Atom, mais la similitude s’arrête là…

- **Rapide** à lancer
- **Très rapide** à l’usage
- Syntaxes **ES modernes et React** intégrées
- **Git** intégré (et plutôt pas mal, en plus)
- **Débogueur Node** intégré
- **Complétion de code** plutôt qualitative (mix définitions + inférence)
- **Emmet** intégré
- Excellente UX de paramétrage
- Préférences de workspace, idéal pour partager des configurations
- Nombreuses **extensions** « indispensables » disponibles

## Installation

[Télécharge VS Code](https://code.visualstudio.com/) et exécute l’installeur, tout simplement.

## Paramétrage & personnalisation

Comme toujours avec un nouvel éditeur, toute la difficulté consiste à rapidement le rendre opérationnel… et être soi-même opérationnel dessus.  Pour cette raison, nous te fournissons ci-dessous les moyens de **configurer rapidement ton VS Code de façon optimale**.

### En mode express

Nous avons mis en place un [petit dépôt GitHub](https://github.com/deliciousinsights/vscode-setup) qui te permet d’automatiser la configuration de ton VS Code et l’installation de nos extensions recommandées.

Il te faudra quand même [Node](./node.md) installé sur la machine (suis ce liens pour les installer au mieux, si besoin). Une version 8.2+ est souhaitable, pour avoir npm 5.2+ d’office, mais à défaut, pense juste à mettre à jour ton npm comme ceci (éventuellement préfixé de `sudo` si besoin sur Linux ou OSX) :

```bash
npm install -g npm@latest
```

Si tu as npm 5.2+, c’est super simple ensuite :

```bash
npx vscode-setup
```

Note que si tu as déjà fait ça par le passé, et veux garantir le recours à la dernière version publiée, tu peux ajuster ton appel comme suit :

```bash
npx --ignore-existing vscode-setup
```

### En mode rapide (mais moins)

Si tu préfères garder un peu la main sur ce qui se passe, voici de quoi aller moins vite.

Il te faudra de toutes façons [Node](./node.md) et idéalement [Git](./git.md) installés sur la machine (suis ces liens pour les installer au mieux, si besoin).

Voici comment :

1. Récupère le dépôt
    - Soit à la main, si tu as Git installé : `git clone https://github.com/deliciousinsights/vscode-setup`
    - Soit en [téléchargeant un Zip](https://github.com/deliciousinsights/vscode-setup/archive/master.zip) que tu décompresseras ensuite
2. Ouvre le dépôt dans VS Code
    - Soit depuis la ligne de commande : une fois dans le répertoire du dépôt, tape simplement `code .`
    - Soit depuis VS Code : utilise la commande *Fichier > Ouvrir un dossier* (*File > Open Folder*) et sélectionne le dossier du dépôt.
3. Va dans le menu *Tâches > Exécuter la tâche* (*Tasks > Run Task*) et choisis la tâche configurée proposée (`npm: setup-vs-code`).

Tu devrais voir s’ouvrir un terminal de tâche en bas de la fenêtre de l’éditeur, et pouvoir suivre le déroulement des réglages.

Après s’être assuré que toutes les extensions recommandées sont installées, le système te demandera, dans le terminal de tâche, si tu souhaites fusionner les réglages recommandés dans tes paramètres généraux. Cette étape est optionnelle, et si tu as déjà des réglages aux petits oignons, tu peux répondre Non.  Dans le cas contraire, le programme vérifie si tu n’aurais pas déjà fait une telle fusion, par mesure de sécurité. Si ce n’est pas le cas, ou que tu confirmes tout de même, il ajoute nos réglages recommandés, commentaires compris, à la fin de tes propres réglages utilisateur.

En bout de processus, les paramètres et extensions indiqués ci-dessous seront installés et actifs d’office : tu n’auras plus qu’à redémarrer VS Code.

<!-- FIXME: Proposer un paquet npm dédié avec un appel npx pour ça ?! -->

### À la main

Si tu as déjà un VSCode avec des réglages en place auxquels tu tiens, ou simplement si tu ne fais pas tellement confiance à nos scripts (*snif*), voici le détail des extensions et réglages à mettre en place :

#### Extensions recommandées

Tu peux facilement obtenir la liste et installer manuellement juste en récupérant le dépôt mentionné dans la partie « En mode express » et en l’ouvrant dans VS Code : il te signalera que le dépôt propose des extensions et te proposera d’ouvrir la liste pour choisir les installations qui te conviennent.

Voici le détail des extensions ainsi recommandées :

|Extension / ID|Description rapide|
|-
|[advanced-new-file](https://marketplace.visualstudio.com/items?itemName=patbenatar.advanced-new-file)<br>`patbenatar.advanced-new-file`|Permet de créer facilement, au clavier, de nouveaux fichiers et leurs dossiers conteneurs, histoire d’avoir directement la bonne coloration syntaxique en prime.|
|[Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)<br>`formulahendry.auto-close-tag`|Ferme automatiquement les balises (fermer l’ouvrante crée la fermante, et faire le `/` d’une auto-fermante ajoute le `>` final)|
|[Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)<br>`formulahendry.auto-rename-tag`|Synchronise automatiquement la balise opposée lors de la modification d’une balise ouvrante/fermante|
|[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)<br>`msjsdiag.debugger-for-chrome`|Permet de débogueur du JS exécuté dans Chrome, au sein de VS Code (existe aussi pour Firefox et Edge)|
|[ECMAScript Quotes Transformer](https://marketplace.visualstudio.com/items?itemName=vilicvane.es-quotes)<br>`vilicvane.es-quotes`|Facilite la bascule entre les 3 types de délimiteurs de `String` (`'`, `"` et <tt>`</tt>)|
|[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)<br>`dbaeumer.vscode-eslint`|Le *linter* incontournable pour analyser à la volée nos codes sources et nous signaler tout problème potentiel|
|[JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.javascriptsnippets)<br>`xabikos.javascriptsnippets`|Toute une série de *snippets* très utiles lorsqu’on écrit du code ES2015, en particulier pour les imports|
|[language-stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)<br>`sysoev.language-stylus`|Prise en charge du langage de feuilles de styles Stylus (coloration, etc.)|
|[markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)<br>`DavidAnson.vscode-markdownlint`|*Linter* dédié à Markdown, qui repère les erreurs et risques courants et vérifie aussi la sémantique et la structure du document|
|[nbsp-vscode](https://marketplace.visualstudio.com/items?itemName=possan.nbsp-vscode)<br>`possan.nbsp-vscode`|Mise en exergue des espaces insécables, pour éviter les soucis inattendus notamment avec JavaScript et Ruby (particulièrement en clavier OSX FR)|
|[npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script)<br>`eg2.vscode-npm-script`|Intégration avancée de `npm` (exploitation par la fonction Tâches, ajout de dépendances, etc.)|
|[Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)<br>`christian-kohler.path-intellisense`|Complétion intelligente des chemins dans de nombreux types de codes sources|
|[Prettier - JavaScript formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)<br>`esbenp.prettier-vscode`|Formatage automatique (et très intelligent) de code à la sauvegarde.  Plus de soucis de style !  Fonctionne pour JS, CSS et HTML.|
|[Reactjs code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.reactsnippets)<br>`xabikos.reactsnippets`|Toute une série de *snippets* utiles lorsqu’on écrit du code React (classes, fonctions, `propTypes`, etc.)|
|[REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)<br>`humao.rest-client`|La meilleure manière de tester interactivement des requêtes HTTP de toutes sortes|
|[Search node_modules](https://marketplace.visualstudio.com/items?itemName=jasonnutter.search-node-modules)<br>`jasonnutter.search-node-modules`|Permet de laisser `node_modules` ignoré (et donc ne polluant pas <kbd>Ctrl+P</kbd>) mais de chercher néanmoins facilement, si besoin, dans les modules installés|
|[Subword navigation](https://marketplace.visualstudio.com/items?itemName=ow.vscode-subword-navigation)<br>`ow.vscode-subword-navigation`|Modifie les déplacements/sélections de mots pour fonctionner par sous-partie dans les identifiants composés (ex. `camelCase` aura `camel` et `Case`), très pratique pour ne sélectionner facilement qu’une partie de l’identifiant (pour la supprimer/modifier, par exemple)|
|[TypeScript Hero](https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero)<br>`rbbit.typescript-hero`|On s’en sert surtout pour sa gestion intelligente des imports (insertion automatique, tri / organisation, etc.)|
|[VSCode Great Icons](https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icon)<br>`emmanuelbeziat.vscode-great-icon`|Un thème d’icônes nettement plus détaillé / spécialisé que les autres, idéal pour le développement JS|

Nous t’invitons en revanche, au moins pour les projets de nos formations, à désactiver les extensions « concurrentes » qui risquent de marcher sur les pieds des nôtres, notamment en termes de formatage ou de *linting*.  Une fois le projet ouvert, il suffit de cliquer sur l’icône de paramètres (une roue dentée) de l’extension et de choisir *Disable (Workspace)* dans le menu déroulant. On pense notamment à :

- Beautify
- Beautify css/sass/scss/less
- CSS Formatter
- es-beautifier
- JavaScript Standard Format
- JS-CSS-HTML Formatter
- JSHint
- JSLint
- react-beautify
- Sass Formatter
- …

#### Paramétrage recommandé

Les codebases que nous fournissons comme socle de travail pour nos formations sont équipées de réglages de projet (*workspace settings*) adaptés, qui ont priorité sur vos réglages génériques.  Ces réglages sont présents dans le fichier `.vscode/settings.json` du projet, que tu retrouves en ouvrant les Préférences (<kbd>Ctrl+,</kbd>) et en choisissant en haut à droite *Workspace Settings*.

Voici le genre de choses qu’on propose sur les projets :

```js
{
  // Nicer debugging (experimental)
  "debug.inlineValues": true,

  // Font and spacing (even w/o Prettier/ESLint)
  "editor.fontFamily":
    "'Operator Mono SSm', 'Source Code Pro', Monaco, Menlo, Consolas, 'Droid Sans Mono', Inconsolata, 'Courier New', monospace",
  "editor.insertSpaces": true,
  "editor.minimap.enabled": false,
  "editor.multiCursorModifier": "alt",
  "editor.scrollBeyondLastLine": false,
  "editor.snippetSuggestions": "top",
  "editor.tabSize": 2,
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,

  // Hide Open Editors pane
  "explorer.openEditors.visible": 0,

  // Disable Preview when using Quick Open
  "workbench.editor.enablePreviewFromQuickOpen": false,

  // Use cool icon theme
  "workbench.iconTheme": "vscode-great-icons",

  // `.snap` files (Jest snapshots) should use JSX mode by default
  "files.associations": {
    "*.snap": "javascriptreact"
  },

  // Exclusions from the explorer
  "files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "**/node_modules": true
  },

  // Prettier & ESLint
  "prettier.eslintIntegration": true,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "es5",
  "prettier.semi": false,
  "editor.formatOnSave": true,
  "javascript.format.enable": false,

  // Flow
  "flow.useNPMPackagedFlow": true,
  "javascript.validate.enable": false,

  // Emmet
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "emmet.triggerExpansionOnTab": true,

  // TypeScript Hero (auto-imports & import sorting)
  "typescriptHero.resolver.disableImportRemovalOnOrganize": true,
  "typescriptHero.resolver.importGroups": [
    "Modules",
    "/material-ui/",
    "Plains",
    "Workspace"
  ],
  "typescriptHero.resolver.insertSemicolons": false,
  "typescriptHero.resolver.multiLineWrapThreshold": 80,
  "typescriptHero.resolver.organizeOnSave": true,
  "typescriptHero.resolver.resolverMode": "ES6"
}
```

Mais si tu souhaites suivre nos recommandations de façon générale, tu peux les poser en *User Settings* directement.  De notre côté, on a tendance à rajouter ceci :

```js
{
  "diffEditor.renderSideBySide": false,
  "editor.fontSize": 16,

  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/node_modules": true
  },

  "terminal.integrated.fontSize": 16,

  "workbench.colorTheme": "Monokai"
}
```

## Prise en main rapide

VS Code fait des pieds et des mains pour faciliter sa prise en main par les nouveaux utilisateurs, profites-en.

### La page Bienvenue

Lorsqu’il s’ouvre, il affiche par défaut sa page Bienvenue (que tu peux retrouver dans *Aide > Bienvenue* / *Help > Welcome*).

Cette page propose notamment deux sections : *Aide* et *Apprendre*.  On te recommande en particulier :

- *Aide > Fiche de révision du clavier imprimable* : un PDF spécifique à ton OS qui te redonne tous les raccourcis clavier importants.
- *Aide > Vidéos d’introduction* : ce sont les vidéos du *Getting Started* en ligne de VS Code, super utiles et bien foutues : [8 vidéos de 3 à 6 minutes](https://code.visualstudio.com/docs/getstarted/introvideos#VSCode) qui mettent en lumière les aspects importants : édition au quotidien, complétion de code, débogage, intégration Git, personnalisation, extensions…
- *Aide > Conseils et astuces* : c’est la partie *Tips and tricks* du *Getting Started* en ligne, avec des astuces choisies sur la palette de commande, la récupération des raccourcis claviers, l’appel de Code depuis la ligne de commande, la barre d’état, etc.
- *Apprendre > Terrain de jeu interactif* : ouvre un document spécial qui te renseigne sur les principaux avantages et fonctions pratiques de Code, avec des mini-éditeurs utilisables à chaque fois pour pratiquer immédiatement l’aspect décrit : trop bien !

### La doc en ligne

Les [docs officielles](https://code.visualstudio.com/docs) regorgent de trucs utiles, mais j’attire principalement ton attention sur deux sections de ces docs :

- [Getting started](https://code.visualstudio.com/docs), qui reprend des contenus cités plus haut mais en ajoute plein d’autres (thèmes, changement de la langue de l’éditeur, etc.)
- [User guide](https://code.visualstudio.com/docs/editor/codebasics), qui reprend pas à pas les points forts de Code, démos et illustrations à l’appui. On y trouve notamment des sujets avancés commes les *multi-root workspaces*.

### Les snippets installés par les extensions

Les extensions recommandées fournissent pas mal de *snippets*, des petits blocs de code associés à des raccourcis qu’on tape suivis de <kbd>Tab</kbd>.  Nous répertorions les principaux, utiles dans le cadre de nos formations, sur une page de ce guide :

[Voir la liste illustrée des snippets utiles](./vscode-snippets.md).
