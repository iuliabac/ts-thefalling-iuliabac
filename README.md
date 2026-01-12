# Object Oriented Programming Case Study Exam

| Course | Object Oriented Programming |
|---|---|
| Code | CU75004V1 |
| Duration | 180 minutes (+extra) |

**In case of any discrepancy between the English and Dutch versions of the instructions, the English version shall be considered the definitive and authoritative source.**

# The Falling
> Everything has just caught up with you. It feels like you are falling. Falling into the abyss.

Using your keyboard, you control the falling character. As you are falling, your LightForce is running out. You must try to catch LightForce orbs to replenish your LightForce. Avoid monsters that will devour your LightForce. 

## Demonstration

You can play a demonstration at: [https://hz-hbo-ict.github.io/ts-thefalling/](https://hz-hbo-ict.github.io/ts-thefalling/)

## Technical Details

 - A conceptual class diagram is provided for you to start. Make good use of OOP principles when completing the implementation. This includes, composition, inheritance, and polymorphism.

 - You may not alter the provided `Game.ts`, `CanvasRenderer.ts`, or `KeyListener.ts`.

 - The player (![](./assets/player.png)) is on the top of the screen and can move left or right using the keyboard.

 - The initial value of the LightForce is 10.

 - As the player is "falling", their LightForce drops by 1 every second.
 
 - Randomly between 300ms and 600ms (milliseconds) either a new orb or monster will appear on the bottom side of the screen, at a random location. An orb has 70% chance of appearing and monster 30% chance of appearing.

 - There are 3 types of orbs. When the player catch an orb, it will add to their LightForce. Each orb has a different number of LightForce and a chance of appearing:
    1. Orb Red ![](./assets/orb1.png): 1 LightForce, 33% chance of appearing
    2. Orb Green ![](./assets/orb2.png): 3 LightForce, 33% chance of appearing
    3. Orb Purple ![](./assets/orb3.png): 5 LightForce, 34% chance of appearing

 - There are 3 types of monsters, if it catches the player, it will subtract a number of LightForce. Each monster has a different number of LightForce and a chance of appearing:
    1. Monster ![](./assets/monster1.png): 10 LightForce, 50% chance of appearing
    2. Monster ![](./assets/monster2.png): 20 LightForce, 30% chance of appearing
    3. Monster ![](./assets/monster3.png): 30 LightForce, 20% chance of appearing

 - Orbs move upward at 0.2px per elapsed ms.
 
 - Monsters move upward at a random speed between 0.2px and 0.4px per elapsed ms.

 - **Teleport!** There is a 20% chance that a monster will teleport when it moves past 300px from the top of the screen. If it teleports, it will teleport to different spot on the screen (both x- and y-position).

 - The player is said to have "caught" a orb or be caught by a monster when the images collide. *Pseudocode for collision detection is in the digital version of these instructions.*

```
Pseudocode for Collision Detection
item.X + item.width >= player.X
&& item.X <= player.X + player.width
&& item.Y + item.height >= player.Y
&& item.Y <= player.Y + player.height
```

 - The game is over when the player's LightForce is less than 0, or when the player has been caught by 10 or more monsters.

### The Cloak

The Cloak (![](./assets/cloak.png)) will protect the player from monsters. The Cloak has a 5% chance of appearing. The Cloak moves diagonally across the screen, from the bottom between 0.1 and 0.3px per ms. If the player catches the Cloak, monsters will have no affect on them for 15 seconds (monsters will not affect the player's LightForce or count toward to the total number of monsters that have caught the playter). A timer must show how many seconds is left for the Cloak. If the player catches a second Cloak while a Cloak is still active, the 15 seconds must be added to the current timer. There may only be one cloak on the screen at a time.


## Conceptual Class Diagram
The following class diagram must be used as a minimum in your implementation. You might need to refactor further in order to make proper use of good Object Oriented Programming principles.

![](./docs/classdiagram.svg)

*if you deviate from this given diagram, you must maintain good Object Oriented Programming principles.*


## Credits
 - https://www.freepik.com/free-vector/falling-people-isolated-icon-set-young-adults-children-fall-from-anywhere-vector-illustration_41922694.htm
 - https://www.freepik.com/free-vector/magic-crystal-balls-fortune-teller-globes-set_34567889.htm
 - https://www.freepik.com/free-vector/flying-cartoon-monsters-set-kids-party-flying-monsters-with-wing-illustration-monster-character_13031454.htm
 - https://www.freepik.com/free-vector/cartoon-set-funny-baby-monsters_41370903.htm

