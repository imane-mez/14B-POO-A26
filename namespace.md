---
outline: deep
---

# Espaces de noms

Les espaces de noms "**namespaces**" sont utilisés en C # pour organiser et fournir un niveau de séparation du code. Ils peuvent être considérés comme un conteneur composé d'autres espaces de noms, classes, etc.

Un espace de noms peut avoir les types suivants comme membres:
- **Espaces de noms (espaces de noms imbriqués)**
- **Classes (Class)**
- Interfaces (Interface)
- **Structures (Struct)**
- **Énumération (Enum)**
- Délégués (Delegate)

Dans le cadre du cours, nous allons nous en tenir qu'aux classes, structure, énumération et espaces de noms.

Les espaces de noms ne sont pas obligatoires dans un programme C #, mais ils jouent un rôle important dans l'écriture de code plus propre et dans la gestion de projets importants.

Supposons que nous avons un grand nombre de fichiers sur notre ordinateur. Imaginez combien il serait difficile de les gérer s'ils étaient placés dans un seul répertoire. C'est pourquoi nous mettons les fichiers et associés dans un répertoire séparé. Cela nous aide à gérer nos données correctement.

Le concept d'espace de noms est similaire en C #. Cela nous aide à organiser différents membres en plaçant les membres liés dans le même espace de noms.

L'utilisation d'espace de nom permet également de **résoudre les conflits de noms**. Deux classes ou plus lorsqu'elles sont placées dans des espaces de noms différents peuvent avoir le même nom.

## Définition de l'espace de noms

Nous pouvons définir un espace de noms en C # en utilisant le mot-clé namespace :

```c#
namespace NomDeEspaceDenom
{
    // Corps de l'espace de noms
}

```

Voici un exemple d'utilisation d'un espace de nom avec une classe :

```c#
namespace MonApplication
{
    class MaClasse
    {
        public void UneMethode()
        {
            //
        }
    }
}

```

## Accéder aux membres d'un espace de noms

Les membres d'un espace de noms sont accessibles à l'aide du point(.). La syntaxe pour accéder au membre de l'espace de noms est :

espacedenoms.nomdumembre

Par exemple, pour créer un objet de type **MaClass** nous devrions faire ainsi :

```c#
MonApplication.MaClasse monObjet = new MonApplication.MaClasse();
```

## Utilisation d'un espace de nom (Using)

Un espace de noms peut être inclus dans un programme à l'aide du mot clé **using**. La syntaxe est :

```c#
using MonApplication;
```

Par exemple sans utiliser l'espace de nom System, vous devriez inscrire l'instruction suivante pour écrire à la console :

```c#
namespace MonApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Bonjour"); // [!code  focus]
        }
    }
}

```

Tandis qu'en utilisant le name space using, vous pouvez écrire :

```c#
using System; // [!code focus]

namespace MonApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Bonjour"); // [!code focus]
        }
    }
}

```
L'avantage de cette approche est que nous n'avons pas à spécifier le nom complet de cet espace de noms, lorsque nous désirons accéder à ces membres. 

## Espaces de noms imbriqués

Il peut également être possible d'imbriquer des espaces de noms :


```c#
namespace MonApplication
{
    namespace SousModule
    {
        class MaClasse
        {
            public void UneMethode()
            {

            }
        }
    }
} 


```
Pour l'utiliser :

```c#
MonApplication.SousModule.MaClasse.UneMethode();

```

## Pourquoi utiliser des namespaces

- **Organisation** : Cela permet de structurer et d'organiser le code de manière logique.

- **Éviter les conflits** : Si deux bibliothèques contiennent une classe avec le même nom, elles peuvent coexister sans conflit si elles sont placées dans différents namespaces.

- **Lisibilité** : Cela peut aider d'autres développeurs à comprendre le but ou la fonctionnalité d'une partie du code en fonction du nom du namespace.