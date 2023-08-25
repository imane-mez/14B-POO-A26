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

### Propriété

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

Par exemple, le get peut être public pour autoriser un accès en lecture seule depuis l'extérieur de la classe, et le set peut être private.

