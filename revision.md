# Révision du cours Introduction à la programmation (420-04A-FX)



## Les Types


**Entier**

````c#
int unEntier;

````
**Double**

````c#
double unDouble;

````
**Caractère**

````c#
char unCar;

````

**Chaîne de caractères**

````c#
string uneChaine;

````

**Booléen**

````c#
bool unBool;

````

::: danger Important
Une instruction en C# se termine par un **;**

Un bloc d'instructions en C# est délimité par des accolades : **\{ instructions \}**
:::

## Opérations élémentaires

**Concaténation**

````c#
string str = uneChaine + autreChaine;

````
**Addition**

````c#
nombreUn = nombreDeux + nombreTrois;

````
**Soustraction**

````c#
nombreUn = nombreDeux - nombreTrois;

````
**Multiplication**

````c#
nombreUn = nombreDeux * nombreTrois;

````

**Division**

````c#
nombreUn = nombreDeux / nombreTrois;

````
::: warning Attention
**/** peut désigner autant la division entière que réelle. Le résultat sera différent.
:::

## raccourcis sur les opérations
````c#
unNombre++ ;			// unNombre = unNombre + 1 	
unNombre += nb; 		// unNombre = unNombre + nb
unNombre-- ;			// unNombre = unNombre - 1 
unNombre -= nb; 	    // unNombre = unNombre - nb
unNombre *= nb; 		// unNombre = unNombre * nb
unNombre /= nb; 		// unNombre = unNombre / nb
unNombre %= nb; 		// unNombre = unNombre % nb
````

::: info 
**%** est l'opérateur modulo qui représente le reste d'une division entière.
:::

## Conversion 

**ToString**
````c#
string strCh = unNombre.ToString();	    // Convertir un nombre en chaîne
````

**Convert**
````c#
int nb = Convert.ToInt32(str) ;	            // Convertir en nombre entier
double dble = Convert.ToDouble(str) 	    // Convertir en double
````

## Lecture du clavier


````c#
string uneChaine = Console.ReadLine();                  //Chaîne de caractères
int unEntier = Convert.ToInt32(Console.ReadLine());     //Entier
double unDouble = Convert.ToDouble(Console.ReadLine()); //Double.
bool bln = Convert.ToBoolean(Console.RadLine()) ;       //Booléen.
char unCar = Console.ReadKey();                         //Caractère

Console.ReadKey() ;	// Attendre que l'utilisateur pèse sur une touche
````

## Écriture à la console

**Un message**

````c#
Console.WriteLine("Voici un message");
````
**Une variable**

````c#
string unMessage = "Bonjour";
Console.WriteLine(unMessage) ;
````

**Un message avec valeur**

````c#
string nombre = 10;
Console.WriteLine("La valeur de nombre est : {0}", nombre) ;
````

**Un message avec 2 valeurs**

````c#
string age = 20;
int poids = 140;
Console.WriteLine("Âge : {0} et Poids : {1} ", age, poids) ;
````

**Interpolation ($)**

````c#
string age = 20;
int poids = 140;
Console.WriteLine($"Âge : {age} et Poids : {poids} ") ;
````

**Formatage des sorties**

````c#
Console.WriteLine("{0,5}", 12);	    // Aligné à droite sur 5 espaces
Console.WriteLine("{0,-8}", 12);	// Aligné à gauche sur 8 espaces

// Aligné à gauche sur 20 espaces avec 6 décimales (arrondissement est fait)
Console.WriteLine("{0,-20:n6}", 125.4567895432);

// Aligné à droite sur 15 espaces avec 3 décimales (arrondissement est fait)
Console.WriteLine("{0,15:n3}", 125.4567895432);

// Aligné à droite sur 15 espaces avec 2 décimales (format monétaire)
// Note : Par défaut le nombre de décimales est 2
Console.WriteLine("{0,15:c}", 125.4567895432);


// Aligné à droite sur 15 espaces avec 4 décimales (format monétaire)
Console.WriteLine("{0,15:c4}", 125.4567895432);

// Aligné à gauche sur 10 espaces avec 2 décimales (format monétaire)
Console.WriteLine("{0,-10:c}", 123456.4567);

// Aligné à gauche sur 10 espaces et aucune décimale (format monétaire)
Console.WriteLine("{0,-10:c0}", 123456.4567);

// Retourne une chaîne de caractères. Les champs sont séparés par une tabulation
String.Format("{0,12}\t{1,-30}\t{2,9:c0}", param1, param2, param3) ;
//param1 sera affiché aligné à droite sur 12 caractères
//param2 sera affiché aligné à gauche sur 30 caractères
//param3 sera affiché sur 9 caractères (format monétaire, aucune décimale)

````
## Opérateurs relationnels et de comparaison

**Opérateurs relationnels**

**ET**

````c#
nb > 12 && nb < 25;	  // nb entre 12 et 25 (exclusivement) 
````

**OU**

````c#
nb < 30 || nb > 50; 	// nb < 30 ou plus grand que 50 
````

**NON**

````c#
bool erreur = true;
!erreur 	// Inverse le résultat, renvoie False si le résultat est vrai
````

````c#
bool succes = true ;
string message =  ""  ;

// Écrire ce qui suit
if ( succes )
   message = "Bravo!"; 	
   
// revient à la même chose que d'écrire
if ( succes == true )
    message = "Bravo!";

````

::: danger ATTENTION! Ne jamais écrire
Il n'y a aucun avantage à ajouter une comparaison superflue comme ceci :
````c# 
if ( succes == true )
    message = "Bravo!";

````
Ainsi, on utilisera la première forme seulement.  On ne devrait pas voir les éléments suivants dans vos programmes :
-	== true 
-	== false 
-	!= true
-	!= false

:::

**Opérateurs de comparaison**

**Égalité**
````c#
message == "allo"
````

**Différent**
````c#
age != 17
````

**Plus petit**
````c#
argent < 1000
````

**Plus petit ou égal**
````c#
somme <= total
````

**Plus grand**
````c#
poids > 100
````

**Plus grand ou égal**
````c#
economie >= prixDemande
````

**Retouner le résultat d'une comparaison**
````c#
// Écrire ce qui suit
return  nb > 15 ;

// revient à la même chose que d'écrire
if ( nb > 15 )
    return true ;
else
    return false ;

// Écrire ce qui suit
return  note >= 60  &&  note < 80;

// revient à la même chose que d'écrire
if ( note >= 60 && note < 80 )
    return true ;
else
    return false 


````
## Instructions conditionnelles

**SI ... ALORS**
````c#
if ( uneCondition )
{
    //Bloc d'instructions à exécuter si la condition est vraie ;
}
````

**SI ... ALORS ... SINON**
````c#
if ( uneCondition )
{
    //Bloc d'instructions à exécuter si la condition est vraie ;
}
else{
      Bloc d'instructions à exécuter si la condition est fausse ;
}

````

**SI imbriqués**
````c#
//Première forme
if (condition1)
{
    if(condition2)
    {
        //Bloc d'instructions si la condition2 est vraie
    }
}

//Ceci équivaut à ceci
if(condition1 && condition2){
  //Bloc d'instructions si la condition1 et condition2 sont vraies
}

//Deuxième forme
if ( Condition1 )
{
    //Bloc d'instructions à exécuter si la Condition1 est vraie ;
}
else if ( Condition2 )
{
    //Bloc d'instructions à exécuter si la Condition2 est vraie ;
}
else if (ConditionN)
{
    //Bloc d'instructions à exécuter si la ConditionN est vraie ;
}
else
{
    //Bloc d'instructions si la toutes les conditions préalables sont   fausses ;
}


````
**SELON LE CAS**

```c#

switch ( uneVariable )
{
    case valeur1 :
        //Instructions à exécuter si uneExpression égale valeur1 
        break ;
    case valeur2 :
    case valeur3 :
        //Instructions à exécuter si uneExpression égale valeur2 ou valeur3
        break ;
    …
    case valeurN :
        //Instructions à exécuter si uneVariable égale valeurN
        break ;
    default :
        //Instructions à exécuter si uneVariable différente de toutes les 
        //valeurs énumérées précédemment
        break ;
}


```
**Opérateur conditionnel ternaire**
```c#
//uneVariable =  Condition ? ValeurSiVrai : ValeurSiFaux  ;
bool majeur =  age >= 18 ? true : false ;
Console.WriteLine( note >= 60 ? "Réussite" : "Échec" ) ;

```
## Structures itératives

**POUR ... FAIRE**

```c#
int somme = 0;
for ( int i = 1 ; i <= 25 ; i ++)
{
    nb = Convet.ToInt32(Console.ReadLine());
    somme += nb ;
}
```

**TANT QUE**

```c#
int nb = 0;         //variable de contrôle
while (nb >= 0 )	// boucle cesse lorsque nb devient égal à -1
{
	somme += nb ;
	nb = int.Parse(Console.ReadLine());	 // modification de la variable de contrôle
}
```

::: danger Important
  Le while doit comporter une instruction qui modifie la valeur de la variable de contrôle
:::

**FAIRE TANT QUE**

```c#
do 
{
    nb = int.Parse(Console.ReadLine());
    if (nb >= 0)
        somme += nb;	
} while (nb >=0);

```
** Différence entre While et doWhile


```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
