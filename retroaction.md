---
outline: deep
---

# Rétroaction utilisateur

## Principes généraux

- **Afficher un message seulement si l’utilisateur peut agir**
Pas de message si aucune action n’est possible ou si l’incident est insignifiant.
Exemple : une reconnexion automatique réussie ne nécessite pas de message.

- **Proposer une solution réaliste**
Indiquer comment corriger le problème, uniquement si la solution est crédible.
Exemple : « Impossible de se connecter au serveur. Vérifiez votre connexion Internet ».

- **Être précis**
Préciser l’objet, la valeur ou l’opération en cause.
Exemple : « Le fichier config.json est introuvable dans le dossier Documents ».

- **Formulation neutre, sans blâme**
    - Éviter « vous », « votre ».
    - Privilégier la voix passive si l’utilisateur est impliqué.
        <br>Mauvais : « Vous avez saisi un mot de passe incorrect. »
        <br>Bon : « Le mot de passe saisi est incorrect. »

- **Vocabulaire à utiliser**

    - Préférer **problème** à erreur ou échec
    - Utiliser **non valide** plutôt que illégal ou mauvais
    - Utiliser **arrêter** plutôt que abandonner ou tuer
    - Préférer **grave** à catastrophique ou fatal

- **Pas d’effets sonores**
Les sons d’alerte sont perçus comme agressifs et rarement utiles.

## Icônes dans un MessageBox WPF

![MessageBox îcones](./images/messagebox_icons.png)

| Icône | Usage | Exemple concret |
|-------|-------|-----------------|
| **Error** (`MessageBoxImage.Error`) | Problème empêchant l’action | « La base de données locale est corrompue. » |
| **Warning** (`MessageBoxImage.Warning`) | Situation pouvant causer un problème futur | « Le certificat du serveur expirera bientôt. » |
| **Information** (`MessageBoxImage.Information`) | Information utile ou confirmation | « Sauvegarde terminée avec succès. » |
| **Question** (`MessageBoxImage.Question`) | Demande de confirmation ou d’action | « Voulez-vous vraiment supprimer ce document ? » |

**Bonnes pratiques**

- Choisir l’icône en fonction du type de message, pas seulement de la gravité.
- Ne pas utiliser d’icône si le problème est mineur ou déjà corrigé par l’application.


## Déterminer le type de message

| Type | Quand l’utiliser | Exemple WPF |
|------|------------------|------------|
| **Erreur** | Le problème bloque l’action en cours | « Impossible de charger le profil utilisateur. » |
| **Avertissement** | L’action peut continuer mais comporte un risque | « L’espace disque est presque plein. » |
| **Information** | Simple notification ou état du système | « Mise à jour terminée. » |


## Gravité et hiérarchisation

- **Erreurs / avertissements critiques**
    - Risque de perte de données, d’accès ou de confidentialité.
    - Conséquences inattendues ou difficiles à corriger.
    - Nécessitent une action immédiate.
    <br>Exemple : « Impossible d’ouvrir le fichier de configuration. L’application doit fermer. »

- **Messages non critiques**
    - Souvent sans icône.
    - Exemple : un champ obligatoire laissé vide dans un formulaire.

- **Éviter la suralerte**
    - Trop d’avertissements banalisent les vrais problèmes et fatiguent l’utilisateur.

## Moments clés pour fournir une rétroaction

| Situation | Bonnes pratiques | Exemple WPF |
|-----------|------------------|------------|
| **Soumission d’un formulaire** | Afficher un message de succès ou expliquer l’échec | « Enregistrement réussi. » / « Adresse courriel non valide. » |
| **Chargement ou attente longue** | Indiquer la progression (ProgressBar, spinner) | « Téléchargement en cours (45 %). » |
| **Confirmation d’actions irréversibles** | Demander confirmation | `MessageBox.Show("Supprimer cet utilisateur ?", "Confirmation", MessageBoxButton.YesNo, MessageBoxImage.Question)` |
| **Erreurs système** | Informer de la nature du problème et suggérer une action | « Connexion perdue. Tentative de reconnexion… » |


## Afficher un message à l'utilisateur en WPF

WPF propose plusieurs boîtes de dialogue que votre application peut utiliser, mais la plus simple est sans aucun doute la **MessageBox**. Son seul but est de montrer un message à l'utilisateur, puis de proposer à l'utilisateur une ou plusieurs façons de répondre au message.

La **MessageBox** est utilisée en appelant la méthode statique **Show()**, qui peut prendre une gamme de paramètres différents, pour pouvoir se présenter et se comporter comme vous le souhaitez. Nous allons passer en revue toutes les différentes formes possibles, avec chaque variation représentée par la ligne MessageBox.Show() et une capture d'écran du résultat. 

Dans sa forme la plus simple, la MessageBox ne prend qu'un seul paramètre, qui est le message à afficher :

```c#
MessageBox.Show("Bonjour à tous!");
```

![MessageBox simple](./images/messagebox_1.png)

### MessageBox avec un titre

```c#
MessageBox.Show("Bonjour à tous!", "Démo - MessageBox");
```

![MessageBox avec titre](./images/messagebox_2.png)



### MessageBox avec des boutons supplémentaires

Par défaut, le MessageBox n'a qu'un seul bouton Ok, mais cela peut être modifié, au cas où vous voudriez poser une question à votre utilisateur et pas seulement montrer une information. 

```c#
MessageBox.Show("Désirez-vous vraiment supprimer cet enregistrement?", 
    "Suppression d'un élément", 
    MessageBoxButton.YesNo);
```

Vous contrôlez les boutons affichés en utilisant une valeur de l'énumération **MessageBoxButton** - dans ce cas, un bouton Oui, Non est inclus. Les valeurs suivantes peuvent être utilisées :
- OK
- OKCancel
- YesNoCancel
- YesNo

Maintenant, vous avez besoin d'un moyen de voir ce que l'utilisateur a choisi, et heureusement, la méthode **MessageBox.Show()** renvoie toujours une valeur de l'énumération **MessageBoxResult** que vous pouvez utiliser. 

En vérifiant la valeur du résultat de la méthode MessageBox.Show(), vous pouvez maintenant réagir au choix de l'utilisateur, comme on le voit dans cet exemple : 

```c#
MessageBoxResult result = MessageBox.Show("Désirez-vous vraiment enregistrer les modifications avant de quitter?", 
    "Enregistrement des modifications", 
    MessageBoxButton.YesNoCancel);

switch (result)
{
               
    case MessageBoxResult.Cancel:
        MessageBox.Show("L'opération est annulée et aucune modification n'a été enregistrée.");
        break;
    case MessageBoxResult.Yes:
        MessageBox.Show("Les modifications ont été enregistrées et vous avez quitté l'application.");
        break;
    case MessageBoxResult.No:
        MessageBox.Show("Aucune modification n'a été enregistrée et vous avez quitté l'application.");
        break;
    default:
        break;
}


```

![MessageBox avec boutons](./images/messagebox_3.png)

### MessageBox avec une icône

La MessageBox a la capacité d'afficher une icône prédéfinie à gauche du message texte, en utilisant un quatrième paramètre :

```c#
MessageBox.Show("Bonjour à tous!", "Démo MessageBox", 
    MessageBoxButton.OK,
    MessageBoxImage.information);
```

![MessageBox avec îcone](./images/messagebox_4.png)

À l'aide de l'énumération **MessageBoxImage** , vous pouvez choisir entre une gamme d'icônes pour différentes situations. Voici la liste complète :

- Asterisk
- Error
- Exclamation
- Hand
- Information
- None
- Question
- Stop
- Warning

### MessageBox avec une option par défaut

Le **MessageBox** sélectionnera un bouton comme choix par défaut, qui est alors le bouton appelé au cas où l'utilisateur appuie simplement sur « Entrée»  une fois la boîte de dialogue affichée. Par exemple, si vous affichez un MessageBox avec un bouton « Oui » et un bouton « Non », « Oui » sera la réponse par défaut. Vous pouvez cependant modifier ce comportement en utilisant un cinquième paramètre de la méthode **MessageBox.Show()**.

Pour éviter que l’utilisateur commette une erreur (par exemple lors d’une suppression d’un enregistrement, en appuyant trop rapidement sur la touche « Entrée »), **il est une bonne pratique de mettre le bouton par défaut sur « Non » ou « Annuer »**. Ainsi, l’utilisateur devra consciemment cliquer sur le bouton « Oui » ou « Ok » pour confirmer l’action.

```c#
MessageBox.Show("Désirez-vous quitter sans enregistre les modifications?", 
    "Enregistrement des modifications", 
    MessageBoxButton.YesNo, 
    MessageBoxImage.Question, 
    MessageBoxResult.No);
```
![MessageBox avec option par défaut](./images/messagebox_5.png)




