
# Surcharge des opérateurs

La surcharge d'opérateur en C# est un concept avancé de la programmation orientée objet qui permet aux développeurs de redéfinir le comportement des opérateurs standard tels que +, -, *, /, ==, !=, etc. pour des types de données personnalisés que vous créez dans votre code. Cela signifie que vous pouvez utiliser ces opérateurs avec des objets de vos propres classes comme s'ils étaient des types de données primitifs.

Supposons que nous décidions de construire une classe représentant des fractions, il serait alors intéressant de pouvoir y décrire les différentes opérations arithmétiques (comme l'addition) habituellement rattachées aux fractions.  Une manière de le faire serait de définir et d’implémenter une méthode **Additionner** qui permettrait de faire l'addition.  Ainsi, on pourrait écrire :

```c#
Fraction frac1 = new Fraction(2, 3);
Fraction frac2 = new Fraction(3, 5);

Fraction sommeFrac = fracUn.Additionner(fracDeux);

```

Ceci serait parfaitement valable, mais irait à l'encontre de la philosophie de la programmation orientée objet qui consiste à écrire de façon la plus naturelle possible les opérations devant être faites.  Ainsi, il serait de loin préférable de pouvoir écrire :

```c#
Fraction frac1 = new Fraction(2, 3);
Fraction frac2 = new Fraction(3, 5);

Fraction sommeFrac = fracUn + fracDeux;

```

Pour être en mesure d'écrire une instruction comme ci-dessus, il est nécessaire de **redéfinir** ce que signifie l'opérateur « **+** » dans le contexte d'utilisation de deux objets de type **Fraction**.

## Syntaxe

Pour surcharger un opératueeur, il faut définir une **méthode statique** retournant une entité correspondant à ce que devrait normalement retourner l'opération demandée.  Cette méthode statique doit utiliser le mot-clé « **operator** » suivi de l'opérateur devant être surchargé.  Par exemple, il faudrait écrire :

```c#

public static Fraction operator + (Fraction fractionGauche, Fraction fractionDroite)
{
	// Code de la méthode qui doit retourner une nouvelle fraction.
}


```

# Surcharge des opérateurs de comparaison


**Les opérateurs de comparaison, s'ils sont surchargés, doivent l'être en paires**.  En conséquence, si == est surchargé, != doit l'être également; dans ce cas, la méthode « Equals » doit être aussi surchargée.  L'inverse est également vrai, comme pour < et > et pour <= et >=.


## Exercice
::: tip S8E2 - Surcharge d'opérateurs

### Objectif 
Mettre en pratique la surcharge des opérateurs.e.

### Problème 
Vous devez créer une classe Matrice qui représente une matrice bidimensionnelle. Ensuite, vous devez surcharger les opérateurs + et - pour permettre l'addition et la soustraction de matrices. De plus, vous devez surcharger l'opérateur * pour permettre la multiplication d'une matrice par un nombre.

1) Créez une classe Matrice avec un attribut qui est une matrice bidimensionnelle (un tableau 2D) pour stocker les éléments de la matrice ainsi que deux propriétés en lecture seule permettant d'obtenir le nombre de lignes et de colonnes de la matrice.

2) Surchargez les opérateurs + et - pour permettre l'addition et la soustraction de matrices. Les opérations devraient créer une nouvelle matrice résultante avec les éléments corrects. Si les deux matrices n'ont pas le même nombre de lignes et de colonnes la valeur null est retournée.

3) Surchargez l'opérateur * pour permettre la multiplication d'une matrice par un scalaire. L'opération devrait créer une nouvelle matrice résultante avec tous les éléments multipliés par le scalaire donné. Si les deux matrices n'ont pas le même nombre de lignes et de colonnes la valeur null est retournée.

4) Créer la méthode ToString() permettant de retourner la représentation sous forme de chaîne de caratères d'une matrice.

4) Écrivez un programme principal (Main) pour tester votre classe Matrix et les opérations de surcharge d'opérateurs. Créez quelques matrices, effectuez des opérations d'addition, de soustraction et de multiplication par un scalaire, puis affichez les résultats.


:::