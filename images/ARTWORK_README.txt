SHIP ARTWORK DROP-IN GUIDE

Use transparent PNG files. File names are lowercase kebab-case.

HULLS (base ship art):
 images/hulls/sloop.png
 images/hulls/clipper.png
 images/hulls/schooner.png
 images/hulls/brigantine.png
 images/hulls/brig.png
 images/hulls/corvette.png
 images/hulls/frigate.png
 images/hulls/galley.png

For backward compatibility the Generator also tries images/ships/<type>.png if a hull file is missing.

MASTS (quality art):
 images/masts/jack-sparrow.png
 images/masts/poor.png
 images/masts/normal.png
 images/masts/good.png
 images/masts/very-good.png
 images/masts/extremely-good.png
 images/masts/mastercraft.png

RUDDERS:
 images/rudders/bad.png
 images/rudders/poor.png
 images/rudders/normal.png
 images/rudders/good.png
 images/rudders/very-good.png
 images/rudders/extremely-good.png
 images/rudders/mastercraft.png

The hull is the base layer. Masts are placed into per-ship percentage anchors. Rudder is placed at a per-ship stern anchor.
All art should use transparent backgrounds. Keeping a common canvas/deck/stern reference makes alignment easiest.
Edit SHIP_ART_LAYOUT in generator.html and builder.html to fine-tune anchor positions per ship type.
