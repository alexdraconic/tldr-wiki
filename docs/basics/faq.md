---
title: Frequently Asked Questions
---
::: info
This article is Legacy, many of these things should be moved to thier own page and expanded upon
:::

## Party System

<sup>Written by sixtydegrees</sup>

### Q: How would I add a custom Party Member?

A: All party members are created using a constructor with the parent being `party_m()`. If you want to create a new party member, you can make a new child constructor of `party_m()` that would create your member's data struct. Then, you must initialize your member using a special function made just for that - `party_m_initialize(_name, _constructor)`. It is recommended to initialize custom party members in o_world's Game Start event, right after `party_init()` was called. To sum it up...

1. Create a constructor for your new party member
2. Initialize your party member in o_world's Game Start event
3. Enjoy!

### Q: Um... now... how do I use this custom Party Member / How do I manage my Party Members?

A: It's easy to manage the party members in this engine. All you have to do is change the global.party_names array. Of course, the instances of the actors will remain in the room, so you must destroy them. To kick/add party members properly there are functions `party_member_add` and `party_member_kick` that request the target member’s internal name. Alternatively for developer debug purposes, hold TAB + P

---

## In-line Text Effects

pausing between characters, and even moving the characters themselves. TLDR has some built-in functions, but you can add your own if you know what you’re doing.
In-line commands are to be inserted directly into strings, and are automatically detected by the engine. Every in-line command is surrounded by curly brackets {}, and if it accepts arguments, has parentheses () open to accept them.
Example: ``{command(argument1, `argument2, uses comma`, 3)}``.
The arguments will be parsed like strings, no matter what you pass into them; however, if you’d like to use commas or any “scary characters”, you can use the alternative to the quotation marks - the backtick (\`) - to make the argument be treated as a full string instead of parsing it as two separate arguments.

### Q: How do I add a linebreak in text?

A: Use the command `{br}`, which will force a break to the next line. In DELTARUNE, there are also things which I call “full breaks”, in which a whole new asterisk is written. To make a new asterisk you have to reset the current indentation, which you can do using the `{resetx}` command.

### Q: How do I add pauses in text?

A: Use `{sleep(frames_to_pause)}`, or `{s(frames_to_pause)}` to add pauses.
As an example, the string `“The quick brown fox{s(5)} jumps over the lazy dog.”` will be written with a short pause between “fox”  and “jumps”.

### Q: How do I color text?

A: The command `{color(col)}` or `{col(col)}` will color your text, and {reset_col} will reset it back to the color that was changed when `{color(col)}` or `{col(col)}` was called. The argument col can be either the full or short name of the color. The available colors are as follows:

|Full Name|Short|Hex|
|---------|-----|---|
|`c_red`  |"r"  |#FF0000|
|`c_orange`  |N/A  |#FFA040|
|`c_yellow`  |"y"  |#FFFF00|
|`c_lime`  |"g"  |#00FF00|
|`tired_aqua`  |N/A  |#00C1F2|
|`c_blue`  |b  |#0000FF|
|`c_black`  |N/A   |#000000|
|`c_dkgray`  |N/A   |#404040|
|`c_gray`  |N/A   |#808080|
|`c_silver`  |N/A   |#C0C0C0|
|`c_white`  |N/A  |#FFFFFF|

If you’d like to add your own colors to the list, navigate to the `string_to_color` function in the script misc.