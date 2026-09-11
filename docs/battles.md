# This article is a stub!

## Battle System

TLDR’s system for setting up fights may seem complex at first, but once you look it over the system is quite intuitive and easy to use.

### CREATING AN ENEMY

First, to even have a fight in the first place you have to have enemies to fight against, of course, otherwise your fight would be quite boring.

To create an enemy first create a **child of o_actor_e**, and set it’s what not to your liking. This is mostly just adding in sprites and naming the object in the first place.

Most of the enemies ACTS, stats, and characteristics are then added later when you create it’s constructor. You can find examples of some enemies, and the template for the constructor itself in the enc_enemies script in the @engine folder. It’s recommended you store your enemy constructors in your own script better accessible to your project for organizational purposes. Now to go over the important things in the enemy constructor you should be focused on defining:

```gml
{
    /* NAME: self-explanatory
    OBJ: the object you just create that is the child of o_actor_e
    STATS (hp, max_hp, attack, defence, status_effect, carrying_money): self-explanatory
    MERCY: default amount of mercy
    MERCY_ADD_PITY_PERCENT: % of mercy added on spare w/o 100% mercy
    CAN_SPARE: self-explanatory
    ACTS: pretty self-explanatory. For each act you create you must define its name, description, party members, tp cost, and function that it runs. Looks like this: */
    {
    name: loc("enc_act_check"),
    desc: "Useless analysis",
    party: [],
    exec: function() {
    encounter_scene_dialogue(loc("enemy_virovirokun_act_check"))
        }
    }

    /*ACTS_SPECIAL: used to define special acts only used by certain characters, like susie ralsei or noelle. Looks like this:*/
    susie: {
    exec: function(enemy_slot){
    enc_enemy_add_spare(enemy_slot, 50)
    cutscene_dialogue(loc("enemy_virovirokun_act_susie"))
    }
    /*DIALOGUE: the text that would be in the enemies speech bubble each turn, can be a function and can accept slept argument as arg0
    TURN_OBJECT: VERY IMPORTANT, the object that stores the bullet patterns and attacks of an enemy.
    S_IDLE: self-explanatory
    S_SPARE: self-explanatory
    S_HURT: self-explanatory
    RECRUIT: adds the recruit constructor to recruits of your choosing.*/
}
```

Creating your ACTS for your battles will probably be one of the difficult points of creating the constructor. Use one of the enemy examples provided to better understand how you might create your own ACTS. (Cutscenes will often be the answer for simple non-gimmick actions).

### CREATING BULLET PATTERNS

This is where the very important emboldened turn object from earlier comes into play.
This following section will also be very hard to understand with just this wiki, so it is recommended you analyze the turn objects that should exist in the ZZZ examples folder, being in ZZZexamples>objects>enc>turns
The turn object is what makes up the enemies attacks during their turn, which are their bullet patterns. Each time the enemies turn starts it creates a turn object, selects a bullet pattern to use, and then that bullet pattern is run in the step event until it’s time runs out and the turn ends.
To create your turn object, create an object and make it the child of o_turn. Before you forget, make sure that this turn object is placed in its corresponding enemy constructor.
Now to explain all the default parameters you may want to set of your turn object:
