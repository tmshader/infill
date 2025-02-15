---
title: "Prometheus"
description: "A desktop CoreXY prototyping printer"
project_name: "Prometheus"
repository: "https://raw.githubusercontent.com/quexeky/prometheus/refs/heads/main/LOGBOOK.md"
---
# Logbook

Total Wakatime Hours so far: 0 (source: [wakatime](https://waka.hackclub.com))
Total research Hours so far: 1 (source: logbook)
Total Hours so far: 1

## README
A 3D printer created for Hackclub's [Infill](https://infill.hackclub.com)

## Goals
- Core XY
- Compact footprint (No more than 250x250xX, ideally 200x200xX)
- Fast (ideally 300mm/s max speed with decent print quality)
- Decent print quality - suitable for prototyping but doesn't have to be perfect

Essentially, I want a desktop prototyping printer

## Feb 13
Found the project today. I've found a few resources such as 
instructable's [How to design a 3D printer](https://www.instructables.com/How-to-Design-and-Build-a-3D-Printer/)
which I'm going to take a look through for now.

I've been looking at designs, and I'm very tempted by a coreXY. Specifically though a *really* small footprint / volume - 
something that would fit on a desk

Alrigh time to take some apparently ludicrous notes:
- NEMA23 Stepper Motor
    - Run @ 36VDC
    - 800RPM @ 0.5Nm Torque
- 20mm pulley
- 100x100xX bed size
- Assume 200g toolhead (likely excessive)
- This gives:
    - $125ms^{-2}$ acceleration
    - $0.942ms^{-1}$ max speed
    - $0.31mm$ precision (should be improved)

### 9:10pm
Currently taking a look at the Voron0 design in more detail because it looks like the best possible reference for what I want to make

Yeah so they seem to be using NEMA14 / NEMA17 stepper motors for the entire project. They're pretty precise, but the'yre not the most powerful things I've ever seen. I'm somewhat still considering my NEMA23 motors, even though I know that I shouldn't lmao.

Man some of this stuff is so fascinating lmao - 4.2Nm with 1.8 degrees would be so damn cool

Just added the Datasheets folder with the [NEMA23](/Datasheets/NEMA23.pdf) datasheet. I'm thinking that I'll have to design the printer around whatever my printer choice is, because that is kinda the entire point of the printer. SPEED

#### References
https://all3dp.com/2/voron-0-2-review-3d-printer-specs/
https://vorondesign.com/voron0.2
https://www.omc-stepperonline.com/nema-14-bipolar-1-8deg-40ncm-56-7oz-in-1-5a-4-2v-35x35x52mm-4-wires-14hs20-1504s
https://www.omc-stepperonline.com/s-series-nema-24-bipolar-1-8deg-4-2nm-594-77oz-in-4-2a-60x60x100mm-4-wires-24hs40-4204s



## Resources
Torque to Force calculator: https://calculator.academy/torque-to-force-calculator/

RPM to linear velocity calculator: https://www.omnicalculator.com/everyday-life/rpm

Degrees to mm converter: https://conversion.website.yandexcloud.net/degrees-to-millimeters.html

Force Calculator: https://www.omnicalculator.com/physics/force

NEMA23 Store Page & Datasheet: https://www.makerstore.com.au/product/elec-nema23-635-ht/

NEMA17 / NEMA23 Torque / Speed curves: https://pages.pbclinear.com/rs/909-BFY-775/images/Data-Sheet-Stepper-Motor-Support.pdf
