# This article is a stub

## Cutscenes

Written by shachisaretai (big poo){.subtext}

Cutscenes are what you'd use for making cutscenes; however, anything that takes a tiny bit more complexity than just dialogue is best done with them as well! For example, having an object, on interaction, talk to you; then after talking to you, walking into a lake of fire and dying.

Cutscenes work through a pretty straightforward system, they run all the commands you list from the top to the bottom in a queue like this:

```gml
cutscene_create();
cutscene_player_canmove(false);
cutscene_dialogue([
    "{char(susie, 14)}* Hey Kris, what's up?",
    "{face_ex(17)}* No, it's the roof, dumbass."
]);
cutscene_func(function(){
    var _inst = instance_create(o_roof_meter);
    _inst.level = 100000000000000;
})
cutscene_sleep(15);

cutscene_player_canmove(true);
cutscene_play();
```

The code above would start a cutscene, make it so you can't move, write some dialogue from Susie, create an object instance, pause the cutscene for 15 frames, and let you move again.

The main way you will make sure your cutscene is timed to your liking is through specific waiting variables and functions. Many cutscene functions already have a wait variable built in, and all you have to do is set that variable to be true to pause the cutscene until it's done running. There are also separate functions like cutscene_sleep which will pause the cutscene for a certain amount of frames, or cutscene_wait_until which will only continue the cutscene once the function placed inside it returns true.

You can view many examples of cutscenes in the "zzz Examples" folder in your project, specifically the room named something like "cutscene_room_test" in the creation code of the two o_trigger objects.

## CUTSCENE FUNCTIONS (all can be found in the CUTSCENES script in the @Engine folder!)

### cutscene_create()

- creates a cutscene instance, place this at the start of your cutscene code otherwise nothing happens

### cutscene_play()

- starts the cutscene, which plays whatever you have in its queue in order

### cutscene_sleep()

- pauses the cutscene for an amount of frames

### cutscene_dialogue()

- runs dialogue in the cutscene and waits until it's finished if asked to. (see wiki entries on DIALOGUE for more info)
- also includes parameters to define the postfix, box position, and if other instances should be destroyed.

### cutscene_actor_dialogue()

- runs actor dialogue into the cutscene and waits until finished if asked to.
- actor dialogue being a text bubble on a specific actor instance

### cutscene_wait_dialogue_boxes()

- pauses the cutscene until a certain amount of dialogue boxes have been seen

### cutscene_wait_dialogue_finished()

- pauses the cutscene until the current dialogue box is destroyed

### cutscene_player_canmove()

- sets whether the player is allowed to move or not
- commonly used at the start of many cutscenes, so keep this one in mind...

### cutscene_party_follow()

- sets whether party members will follow their leader or not

### cutscene_actor_move()

- moves an actor during a cutscene
- main two parameters being the actor to move and an actor_movement struct
- since this one tends to be more complex, here's a crappy notated version of this function so you can better understand it

```gml
cutscene_actor_move(actor_instance, new actor_movement(
target_x,
target_y,
time(in frames)(alternative to speed),
seed(what moment the movement happens),
spd(alternative to time),
direction_toface,
are_positions_absolute
), array_position_global.charmove_insts, wait)
```

### cutscene_audio_play()

- plays audio during a cutscene

### cutscene_party_interpolate()

- interpolates party member's positions to be a part of the caterpillar
- FOR DUMMIES: make character in line, do if character weird teleport when trying to follow after cutscene

### cutscene_wait_until()

- pauses the cutscene until the function inserted returns true

### cutscene_set_variable()

- sets the variable of an object during the cutscene

### cutscene_set_partysprite()

- sets a party member's sprite accordingly to the battle sprites struct from party_data

### cutscene_anim()

- animated a value between two positions along a single curve during a cutscene.
- for built in easing set ease_type to a string, or for custom easing use a function, animation curve struct/ID, or an animated curve channel
- to find all built in easing types go to anime_functions in @Engine and scroll around midway.

### cutscene_animate()

- cutscene_anim() but has automatic instance checking as well as direct instance addressing.
- cutscene will NOT wait for animated to end
- an example of this function looks like this:

```gml
cutscene_animate(5, 0, 10, "linear", o_actor_kris, "shake")
```

- this shakes around Kris!

### cutscene_instance_create()

- creates an instance during a cutscene

### cutscene_func()

- runs a function during a cutscene
- very useful for doing things that may not be a present cutscene function during a cutscene

### cutscene_camera_pan()

- pans the camera from its current location to another using two animation instances

### cutscene_spare_enemy()

- spares an enemy with a cewl epic animation!!!!!
