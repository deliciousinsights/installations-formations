---
sidebar_position: 3
title: Node.js
---

# ![](/img/soft/logo-node.png)

## C’est quoi Node ?

Node (dont le nom complet est « Node.js ») est une **runtime**, un environnement d’exécution autonome, pour le langage **JavaScript**. C’est un peu comme la JVM, qui initialement visait surtout le langage Java.

De la même manière qu’on peut faire tourner d’autres langages sur la JVM, comme Scala, Clojure, JRuby, etc. on peut faire tourner d’autres langages sur Node, comme CoffeeScript, TypeScript, ClojureScript, etc.

Énormément de gens utilisent Node non pas pour faire tourner leur propre JavaScript dessus, mais pour **tirer parti de la pléthore d’outils de développement** basés dessus (ex. Grunt, Gulp, Yeoman, PhoneGap / Cordova, Brunch, Webpack, Broccoli, Electron, Azure CLI…) ou pour **gérer leurs dépendances à des bibliothèques JavaScript et/ou CSS** open-source (ex. jQuery et ses plugins, Lo-Dash, Moment.js, Bootstrap, Material UI, Compass, Foundation…).

## Version minimale requise

Nous recommandons **au minimum la version 16**.

:::info Versions LTS

Nous te recommandons d'utiliser systématiquement la **dernière LTS** _(Long-Term Support)_, qu'elle soit déjà active ou juste sortie. Node.js sort une version majeure tous les 6 mois, en octobre et en avril. Celles d'avril portent des numéros pairs et seront LTS, c'est-à-dire pleinement maintenues pendant 3 ans.
:::

Par exemple, le 19 avril 2022 sort Node.js 18, qui sera la LTS active à partir du 25 octobre 2022 et [maintenue jusqu'au 30 avril 2025](https://nodejs.org/en/about/releases/) :

![Planning de versions Node.js à venir](https://raw.githubusercontent.com/nodejs/Release/master/schedule.svg?sanitize=true)

L’avantage de suivre les versions stables, c’est qu’elles ont les meilleures performances et sont le plus à jour sur les nouveautés du langage (ES2015, ES2016, etc.).

## Sur Windows (hors WSL)

L'installeur officiel reste évidemment possible, mais nous te recommandons absolument **[nvm pour Windows](https://github.com/coreybutler/nvm-windows#readme)**, qui te simplifiera le processus d'installation et te permettra de jongler avec diverses versions de Node.js d'un projet à l'autre.

1. Va sur la [liste des versions](https://github.com/coreybutler/nvm-windows/releases)
2. Dans la plus récente (au 4 avril 2022, c’est la 1.1.9, mais elle a un souci et la 1.1.8 n'est pas signée, donc soit la 1.1.7, soit après la 1.1.9), télécharge `nvm-setup.zip`
3. Décompresse-le puis exécute le programme qu’il contient
4. Accepte la licence et les chemins par défaut
5. Si tu as déjà un Node global installé classiquement, nvm te demandera si tu veux qu’il prenne la main sur cette version aussi ; réponds _Yes_.

Tu peux alors ouvrir une invite de commande (Cmd ou PowerShell) puis juste taper `nvm` pour avoir l’aide, et `nvm ls` confirmera qu’il a pris en charge ta version globale précédente, le cas échéant. Pour savoir quelles versions récentes sont disponibles, utilise `nvm ls available`. Puis installe avec `nvm install la-version` (ou le préfixe de version, ou un des mots-clés `lts` ou `latest`). Par exemple :

```
nvm ls available
nvm install 16
```

![Installation de Node 16.x avec NVM for Windows](/img/soft/nvmw.png)

Attention, contrairement au nvm classique, il n'y a pas de gestion de « version par défaut », et `nvm use` exige le numéro de version complet, pas juste un préfixe.

## Sur OSX

L'installeur officiel est là aussi possible, mais nous te recommandons absolument **[nvm](https://github.com/nvm-sh/nvm#readme)**, qui te simplifiera le processus d'installation et te permettra de jongler avec diverses versions de Node.js d'un projet à l'autre.

Tu peux alors **[installer nvm](https://github.com/nvm-sh/nvm#installing-and-updating)**. Au 4 avril 2022, la dernière version est la 0.39.1, ça donne ça :

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Note que cette même commande assurera la **mise à jour** de nvm aussi, si besoin.

:::tip Soucis d'installation ?

Ça peut venir de pas mal de raisons suivant ta version d'OSX et ton passif avec ta configuration shell. [Cette section](https://github.com/nvm-sh/nvm#troubleshooting-on-macos) liste les différents soucis classiques et leurs résolutions.
:::

Ouvre un nouveau terminal (<kbd>Cmd+T</kbd> ouvrira un nouvel onglet), puis liste les versions disponibles avec `nvm ls-remote`. Il y en a **une tonne**, alors tu peux choisir de limiter aux 16.x et 17.x, par exemple :

```
$ nvm ls-remote 'v1[67].*'
         v16.0.0
…
         v16.14.2   (Latest LTS: Gallium)
…
         v17.7.2
->       v17.8.0
$
```

Tu peux installer une version avec `nvm install` :

```
$ nvm install --lts
Installing latest LTS version.
v16.14.2 is already installed.
Now using node v16.14.2 (npm v8.5.0)
$
```

Et même en faire la version par défaut, si tu veux :

```
$ nvm alias default lts/*
default -> lts/* (-> v16.14.2)
$
```

Par exemple, le `nvm ls` de Christophe dit ça, là tout de suite :

```
$ nvm ls
       v14.15.1
       v14.16.0
       v16.11.0
       v16.13.1
->     v16.14.2
default -> lts/* (-> v16.14.2)
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v16.14.2) (default)
stable -> 16.14 (-> v16.14.2) (default)
lts/* -> lts/gallium (-> v16.14.2)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.11 (-> N/A)
lts/fermium -> v14.19.1 (-> N/A)
lts/gallium -> v16.14.2
```

:::tip Complétion Bash

Il est possible d'activer la [complétion Bash pour nvm](https://github.com/nvm-sh/nvm#bash-completion).
:::

## Sur Linux (ou WSL)

Comme toujours avec Linux, **ça dépend de ta distro**. L’immense majorité des utilisateurs de Linux dans nos formations utilisent une variante de Debian (Debian même, Ubuntu ou Mint).

Les **paquets officiels** sont toujours possibles, même si souvent ils rament loin derrière.

:::info PPA NodeSource

[NodeSource](https://nodesource.com/) maintient des « [PPA officiels](https://github.com/nodesource/distributions#readme) » à jour pour l’univers Debian et les “Enterprise Linux”, ce qui facilite énormément la tenue à jour par rapport aux paquets des distros, souvent obsolètes…
:::

Toutefois, on te recommande comme toujours [nvm](https://github.com/nvm-sh/nvm#readme).

NVM signifie _Node Version Manager_, et permet **d’installer rapidement toute version connue**, et de basculer d’une version à l’autre en fonction du projet. Voici comment procéder.

Suis les instructions pour nvm sur OSX, elles sont identiques pour Linux.
