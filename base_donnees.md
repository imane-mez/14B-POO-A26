---
outline: deep
---

# Utilisation d'une base de données en C#

Nous avons vu qu'il était possible d'utiliser des fichiers pour la gestion de nos données. Cette gestion impliquait la lecture d'un fichier pour le chargement des données lors de l'ouverture de l'application, l'ajout, la modification et la suppression des données par l'application et finalement le remplacement des données lors de l'enregistrement. 

Ainsi, toute la gestion des données se faisait par l'application. La rapidité du traitement des données était donc dépendante de la puissance de votre ordinateur. Cela va bien lorsqu'il n'y a pas beaucoup de données à traiter. Que se passerait-il si vous deviez traiter des millions d'enregistrements? De plus, l'utilisation de vos applications ne se fait que par un seul utilisateur. Que se passerait-il si plusieurs personnes devaient utiliser une application en même temps et manipuler les mêmes données en même temps? 

C'est en autre pour ces raisons que les systèmes utilisent des bases de données. Celles-ci se trouvent normalement sur des serveurs très puissants qui peuvent donc effectuer facilement et rapidement est manipulation sur des millions d'enregistrements. Celles-ci facilitent également la centralisation de l'information et l'accès simultané aux données.

L'accès aux données à partir d'une base de données est donc l'un des aspects importants de tout langage de programmation. C'est une nécessité absolue pour tout langage de programmation d'avoir la capacité de travailler avec des bases de données. 

C# offre la possibilité de travailler avec différents types de bases de données. Il peut fonctionner avec les bases de données les plus courantes telles qu'Oracle, Microsoft SQL Server et MySQL et bien d'autres. Peu importe le type de base de données utilisée, la logique de fonctionnement est pratiquement la même.

En travaillant avec des bases de données, les concepts suivants sont communs à toutes les bases de données :
1) **Connexion** : Pour travailler avec les données d'une base de données, la première étape évidente est la connexion. La connexion à une base de données se compose normalement des paramètres mentionnés ci-dessous.
    - **Nom de la base de données ou source de données** : Le premier paramètre important est le nom de la base de données à laquelle la connexion doit être établie. Chaque connexion ne peut fonctionner qu'avec une seule base de données à la fois.
    - **Informations d'identification** : Le prochain aspect important est le nom d'utilisateur et le mot de passe qui doivent être utilisés pour établir une connexion à la base de données. Il garantit que le nom d'utilisateur et le mot de passe disposent des privilèges nécessaires pour se connecter à la base de données.
    - **Paramètres facultatifs** : Pour chaque type de base de données, vous pouvez spécifier des paramètres facultatifs pour fournir plus d'informations sur la manière dont .Net doit gérer la connexion à la base de données. Par exemple, on peut spécifier un paramètre indiquant combien de temps la connexion doit rester active. Si aucune opération n'est effectuée pendant une période de temps spécifique, alors le paramètre déterminera si la connexion doit être fermée.

2) **Sélection, insertion, modificaiton et suppression des données de la base de données** : Une fois la connexion établie, le prochain aspect important sélectionner, insérer, modifier ou supprimer des données de la base de données. Pour cela, C# utilise la **commande** permetant d'exécueer une requête 'SQL' sur la base de données.


Étant donné que C# permet l'utilisation de différent type de base de données. La première chose à faire est d'installer les outils nécessaires selon le type de la base de données choisie. Dans notre cas, nous utiliserons une base de données MySQL. 

## Importation des librairies
Afin de faciliter l'utilisation de librairies externe dans notre projet, .Net offre un outil nommé **" gestionnaire de package NuGet"**. Cet outil permet l'installation de librairie. Dans notre cas, nous aurons besoin de la libraire `MySQlConnector` pour utiliser une base de données `MariaDB`.

1) Ouvrir le gestionnaire de package NuGet en sélectionnant le menu **Projet -> Gérer les packages NuGet ...**.
2) Cliquer sur le lien **Parcourir** et inscrire **MySqlConnector** dans le champ de recherche. 
3) Sélectionner `MySqlConnector`. 
4) Cliquer sur le bouton `Installer`.

![Installation du package MySQlConnectgor](/images/base_donnees2.png)

<!--
1) Ouvrir le gestionnaire de package NuGet en sélectionnant le menu **Outils->Gestionnaire de package NuGet -> Gérer les packages NuGet pour la solution**.
2) Cliquer sur le lien **Parcourir** et inscrire **MySql.Data** dans le champ de recherche. 
3) Sélectionner **MySql.Data**, sélectionner le projet sur lequel vous désirez faire l'installation et cliquer sur le bouton Installer.

![Installation du package MySQL.Data](/images/base_donnees1.png)
-->
Voyons maintenant comment utiliser les différents objets C# nécessaires pour effectuer ces opérations.

## Établir une connexion (MySqlConnection)

L'objet MySqlConnection permet de se connecter à la base de données. Pour se connecter, il faut tout d'abord définir la chaîne de connexion spécifiant **le nom ou l'adresse IP du serveur** où se trouve la base de données, **port** de connection (MySQl=3307, MariaDB=3307),  **le nom de la base de données**, le nom de l'**utilisateur** et le **mot de passe**.  


```c#
string connectionString = "Server=localhost;port=3307;Database=demo_db;Uid=admin;Pwd=Qwerty123;"
```

Par la suite, nous pourrons instancier l'objet en lui passant en paramètre la chaîne de connexion :

```c#
MySqlConnection cn  = new MySqlConnection(connectionString);
```

Une fois l'objet instancié, nous pouvons ouvrir la connexion à notre page de données :

```c#
 cn.Open();
```

Une base de données possède un nombre maximal de connexions simultanées. C'est pourquoi il est essentiel de toujours s'assurer de bien fermer notre connexion lorsque nous n'en avons plus besoin. Pour cette raison, il est recommandé de **mettre la fermeture de la connexion dans le bloque finally d'un try..catch** :

```c#
//Déclaration de la connexion
MySqlConnection cn = null;

try
{
    //Chaîne de connexion
    string connectionString = "Server=localhost;port=3307;Database=demo_db;Uid=admin;Pwd=qwerty123;"

    //Instanciation de la connexion
    cn = new MySqlConnection(connectionString);

    //Ouverture de la connexion
    cn.Open();
   
    //Code pour la manipulation des données ici.
 
}
catch (Exception)
{
    throw;
}
finally
{
    //Fermeture de la connexion si l'objet n'est pas nul et que la connexion est ouverte.
    if (cn != null && cn.State == System.Data.ConnectionState.Open)
   {
        cn.Close();
        cn.Dispose();
   }
}
```

## Définition de la requête

L'objet **MySqlCommand** permet d'exécuter des commandes SQL sur une connexion ouverte. 

```c#
 MySqlCommand cmd = new MySqlCommand();
```

Pour exécuter une commande, il faut d'abord définir la requête à exécuter : 

```c#
string requete = "SELECT Id, Nom, Prenom FROM Employes Order by Nom, Prenom";
cmd.CommandText = requete;
```

Par la suite, il faut spécifier la connexion utilisée pour exécuter la commande :

```c#
cmd.Connection = cn;
```

C'est deux opérations peuvent être également exécutées lors de l'instanciation de l'objet MySqlCommand comme suit :

```c#
 MySqlCommand cmd = new MySqlCommand(requete, cn);
 ```

 Il est toujours possible de modifier la requête d'une commande pour exécuter différentes requêtes sur ume même connexion.

 ### Utilisation de paramètres

 Il est également possible de spécifier des paramètres contenant des valeurs qui seront passés dans la requête lors de son exécution permettant une vérification et une validation de type. 

Contrairement au **CommandText**, l'entrée de paramètre est traitée comme une valeur littérale, et non comme un code exécutable. **Cela permet de se prémunir contre les attaques par « injection SQL »**, dans lesquelles un attaquant insère une commande qui compromet la sécurité sur le serveur dans une instruction SQL.

Les commandes paramétrées peuvent également **améliorer les performances d'exécution des requêtes**, car elles aident le serveur de base de données à faire correspondre avec précision la commande entrante avec un plan de requête mis en cache approprié

Par exemple, pour spécifier une valeur de filtre pour un champ d'une table dans une clause WHERE ou pour spécifier des valeurs lors d'un INSERT:

```c#
string requete = "SELECT Id, Nom, Prenom FROM Employes WHERE Id = @id;";

//Préparation de la commande
MySqlCommand cmd = new MySqlCommand(requete, cn);

//Ajout du paramètre Id 
cmd.Parameters.Add("@id ", MySqlDbType.Int32);

//Affectation de la valeur 99 au paramètre
cmd.Parameters["@id"].Value = 99;

```

## Préparer une des instruction SQL 

La plus par des SGBD relationnelles permettent la prise en charge de la préparation des instructions SQL avant leur exécution. Les instructions préparées peuvent améliorer considérablement les performances des requêtes exécutées plusieurs fois. **L'exécution préparée est plus rapide que l'exécution directe pour les instructions exécutées plusieurs fois**, principalement parce que la requête n'est analysée qu'une seule fois. Dans le cas d'une exécution directe, la requête est analysée à chaque exécution. **De plus, l'exécution préparée peut permettre une réduction du trafic réseau**, car pour chaque exécution de l'instruction préparée, il suffit d'envoyer les données pour les paramètres.

Un autre avantage des instructions préparées est que, lorsque les instructions préparées côté serveur sont activées, **elles utilisent un protocole binaire qui rend le transfert de données entre le client et le serveur plus efficace.**

Avant d’appeler **Prepare**, spécifiez le type de données de chaque paramètre dans l’instruction à préparer.

```c#
//Ouverture de la connexion
cn.Open();

//Preparation de la commande
string requete = "INSERT INTO uneTable VALUES(NULL, @nombre, @texte)";
MySqlCommand cmd = new MySqlCommand(requete, cn);

//Définition des paramètres avec leur type
cmd.Parameters.Add("@nombre ", MySqlDbType.Int32);
cmd.Parameters.Add("@texte ", MySqlDbType.String);

//Preparation de la requête
cmd.Prepare();

for (int i=1; i <= 1000; i++)
{
    //Affection des valeurs aux paramètres
    cmd.Parameters["@nombre"].Value = i;
    cmd.Parameters["@texte"].Value = "Une chaîne de caractères";

    //Exécution de la requête
    cmd.ExecuteNonQuery();
    
}
```
## Exécution de la requête

Finalement, nous sommes prêts à exécuter la commande. Selon le besoin, il existe différentes méthodes pour l'exécution d'une commande. Les plus courantes sont les suivantes :

- **ExcuteReader()** : Cette méthode est utilisée lorsque la requête retournera un ensemble d'enregistrements. Celle-ci retournera un objet MySqlDataReader qui nous permettra de parcourir les enregistrements retournés.

```c#
//Exécution de la commande
MySqlDataReader dr = cmd.ExecuteReader();
```

- **ExecuteNonQuery()** : Cette méthode est utilisé lorsque la requête ne retourne pas de donnée, mais plutôt un entier indiquant le **nombre d'enregistrement modifiés par la requête**. Par exemple, lors d'une mise à jour ou d'une suppression de données.

```c#
//Exécution de la commande
int nbModifications = cmd.ExecuteNonQuery();
```

- **ExecuteScalar()** : Cette méthode est utilisé lorsqu'une seule valeur est retournée par la requête.

```c#
cmd.CommandText = "SELECT COUNT(*) FROM Employes";  
int count = cmd.ExecuteScalar();  
```
## Parcourir les données (MySqlDataReader)

L'objet **MySqlDataReader** permet de parcourir les données reçues lors de l'exécution d'une commande de type **ExecuteReader()**. Voici quelques-unes des propriétés et méthodes de cet objet :

**Propriétés** :
- **FieldCount** : Retourne le nombre de colonnes dans la ligne courante
- **HasRows** : Booléen indiquant si le MySqlDataReader contient une ou plusieurs lignes

Méthode :

- **Read()** : Permet de lire la ligne suivante contenue dans le MySqlDataReader
- **GetName(i)** : Permet d'obtenir le nom de la colonne à la position i.
- **GetOrdinal(nom)** : Permet d'obtenir la position d'une colonne à partir de son nom.
- **Get{Type}(i)** : Permet d'obtenir la valeur à la position i de la ligne courante selon le type de la colonne. {Type} représente différent type. Exemple :  GetString(0), GetInt32(0), GetBoolean(0), etc.

Voici un exemple permettant de créer une liste d'employés à partir des données de la table Employes :


```c#
//Requête pour obtenir la liste des employés triée en ordre croissant de nom
string requete = "SELECT Id, Nom, Prenom FROM employes ORDER BY Nom";

//Préparation de la commande
MySqlCommand cmd = new MySqlCommand(requete, cn);

//Exécution de la commande
MySqlDataReader dr = cmd.ExecuteReader();

//Création et Instanciation de la liste des employés
List<Employes> lstEmployes = new List<Employes>();

//Lecture des données retournées dans le DataReader.
//La méthode Read() retournera False s'il n'y a plus de données à lire.
while (dr.Read())
{
    //Création d'un employé.
    Employe employe = new Employe(dr.GetIn64(0),dr.GetString(1),dr.GetString(2));

   //Ajout de l'employé à la liste.
    lstEmployes .Add(employe);
}
```
## Obtenir le dernier identifiant unique ajouté à une table.

Il est commun dans une de donnée que l'identifiant unique d'un enregistrement soit une valeur auto-générée par la base de données. Dans ce cas, il arrive souvent que nous ayons besoin d'obtenir cette valeur à la suite de l'ajout d'un enregistrement dans la base de données. Pour ce faire, vous pouvez utiliser la propriété LastInsertedId d'une commande : 

```c#
//Exécution de la commande
cmd.ExecuteNonQuery();

//On obtient l'identifiant créé 
Int id = (uint)cmd.LastInsertedId;

```
## Démonstration
Télécharger le projet de départ pour la démonstration : [S12C1-DemoBD](https://gitlab.com/420-14b-fx/contenu/-/blob/main/bloc3/cours%2023/S12C1-DemoBD.zip?ref_type=heads)


## Configurer la chaîne de connexion

Pour faciliter la modification d'une chaîne de connexion, il est recommandé de ne pas la mettre directement dans notre code, mais plutôt de la mettre d'un fichier de configuration. Ainsi, il sera facile de la modifier si notre base de données change de serveur ou que le nom d'utilisateur et le mode de passe sont modifiés sans devoir modifier le code de l'application. 

C'est là qu'intervient le fichier **appsettings.json**. Il s'agit d'un fichier JSON qui contient la configuration de notre application. C'est donc à cet endroit que nous définirons la chaîne de connexion à une base de données.

### Ajout du fichier appsettings.json au projet.
À partir de votre projet, vous devez ajouter un nouvel élément de type "**Fichier config JSON JavaScript**".


### Configuration du fichier 

Afin que le fichier soit copier dans le répertoire source, vous devez modifier la manière dont il est compilé :

1) Cliquer avec le bouton de droite de la souris sur le fichier et sélectionner `Propriétés`.
2) Pour l'option `Action de génération`, sélectionner `Contenu`.
2) Pour l'Option `Copier dans le répertoire de sortie`, sélectionner `Copier si plus récent`


![Configuration du fichier appsettings.json](/images/appsettings1.png)

### Contenu du fichier

Vous devez ajouter le code suivant au fichier **appconfig.json** : 

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;port=3307;Database=demo_db;Uid=root;Pwd=;"
  }
}

```



### Lecture du fichier

Pour lire les éléments contenu dans le fichier `appsettings.json` vous devez installer les `packages NuGet` suivants dans votre projet : 

1) Microsoft.Extensions.Configuration
2) Microsoft.Extensions.Configuration.Json


```c#

using Microsoft.Extensions.Configuration;

//...

private const string APPSETTINGS_FILE = "appsettings.json"; 
private const string CONNECTION_STRING_NAME = "DefaultConnection";

//Chargement des configurations du appsettings.json
 IConfiguration config = new ConfigurationBuilder().AddJsonFile(APPSETTINGS_FILE, false, true).Build();

 //Lecture de la chaîne de connexion dans le appsettings.json
 string connectionString = config.GetConnectionString(CONNECTION_STRING_NAME);
           
```

## Démonstration - composition d'objets
Télécharger le projet de départ pour la démonstration : [S12c1-CompositionObjetsBD](https://gitlab.com/420-14b-fx/contenu/-/blob/main/bloc3/cours%2024/S12C2-CompositionObjetsBD.zip?ref_type=heads)

