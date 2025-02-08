---
title: "EOS 3D"
description: "A cheap cantilever 3D printer with full self calibration capabilities."
project_name: "EOS 3D"
repository: "https://raw.githubusercontent.com/AdamTuraj/EOS-3D/refs/heads/main/JOURNAL.md"
---
<center><h1>EOS 3D</h1></center>

**This document tracks progress for the YSWS portion of this project. It also serves as a journal documenting the development process.**

## Preface

Before starting this project, I must outline the key requirements to ensure clear project direction and successful execution. I initially came up with the following requirements:

- $300 (USD) budget
- Klipper compatibility
- No calibration printing is required
- 180x180mm build space
- Cantilever structure
- CFD-optimized part cooling
- Safety considerations:
  - Must not pose a fire hazard
  - Must not cause harm to the user
- [PicoMMU](https://github.com/lhndo/LH-Stinger/tree/main/User_Mods/MMU/Stinger%20Pico%20MMU%20-%20%40LH) compatibility

Although I have extensive experience working with 3D printers, this is my first time designing one. Through this process, I aim to deepen my understanding of 3D printer mechanics, refine my CAD skills, and improve my approach to mechanical design. Additionally, thanks to Hack Club, this project offers the added benefit of a free printer.

The name of this project, **EOS 3D**, is inspired by the Greek goddess of dawn, Eos. Dawn symbolizes new beginnings, reflecting a personal milestone in my projects and an entry point for tinkerers.

## Day 1 (February 1st, 2025)

Hours worked: **8**

Total hours on project: **8**

### BOM Selection

Creating the **Bill of Materials (BOM)** required balancing cost-effectiveness with performance and safety. While selecting parts, I took into account the following:

- A budget hotend from a reputable brand to ensure safety and good flow.
- A reliable direct-drive extruder.
- The **Cartographer probe** for its high-resolution bed meshing capabilities and automatic Z-offset calibration via Carto Survey.
- BTT SKR Mini and a Raspberry PI for its cost-effective control.
- A cheap heated bed with a PEI spring steel sheet.
- A PSU with a large overhead from a reputable brand.

Compiling and refining the BOM took approximately **four hours**.

**[BOM Link](https://docs.google.com/spreadsheets/d/1bcc6GYku32MK7iQRG4SbK_M0EsOTyS6UKOEk-3bwc5s)**

### Toolhead Development

With the BOM completed, I decided to tackle the printer's tool head first, as it serves as an "anchor point" for the build.

I began by modelling the X-axis rods and bearings to establish clearance constraints between the toolhead and the rods.

Next, I imported the CAD models for the Sherpa Mini extruder and the E3D V6 hotend, then started designing a mounting solution. I opted for a clamping mechanism for the hotend, as shown in the image below:

![Hotend clamping mechanism](https://cloud-6ea58jaj9-hack-club-bot.vercel.app/0image.png)

By the end of the day, I refined the mounting system and securely integrated the Sherpa Mini with the mount. Below is the final design on day 1 (ignore the mesh issues on the Sherpa; those were present in the CAD model):

![Day 1 image update](https://cloud-56t3p8blt-hack-club-bot.vercel.app/0image.png)

## Day 2 (February 2nd, 2025)

Hours worked: **2**

Total hours on project: **10**

### Further Toolhead Development

Today, I completed the connection of the toolhead to the linear bearings with inspiration from the Prusa Mini. I began modeling the cooling fan duct but encountered challenges in designing one that is both functional and aesthetically pleasing.

Here is the final model of the day:
![Day 2 image update](https://cloud-lfjnqsa5o-hack-club-bot.vercel.app/0image.png)

## Day 3 (February 3rd, 2025)

Hours worked: **1**

Total hours on project: **11**

### Fan Development

Today, I did minimal work; however, I finished and placed the part cooling fan. Tomorrow, I will begin designing it and running CFD tests.

![Day 3 image update](https://cloud-qwtjk3wd0-hack-club-bot.vercel.app/0image.png)

## Day 4 & 5 (February 5th-6th, 2025)

Hours worked: **4**

Total hours on project: **15**

### First Fan Iteration Completed

After extensive trial and error, I have an initial design for the fan duct. The goal was to implement a dual exhaust setup, which presents more challenges but should enable more even cooling across the print.

Next Steps Before CFD Analysis:

- Raise the outlets so they are positioned above the nozzle.
- Adjust the outlet angles to prevent airflow from hitting the nozzle.
- Increase clearance to the hotend to prevent outlet deformation

With these changes, I plan to start optimizing the design tomorrow before running CFD simulations. Below are images of the fan duct (rear view) and the complete model in its current form.

![Fan duct from the rear](https://cloud-atf9xpxe3-hack-club-bot.vercel.app/0image.png)

![Day 4 & 5 image update](https://cloud-cyy5r3rz6-hack-club-bot.vercel.app/0image.png)

## Day 6 (February 7th, 2025)

Hours worked: **5**
Total hours on project: **20**

Here’s a more polished and engaging version of your text:

---

With the latest changes in place, it was finally time to put the design through CFD analysis. Having never used CFD software before, I knew this would be a challenging process.

I initially tried Autodesk CFD and ANSYS Workbench, but getting them to work felt overwhelming. Eventually, I discovered SimScale, which turned out to super user-friendly. I followed [this YouTube tutorial](https://www.youtube.com/watch?v=1pMJQetyA4A) to set everything up.

After a long computation wait, I finally got to see the airflow results—and they were really bad. Not entirely surprising for an initial design, but definitely something to improve. The results are shown below:

![CFD Results](https://cloud-k9c5y4oho-hack-club-bot.vercel.app/0image.png)

Tomorrow, I’ll begin optimizing the design and rerun the CFD analysis to see how much improvement can be made.

![Day 6 image update](https://cloud-9hjadb36g-hack-club-bot.vercel.app/0image.png)
