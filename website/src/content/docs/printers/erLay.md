---
title: "erLay"
description: "A ultra portable 3D printer designed for competitions"
project_name: "erLay"
repository: "https://raw.githubusercontent.com/Badbird5907/erLay/refs/heads/master/README.md"
---
# erLay
erLay is a ultra-portable CoreXY 3D printer made by [Evan Yu](https://evanyu.dev) and [Aaron Huang](https://runthebot.me)

This printer is built to print small parts needed fast at robotics competitions where our main limitations are space and time. This printer will mainly print spacers, shaft collars, pullies, etc.

## Goals
- Ultra-portable (for robotics competitions!!)
- CoreXY
- Pico MMU (Optional)
- Zero Click ABL
- Built-in carrying case (The printer will collapse into something like a pelican case)

## Total Time

Aaron: 9h
Evan: 4h

## Log

### Feb 12 2025

- Came up with name, specs, and design.
- Research on different 3d printer designs & parts (VORONDesign, etc...)
- Started options for BOM

Evan: 2h
Aaron: 4h

#### Both
**What was done:**
- Discussed name, specs and design
- Rabbit holing and yapping about option
- Both already have 3D printers
**Some of our other ideas:**
- 2/3 stage elevator on a bed slinger 💀
- smaller Voron v0


#### Aaron

- I'm the one that dragged other bozo onto this
- I am in the process of building a [Hex Zero](https://github.com/Alexander-T-Moss/Hex-Zero)
- Went down a printer rabbit hole

**ABL:**
- [ZeroClick](https://github.com/zruncho3d/ZeroClick)
- Seams nice and cheap
- Used on Hex Zero
- ABL needs more research

**Hotend/Toolhead:**

Requirements:
- COTS
  - We do not want to be designing a Toolhead
  - We can use a custom one if it relly came to it
- Direct drive
  - Keep it compact
  - Print filaments that are harder to print (Remember robotics!)

Options:
- [Apogee Extruder](https://www.filastruder.com/products/ldo-apogee-toolhead-for-ender-3)
  - Light 170g
  - Cheap
- [Creality Sprite](https://www.creality.com/products/sprite-extruder-pro-kit)
  - Kinda heavy 266g
  - Dual-Gear Drive for flexibles
  - Cheap
- [BIQU H2](https://biqu.equipment/products/biqu-h2-v2s-extruder-for-b1-bx-ender-3-3-v2-5-6-cr6-10?variant=40218342555746)
  - Dual-Gear Drive for flexibles
  - Weight ok 195g
  - Cheap ish
  - Big
- [**Orbiter**](https://www.3dlabtech.ca/product/ldo-smart-orbiter-extruder-kit-v3/)
  - Probably this?
  - Cheapish
  - Canadian website???
  - We are Canadian so no tarifs!!?!??!?
  - Light 175g
  - Dual-Gear Drive for flexibles
  - With a CHT nozzle??!!!?!?
  - WHAT??? for 87 USD?????? (The Canadian dollar is not doing so well)


Ok that's it for today I have school tmr

### Feb 13 2025

Aaron: 5h
Evan: 2h

#### Aaron:


Yay snow day!!! 
Ok so I was losing my mind at midnight yesterday and did not realize that the Apogee uses an orbiter
I probably need to find a better source

**Frame**


I was brainstorming frames today and I wanted the hingeing lid of the case to be the Z-axis
I started with some CAD (Bad idea) and I got almost nowhere

Anyway I do here are the current frame options after spending 30 mins failing at CAD:
- Hingeing lid with the bed in the middle
- Linear Rods as the Z-axis support (Similar to Neutrino)

I also started a basic Onshape Part Lib and did a lot more research

I've learnt my lesson and now will spend the next hour **drawing concepts** before CADing

**Drawings**


I spend half an hour making a Iso Grid YAY!
Anyway Heres the idea
![3D Printer Concept Iscometric](https://cdn.hack.pet/slackcdn/e7751f85e307172b6f68b6b7c01aed9b.png)

#### Evan:

Spent most of the day working on [makropad](https://github.com/Badbird5907/makropad), it's almost done!

**Research:**
- Researched how CoreXY works
  - https://corexy.com/theory.html
  - https://all3dp.com/2/corexy-3d-printer-is-it-worth-buying/
  - https://3ddistributed.com/belt-frequency-and-tensioning/
  - 3 Stepper Motors:
    - 2 for the XY
    - 1 for the Z
  - Print head is fixed to XY axis, while z axis is moved for printing
  - Belt frequency can differ between machines
  - Tensioning is important for performance. Frequency can affect speed and print quality
  - Over-tensioning can cause the belt to slip/wear out faster
  - Tighten belt until there is some resistance when pushed. There should be no slack.
  - Looser belt = layer shifting when printing (misaligned prints)
  - Failure can be caused by:
    - Belt friction
    - Damaged belt teeth
    - Slip/rubbing of the belt
    - Debris
  - Loose/missing pulley teeth can cause jerky movements
  - Pitch = distance between teeth (most are 2mm)
Pros of CoreXY:
- Speed
- Accurate
- Compact
- Rigid frame
This makes it perfect for our use case, as we want a small and fast printer we can take to competitions (hackathons and FRC).

Limitations:
- Complex assembly
  - This could be an issue for portability, if we need to disassemble the printer.
- Higher cost
- Z axis constraints

![Reference Mechanism](https://corexy.com/reference.png)

[CoreXY vs Bedslinger](https://store.creality.com/blog/corexy-vs-bed-slinger)

Bedslinger:
- Advantages:
  - Simple assembly
  - Affordable
  - Easy to use
- Disadvantages:
  - **Inertia** caused by the bed moving
  - Speed is slower due to bed inertia 
  - Higher vibration due to bed movement
  - As size of bed increases, the slower the printer has to be due to higher weight

#### Aaron Part 2:
I've been laying out the printer

So the idea was to have both the gantry and the bed fold up but after an hour of layout it looks pretty impossible with the stock Voron 0 layout
![Voron Layout](https://cdn.hackclubber.dev/slackcdn/604e7b44379364c485696c60c2bfce4b.png)

There's also a concept sketch that I will put on here sometime

### Feb 14 & 15 2025

Evan: 0h
Aaron: 0h

14th: We spent the day preparing for a robotics competition

15th: Competition Day
