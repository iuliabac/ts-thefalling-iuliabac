# Examen Object Oriented Programming (OOP)

| Vak | Object Oriented Programming |
|---|---|
| Code | CU75004V1 |
| Tijdsduur | 180 minuten (+extra) |

**In geval van tegenstrijdigheid tussen de Engelse en Nederlandse versie van de instructies, geldt de Engelse versie als de definitieve en gezaghebbende bron.**

# The Falling
> Alles heeft je net ingehaald. Het voelt alsof je valt. Vallend in een afgrond.

Met behulp van je toetsenbord bestuur je het vallende personage. Terwijl je valt, raakt je LightForce op. Je moet proberen LightForce-orbs te vangen om je LightForce aan te vullen. Vermijd monsters die je LightForce zullen verslinden.

## Voorbeeld demo

Je kunt een demonstratie spelen op: [https://hz-hbo-ict.github.io/ts-thefalling/](https://hz-hbo-ict.github.io/ts-thefalling/)

## Technische Vereisten

 - Je krijgt een conceptueel klassendiagram om mee te beginnen. Maak goed gebruik van OOP-principes bij het voltooien van de implementatie. Dit omvat composition, inheritance, en polymorphism.

 - De aangeleverde bestanden `Game.ts`, `CanvasRenderer.ts` en `KeyListener.ts` mogen niet gewijzigd worden.

 - De speler (![](./assets/player.png)) staat bovenaan het scherm en kan naar links of rechts bewegen met het toetsenbord.

 - De beginwaarde van de LightForce is 10.

 - Terwijl de speler "valt", daalt zijn LightForce elke seconde met 1. 

 - Willekeurig tussen 300 ms en 600 ms (milliseconden) verschijnt er een nieuwe orb of een nieuw monster aan de onderkant van het scherm, op een willekeurige plek. Een orb heeft 70% kans om te verschijnen en een monster 30%.

 - Er zijn 3 soorten orbs. Als de speler een orb vangt, voegt deze toe aan zijn LightForce. Elke bol heeft een verschillend aantal LightForce en een kans om te verschijnen:
    1. Orb Rood ![](./assets/orb1.png): 1 LightForce, 33% kans om te verschijnen
    2. Orb Groen ![](./assets/orb2.png): 3 LightForce, 33% kans om te verschijnen
    3. Orb Paars ![](./assets/orb3.png): 5 LightForce, 34% kans om te verschijnen

 - Er zijn 3 soorten monsters. Als ze de speler pakken, trekken ze een aantal LightForce af. Elke monster heeft een verschillend aantal LightForce en een kans om te verschijnen:
    1. Monster ![](./assets/monster1.png): 10 LightForce, 50% kans om te verschijnen
    2. Monster ![](./assets/monster2.png): 20 LightForce, 30% kans om te verschijnen
    3. Monster ![](./assets/monster3.png): 30 LightForce, 20% kans om te verschijnen

 - Orbs bewegen omhoog met 0.2px per verstreken ms.
 
 - Monsters bewegen omhoog tussen 0.2px en 0.4px per verstreken ms.

 - **Teleport!** Er is een kans van 20% dat een monster teleporteert als het voorbij 300px van de bovenkant van het scherm komt. Als het teleporteert, teleporteert het naar een andere plek op het scherm (zowel x- als y-positie).

 - Er wordt gezegd dat de speler een orb heeft "gevangen" of door een monster is gevangen wanneer de plaatjes tegen elkaar botsen. *De pseudocode voor botsingsdetectie staat in de digitale versie van deze instructies.*

```
Pseudocode for Collision Detection
item.X + item.width >= player.X
&& item.X <= player.X + player.width
&& item.Y + item.height >= player.Y
&& item.Y <= player.Y + player.height
```

 - Het spel is afgelopen als de LightForce van de speler minder dan 0 is of als de speler door 10 of meer monsters is gevangen.

### De Cloak

De Cloak (![](./assets/cloak.png)) beschermt de speler tegen monsters. De Cloak heeft 5% kans om te verschijnen. De Cloak beweegt diagonaal over het scherm, vanaf de onderkant tussen 0.1 en 0.3px per ms. Als de speler de cloak vangt, hebben monsters 15 seconden lang geen effect op hem (monsters hebben geen effect op de LightForce van de speler en tellen niet mee voor het totale aantal monsters dat de speler heeft gevangen). Een teller moet aangeven hoeveel seconden er nog over zijn voor de Cloak. Als de speler een tweede Cloak vangt terwijl een Cloak nog actief is, moeten de 15 seconden worden opgeteld bij de huidige timer. Er mag maar één Cloak tegelijk in beeld zijn.


## Conceptueel Klassendiagram
 Het volgende klassendiagram moet minimaal worden gebruikt in je implementatie. Het kan nodig zijn om verder te refactoren om goed gebruik te maken van de principes van Object Georiënteerd Programmeren.

![](./docs/classdiagram.svg)

*als je afwijkt van dit gegeven diagram, moet je goede Objectgeoriënteerde programmeerprincipes aanhouden.*


## Credits
 - https://www.freepik.com/free-vector/falling-people-isolated-icon-set-young-adults-children-fall-from-anywhere-vector-illustration_41922694.htm
 - https://www.freepik.com/free-vector/magic-crystal-balls-fortune-teller-globes-set_34567889.htm
 - https://www.freepik.com/free-vector/flying-cartoon-monsters-set-kids-party-flying-monsters-with-wing-illustration-monster-character_13031454.htm
 - https://www.freepik.com/free-vector/cartoon-set-funny-baby-monsters_41370903.htm

<div class="page"/>
