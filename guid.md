# Le type Guid

## Qu'est-ce que le GUID

GUID signifie "Globally Unique Identifier". Il a une très faible probabilité d'être dupliqué, car il s'agit d'un entier de 128 bits (16 octets) qui permet d'être utilisé sur toutes les bases de données et ordinateurs sans collision de données.

## Pourquoi utilisons-nous GUID ?

Nous utilisons le GUID pour créer un identifiant unique. Un GUID constitue une excellente clé unique. Bien qu'il ne soit pas garanti que chaque GUID généré soit unique, le nombre total de clés uniques (3,40282366 × 1038) est si grand que la probabilité que le même nombre soit généré deux fois est très faible. Pour une application utilisant 10 milliards de GUID aléatoires, la probabilité d'une coïncidence est d'environ 1 sur un quintillion.

Nous pouvons ainsi stocker des données (ex. : utilisateurs, produits, etc.) dans un fichier ou une base de données de façon à identifier de manière unique chaque donnée (ligne du fichier ou de la base de données). Une approche courante dans une base de données consiste à créer un entier auto-incrémenté; une autre façon serait de créer un GUID.

## Où sont utilisés les GUID ?

Considérez un système distribué où de nombreux programmeurs travaillent indépendamment et génèrent un ID. Dans ce scénario, il est possible que deux programmeurs génèrent un ID commun et au moment de la fusion, cela créera un problème, nous devons donc utiliser GUID lorsque nous avons plusieurs systèmes ou utilisateurs indépendants qui sont génèrent un ID qui doit être unique. 

En programmation, chaque fois que nous créons une interface ou une méthode, on lui attribue un identifiant unique qui sera utilisé pour les invoquer. Cet identifiant unique est GUID. Le GUID produit par l'application Windows peut être utilisé pour identifier un fichier particulier, une application, un composant, une entrée de base de données.

## Avantage du GUID

- Ils aident vraiment à prévenir les collisions de données.
- Il facilite la fusion des fichiers ou des bases de données entre différentes machines, car cela évite les collisions de données.
- Il vous permet de connaître votre clé primaire avant l'insertion d'un enregistrement.
- Il ne peut pas être facilement deviné.

## Inconvénient du GUID

- Chaque GUID occupe 16 octets. Considérez une situation où une base de données stocke 10 000 entrées ; à lui seul, le GUID occupera 160000 octets.
- La plupart des clés primaires sont des clés étrangères dans d'autres tables. Seules 5 entrées de clés étrangères consomment environ 60 octets pour stocker uniquement le GUID. Au fil du temps, il devient la principale cause des problèmes de performances.
- Les GUID ne sont pas très utiles pour les petites bases de données.

## Quel est le format du GUID ?

- Le GUID est un type disponible dans l'espace de nom System.
- Les GUID sont le plus souvent écrits sous forme de texte sous la forme d'une séquence de chiffres hexadécimaux comme ceci : 
    - 3F2504E0-4F89-11D3-9A0C-0305E82C3301
    - Souvent, des accolades sont ajoutées pour entourer le format ci-dessus :
    \{3F2504E0-4F89-11D3-9A0C-0305E82C3301\}
    
# Comment créer un GUID en C# ?

```c#
//Création d'un nouveau Guid.
Guid id = Guid.NewGuid();

//Création d'un Guid à partir d'une chaîne de caractères.
Guid id = Guid.Parse("3F2504E0-4F89-11D3-9A0C-0305E82C3301");

```