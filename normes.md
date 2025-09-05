
# Norme de codage en C#

1) Pour les **identificateurs** (attributs, paramètres, variables, noms de méthodes et de classes, constantes, valeurs d'énumérations, etc.) :
    - Les **accents** sont **interdits**.
    - Le nom des **attributs** doit commencer par le caractère de **soulignement** et être suivi de la casse mixte.  Par exemple :  _margeCredit
    - Les autres conventions pour les identificateurs en C# telles que précisées dans le document la section **[Convention de nommage](/convention)** doivent être respectées.

2) Une **variable** (ou un attribut) ne doit être initialisée que si la valeur de l'initialisation sert à quelque chose.  Par exemple, on doit initialiser les compteurs, les accumulateurs et les itérateurs pour les boucles.  À noter que lorsqu'on utilise des blocs d'instruction de type try-catch, il est parfois nécessaire d'initialiser certaines variables (à voir plus tard durant la session). 

3) À l'intérieur d'une classe, on doit toujours utiliser les **propriétés** au lieu des attributs directement car les validations doivent être faites dans les propriétés.  Évidemment, à l'intérieur des propriétés et seulement à cet endroit, il faut utiliser les attributs directement; autrement, on causerait une boucle infinie.

4) À l’intérieur d’une classe, avant d’assigner une valeur à un attribut dans une propriété, il faut **valider** cette valeur et lever le type d’exception approprié si cette valeur est invalide (à voir plus tard durant la session). Vous devrier utliser des **constantes** pour effectuer vos validations.

5) Tout le code doit être commenté en utilisant les commentaires XML.  Les balises XML suivantes doivent toujours être présentes (lorsque pertinentes) pour les classes, les énumérations, les constantes, les attributs, les constructeurs, les propriétés et les méthodes :
    - summary
    - param
    - returns

Note : Les commentaires XML sont surtout utiles lorsque les classes que vous concevez sont utilisées par d’autres programmeurs; ils ne voient pas le code de la classe directement (encapsulation).

7) À l'intérieur des méthodes, le code doit aussi être commenté **seulement** si le code effectu quelque chose de complexe. 
Note : Ce type de commentaires est surtout utile lorsque les classes que vous concevez sont modifiées par d’autres programmeurs.

8) On ne doit **jamais utiliser les instruction break ou continu** à l'intérieur des **structures itératives** (for, while, do..while). Vous pouvez utiliser un return à l'intérieur d'une structure itérative seulement si celle-ci se trouve in l'intérieur d'une méthode et pour laquelle il n'y aucun code après. 
    - Par exemple, dans le cas d'une méthode qui effectue une recherche et retourne l'élément trouvé.

8) Lorsqu'on ajoute des objets à des contrôles graphiques tels des ListBox, il ne faut pas appeler la méthode ToString() des objets; il faut ajouter l'objet directement.



