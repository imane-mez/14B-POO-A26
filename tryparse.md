
# Méthode TryParse


La validation des données nous assure que les valeurs saisies par l'utilisateur sont correctement formatées. Par exemple, si vous souhaitez que les utilisateurs saisissent leur âge, votre code ne doit pas accepter de réponses absurdes telles que des nombres négatifs (qui sont en dehors de la plage d'entiers acceptables) ou des mots (qui sont du mauvais type de données). 

La validation des données saisies peut également empêcher les bogues ou les failles de sécurité dans votre application. Par Exemple, si vous implémentez une fonction **Retirer()** qui prend un argument pour le montant à soustraire du solde d'un compte, vous devez vous assurer que le montant est un nombre positif. **Si la fonction Retirer() soustrait un nombre négatif du compte, le « retrait » finira par ajouter de l'argent!**

Jusqu'à présent, vous avez effectué des validations d'entrée qui ne vérifiaient pas le type des valeurs saisies. Par exemple, nous pouvions nous assurer qu'une valeur soit saisie :

```c#
Console.Write("\nVeuillez saisir votre prénom : ");
string prenom = Console.ReadLine();

//Validation si une valeur saisie n'est pas vide et ne contient pas que des espaces.
while (string.IsNullOrWhiteSpace(prenom))
{
    Console.Write("\nLe prénom est obligatoire. Veuillez saisir votre prénom : ");
    prenom = Console.ReadLine();
}

Console.WriteLine($"Bonjour {prenom}!");

```


Nous pouvions également valider qu'une valeur saisie soit positive. Par exemple nous pouvions valider que l'âge saisi par l'utilisateur soit supérieur à 0 :

```c#
Console.Write("\nVeuillez saisir votre âge : ");
int age = int.Parse(Console.ReadLine());

while(age < 1)
{
    Console.Write("\nVeuillez saisir un nombre positif supérieur à 0 : ");
    age = int.Parse(Console.ReadLine());
}

Console.WriteLine($"Vous avez {age} an(s)");


```

Cependant, si dans l'exemple précédent l'utilisateur ne saisit pas de valeur ou s'il saisit une chaîne de caractères au lieu d'une valeur numérique, cela nous donne une erreur et arrête le programme. Il nous faut donc un moyen de vérifier si le type saisi par l'utilisateur est valide. 

Vous avec déjà utilise la méthode **Parse()** qui permet de convertir une chaîne de caractères en un certain type (string, char, bool, byte, short, int, long, float, double). **Si la conversion échoue alors le programme génère une erreur** et l'application s'arrête. Afin de prévenir ce comportement, il est possible d'utiliser la méthode **TryParse()**. 

Cette méthode permet de tester si la conversion a fonctionné. Si la conversion échoue, alors la méthode retourne False et la valeur n'est pas convertie. Si la conversion a fonctionné, alors la méthode retourne **True** et la valeur est convertie dans le bon type. Voici comment nous pourrions nous assurer que l'âge s'agit est une valeur de type numérique positive :

```c#
byte age = 0;

do
{
    Console.Write("\nVeuillez saisir votre âge : ");

    // Validation si la valeur saisie est et si elle est supérieure à 0.
    // le paramètre out indique si si la conversion a fonctionné,
    // alors age aura la valeur saisie à l'écran.
    if (!byte.TryParse(Console.ReadLine(),out age) || age < 1)
    {
        Console.Write("\nL'âge doit être valeur numérique supérieur à 0.");
    }
    
} while (age < 1);

Console.WriteLine($"Vous avez {age} an(s)");

```

La méthode **TryParse()** possède deux paramètres. **Le premier représente la chaîne de caractère à convertir**. Le **deuxième est un paramètre dit de sortie** qui doit être une **variable du même type que la conversion** et qui **contiendra le résultat de la conversion si celle-ci réussit**. Si la conversion échoue alors la méthode retourne **False** et la valeur du paramètre de sortie reste inchangée.
