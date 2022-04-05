---
sidebar_position: 2
title: VSCode
---

# ![Visual Studio Code](/img/soft/logo-vscode.png)

## Un mot d’histoire…

Le monde des éditeurs de code est vaste et ancien ; Linux est traditionnellement dominé par Vim et Emacs, et Windows a longtemps pataugé avec Notepad++ et UltraEdit… À partir de 2005, on a vu arriver une nouvelle génération d'éditeurs en interface graphique, inaugurée par TextMate, qui n’était toutefois disponible que sur OSX. Il a fallu l’arrivée de Sublime Text, disponible sur les 3 plates-formes principales, pour changer radicalement la donne.

Toutefois, « ST » est le fruit du travail d’une personne, pour l’essentiel, et constitue un logiciel propriétaire payant. Par ailleurs, même dans sa version 3, enfin finalisée au 2e semestre 2017 après plusieurs années de beta, on constate de nombreux manques. La version 4 en comble pas mal, mais aura quand même mis 4 ans à débarquer.

Dans l’intervalle, Atom est sorti, qui reprend tous les bons points de ST mais est par ailleurs un logiciel open-source avec beaucoup plus de possibilités pour ses plugins. L’inconvénient est qu’il reste un peu lent, et crashe parfois de façon inexplicable. Qui plus est, même dans sa toute dernière version, « Atom IDE », il n’offre pas une proposition de valeur forte pour le développement web et Node.

C’est dans ce paysage assez concurrentiel qu’a débarqué Visual Studio Code, un projet **open-source** piloté par Microsoft, à ne pas confondre avec leur mammouth propriétaire, Visual Studio tout court. « VSCode » est un éditeur, pas un EDI, même s’il en a les caractéristiques principales grâce à diverses fonctionnalités intégrées et à une immense écosystème d'extensions.

Il est open-source et multi-plates-formes, donc youpi.

**VSCode est aujourd'hui l'éditeur libre le plus populaire chez les développeurs.**

## Les principaux avantages de VSCode

VSCode est basé sur le même socle technique qu’Atom, mais la similitude s’arrête là…

- **Rapide** à lancer
- **Très rapide** à l’usage
- Syntaxes **ES modernes et React** intégrées
- **Git** intégré (et plutôt pas mal, en plus)
- **Débogueur Node** intégré
- **Complétion de code** plutôt qualitative, surtout pour les langages statiquement typés (dont TypeScript)
- **Emmet** intégré
- Excellente UX de paramétrage
- Préférences de workspace, idéal pour partager des configurations
- Nombreuses **extensions** « indispensables » disponibles

## Installation

[Télécharge VSCode](https://code.visualstudio.com/) et exécute l’installeur, tout simplement.

:::info Utilisateurs OSX : juste un mot…

Afin de bénéficier du binaire `code` (qui invoque l’éditeur) en ligne de commande sur OSX aussi, il vous faut lancer une commande au sein de l’éditeur.

1. Ouvrez l’éditeur (_Visual Studio Code_ dans vos _Applications_)
2. Lancez la palette de commandes avec <kbd>Cmd+Shift+P</kbd>
3. Tapez « Shell » et choisissez la commande _Commande d’interpréteur de commande : Installer la commande 'code' dans le PATH_

C’est (normalement) tout ! Pour tester :

1. Ouvrez votre Terminal préféré
2. Tentez la commande `code`

Si elle n’est toujours pas là (mince…), vous aurez sans doute besoin de lier la commande `code` installée vers un chemin garanti dans votre PATH usuel. Tentez la commande suivante :

```bash
sudo ln -nfs \
  /Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code \
  /usr/local/bin/code
```

Après quoi, `code` devrait marcher.
:::

## Paramétrage & personnalisation

Plusieurs de nos formations utilisent une **appli fil rouge** dont nous vous fournissons le dépôt. Celui-ci comprend (dans le dossier racine spécial `.vscode`) des recommandations d'extensions, réglages de niveau _workspace_, définitions de tâches et de configurations débogueur qui seront automatiquement exploitées par VSCode lorsque tu ouvres le dossier comme une racine de _workspace_.

Si tu veux prendre de l'avance (ou anticiper un proxy tatillon au boulot), tu peux clôner et ouvrir comme dossier dans VSCode le [dépôt pour la formation Node](https://github.com/deliciousinsights/toptunez) ou [celui pour la formation Web Apps Modernes](https://github.com/deliciousinsights/goal-tracker/), par exemple.

Mais tu peux aussi attendre la formation pour le récupérer et tout configurer à la volée !

## Prise en main rapide

VS Code fait des pieds et des mains pour faciliter sa prise en main par les nouveaux utilisateurs, profites-en.

### Les ressources intégrées

Lorsqu’il s’ouvre, il affiche par défaut sa page Prise en main (que tu peux retrouver dans _Aide > Prise en main_).

Sur la droite, le lien "Plus…" sous les _Procédures pas à pas_ ouvre une liste de tutos interactifs très sympa.

- *Aide > Référence des raccourcis clavier* : un PDF spécifique à ton OS qui te redonne tous les raccourcis clavier importants.
- *Aide > Tutoriels vidéo* : ce sont les vidéos du _Getting Started_ en ligne de VS Code, super utiles et bien foutues : [8 vidéos de 3 à 6 minutes](https://code.visualstudio.com/docs/getstarted/introvideos#VSCode) qui mettent en lumière les aspects importants : édition au quotidien, complétion de code, débogage, intégration Git, personnalisation, extensions…
- *Aide > Conseils et astuces* : c’est la partie _Tips and tricks_ du _Getting Started_ en ligne, avec des astuces choisies sur la palette de commande, la récupération des raccourcis claviers, l’appel de Code depuis la ligne de commande, la barre d’état, etc.
- *Aide > Terrain de jeu de l’éditeur* : ouvre un document spécial qui te renseigne sur les principaux avantages et fonctions pratiques de Code, avec des mini-éditeurs utilisables à chaque fois pour pratiquer immédiatement l’aspect décrit : trop bien !

### La doc en ligne

Les [docs officielles](https://code.visualstudio.com/docs) regorgent de trucs utiles, mais j’attire principalement ton attention sur deux sections de ces docs :

- [Get Started](https://code.visualstudio.com/docs/getstarted/introvideos), qui reprend des contenus cités plus haut mais en ajoute plein d’autres (thèmes, changement de la langue de l’éditeur, etc.)
- [User Guide](https://code.visualstudio.com/docs/editor/codebasics), qui reprend pas à pas les points forts de Code, démos et illustrations à l’appui. On y trouve notamment des sujets avancés commes les _multi-root workspaces_.

### Les raccourcis absolument incontournables

:::tip OSX vs. le reste

La plupart du temps (mais pas toujours), il suffit de remplacer `Ctrl` par `Cmd` pour avoir le raccourci OSX.
:::

- `Ctrl+Maj+P` ouvre la **palette des commandes** de VSCode : une liste filtrable de toutes les commandes fournies par VSCode et ses extensions installées
- `Ctrl+P` ouvre la **liste des fichiers** du _workspace_, là aussi filtrable dynamiquement. Les syntaxes suffixes façon ST (`@xxx` pour les symboles dans le fichier ou `:xxx` pour un numéro de ligne) marchent.
- Il y en a plein d'autres utiles tout le temps… Explore `Ctrl+O`, `Ctrl+G`, `Ctrl+B`, `Ctrl+J`, `Ctrl+ù`, `Alt+flèches` et `Alt+Maj+flèches`, `Alt+Z`…
- Tous les raccourcis clavier sont **personnalisables** (ajout, modif, suppression, recherche, etc.) dans l'éditeur, accessible via `Ctrl+K Ctrl+S` (_Keyboard Shortcuts_).
