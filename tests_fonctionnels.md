
# Les scénarios de tests

## Qu'est-ce qu'un scénario de test

Un scénario de test est un scénario mesurant une fonctionnalité à travers un ensemble d'actions ou de conditions (cas de test) pour vérifier le résultat attendu. 

Les scénarios de tests s'appliquent à n'importe quelle application logicielle. Ils peuvent être faits manuellement ou de manière automatisée à travers des outils.

## Qu'est-ce qu'un cas de test

Un cas de test est un ensemble d'actions exécutées pour vérifier une caractéristique ou une fonctionnalité particulière de votre application logicielle. 

Un cas de test contient :

- des étapes, 
- des données de test, 
- une précondition
- une postcondition 

développés pour un scénario de test spécifique afin de vérifier toute exigence. 

Le cas de test comprend des variables ou des conditions spécifiques, à l'aide desquelles un testeur peut comparer les résultats attendus et réels pour déterminer si un produit logiciel fonctionne conformément aux exigences du client.

Exemple de Scénario de test :

1)	Vérifier la fonctionnalité de recherche.
2)	Vérifier la fonctionnalité de paiement.
3)	Vérifier la fonctionnalité de connexion (authentification).

## Pourquoi écrivons-nous un scénario de test ?

Voici des raisons importantes pour créer des scénarios de test :

- 	La principale raison d'écrire des scénarios de tests est de vérifier la fonctionnalité complète de l'application.
- 	Ils vous aident également à vous assurer que les processus sont conformes aux exigences fonctionnelles.
- 	Les scénarios de test peuvent être approuvés par diverses parties prenantes telles que :
    - les analystes, 
    - les développeurs
    - les clients 
    pour s'assurer que l'application sous test est soigneusement testée. Ils garantissent que le logiciel fonctionne pour les cas d'utilisation les plus courants.
-	Ils servent d'outil rapide pour déterminer l'effort de travail de test et créer en conséquence une proposition pour le client pour organiser la main-d'œuvre.
-	Ils aident à déterminer les transactions de bout en bout les plus critiques.
-	Une fois ces scénarios de test finalisés, les cas de test peuvent être facilement dérivés des scénarios de test.


Exemple de cas de test

![Formulaire de connexion](/images/scenarios_tests_1.png)

Voici les différents cas de test pour le scénario "Vérifier la fonctionnalité de connexion" :

1)	Vérifiez le comportement du système lorsqu'un courriel et un mot de passe valides sont entrés.
2)	Vérifiez le comportement du système lorsqu'un courriel invalide et un mot de passe valide sont saisis.
3)	Vérifiez le comportement du système lorsqu'un courriel valide et un mot de passe invalide sont saisis.
4)	Vérifiez le comportement du système lorsqu'un courriel invalide et un mot de passe invalide sont saisis.
5)	Vérifiez le comportement du système lorsque le courriel et le mot de passe sont laissés vides et que le bouton « Se connecter » est cliqué.
6)	Vérifiez que votre mot de passe oublié fonctionne comme prévu
7)	Vérifiez le comportement du système lorsque « Se souvenir de moi » est coché


Voici un exemple : [Exemple de cas de test](/documents/Exemple%20cas%20de%20test.pdf)

## Pourquoi écrire des cas de test

Voici quelques raisons importantes pour créer un cas de test 
- Les cas de test aident à vérifier la conformité aux normes, directives et exigences des clients.
- Vous aide à valider les attentes et les exigences des clients.
- Couverture accrue du contrôle, de la logique et du flux de données.
- Vous pouvez simuler des scénarios d'utilisateur final "réels".
- Expose des erreurs ou des comportements non souhaités.
- Lorsque les cas de test sont écrits pour l'exécution des tests, le travail du testeur sera mieux organisé et simplifié

## Comment bien concevoir un cas de test

- Les cas de test doivent être transparents et simples.
- Créez un cas de test en gardant l'utilisateur final à l'esprit.
- Éviter la répétition des cas de test.
- Vous devez vous assurer que vous rédigerez des cas de test pour vérifier toutes les exigences logicielles mentionnées dans le document de spécification.
- Ne présumez jamais des fonctionnalités et des caractéristiques de votre application logicielle lors de la préparation d'un cas de test.
- Les cas de test doivent être facilement identifiables.



