# Engine Structure & Branching out

Written by tweenko{.subtext}

When you see the directories in the engine, you may initially be caught off-guard by the folders called “@Engine” and “zzz Examples”. These two are the folders created by us, which you usually shouldn't touch. The Engine folder contains all the parts of the engine that make up the Deltarune mechanics you all know. While you're allowed (and encouraged!) to make modifications to the items inside this folder, you may find it hard to upgrade versions in the future. While it's, of course, optional to do so, you may miss out on some features and may have some issues with your final product. If you're making any changes, try to minimize the effort it would take when updating.
The Examples folder is self-explanatory: it contains all the examples the engine has built-in, like the test rooms and recreated DELTARUNE areas.

The engine recommends a naming scheme:

<div class="naming-scheme-block">

{Asset Type}\_{Project Prefix}\_{Category}\_{Identification}\_{State}\_{Substate} {.scheme-template}

Here's an example: {.scheme-subtext}

`spr_g_rune_togore_down_happy_light` {.scheme-example}

</div>

\*-optional{.subtext}

**Asset Type** - GameMaker has many asset types like SPrites, Objects, Scripts, etc. In the naming scheme, they use these abbreviations:

- Script - “ “ [none] ~ (ch5\*item_consumables)
- Object - “o\_” ~ (o\*ex_ow_field_lamppost)
- Sprite - “spr\_” ~ (spr\*ib_enemy_vampire_idle)
- Room - “room\_” ~ (room\*ch3_tenna_meeting)
- Shader - “shd\_” ~ (shd_mv_chrom_abberation)
- …

**Project Prefix** - A prefix to distinguish your assets from others. In the base engine, example assets use the “ex\_” prefix.

**Category\*** - A vague descriptor of the category your asset belongs to. Could be skipped over.

**Identificator** - the unique part of your asset.

**State\*** - An identificator at the tail end of the asset name that could be added to another sprite name for finding a variant.

**Substate\*** - A second identificator at the tail end of the asset name that could be added to another sprite with a state for finding an even more specific variant of it.

## Making Your First Changes

Most, if not all, changes to the base engine you'd want to make should be made inside o_world. You can add default items in the player's inventory, modify the default party ensemble and configure various settings. Points of interest there would be the Game Start event and the Create event. The other events wouldn’t usually matter.
The things you would usually change in the engine are CONSTRUCTORS and all of these can be stored anywhere. That’s the best part! My recommendation would be to create a brand new script in your Scripts/ folder for each of the types of constructors you’d like to make new iterations of. For example, if you want to add new enemies to your Chapter 5 take, you’d create a script called something akin to mych5_enc_enemies and add all the constructors somewhere there

## The Party System

1. While largely intuitive, there are a lot of things you must know about the party system. Here's the rundown:

2. All party members are controlled via structs. The default members’ constructors can be found in party_init and are always children of the parent constructor party_m.

3. Your party members’ names are all held in a global variable global.party_names, while the other party members. Please note that these are only their NAMES and not their data.

4. Whenever the engine mentions a party member's name, the name in question is the name the party member was initialized as in the function party_m_initialize, not the name specified in their constructor. (although, the two can be the same)

5. To access any party data you will need the function party_get_data. It requests the name of the party member and the hash of the variable you want to retrieve.
