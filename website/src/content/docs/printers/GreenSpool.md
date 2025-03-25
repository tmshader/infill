---
title: "GreenSpool"
description: "A green 3D printer that can use plastic as filament"
project_name: "GreenSpool"
repository: "https://raw.githubusercontent.com/dave9123/GreenSpool/refs/heads/main/JOURNAL.md"
---
Made by: [@dave9123](https://dave9123.pages.dev/)

Repository link: [https://github.com/dave9123/GreenSpool](https://github.com/dave9123/GreenSpool)

Time spent so far: 10 hours and 30 minutes

## BOM

[Google Sheets](https://docs.google.com/spreadsheets/d/1aChr8Js_A3QqnoBzMwuVZRyZTCKWHDg3IrmY291spOg/edit?usp=sharing)
## Important Notes

- PET should not be reused for food applications after printing, as small imperfections may harbor bacteria.
- For industrial re-use, PET undergoes chemical recycling or re-extrusion at high temperatures that fully sanitize and reshape it.
## Goals

<li>A plastic hopper and melter to turn plastic waste usable.</li>
<li>Automatic conveyor system for continous printing and part ejection.</li>
<li>Able to print rapidly while maintaining print quality.</li>
<li>An interface to control the queue, settings—heated print bed, extrusion heat, fan speed—, pause printing, changing filaments, and etc.</li>
<li>Supports recording timelapse to view the printing process.</li>
<li>Affordable.</li>

## Day 1 (February 9th 2025)

Today I watched a few YouTube videos on how I can possibly make a 3D printer. Then, I realized about the problem that some of us might be facing—plastic waste (except Singaporeans most likely).

I would like to support multiple plastic types but I started to think, how would the user know what type of plastic are they using?

Data below is taken from [Plastic Material Melt & Mould Temperatures by PlastikCity](https://www.plastikcity.co.uk/useful-stuff/material-melt-mould-temperatures)

|            Material             | Melt Temperature Range (°C) | Mould Temperature Range (°C) | Melt Temperature Range (°F) | Mould Temperature Range (°F) |
| :-----------------------------: | :-------------------------: | :--------------------------: | :-------------------------: | :--------------------------: |
|               ABS               |           190-270           |            40-80             |           374-518           |           104-176            |
|          ABS/PC ALLOY           |           245-265           |            40-80             |           473-509           |           104-176            |
|             ACETAL              |           180-210           |            50-120            |           356-410           |           122-248            |
|             ACRYLIC             |           220-250           |            50-80             |           428-482           |           122-176            |
|               CAB               |           170-240           |            40-50             |           338-464           |           104-122            |
|              HDPE               |           210-270           |            20-60             |           410-518           |            68-140            |
|              LDPE               |           180-240           |            20-60             |           356-464           |            68-140            |
|             NYLON 6             |           230-290           |            40-90             |           446-554           |           104-194            |
|        NYLON 6 (30% GF)         |           250-290           |            50-90             |           482-554           |           122-194            |
|            NYLON 6/6            |           270-300           |            40-90             |           518-572           |           104-194            |
|       NYLON 6/6 (33% GF)        |           280-300           |            40-90             |           536-572           |           104-194            |
|            NYLON 11             |           220-250           |            40-110            |           428-482           |           104-230            |
|            NYLON 12             |           190-200           |            40-110            |           374-392           |           104-230            |
|              PEEK               |           350-390           |           120-160            |           662-734           |           248-320            |
|          POLYCARBONATE          |           280-320           |            85-120            |           536-608           |           185-248            |
|          POLYESTER PBT          |           240-275           |            60-90             |           464-527           |           140-194            |
|     PET (SEMI CRYSTALLINE)      |           260-280           |            20-30             |           500-536           |            68-86             |
|         PET (AMORPHOUS)         |           260-280           |            20-30             |           500-536           |            68-86             |
|    POLYPROPYLENE (COPOLYMER)    |           200-280           |            30-80             |           392-536           |            86-176            |
|   POLYPROPYLENE (HOMOPOLYMER)   |           200-280           |            30-80             |           392-536           |            86-176            |
| POLYPROPYLENE (30% TALC FILLED) |           240-290           |            30-50             |           464-554           |            86-122            |
|     POLYPROPYLENE (30% GF)      |           250-290           |            40-80             |           482-554           |           104-176            |
|           POLYSTYRENE           |           170-280           |            30-60             |           338-536           |            86-140            |
|      POLYSTYRENE (30% GF)       |           250-290           |            40-80             |           482-554           |           104-176            |
|              PVC P              |           170-190           |            20-40             |           338-374           |            68-104            |
|              PVC U              |           160-210           |            20-60             |           320-410           |            68-140            |
|               SAN               |           200-260           |            50-85             |           392-500           |           122-185            |
|          SAN (30% GF)           |           250-270           |            50-70             |           482-518           |           122-158            |
|               TPE               |           260-320           |            40-70             |           500-608           |           104-158            |

Time spent researching: 2 hours

## Day 2 (February 11th 2025)

I found out that plastics can be harmful when it's heated up. Source:
- https://www.quora.com/I-live-beside-a-PET-plastic-plant-that-was-just-opened-The-smell-in-my-garden-and-home-is-like-an-acrylic-factory-Could-this-be-harmful-to-the-kids-and-myself
- https://www.reddit.com/r/unpopularopinion/comments/vfgs8l/heating_food_or_drinks_in_plastic_and_then/


> While PolyLactic Acid (PLA) and Polyethylene (+Glycol) has been classified as Generally Regarded As Safe (GRAS). There's a lot of uncertainty around the process of additive manufacturing.
>
> Some testing shows that the layer lines are big enough that bacteria don't hide inside as much as expected. Additionally, it's not nearly as porous as initally expected. Some soap and water with scrubbing is enough to clean most of it out and a quick wash with a bleach solution can bring it up to almost medical standards.
>
> This does not take into account material impurities. New nozzles can come with a coating (often PTFE) to prevent blobs from sticking. The abrasives in the filament can wear this coating down and while it is safe for food to contact like on a frying pan, the worn down products are not.. It also wears the nozzle and metal particles can end up in the print.
>
> TL;DR: Use a sealer.

taken from: https://www.reddit.com/r/3Dprinting/comments/13mox1x/comment/jkwd5vu/

> It's stamped with recycling number 1 and is **considered an FDA-approved food-grade material even after it's recycled**, however; leaching of estrogenic compounds – hormone disrupting chemicals – can occur when it's reused.

taken from: https://www.acmeplastics.com/content/the-ultimate-guide-to-food-grade-and-food-safe-plastics/


This might mean that I will probably need to have an exhaust system along with an air filter (HEPA?) to prevent the user from inhaling the toxic fumes emitted during the printing and molding. Thus having enclosure would be useful for this project's goal—which is to support recycling plastic bottles into a filament that can be used to print with. The casing is not really necessary as some plastic types that are used in plastic bottles are *quite* safe.

Options for the enclosure material:
- Acrylic panels (for visibility)
- Polycarbonate sheets (for heat resistance)
- Metal sheets—aluminum (for durability)

By adding those enclosure, there must be seals in place to prevent the fume from leaking—else what's the point of the enclosure 😭.

As for the exhaust system, there are some options that I can use or even stack over:
- Coconut fiber (recycling coconut fiber c:)
- HEPA filters (quite expensive ngl)
- Activated carbon fiber

Then having them routed to a filter box or outside—through a window?!—would be a great idea.

> Polylactic acid, also known as PLA, is **a thermoplastic monomer derived from renewable, organic sources such as corn starch or sugar cane**. Using biomass resources makes PLA production different from most plastics, which are produced using fossil fuels through the distillation and polymerization of petroleum.

taken from: https://www.twi-global.com/technical-knowledge/faqs/what-is-pla

Making PLA from organic sources? Possibly.

Time spent researching: 2 hours

## Day 3 (February 15th 2025)

Question:
- Should I actually use PET? It emits fumes that are just harmful.

Time spent researching: 30 minutes

## Day 4 (March 18th 2025)

Whoa, what a month since I've procrastinated! I've had a couple of exams and today is going to be the last day of PAT (end of year exam) but I'll have some more as I'm 9th grade :heavysob:

Back to designing, for the movement, I'm thinking of using linear rails as they are known for their precision. Aluminum extrusions along with a custom-made cartridge would be great though.

> https://www.tokopedia.com/bangunkaryaac/aluminium-profile-20x20-extrusion-panjang-6000-mm

Time spent researching: 1 hour

## Day 5 (March 24th 2025)

Heated bed, this looks real cheap [Tokopedia](https://www.tokopedia.com/arttechno/hot-bed-mk2b-heat-bed-heatbed-214x214-12v-24v-heated-3d-printer)!! (MK2B though)

Time spent looking for items: 4 hours

## Day 6 (March 25th 2025)

I went shopping through Shopee and Tokopedia, again. They aren't really cheap (ignore the double BTT SKR board as it's currently on new user discount). Went from Tokopedia to Shopee and vice versa.

![[Pasted image 20250325171326.png]]

Not much progress has been done except for parts research
![[Pasted image 20250325221055.png]]

Time spent shopping and researching: 2 hours