---
sidebar_position: 6
title: MongoDB
---

# ![MongoDB](/img/soft/logo-mongodb.png)

## C’est quoi MongoDB ?

[MongoDB](https://www.mongodb.com/) est la **base de données [NoSQL](https://www.mongodb.com/nosql-explained)** [la plus populaire du monde](https://db-engines.com/en/ranking).

On s’en sert pour la persistance de nos données dans la [formation Node.js](/docs/courses/node).

Alors, comment l'installer ?

## Sur Windows

[Le guide officiel](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) est très bien fait, mais en voici le résumé.

On va faire l’impasse sur les Windows Server, en supposant que la machine que tu amènes utilise un Windows 7 ou ultérieur.

1. [Télécharge l'installeur](https://www.mongodb.com/try/download/community). Le formulaire de sélection devrait être automatiquement ajusté sur la dernière version, pour Windows 64-bit, en MSI.
2. Lance le fichier `.msi` téléchargé.

   :::info Chemin personnalisé

   **Attention, pour te faciliter la vie** et suivre les recommandations de MongoDB, **on va simplifier le chemin** d’installation à `C:\mongodb` (ou sur un autre lecteur si tu n’as pas de place dans `C:\`).
   :::

3. Accepte la licence
4. **Choisis le mode _Custom_**
5. Laisse tous les composants si tu peux (si tu as besoin de place, ne garde que le serveur et le client, ça économise près de 400Mo), mais clique _Browse…_ (si le bouton est grisé, resélectionne le produit racine d'abord) pour changer le chemin d’installation : ramène à la racine (`C:`) et clique l’icône en haut à droite de création de nouveau dossier, que tu nommeras `mongodb`. Ça doit donner un _Folder name_ de `C:\mongodb\`. Clique _OK_, puis _Next_.
6. À moins que tu n'aies l'intention de souvent utiliser MongoDB et que tu ne soies administrateur·trice sur ta machine, décoche "Install MongoD as a Service". Clique _Next_.
7. Assure-toi que la case à cocher _Install MongoDB Compass_ est cochée et clique _Next_.
8. Clique _Install_, et valide le MSI suivant.
9. Si tu avais déjà un serveur MongoDB lancé, autorise sa fermeture.
10. Clique _Finish_

:::caution Emplacement des données

Par défaut, le serveur MongoDB va supposer que **tes données sont stockées dans le `\data\db` du même lecteur que le serveur**. Si tu as un peu de place restante (il en faut peu) sur ce lecteur, parfait, on va faire ça. Ouvre une **Invite de Commandes** (Cmd ou PowerShell) et crée le dossier :

```batch
c:
mkdir \data\db
```

Si tu n’as pas de place, crée-le sur une autre lettre de lecteur, et tout-à-l’heure **il faudra préciser le chemin au serveur**.
:::

### Lancer le serveur à la demande

On va vérifier que ton serveur et ton client marchent bien. Dans une Invite de Commandes, tape maintenant :

```batch
C:\mongodb\bin\mongod.exe
```

**Note bien le `d` à la fin :** _Mongo Daemon_, le serveur. Ne pas confondre avec `mongo`, la CLI, ou encore `mongos`, qui est le routeur, ce qui est un autre sujet.

Si tu as installé ailleurs que dans `C:\mongodb`, tu adaptes, évidemment. Et si tu as créé un dossier de données ailleurs que dans `C:\data\db`, tu le précises :

```batch
C:\mongodb\bin\mongod.exe --dbpath D:\data\db
```

Quand ton lancement fonctionne, Windows te demandera certainement **d’autoriser ce programme à ouvrir son port réseau** en écoute. Autorise-le en mode « Réseaux privés » (cas par défaut).

Par défaut, le lancement du serveur est hyper verbeux ; s'il rend la main, c'est que tu as un problème : fouille dans ses affichages à la recherche de marqueurs `"s":"E"` qui signalent une erreur, et regarde les messages. Classiquement, tu as oublié de préciser un _dbpath_ personnalisé, ou tu as oublié de créer `C:\data\db` si tu utilises celui par défaut.

Quand tu n’auras plus besoin du serveur, tu peux l’arrêter proprement en tapant <kbd>Ctrl+C</kbd> dans son terminal, puis en fermant la fenêtre.

:::tip Connexion depuis une machine / VM tierce (ex. WSL)

Par défaut, le serveur MongoDB n'écoute que sur `localhost`. Pour l'ouvrir plus largement et permettre ainsi la connexion depuis d'autres adresses IP, y compris des IP de la même machine, il faut changer son réglage `bindIp`.

- Soit dans la config (`C:\MongoDB\bin\mongod.cfg`), réglage `net` › `bindIp` à passer à 0.0.0.0
- Soit en ligne de commande si on lance le serveur manuellement : `--bindIp=0.0.0.0`

:::

### Lancer la CLI historique

Une fois ton serveur lancé, tu peux tenter de **lancer le client** en ligne de commande. Ouvre une nouvelle fenêtre d’Invite de Commandes (laisse celle du serveur tranquille) et tape :

```
C:\mongodb\bin\mongo.exe
```

Ça devrait lancer la **ligne de commande MongoDB**. Vérifie que tu peux lister les bases par défaut avec `show dbs` :

```
 C:\MongoDB\bin\mongo.exe
MongoDB shell version v5.0.6
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
…
MongoDB server version: 5.0.6
…
> show dbs
admin                          0.000GB
config                         0.000GB
local                          0.000GB
test                           0.000GB
>
```

Le client se termine en tapant <kbd>Ctrl+D</kbd> ou en utilisant la commande `exit`.

### Installer mongosh

La CLI historique est en train de se faire remplacer par une CLI autrement plus moderne : [mongosh](https://www.mongodb.com/docs/mongodb-shell/) (pour _Mongo SHell_, prononcée _“Mongo Ess Ayche”_). Son installation n'est pas encore intégrée à l'installeur officiel, je te recommande donc de la faire en prime.

Note toutefois que MongoSH est également intégré dans Compass, qui lui est installé de base, sauf si tu l'as décoché.

## Sur OSX

Même MongoDB [recommande](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/) de recourir à **Homebrew** plutôt qu’à une installation manuelle.

[Homebrew](https://brew.sh/) est **indispensable pour tous les développeurs utilisant OSX**. C’est un gestionnaire de paquets qui nous donne accès, facilement et de façon homogène, à la grande majorité des outils Linux / Unix, qu’il s’agisse d’outils « clients », comme Git, ou serveurs, comme MySQL, PostgreSQL, MongoDB, Redis ou que sais-je encore…

Homebrew va installer ses données, par défaut, dans `/usr/local`. Sur une machine de développement mono-utilisateur, il est souhaitable de vous donner une bonne fois pour toutes les droits sur cette arborescence, pour éviter les `sudo` à tout va. Commence donc par ceci :

```bash
chown -R $USER:staff /usr/local
```

Après quoi, il te suffit donc de lancer cette ligne de commande :

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Tu as à présent un Homebrew à jour ! :tada: Il ne te reste plus qu’à installer MongoDB :

```bash
brew tap mongodb/brew
brew install mongodb-community@5.0
```

### Tu avais déjà Homebrew ?

Pense à mettre à jour sa liste de formules avant d’installer ou de mettre à jour MongoDB :

```bash
brew tap mongodb/brew
brew update
…
brew install mongodb-community@5.0
```

### Lancer le serveur

Homebrew gère le service directement. Tu peux lancer le serveur comme ceci :

```bash
brew services start mongodb-community@5.0
```

:::caution Refus de lancement du serveur sur OSX

Si le lancement rencontre une erreur de sécurité :

1. Ouvre les _Préférences Système_
2. Choisis le volet _Sécurité et confidentialité_
3. Dans l'onglet _Général_, clique sur le bouton à droite du message relatif à `mongod`, libellé _Ouvrir quand même_ ou _Autoriser quand même_, selon ta version d'OSX.

:::

Tu peux vérifier son état de lancement avec `brew services list`.

Une fois le serveur lancé, vérifie en ouvrant un nouvel onglet de Terminal et en lançant le client moderne, installé automatiquement tout à l'heure, avec la commande `mongosh`.

Si tu rencontres une erreur de sécurité, tu peux la gérer comme indiqué ci-avant pour le serveur.

## Sur Linux (hors WSL)

MongoDB maintient des paquets officiels pour les univers Debian / Ubuntu, Red Hat / CentOS, SUSE et Amazon. Sinon, on télécharge manuellement les binaires.

Comme l’indiquent [les docs officielles](https://www.mongodb.com/docs/manual/administration/install-on-linux/), on a plusieurs paquets, les deux plus importants étant `mongodb-org-server` et `mongodb-org-shell`. Un meta-paquet `mongodb-org` les inclue ainsi que deux autres (routeur, outils). Et les paquets du dépôt officiel MongoDB sont, comme d’hab, nettement plus à jour que ceux du dépôt standard de la distro.

Pour savoir comment installer / dépanner et lancer le serveur sur ta distro, regarde la doc idoine derrière le lien du paragraphe précédent.

Tu peux vérifier qu’il tourne en ouvrant le client :

```
$ mongosh
…
> show dbs
local   0.078GB
>
```

## Sur WSL

[C'est un peu plus custom](https://docs.microsoft.com/fr-fr/windows/wsl/tutorials/wsl-database#install-mongodb), notamment pour le lancement, mais apparemment depuis la 5.0 ça marche, plus besoin de forwarder le port du serveur côté Windows vers le WSL.
