---
title: "VoltCore"
description: "Battery-powered 3d printer to print without access to any nearby outlets!"
project_name: "Volt-core"
repository: "https://raw.githubusercontent.com/TheRealMopcornPuncher/VoltCore/refs/heads/main/CAPTAINSLOG.md"
---
Made by: @Amaya
Repository link: https://github.com/TheRealMopcornPuncher/VoltCore
Total hours so far: 8 hrs 5 mins
- [x] I have a 3d printer or will be getting one before March 21st
---
< Briefing >
A silly concept accidentally turned reality
Pitch: An extra portable and partially remote solution to printing without an active power source

---


# Day 0 - Preparations and planning
### Feb 4, 2025

I began by generating a timeline for me to operate within, as to avoid me procrastinating and not finishing the project at all.

**Deadline: Feb 11**

- Finalize battery system and power management.
- Generate a rough BOM (electronics, motors, extruder, frame materials, etc.).
- Confirm which parts I can salvage from my spare Sovol SV01 Pro.
- Research and select a control board + firmware (e.g., Klipper or Marlin).

**Deadline: March 31** _(Finalized Design & Parts Ordered)_

- Design a CoreXY frame in CAD, ensuring it satisfies a small size profile (X and Y dimensions are 6-7 inches).
- Simulate motion system (belt routing, pulley positioning, etc.).
- Plan the mounting locations for electronics and battery.
- **Finalize the design and order all necessary parts.**

**Deadline: April 14** _(All Parts Arrived & Assembly Begins)_

- Assemble frame and install motors, belts, and pulleys.
- Wire up control board and power system.
- Perform first motion tests (homing, jogging, etc.).
- Mount and test the extruder and hotend (ensure >220°C capability).
- **All parts should be in by this date to stay on track.**

**Deadline: April 28**

- Flash firmware and configure motion system.
- Tune CoreXY kinematics and stepper settings.
- Ensure power consumption is within acceptable limits.
- Run first test prints and refine print quality.

**Deadline: May 4** _(Final Benchy Print Verified & Ready to Ship)_

- Complete final tuning and ensure prints are high quality.
- Verify folding mechanism and portability.
- Confirm battery efficiency for intended use.
- **Must have a successful Benchy print by this date!**

**Deadline: May 6** _(Ship Everything or Carry it with You)_

- Pack the printer securely for shipping.
- Ensure documentation and necessary tools are included.
- Consider taking it as a carry-on for guaranteed arrival.

Besides this, I've also done some research on suitable parts. Mostly minimal.
Total time elapsed: 2 hours

# Day 1
### Feb 5, 2025

I felt pretty energized with the project today so I decided to start working on pushing my project into the tank with the others. (Started writing and journaling today, previous entry was made up for yesterday.) I intend to jot some stuff down into the BOM and continue fleshing out my solution for power. Mostly stuff from my first deadline/checkpoint.

I started my BOM by snatching and customizing a template for it off the web in google sheets. After creating the BOM, I started looking for the components I'd need to assemble the frame, and I got a recommendation for some of the nicest prices and highest class extrusions I could find from a company called 80/20 LLC.

After getting the link to the extrusion, I was going to start modeling it in fusion 360, when I proceeded to fall down a rabbit hole of logo design. In the end, I installed Inkscape and began learning how to craft a nice looking logo to slap over the rest of this project.

I decided to take a break from learning how to use Inkscape. After hopping into a call with my brother and ranting about the project, he suggested I use a single motor for the Z-axis linked via a belt to support all sides of the bed (Maybe via linear rods/rails?)

Total time elapsed: 1 hr 40 mins

---

# Day 2
### Feb 6, 2025

Today was a little hectic so I'm mostly just pushing myself to keep going for the sake of progress. Maybe I'll get some coffee... besides the point though. 

Attempts to fill out my bill of materials went pretty good today. I got a lot done in terms of meeting my Feb 11th deadline. The help of my brother, who's an experienced engineer, came in handy quite often since he knew more about this than I did, and told me whenever I added something that wouldn't work to the BOM, as well as giving me recommendations on where to look and what I could use.

I also am deciding the keep track of what 3d printed parts I'll need to model and make for this printer to function:
- Bed mounting bracket
- Extruder fan shroud and mounting bracket

Total time elapsed: 2 hrs 25 mins

---

# HIATUS PERIOD: Feb 6th - Feb 12th
### Project resumed.

I'll admit, I gave up. I didn't think I knew enough, I ran out of motivation, and there it just felt like this whole thing was a waste of time for someone inexperienced like me.

Then, I rejected that philosophy. Of course there was going to be hurdles, there always is. I just needed to get back up and keep working. Nothing I've ever done happened unless I told myself I could be capable, and I'm doing that right now.

---

# Day 3
### Feb 12th, 2025

Running partially behind schedule, I knew I needed to catch up, so I decided to use my time on this day to finish my B.O.M. and move on.

My biggest issue was the cost of the parts. In their current state, I was up to over 300 dollars, and not even completely done with the list. To cut down on cost, I began looking for cheaper alternatives to my existing parts.

I devised a plan regarding the frame: The bed would be 3d printed at a size contained inside of a 100mm by 100mm space and would be covered with masking tape. Frame will be joined with aluminum extrusions and metal brackets, then reinforced with 3d printed corner braces.

I ended up revising literally everything in my BOM and got the price down quite a bit. The next steps would be to figure out what I'm doing for my extruder and hotend, cooling fans, and my z axis.

Total time elapsed: 2 hrs
