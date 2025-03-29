---
title: "OrbeXY"
description: "A small CoreXY 3D printer with a 10x10x10 build area"
project_name: "OrbeXY"
repository: "https://raw.githubusercontent.com/esemv07/OrbeXY-3D-Printer/refs/heads/main/JOURNAL.md"
---
Made by: @esemv

Repository link: https://github.com/esemv07/OrbeXY-3D-Printer

Total hours so far: 40 hours

- [x] I have a 3D printer or will be getting one before March 21st

## Day 1: March 8th 2025 
`Reseach` `PCB` `CAD`
- I reseached materials and what would be compatible with each other while staying in budget and my size constraints. I decided on an Extuder (Obbiter V2.0), and a Motherboard (BigTreeTech SKR Mini E3 V3.0). 

- I found a potential option for a printbed. It is quite difficult to find one that is in the correct size (100x100mm) as most come in 120x120 for the smallest size. I have decided that for the PEI Plate, I will buy a bigger size and cut it to the correct dimensions myself.

- I then designed a quick and simple PCB for the small Optical Endstop Sensors that I can use to keep the printhead in build area for all axes.

`Research: +3 hours` `PCB: +1 hour`

***+4 hours***

- I also researched different methods of multicolour printing and what would take up less space. Started designing a PCB for a Rotary Switcher Multi Material System, but then realised it would be to big for my printer size. I settled on using an MMU but I think I will design that last so I get the core mechanics good first.

<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/17dddf8e195e510be711aa119abce13b8c4cffe4_screenshot_2025-03-09_at_6.58.24___am.png" width="350" title="CAD Mockup">

- Started a rough CAD model in Fusion of the frame to visualise the dimensions. I may change the 2020 Aluminium Extrusions to 1010.

`Research: +1 hour` `CAD: +2 hours`

***+3 hours***

### Time Spent on This Day: 7 hours 
`Research: 4 hours` `PCB: 1 hour` `CAD: 2 hours`

<br><br>
## Day 2: March 9th 2025
`Research` `CAD`

<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/99b705cbeaa3b43d16e4490dd5908a8b150a32d6_cad-09_03_2025.png" width="350" title="CAD Frame Reshape">

- I reshaped the frame so that there was more space on the inside and it will be less confusing for physical connection when I build it. It is now 200mm<sup>3</sup>, using 8 x _2020 160mm Aluminium Extrusions_ and 4 x _2020 200mm Aluminium Extrusions_.

- I then researched power supplies - how they work, how to know what voltage, current, and wattage to use. I also researched different methods for the Z-Axis on a CoreXY printer. I figured out that due to the very small scale of my printer I won't need to support all 4 corners of the build plate.

- I also reasearched hotends and how to connect them to my extruder which is direct drive. I am going to design a 3D printable mount so I can connect my direct drive extruder (Orbiter V2.0) with my hotend (Short E3D V6 Hotend with PTFE).

`Research: +3 hours` `CAD: +30 mins`

***+3 hours 30 mins***

### Time Spent on This Day: 3 hours 30 mins

`Research: 3 hours` `CAD: 30 mins`

<br><br>
## Day 3: March 10th 2025
`Research` `CAD`

- I researched toolhead designs and what fans I could use for mine and how I could mount the extruder to the hotend.

`Research: +1 hour`

***+1 hour***

<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/13e36eb811a0c3c0056467aa27a2fe0c9376ed16_screenshot_2025-03-10_at_6.23.23___pm.png" width="350" title="CAD Toolhead">

- I designed the toolhead with different parts that would mount together using screws and heatset inserts.

- There are 3 different parts: the part that mounts to the front of the hotend, the part that connects the axial fan to that part, and the part that mounts to the back of the hotend connecting the other fan and the extruder.

<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/79dd78bd85854feea0189e9b24e4537d54ee480c_screenshot_2025-03-10_at_6.23.59___pm.png" width="350" title="CAD Toolhead in Assembly">

- Here is what it looks like in the full assembly so far.

`CAD: +3 hours`

***+3 hours***

<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/a5a222bda7bdba1430c38d7a3bc90eaf84027b99_cad-10_03_2025-3.png" width="350" title="CAD Toolhead Angled">

- I also changed the angle of the side fan to blow the air more towards the nozzle and to optimise space on the toolhead.

`CAD: +1 hour`

***+1 hour***

### Time Spent on This Day: 5 hours

`Research: 1 hour` `CAD: 4 hours`

<br><br>
## Day 4: March 11th 2025

`Research` `CAD`

- I did more research on toolheads and realised that I need to add a channel for the air to flow towards the nozzle. I researched different methods of this for my design.

<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/7733821186895e280088b18ef19c31b23e9dbf51_cad-11_03_2025-1.png" height="400" title="CAD Toolhead Airflow 1"> <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/cf66ce6f001f85248d64ca577ed78a27648045b1_cad-11_03_2025-2.png" height="400" title="CAD Toolhead Airflow 2">

- I then applied this to my CAD model trying not to impede on the parts that I already had. This proved much harder than I expected and I had many iterations of it before I finally achieved a result that I wanted.

`Research: +30 mins` `CAD: +2 hours`

***+2 hours 30 mins***

### Time Spent on This Day: 2 hours 30 mins

`Research: 30 mins` `CAD: 2 hours`

<br><br>
## Day 5: March 12th 2025

`Research` `CAD`

- I researched the different axes motion systems and what motors and linear rails to use. I think I will use MGN7 rails and MGN7-H for the carriage and I will use NEMA 14 Stepper Motors. I still don't completely understand the belt system but I will model the rails and carriage connections first.

<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/baa4b052f033cc7cbe6962d33defa073071a24bb_cad-12_03_2025-2.png" width="350" title="CAD Full Assembly">

- I then added the linear rails to my full assembly and realised that it would be better to go with MGN9 rails and MGN9-H carriages so I added them instead. This meant I had to change the connection on the toolhead to fit on the MGN9-H carriage.

<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/51109f9640d0fe87d811ad7456b9a344eef2bf0c_cad-12_03_2025-3.png" width="350" title="X-to-Y-Axis-Connector">

- I also had to model some connectors to connect the X-Axis linear rail to the Y-Axis rails so that they could move together. Here is what they look like.

<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/43610adf80ba3613922e961b7cd26198cf9fb8a8_12_03_2025.png" width="350" title="CAD Full Assembly">

- I then put all the new and modified components together in the full assembly. Here's what it looks like to far!

`Research: +3 hours` `CAD: +3 hours`

***+6 hours***

### Time Spent on This Day: 6 hours

`Research: 3 hours` `CAD: 3 hours`

<br><br>
## Day 6: March 13th 2025

`Research` `CAD`

- I did a lot of research on the X-Axis and Y-Axis motion systems and how to implement them, it was quite confusing how both the belts connect to the toolhead as I originally thought that one would connect to the toolhead, and one to the ends of the linear rail. I understand it now though after quite a bit of research.

`Research: +1 hour`

<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/531ffcb0e76c4793cbd5589072847bdb998dd48d_cad-13_03_2025.png" width="350" title="CAD Full Assembly">

- I got started on the CAD for these motion systems, so far I added the NEMA 14 stepper motors and GT2 20 Teeth Pulleys. Here is what it looks like in the full assembly so far.

`CAD: +1 hour`

***+2 hours***

### Time Spent on This Day: 2 hours

`Research: 1 hour` `CAD: 1 hour`

<br><br>
## Day 7: March 24th 2025

`Research` `CAD`

- I researched how to add the pulleys and belts to my system and espeecially how to connect them on the toolhead end.

- I realised that it might be better to have the X-Axis linear rail with the carraige facing forwards rather than upwards. This would mean that I had to redesign my X-to-Y-Connectors for the linear rails.

<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/11efa2a92b8e49b748136a5ff9ff91bc23786be4_cad-24_03_2025-2.png" width="350" title="X-to-Y-Axis-Connector">

- It was difficult to design these without heavily limiting the range of motion of the carraige in the X-Axis so I had _many_ iterations. Here is what the final design looks like. It screws onto the Y-Axis linear rail and the X-Axis rail slots into it and is secured with a srew.

`Research: +30 mins` `CAD: +2 hours`

***+2 hours 30 mins***

<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/e5ef28c2c8ca7f5ad5db72103febbf9c92eef490_cad-24_03_2025-3.png" width="350" title="Toolhead Connector">

- I then also had to edit the toolhead so that it would work with this new sideways rail system. Heres what it turned out like.

<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/52810cce442d4b0d345ad1289d15d4bf2d8f11a7_cad-24_03_2025-1.png" width="350" title="CAD Full Assembly">

- This is what it would look like in the full assembly. I haven't adjusted any dimensions of anything else so it doesn't fit together properly yet.

`CAD: +1 hour 30 mins`

***+1 hour 30 mins***

### Time Spent on This Day: 4 hours

`Research: 30 mins` `CAD: 3 hours 30 mins`

<br><br>
## Day 8: March 28th 2025

`CAD`

- I realised that for the X-to-Y-Connector I need a different slot for the left side and the right side so that the linear rail can go all the way through.

<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/68d19eb82efc58f8027851061e54538a097a5ad7_cad-28_03_2025.png" width="350" title="CAD Full Assembly">

- I then had to adjust the dimensions of the aluminium extrusions in order to fit the new connectors and adjust the positions of all the other components for the full assembly. Here is what it looks like.

`CAD: +3 hours`

***+3 hours***

### Time Spent on This Day: 3 hours

`CAD: 3 hours`

<br><br>
## Day 9: March 29th 2025

`Research` `CAD`

<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/9011823ff78c4887518b9eb9f848fa9358ec89ae_cad-29_03_2025-1.png" height="350" title="Pulley Mounts"> <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/b1555ecad8dd5a2a9cebb3c619ec1adf44cab884_screenshot_2025-03-30_at_8.43.22___am.png" height="350" title="Belt Slots">

- I added mounts at the corresponding heights to the X-to-Y-Connectors for the pulleys to sit for the belts. Here's what it originally looked like. I also added slots on the back of the Toolhead for the belts to feed through and here's what that looked like.

- I didn't like how bulky the X-to-Y-Connectors turned out so I did some research on how other people cut down on the size while still maintaining the function.

`CAD: +1 hour` `Research: +1 hour`

***+2 hours***

<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/bab32b5d4c838096a24495bd749fd8a5e48fa9a8_cad-29_03_2025-2.png" width="350" title="CAD Full Assembly">

- I came up with this design to cut down on the size while still maintaining the same function as the other design. Here's what it looks like in the full assembly.

`CAD: +2 hours`

- I still need to add a mount the the _NEMA 14 Stepper Motors_ so that they are in the correct spots as well as adding pulleys on the front side of the printer for the belt. I think I will come back to this later.

***+2 hours***

### Time Spent on This Day: 4 hours

`Research: 1 hour` `CAD: 3 hours`

<br><br>
## Day 10: March 30th 2025

`Research` `CAD`

- I did some research on all the parts of the printbed. I had already chosen the heatbed and to have a magnetic PEI Plate. I decided on putting a _3mm Silicon Sheet_ under the heatbed as an insulator to separate the heat from the 3D printed base. I am using a _NEMA 17 Stepper Motor with Intergrated Lead Screw_ as well as 2 _8mm Linear Rods_ for support to control the Z-Axis movement of the bed.

<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/8b38c885590d2b2cdd9524b728067e9fea35e7c6_screenshot_2025-03-30_at_8.25.14___am.png" height="350" title="Bed Assembly"> <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/d149d67eeb63d2dec582fb240623126c19d967fb_screenshot_2025-03-30_at_8.17.23___am.png" height="350" title="Bed Assembly"> 

- I designed the printbed around these things and here's what the finished bed assembly looks like by itself and with the motor, lead screw, and rods.

`Research: +1 hour` `CAD: +2 hours`

***+3 hours***

<img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/b4e8aeaadd28e52da6dc9d6e7f20ede3f5c5c6a0_screenshot_2025-03-30_at_8.17.38___am.png" width="350" title="CAD Full Assembly">

- Here is what the full assembly looks like so far. I think all I have left to do is to finish it is the X and Y Axis pulley and belt system and to add the endstops that I made at the start. Although I'll probably think of something else left to do later :pensive:.

### Time Spent on This Day: 3 hours

`Research: 1 hour` `CAD: 2 hours`

<br><br>
