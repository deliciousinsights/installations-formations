---
sidebar_position: 1
title: Git
---

# ![Git](/img/soft/logo-git-2x.png)

## C’est quoi Git ?

C’est un **gestionnaire de sources**, un peu comme Subversion, mais en 300 000 fois mieux. À part dans la formation [Git Total](https://delicious-insights.com/fr/formations/git-total/), on ne s’en servira cependant que très basiquement (`clone`, `reset --hard`, `switch`…), pour manipuler la base de code fournie en début d’exercices.

:::tip Prononciation

Ça se prononce « guitte », pas « jitte », « djitte » ou « gé-i-té » : c’est un _G dur_. Juste pour ne pas t’attirer le regard courroucé (ou dépité, c’est selon) des formateurs :wink:.

D'ailleurs, ce n'est pas un acronyme et donc ça ne s'écrit **pas** en majuscules (~~GIT~~) mais capitalisé (Git).
:::

## Version minimale requise

Il est impératif d’utiliser **au minimum la version 2.0, et de préférence la dernière version mineure sortie**. Par exemple, à l’heure où nous mettons à jour cette page (5 avril 2022), c’est la 2.35.1.

Aller directement aux instructions pour…

- [Windows (hors WSL)](#sur-windows)
- [OSX](#sur-osx)
- [Linux (ou WSL)](#sur-linux)

## Sur Windows (hors WSL)

Déjà, on te conseille d'utiliser [WSL](https://docs.microsoft.com/fr-fr/windows/wsl/install) pour toute ta partie dev qui ne serait pas "pure Windows" sur Windows. Mais si tu as besoin de Git en contexte Windows classique, voici comment faire.

Depuis l’automne 2015, Git for Windows est enfin au taquet (à deux-trois semaines près…) par rapport à ses confrères OSX et Linux… Ouf !

1. [Télécharge la dernière version de l’installeur officiel](https://git-scm.com/download/win). Vérifie bien, si tu es sur un Windows 64-bit, que ça récupère la 64-bit, sinon annule le téléchargement et choisis le lien approprié sur la page (si tu as les droits d’installation, préfère la version normale à la version « portable »).
2. Lance l’installeur, et suis les étapes…
   - Choisis de pouvoir utiliser Git tant depuis le _Git Bash_ que depuis les invites de commande Windows normales (_“Use Git from the Windows Command Prompt”_)
   - Assure-toi que la mise en cache du système de fichiers est active (ça compense un peu le ralentissement dû à l’émulation interne) (_“Enable file system caching”_), et que tu t’intègres à la gestion d’authentification native (_“Enable Git Credential Manager”_, surtout si tu comptes faire du Git avec Visual Studio ou GitHub Desktop à un moment donné). **Seulement si tu as les droits administrateur** sur ta machine, rends-toi service et active les liens symboliques aussi (_“Enable symbolic links”_).

Voilà, Git est installé, ainsi que **Git Bash**, que tu utiliseras en formation **Git Total**, et qui est une sorte de terminal avec un _shell_ Bash, comme sur un Linux ou un OSX, doté d’une invite de commande personnalisable. Jamais utilisé une ligne de commande ? Ne panique pas, on t’expliquera tout le moment venu.

Il te reste à [configurer ton Git correctement](#finaliser-ta-configuration-git)…

## Sur OSX

Depuis OSX Lion, OSX inclut un Git, pas nécessairement ancien… Toutefois, cette version a généralement du retard, et surtout elle n’est pas facile à mettre à jour _in situ_. On préfèrera donc utiliser une installation fraîche venant d’ailleurs.

La principale option consiste à installer ça par [Homebrew](https://brew.sh/).

Homebrew est **indispensable pour tous les développeurs utilisant OSX**. C’est un gestionnaire de paquets qui nous donne accès, facilement et de façon homogène, à la grande majorité des outils Linux / Unix, qu’il s’agisse d’outils « clients », comme Git, ou serveurs, comme MySQL, PostgreSQL, MongoDB, Redis ou que sais-je encore…

Homebrew va installer ses données, par défaut, dans `/usr/local`. Sur une machine de développement mono-utilisateur, il est souhaitable de te donner une bonne fois pour toutes les droits sur cette arborescence, pour éviter les `sudo` à tout va. Commence donc par ceci :

```bash
chown -R $USER:staff /usr/local
```

Après quoi, il te suffit donc de lancer cette ligne de commande :

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Tu as à présent un Homebrew à jour ! :tada: Il ne te reste plus qu’à installer Git :

```bash
brew install git
```

Il ne te reste plus qu’à [configurer ton Git correctement](#finaliser-ta-configuration-git)…

### Tu avais déjà Homebrew ?

Pense à mettre à jour sa liste de formules avant d’installer ou de mettre à jour Git :

```bash
brew update
…
brew install git # ou brew upgrade git, si tu avais déjà Git
```

Il ne te reste plus qu’à [configurer ton Git correctement](#finaliser-ta-configuration-git)…

## Sur Linux (dont WSL)

Comme toujours avec Linux, **ça dépend de ta distro**. L’immense majorité des utilisateurs de Linux dans nos formations utilisent une variante de Debian (Debian même, Ubuntu ou Mint).

### Sur Debian / Ubuntu / Mint / WSL

Afin d’être au taquet sur les dernières versions, il est largement préférable d’utiliser le [**PPA officiel**](https://launchpad.net/~git-core/+archive/ubuntu/ppa)[^1]. Si tu n’as jamais utilisé de PPA, voici des instructions détaillées.

Il te faut d’abord vous assurer d’avoir la commande `add-apt-repository` disponible ; ce n’est pas toujours le cas par défaut. Fais ceci pour vérifier :

```
$ add-apt-repository
Error: must run as root
```

Si tu as plutôt un _“Command not found”_, voici comment obtenir la commande :

```bash
sudo apt-get install software-properties-common python-software-properties
```

Nous y voilà. À présent, ajoute le PPA à tes sources :

```
$ sudo add-apt-repository ppa:git-core/ppa
 The most current stable version of Git for Ubuntu.

For release candidates, go to https://launchpad.net/~git-core/+archive/candidate .
 More info: https://launchpad.net/~git-core/+archive/ubuntu/ppa
Press [ENTER] to continue or ctrl-c to cancel adding it
…
OK
```

Puis, mets à jour ta liste de paquets :

```
$ sudo apt-get update
```

Et voilà, tu peux maintenant installer Git :

```
$ sudo apt-get install git
…
$ git --version
git version 2.35.1
```

Il ne te reste plus qu’à [configurer ton Git correctement](#finaliser-ta-configuration-git)…

[^1]: _Personal Package Archive_, c’est-à-dire une source de paquets maintenue par la communauté (généralement les auteurs ou mainteneurs d’un écosystème précis), hors des sources strictement officielles de la distro.

### Sur les autres distros

#### Option 1 : paquets officiels

Tu peux choisir de **rester sur leurs paquets officiels**. Auquel cas assure-toi de mettre à jour ta liste de paquets d’abord, puis lance la commande idoine, en `sudo`, depuis ton terminal.

[Voir les commandes](https://git-scm.com/download/linux)

#### Option 2 : compilation des sources

Tu peux aussi choisir de récupérer les sources de la dernière version, et procéder à la compilation par toi-même.

Commence par récupérer le Zip ou le `tar.gz` de la [dernière version](https://mirrors.edge.kernel.org/pub/software/scm/git/), et décompresse-la. Puis déplace-toi dans le répertoire obtenu et exécute les commandes suivantes :

```bash title="Compilation de Git depuis les sources — Mais arrêêêteeuuuh"
make prefix=/usr/local all doc info
sudo make prefix=/usr/local install install-doc install-html install-info
```

## Finaliser ta configuration Git

Pour utiliser Git au mieux, il te faut plusieurs paramétrages :

1. Une **invite** de ligne de commande (_prompt_) qui t’informe et te rattrape par le col le cas échéant ;
2. Une **complétion** de commande intelligente ;
3. Une **configuration globale** de l’outil qui améliore son fonctionnement par défaut.

### Le _prompt_

Par défaut, quand tu ouvres un **Git Bash** dans Windows, ou quand tu ouvres un terminal sur OSX ou Linux, ton invite ressemble à ceci, même au sein d’un dossier versionné par Git :

```
markwatney@hab:farming $
```

Il y a ton nom d’utilisateur, celui de la machine, et le dossier où tu te trouves (soit le nom court, soit le chemin complet). Mais ça ne te dit pas si tu es dans un contenu versionné, sur quelle branche tu travailles, si tu as des modifications dans le _stage_, des fichiers _untracked_, des conflits, etc.

Ce serait pas mal d’avoir des infos contextuelles, du genre :

```
markwatney@hab:farming (hydrogen-burn u+3 REBASE-i 3/5) $
```

Ici, je sais en plus que :

- Je suis en plein _rebase_ interactif de la branche `hydrogen-burn`,
- Je suis à l’étape 3 sur 5 du _rebase_,
- La branch a 3 commits de plus que sa version distante (serveur).

On peut même partir vers quelque chose de plus baleze, genre :

![Invite Powerline Go dans Bash](/img/soft/gitprompt-powerline-go.png)

Ici, une invite Powerline (dans Bash ou Powershell) nous donne le dossier, la branche, le fait qu'elle est 5 commits devant sa version distante, qu'un fichier versionné est modifié et qu'un nouveau fichier (non-versionné, donc) est présent.

Nous, on aime bien avoir tout ça sous les yeux.

### La complétion

Personne n’aime taper en entier les commandes, arguments, etc. Ça prête à faute de frappe, ça nécessite de la mémoire, etc. Mais Git est parfaitement capable de t’aider en complétant, quand tu presses <kbd>Tab</kbd>, les **noms des commandes**, leurs **arguments** (et en fonction du **contexte**, s’il te plaît !), les chemins…

Encore faut-il charger cette complétion dans ton shell.

### La configuration globale

Git a 3 niveaux de configuration, dont 2 nous intéressent :

- La **globale**, qui ne concerne que ton compte utilisateur, mais s’applique par défaut à tous tes dépôts locaux ;
- La **locale**, qui est au niveau de chaque dépôt, et a priorité sur la globale.

Ce sont des fichiers dont la syntaxe rappelle les `.ini` de Windows : des sections identifiées par leurs noms entre crochets (ex. `[core]`), et dedans, des lignes _nom = valeur_.

La configuration globale se trouve dans ton _home directory_ (`/home/ton-compte` sur Linux, `/Users/ton-compte` sur OSX, `C:\Users\ton-compte` sur Windows ; on désigne généralement ce dossier par le symbole tilde : `~`), dans un des emplacements suivants, par priorité décroissante :

1. `~/.config/git/config`
2. `~/.gitconfig`

La configuration locale d’un dépôt se trouve toujours dans son fichier `.git/config`.

Hélas, la configuration globale par défaut de Git laisse beaucoup à désirer. POur en tirer au mieux parti, on va beaucoup l’améliorer !

### Comment configurer tout ça vite fait ?

Le plus simple consiste à installer et configurer **[Oh My Posh](https://ohmyposh.dev/)** (v3 ou ultérieure), quel que soit ton shell : Windows (PowerShell ou Cmd, dans [Windows Terminal](https://docs.microsoft.com/fr-fr/windows/terminal/tutorials/custom-prompt-setup)), OSX (quel que soit le shell) ou Linux (idem).

Nous maintenons par ailleurs une **[configuration globale de référence](https://gist.github.com/tdd/470582)**.

Si tu as déjà une configuration Git globale, à toi de récupérer ce qui t'intéresse dans notre configuration pour l'injecter dans la tienne.

:::caution Ne copie-colle pas sans ajuster !

Pense à adapter ton nom et ton e-mail dans la config de référence si tu n'en avais pas déjà une.
:::
