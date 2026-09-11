---
title: Getting Started
decsription: Installation instructions for the Totally Lit Deltarune Engine
---

# Getting Started <Badge type="tip" text="^3.1.0" />

<sup> Written by tweenko, FutureGamer25 (Lasers), and zelzmiy </sup>

---

::: warning {no-title}
Before jumping into the Engine head-on, I must warn you. This Engine REQUIRES at the very least intermediate GameMaker Studio 2 knowledge. If you don't have any, I'd recommend you to watch some tutorials and read its documentation first.
:::

First, you need to download the engine.
::: danger {no-title}
Please, Do not just Clone/Download the repository. Instead, _create a new
repository with the following steps_
:::

It is highly reccommended to use version control when working with this engine,
[Github Desktop ](https://desktop.github.com/download/) is highly reccomended.

1. [Create a repository](https://github.com/new) on the github website.
2. Open github desktop and clone your repository.
3. Open your repository in Command Prompt with right click (see attatchment) ![relevent Screenshot](../assets/screenshot_open_in_command_prompt.png)
4. In the Command Prompt, call the following commands in order:

```
git remote add upstream https://github.com/tweenko/tldr-engine.git
```

```
git fetch upstream
```

```
git reset --hard upstream
```

1. Publish your repository using the big publish button on Github Desktop. (If you cannot see it, press "Fetch Origin" first.)
2. :tada: Celebrate

After this has finished, you can start making changes to the engine in the directory you created the repository in. Now you should just commit regularly and follow common practice for GitHub projects.

It's highly recommended to use GitHub Desktop for working with the engine repository. If you're not familiar with GitHub, please watch some tutorials. It will help substantially.

---

A very big chunk of the Engine is made using a GameMaker function type called “Constructors”. If you are not familiar with struct or/and constructors, please make sure you fully understand how they work before messing with the Engine. Consult the [GMS2 wiki](https://manual.gamemaker.io/lts/en/GameMaker_Language/GML_Overview/Structs.htm) if you have questions.
If you do have the knowledge above, however, what I'd recommend you to do is to just launch the Engine for the first time. Sounds simple and kind of weird but it is true - at least for me, it's the best way to get to know what you're working with.

When you launch the Engine you will be put into the main room, and you are pretty much free to explore from there. Once you've run it and run through all rooms, you should be familiar with the capabilities of the Engine, and maybe even get some ideas flowing!

The next logical step is seeing how the things in the test rooms were done and experimenting with it.
One important thing, too: if you have any questions, I would recommend you to check out JSDoc for a function if you have questions about it. I tried to add descriptive commentary for all of them as much as I can! If you still have a question, please ask in the [Discord Server](https://discord.gg/x3t8JTyC2p)'s dev help channels.
