
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


