---
outline: deep
---

# Encapsulation

L'encapsulation est l'une des quatre principales caractéristiques de la programmation orientée objet (les autres étant l'héritage, le polymorphisme et l'abstraction). Elle consiste à restreindre l'accès à certains composants d'un objet, afin de prévenir des modifications accidentelles ou malveillantes, tout en permettant une interaction contrôlée avec ces composants.

l'encapsulation et l'abstration sont des fonctionnalités liées dans la programmation orientée objet. L'abstraction permet de rendre visibles les informations pertinentes et l'encapsulation permet à un programmeur d'implémenter le niveau d'abstraction souhaité.

L'encapsulation est implémentée à l'aide de spécificateurs d'accès. Un spécificateur d'accès définit la portée et la visibilité d'un membre de classe (propriétés, fonctions et objets). Toutes les classes et tous les membres de classe peuvent spécifier le niveau d’accès qu’ils fournissent aux autres classes à l’aide des modificateurs d’accès.

En C#, les principaux spécificateurs d'accès sont :

- **private** : Le membre est accessible uniquement au sein de la classe qui le contient. C'est le niveau le plus restrictif et il est souvent utilisé pour les champs qui ne doivent pas être directement accessibles de l'extérieur de la classe.

- protected : Le membre est accessible au sein de sa propre classe et par les classes dérivées. C'est utile lorsque vous voulez que les sous-classes héritent du membre, mais que vous ne voulez pas qu'il soit accessible en dehors de ces classes.

- internal : Le membre est accessible uniquement à l'intérieur de son propre assembly (le fichier DLL ou EXE où il est défini). C'est utile pour les éléments que vous voulez rendre visibles pour tout l'assembly, mais pas pour d'autres assemblies qui pourraient référencer le vôtre.

- protected internal : Le membre est accessible dans son propre assembly et par les classes dérivées, même si ces classes dérivées se trouvent dans d'autres assemblies.

- **public** : Le membre est accessible de n'importe où. C'est le niveau d'accès le moins restrictif.


L'encapsulation consiste à utiliser judicieusement ces spécificateurs d'accès pour exposer uniquement ce qui est nécessaire et cacher tout ce qui devrait être protégé ou privé, garantissant ainsi l'intégrité des données et la robustesse de la conception. Dans le cadre de ce cours, nous ne nous intéresserons qu'au spécificateur **Public** et **Private**. Les autres font appel à des notions plus avancées qui sortent du cadre de ce cours.

À partir de ce moment, vous devez vous dire qu'il est beaucoup plus simple de déclarer tous vos attributs et méthodes public de façon qu'ils soient connus dans toutes les classes!  C'est effectivement le cas, mais malheureusement pour vous, ça ne s'inscrit pas dans la philosophie orientée objet!  En effet, si vous déclarez tous vos attributs et méthodes public, cela implique donc que toute personne qui utilise vos classes peut avoir accès à tout son contenu et peut ainsi modifier l’état de vos objets (les valeurs des attributs) sans que vous ne puissiez rien y faire.  Il est certain que si vous travaillez seul, cela n'est pas trop grave, mais imaginez lorsque vous serez sur le marché du travail au sein d'une équipe qui travaille sur un gros produit qui nécessite des compilations de nuit…  Vous devrez créer des classes qui seront protégées des différentes interactions avec les classes des autres programmeurs, de façon à ne pas ralentir le travail de toute votre équipe dû au fait que vos classes ne sont pas protégées et cohérentes.

## public ou private, lequel choisir?

Pour savoir si on place une visibilité privée ou publique, on n'a qu'à regarder quels types de composants on veut définir.  En général, on suit le standard qui suit.

**private**:	
- **Attributs de la classe** : l'idée c'est de les protéger et de pouvoir les modifier seulement à l'intérieur de leur classe, par le biais de fonctions publiques. On s'assure ainsi que l'objet va rester cohérent, peu importe les manipulations que l'on effectue sur celui-ci. 
- **Fonctions utilitaires** internes à la classe : Elles sont inutiles à l'extérieur de la classe qui la contient.  Elles ne servent que pour faire des calculs qui vont servir seulement dans leur propre classe.

**public**:
- **Fonction en général** (constructeurs, accesseurs et autres fonctions standards) : Ce seront les appels à ces fonctions qui vont nous permettre de modifier les valeurs des attributs et de faire des manipulations sur les objets.  Les fonctions ayant été programmées par l'auteur de la classe, il faudra donc que celui-ci s'organise pour que les manipulations que les fonctions effectuent sur l’objet (les attributs de celui-ci) permettent de conserver la cohérence de ce dernier.
- **Les constantes** : Elles ne peuvent être modifiées en cours d'exécution de programme, il n'y a donc pas de risque que l'objet perde sa cohérence et elle pourront être utilisées à l'extérieur de la classe pour effectuer des validations.

Par exemple, dans la classe Rectangle que nous avons créée, tous les attributs sont public ce qui n'empêcherait pas quelqu'un qui l'utilise de spécifier une valeur négative pour la hauteur ou la largeur d'un rectangle. Ainsi, l'objet perdrait sa cohérence. 

```c#
Rectangle rect1 = new Rectangle();
rect1.hauteur = -10;
```

Voyons comment nous pouvons prévenir cette situation en utilisant l'encapsulation :

```c#
class Rectangle
    {   
        
        private float hauteur;  // [!code focus]
        private float largeur;  // [!code focus]
        private string couleur; // [!code focus]

        public Rectangle()
        {
            hauteur = 0;
            largeur = 0;
            couleur = "Aucune";
        }
        public Rectangle(float hauteur, float largeur, string couleur)
        {
            this.hauteur = hauteur;
            this.largeur = largeur;
            this.couleur = couleur;
        }

        public float CalculerPerimetre()
        {
            return (this.hauteur * 2) + (this.largeur * 2);
        }

        public float CalculerAire()
        {
            return this.hauteur * this.largeur;
        }
    }
```

Maintenant, si nous utilisons cette nouvelle version de notre classe, nous aurons des problèmes de compilation. Par exemple, si nous utilisons ce code :

```c#
Rectangle rect1 = new Rectangle();
rect1.hauteur = -10;  // [!code error]
```

Cette ligne fait référence à l'**attribut hauteur** de l'objet rect1.  Étant donné que cet attribut est maintenant **privé**, on ne peut plus y avoir accès dans une autre classe. Cela veut-il dire que l'**on ne peut plus modifier la valeur de la hauteur d'un rectangle** !?

Comment alors modifier ou obtenir la valeur d'un attribut d'un objet?  On sait que les attributs doivent être privés.  Par contre, les fonctions, elles, peuvent être publiques.  

C'est donc par le biais de celles-ci que l'on va effectuer les opérations sur les attributs des objets.  C'est ce qu'on appelle faire de l'encapsulation.  Cette technique permet d'avoir accès aux attributs d'un objet tout en les protégeant des opérations indésirables des autres classes.  

En effet, étant donné que les fonctions qui permettront de modifier les attributs seront codées par le programmeur propriétaire de la classe en question, il pourra veiller à ce que son code protège les attributs et ainsi garder les objets cohérents. Ces fonctions spéciales s'appellent des propriétés. 

## Propriété

Une propriété est un type de fonction spécial qui permet la lecture ou la modification d'un attribut privé. Celle-ci est composée de ce qu'on appelle des accesseurs pour obtenir de l'information sur un attribut ou pour modifier sa valeur. Il existe deux types d'accesseurs :
- **get {}** : utilisé pour retourner la valeur de la propriété.
- **Set{}** : utilisé pour affecter une nouvelle valeur.

Ainsi, chaque attribut privé qui doit être accessible publiquement devra posséder sa propre propriété : 

```c#
private float hauteur;	//Attribut privé

public float Hauteur	//Propriété
{
    get { return hauteur; }	    //Accesseur en lecture
    set { hauteur = value; }	//Accesseur en écriture
}

```

Dans cet exemple, la propriété **Hauteur** permet d'accéder en lecteur et en écriture à l'attribut hauteur.

L'accesseur **get** ressemble à une fonction qui doit retourner une valeur du même type que celle de la propriété. Dans la majorité des cas, celui-ci retournera la valeur de l'attribut correspondant à la propriété. 
::: danger Attention!
L'accesseur get doit toujours se terminer par l'instruction **return**. 
:::

Celui-ci est appelé lorsque vous faites référence à la propriété en lecture. Par exemple :

```c#
Console.WriteLine("Hauteur : " + rect1.Hauteur);  //L'accesseur get est appelé ici.

```
::: info Remarque
Vous remarquerez que dans ce cas-ci, que nous n'utilisons plus l'attribut **hauteur**, mais bien la propriété **Hauteur**.  
:::


L'accesseur **set** quant à lui ressemble à une fonction dont le type retourné est **void** . Il utilise un paramètre implicite appelé **value** qui est du même type que la propriété. Dans l'exemple précédant la valeur de ce paramètre est affecté à l'attribut hauteur. Lorsque vous affecté une valeur à la propriété, l'accesseur set est appelé.

```c#
rect1.Hauteur = 10;	// l'accesseur set est appelé ici.

```
Dans l'exemple ci-dessus, **la valeur 10 sera affectée au paramètre implicite value et qui sera par la suite affecté à l'attribut hauteur**.

Les propriétés peuvent être marqués comme **public** ou **private** . Ces spécificateurs d'accès définissent comment les utilisateurs de la classe peuvent accéder à la propriété. **Les accesseurs get et set pour la même propriété peuvent avoir des spécificateurs d'accès différents.**

Par exemple, le **get** peut être **public** pour autoriser un accès en **lecture seule** depuis l'extérieur de la classe, et le **set** peut être **private**.

### Validation

Maintenant voici un exemple d'utilisation des propriétés :

```c#
Rectangle rect1 = new Rectangle(5, 15, "Vert");
rec1.Hauteur = -10;
Console.WriteLine("Hauteur : " + rect1.Hauteur);

```

Dans cet exemple, nous voyons encore une lacune, c'est-à-dire qu'on a encore un problème de cohérence de l'objet. **La hauteur d'un rectangle ne devrait pas être négative**. 

Pour contrer ce problème, nous devrons donc ajouter une validation qui permettra de valider les valeurs que l'on veut assigner à la propriété. Si la valeur est valide, on peut donc l'assigner à l'attribut, sinon on ne l'assigne pas.

Dans notre exemple, nous devons valider plusieurs attributs de plusieurs natures.  Voici donc un exemple de valeurs qui pourraient être considérées comme de bonnes bornes pour juger le paramètre (value) cohérent:

| Attrbuts          |      Valeurs possibles            |  Valeur par défaut |
| :-------------:     | :-----------:                     | :----: |
| hauteur           | Entre 1 et 50                     | 1 |
| largeur           | Entre 1 et 50                     | 2 |
| courleur          | Un mot entre 4 et 25 caractères   | Aucune  |

Nous supposons donc ici que la création d'un rectangle avec le constructeur par défaut créera un rectangle sans couleur avec une hauteur de 1 cm et une largeur de 2 cm. 

Nous avons donc les valeurs par défaut suivantes:


```c#
public const float HAUTEUR_DEFAUT = 1f;
public const float HAUTEUR_MIN = 1f;
public const float HAUTER_MAX = 50f;
public const float LARGEUR_DEFAUT = 2f;
public const float LARGEUR_MIN = 1f;
public const float LARGEUR_MAX = 50f;
public const string COULEUR_DEFAUT = "";
public const byte COULEUR_NB_CARACTERES_MIN = 3;
public const byte COULEUR_NB_CARACTERES_MAX = 25;
```

Par la suite, nous ferons référence à ces valeurs par défaut pour les validations.

Voici un exemple pour la validation de la hauteur : 

```c#
public float Hauteur
{
     get { return hauteur; }
     set {
            //validation de la hauteur selon les valeures des constantes
            if (value >= HAUTEUR_MIN && value <= HAUTER_MAX)
                hauteur = value;
        }
}
```
La raison pour laquelle nous validons est due au fait que dans l'accesseur set on s'est rendu compte que l'on pouvait assigner des valeurs incohérentes à nos attributs.  Afin d'éviter de commettre des erreurs et de rendre nos objets incohérents. Nous nous assurerons que seuls les accesseurs peuvent modifier nos attributs. Il faudra donc inclure des validations dans nos accesseurs set.

Tel que mentionné précédemment, l'accesseur **get** permet également de retourne le résultat d'un calcul à condition que ce résultat soit tu même type que la propriété. Ainsi, il nous est possible **changer l'accesseur des méthodes CalculerPerimetre() et CalculerAire pour private** et de **créer des propriétés Perimètre et Air qui appellent les méthodes correspondante**. 


```c#
public float Perimetre  //lecture seule
{
     get { 
               return  CalculerPerimetre();            
	}      	
	//Aucun set!
}

public float Aire   //lecture seule
{
     get
     {
            return CalculerAire();
      }
    //Aucun set!
}

//...

private float CalculerPerimetre()
{
    return (this.hauteur * 2) + (this.largeur * 2);
}

private float CalculerAire()
{
    return this.hauteur * this.largeur;
}

```

::: warning Remarque
Vous remarquerez que les propriétés **Perimetre** et **Aire** **n'ont pas d'accesseur Set**. C'est normal, car il n'existe aucun attribut correspondant
:::

Maintenant, peut-on affirmer que nos objets seront toujours cohérents? Pas encore… En effet, observons la ligne suivante :

```c#
Rectangle rect1 = new Rectangle(-5, 15, "");
```

**Celle-ci permet d'instancier un objet de type Rectangle cohérent**.  Il faudra donc, lors du processus de création d'un objet, s'assurer que celui-ci sera cohérent. On devra donc modifier notre constructeur paramétré qu'il affecte des valeurs valides à nos attributs. Pour ce faire, nous devrons utiliser les propriétés et non pas les attributs directement. 

Voici donc un exemple de constructeur qui instanciera un objet valide:

```c#
public Rectangle(float hauteur, float largeur, string couleur)
{
       Hauteur = hauteur;
       Largeur = largeur;
       Couleur = couleur;
}

```

Finalement, vous remarquez qu'il est facile de se mêler entre le nom d'un attribut hauteur, d'une propriété Hauteur et le nom d'un paramètre hauteur utilisé dans le constructeur paramétré. Afin de minimiser les risques d'erreur, voici quelques règles à appliquer :
 - •	Un attribut doit toujours commencer par le caractère "_" suivi d'une lettre minuscule. 
        Exemple :

```c#
float _hauteur;

```

Une propriété doit toujours commencer par une lettre majuscule et doit porter le même nom que l'attribut correspondant. 
Exemple : 

```c#
public float Hauteur
{
     get { return _hauteur; }
     set {  _hauteur = value;}
}
```

Règle à respecter
- Utilisation des propriétés (set/get) dans tous les constructeurs et toutes les méthodes.
- Utilisation des attributs, seulement dans les propriétés.
- Ajout du préfixe "_" pour les attributs (permet de mieux distinguer des propriétés).
- Un seul constructeur avec paramètres par défaut.

### Quand utiliser une propriété ou une méthode?

La décision d'utiliser une propriété ou une méthode dépend de la sémantique que vous souhaitez transmettre et de la convention ou du style que vous suivez. Cependant, il y a quelques lignes directrices générales qui peuvent vous aider à décider :

1) **Nature de l'Opération**:

    - **Propriétés** : Utilisez-les lorsque vous souhaitez représenter un attribut ou une caractéristique d'un objet, même si cet attribut est calculé. Par exemple, Aire pour un rectangle.
    - **Méthodes** : Utilisez-les lorsque vous effectuez une action ou une opération, surtout si cette opération prend un certain temps, a des effets secondaires, ou nécessite des paramètres supplémentaires.

2) **Temps d'Exécution**:

    - **Propriétés** : Elles devraient généralement être rapides à exécuter. Si une propriété prend un temps significatif à s'exécuter, cela peut être déroutant pour les utilisateurs de la classe.
    - **Méthodes** : Elles sont attendues pour des opérations potentiellement longues.

3) **Effets Secondaires**:

    - **Propriétés** : Idéalement, obtenir une propriété ne devrait pas avoir d'effets secondaires observables. Elle devrait simplement retourner une valeur sans modifier l'état interne de l'objet.
    - **Méthodes** : Elles peuvent avoir des effets secondaires. Par exemple, une méthode Enregistrer sur un objet Document pourrait provoquer une écriture sur le disque.

4) **Paramètres**:

    - **Propriétés** : Elles ne prennent pas de paramètres (à part this pour les propriétés d'instance).
    - **Méthodes** : Elles peuvent prendre des paramètres.

5) **Conventions .NET** : Dans le monde de .NET et C#, il existe certaines conventions :

    - Les propriétés utilisent la notation PascalCase et ressemblent à des noms de variables, par exemple DateNaissance.
    - Les noms de méthode sont aussi en PascalCase, mais sont souvent verbaux ou représentent une action, par exemple CalculerSalaire().

6) **Intuition** :

    - Si cela "sent" comme un attribut de l'objet, même s'il est calculé, alors c'est probablement une propriété. Par exemple, même si le calcul de l'aire d'un rectangle nécessite une multiplication, il s'agit intrinsèquement d'un attribut du rectangle, donc Aire serait une propriété appropriée.
    - Si cela ressemble plus à une action ou à une opération que l'objet peut exécuter, alors c'est probablement une méthode.

7) **Extensibilité** : 

    - Si vous pensez que l'opération pourrait éventuellement nécessiter des paramètres à l'avenir, il est préférable de l'implémenter en tant que méthode dès le départ pour éviter de casser l'API plus tard.

## Surcharge de méthode

La surcharge de méthodes est un concept en programmation orientée objet qui permet à une classe d'avoir plusieurs méthodes ayant le même nom, mais avec des listes de paramètres différentes. Les méthodes sont distinguées par le nombre et/ou le type de leurs paramètres.

La surcharge de méthodes est utile car elle permet à un programmeur de définir une méthode pour traiter **différents types de données** ou **différents nombres d'arguments**, tout en offrant une interface cohérente aux utilisateurs de la classe.

Voici un exemple de surcharge de fonctions :

```c#
public int Additionner(int a, int b)	//Additionne 2 nombres entiers
{
    return a + b;
}

public int Additionner(int a, int b, int c)  	//Additionne 3 nombres entiers
{
    return a + b + c;
}

public float Additionner(float a, float b)	 //Additionne 2 nombres réels
{
    return a + b;
}

```
Dans l'exemple ci-dessus, nous avons **trois méthodes Additionner**. La première prend deux entiers, la deuxième prend trois entiers, et la troisième prend deux nombres réels. Grâce à la surcharge, nous pouvons utiliser la méthode Additionner pour différents types et nombres d'arguments. Le compilateur peut donc différencier ces trois fonctions, car elles ne prennent pas le même nombre de paramètres (1 et 2) ou encore les paramètres sont de types différents (1 et 3)

Cette technique est effective pour toutes les **méthodes** et pour le **constructeur**.

Reprenons maintenant les constructeurs de la classe Rectangle 


```c#

public Rectangle()
{
    
    Hauteur = HAUTEUR_DEFAUT;
    Largeur = LARGEUR_DEFAUT;
    Couleur = COULEUR_DEFAUT;
}

public Rectangle(float hauteur, float largeur, string couleur)
{

    Hauteur = hauteur;
    Largeur = largeur;
    Couleur = couleur;
}

```

On voit ici que le code de notre constructeur sans paramètre et celui de notre constructeur avec paramètres est **pratiquement identique** à l'exception des valeurs qui sont affectées aux attributs. Il serait donc préférable d'**éviter la duplication de code** en surchargeant notre constructeur.  

Voici maintenant comment on pourrait faire la surcharge de notre constructeur dans notre exemple de Rectangle 

```c#
public Rectangle() : this(HAUTEUR_DEFAUT, LARGEUR_DEFAUT, COULEUR_DEFAUT)
{

    //Il est possible d'ajouter des instruction supplémentaires ici
           
}
```
En utilisant le mot clé **this**, il nous est possible de spécifier l'utilisation du constructeur paramétré (surcharge) et de passer en paramètres les valeurs par défaut de notre objet. Ainsi, le constructeur paramétré sera appelé et par la suite, le cas échéant, le code supplémentaire de notre constructeur sans paramètre pourrait être exécuté.

### Valeurs par défaut

Comme vous le savez, il est possible d'indiquer une valeur par défaut à un paramètre d'une fonction. Cela peut également être appliqué à un constructeur. Ainsi, au lieu d'avoir 2 constructeurs dans l'exemple précédent, il serait possible d'en avoir qu'un seul en remplaçant le constructeur paramétré par celui-ci :

```c#
public Rectangle(float hauteur = HAUTEUR_DEFAUT, float largeur = LARGEUR_DEFAUT, string couleur = COULEUR_DEFAUT)
{
    Hauteur = hauteur;
    Largeur = largeur;
    Couleur = couleur;
 }
 ```
## Exercice
::: tip S2E2 - Encapsulation

### objectif

L'objectif de cet exercice est de mettre en pratique les nouvelles notions que vous venez d'apprendre ou d'approfondir en ce début de session (constructeurs, propriétés, méthodes paramétrées, types et conversions).  Pour ce faire, vous devez développer une **classe** appelée "**Creature**" ainsi qu'un nouveau type **Enum** (Assurez-vous d'avoir lu la section "Type Enum") appelé "**CreatureType**". 

Pour **tester** cette classe, vous devez concevoir un **programme principal** qui permettra de tester l'attaque, le vol et également si une créature est morte ou vivante. Pour ce faire, vous devez demander à l'utilisateur de choisir deux créatures et de simuler un combat. Les adversaires s'attaquent chacun leur tour tant qu'une des deux créatures n'est pas morte. La valeur d'une attaque est déterminée par un nombre aléatoire entre 1 et 15. Finalement, La créature qui gagne peut voler l'autre.

Vous devez indiquer pour chaque attaque qui est l'attaquant ainsi que les statistiques de chaque créature. Finalement vous devez afficher le gagnant ainsi que la nombre de pièces d'or qu'il a gagné.

Il est important de respecter les spécifications données ci-dessous et les normes habituelles de programmation en C# (entre autres, les majuscules et les minuscules).  De plus, vous devez respecter les normes de codage du cours de Programmation Orientée Objet (voir les documents distribués).

### Création du projet

- Créez un nouveau projet de type "Application Console".  Vous pouvez appeler votre projet "S2E2-CreaturesMythiques".

### Création de l'énumération (enum) appelée "CreatureType"

- Pour créer l'énumération, vous devez ajouter une nouvelle classe et par la suite remplacer le mot "class" par "enum".  Retirez aussi toutes les instructions "using".
- Le nom du fichier doit être "**CreatureType.cs**".
- Les valeurs de l'énumération sont :
    - Elfe
    - Gobelin
    - Zombie

###  Création de la classe "Creature"
- Créez une nouvelle classe appelée "Creature".


    **Attributs de la classe "Creature"**

    | Attribut          |      Type      |  
    | -------------     | :-----------: | 
    | **_type** (type de la créature)                                                                                       | CreatureType  |
    | **_vie** (nombre de points de vie)                                                                                    | sbyte         | 
    | **_armure** (nombre de points d'armure de la créature. Ne peut pas être négatif)                                      | byte          |
    | **_bourse** (nombre de pièces d'or que possède la créature, ne peut pas négatif, mais peut être plus grand que 255)   | ushort        |


    **Constructeurs de la classe "Creature"**
    - Premier constructeur : Avec **un seul paramètre** qui est le **type de la créature** à créer (CreatureType).
    - Deuxième constructeur : Avec **aucun paramètre** → par défaut, on **crée un Elfe** en appelant le constructeur précédent.
    - À noter qu'il n'y a pas de constructeur acceptant en paramètre tous les attributs car lors de la création d'une créature, on ne peut pas choisir soi-même la valeur des attributs vie, armure et bourse; on ne peut que choisir le type de créature (ou prendre le type par défaut).  Les valeurs des attributs vie, armure et bourse sont fixées en fonction du type de créature.
    - Toutes les créatures ont 10 pièces d'or lors de leur création (bourse = 10).
    - Une fois le type de créature connu, la vie et l'armure sont déterminés par le tableau suivant :

    | type de créature  |      Vie      | Armure        |
    | -------------     | :-----------: | :-----------: |
    | Elfe              | 12            | 8             |
    | Gobelin           | 15            | 5             |        
    | Zombie            | 8             | 7             |

    **Méthodes de la classe "Creature"**

    **bool EstVivante()**
        - Retourne un booléen indiquant si la créature est vivante (true = vivante, false = morte).
        - Une créature est morte si sa vie est plus petite ou égale à zéro sauf pour les zombies pour lesquels la vie doit être plus petite ou égale à -5.

    **bool EstMorte()**
    - Retourne un booléen indiquant si la créature est morte (true = morte, false = vivante).
    - Pensez à utiliser la méthode EstVivante() au lieu de recoder au complet (pas de redondance de code).

    **void SeFaireAttaquer(byte forceAttaque)**
    - Permet d'infliger (forceAttaque-armure) dommages (pas négatif) à la créature.  Les dommages infligés peuvent bien sûr être nuls.
    - Les gobelins sont plus résistants que les autres créatures; ainsi, les dommages infligés à un gobelin sont réduits de moitié arrondi vers le haut.  Par exemple : 5 dommages est réduit à 3 dommages car 5/2 = 2,5 qui donne 3 lorsqu'on arrondi vers le haut.
    - La vie doit être diminuée des dommages infligés.  Attention de ne pas soustraire des dommages négatifs et d'ainsi augmenter la vie.
    - Pour tous les types de créature sauf les zombies, la vie ne doit pas être négative.  La plus petite valeur permise est zéro; ce qui signifie que la créature est morte.  Pour les zombies, la vie peut descendre dans les négatifs autant qu'on le désire (même plus bas que -5).

    **ushort SeFaireVoler()**
    - Permet de tenter de voler des pièces d'or à une créature.  Le nombre de pièces volées est retourné.
    - Il est impossible de voler un Gobelin même s'il est mort.
    - Un elfe dont la vie est plus petite que 5 perd la moitié de sa bourse arrondie vers le bas.
    - Un elfe dont la vie est plus grande ou égale à 5 perd 3 pièces d'or (au maximum).
    - Un zombie dont la vie est négative ou à zéro (<=0) perd la totalité de sa bourse.
    - Un zombie dont la vie est plus grande que zéro, perd une pièce d'or seulement.

    **Méthodes de la classe "Programme"**
        
    **void AfficherCreature(Creature creature)**
    - Affiche le type de créature, sa vie, son armure et sa bourse.  Il faut aussi indiquer si la créature est vivante ou bien morte.

### Notes particulières

- Pensez à utiliser l'opérateur conditionnel ternaire pour les petites structures conditionnelles : 

    (condition ? valeur_si_vrai : valeur_si_faux)

- Pensez à utiliser l'instruction "**switch**" (même sur un type enum) au lieu de toujours utiliser des "if" imbriquées.
- Utilisez des **constantes publiques** pour représenter les différentes valeurs constantes soient celles pour la création des créatures (6), celle pour le nombre de pièce d'or (lors de la création d'une créature) et celle pour le type de créature par défaut (donc, 8 constantes au total).
- Créez des propriétés en **lecture publiques** et des propriétés en** écriture privés**.
- Assurez-vous de bien **respecter les types primitifs** qu'on vous demande d'utiliser pour les attributs et les méthodes.


:::

## Démo - Encapsulation
Télécharger la démonstration complète : [S2C2 - DemoEncapsulation.zip](https://gitlab.com/420-14b-fx/contenu/-/tree/main/bloc1/cours%2004?ref_type=heads)
