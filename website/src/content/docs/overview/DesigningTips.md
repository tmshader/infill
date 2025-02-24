---
title: Design tips
description: A collection of tips from dari about designing your printer
---


Hi there! This page is meant to be a info pool of tips to design your printer


First and foremost: This is a YSWS where you are expected to go out, do your own research, and make your own decisions. There is no guide. There is no preset list.

With infill, we're going to go out and do something *actually real* in the 3D printing community

note: I'm basing this entire YSWS off of my experience with creating Neutrino, and it's more or less what I'm looking for. It's a good reference. The repository is located [here](https://github.com/the-openary/neutrino)


### An overview of what to do:
A 3D printer is made up of a LOT of different parts. [Here's](insert link) a quick primer on what they are.

With infill, you're going to need to design the following parts:
- Toolhead (not extruder though!)
    - Hotend mount
    - Probe setup (if you want a probe)
    - Cooling duct
- The gantry
- Z-axis
    - Bed assembly
- Electronics setup (what parts you want and how to arrange them)
- Frame

Each part will take a good amount of research, compromise, and iteration. Once that's done, you're good to work on other stuff!





### Actually designing
- First and foremost: PLAN!!! every single one of these steps will require research.
    - Try and find a specific set of goals with your 3D printer. What do you need it to do to call it successful? I.e:
        - be enclosed
        - print exotic materials
        - be solar powered
        - under $X price.
    - Write notes. Create mind maps. Look at what I initially did for Neutrino. Image [here](https://theopenary.com/images/neutrino/neutrinomaphr.png). Everything in there was largely done in a single sitting.
    - Sketch out your design! Draw specific mechanisms, the overall design, etc. It doesn't have to be perfect at all, but it should give you the right idea of what you want to do
- Look at existing 3D printer designs and see what they do and how they come together. SO many of them are open source so it's really useful. It's *alot* and alot of research.
    - Once you have an idea w/ sketches, approx measurements, etc, then you can start your CAD model! It'll take a lot of trial and erorr. Neutrino had over 160+ savefiles
- You can reuse 3D models for off-the-shelf components from other projects to avoid redesigning them. (screws, linear rails,  etc).

### Finding 3D models of parts
Most of the time, you can get 3D models for parts like linear rails, extrusions, etc from other [3D printer models]()