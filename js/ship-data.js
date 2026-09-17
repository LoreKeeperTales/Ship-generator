
const SHIP_DATA={
 types:[
  {name:"Sloop",price:5000,slots:5,masts:[1,1],role:"Coastal vessel"},
  {name:"Clipper",price:10000,slots:8,masts:[3,3],role:"Fast trader"},
  {name:"Schooner",price:14000,slots:9,masts:[2,3],role:"Merchant / coastal vessel"},
  {name:"Brigantine",price:18000,slots:11,masts:[2,2],role:"General-purpose sailing vessel"},
  {name:"Brig",price:20000,slots:12,masts:[2,2],role:"Trader / warship"},
  {name:"Corvette",price:22000,slots:13,masts:[2,3],role:"Light warship"},
  {name:"Frigate",price:26000,slots:16,masts:[3,3],role:"Warship"},
  {name:"Galley",price:30000,slots:18,masts:[1,2],role:"Oared war vessel"}
 ],
 hulls:[
  {name:"Small wood",cost:100,slots:2,ac:10,hp:25,speed:5},
  {name:"Medium wood",cost:450,slots:5,ac:10,hp:40,speed:4},
  {name:"Big wood",cost:900,slots:8,ac:10,hp:50,speed:3},
  {name:"Small reinforced wood",cost:5000,slots:2,ac:13,hp:50,speed:5},
  {name:"Medium reinforced wood",cost:15000,slots:5,ac:13,hp:100,speed:4},
  {name:"Big reinforced wood",cost:20000,slots:8,ac:13,hp:150,speed:3},
  {name:"Small steel-reinforced wood",cost:24000,slots:4,ac:15,hp:200,speed:5},
  {name:"Medium steel-reinforced wood",cost:28000,slots:7,ac:15,hp:225,speed:4},
  {name:"Big steel-reinforced wood",cost:35000,slots:9,ac:15,hp:250,speed:3},
  {name:"Spacious",cost:30000,slots:14,ac:10,hp:175,speed:3}
 ],
 hullTraits:[
  {name:"Standard",cost:0,description:"No hull specialization."},
  {name:"Lean",cost:1500,description:"Speed +3, AC -4, HP -3. Construction-only."},
  {name:"Sturdy",cost:1500,description:"HP +5, AC +3, Speed -0.5. Construction-only."},
  {name:"Long",cost:1500,description:"Space +3. Construction-only."}
 ],
 extras:[
  {name:"None",cost:0,space:0,description:"No additional hull extra."},
  {name:"Oars",cost:2000,space:2,description:"Speed +3; easier manoeuvring. Uses 2 space."},
  {name:"Mastercraft",cost:5000,space:1,description:"Net space -1; AC +1, Speed +1, HP +50."}
 ],
 masts:[
  {name:"Jack Sparrow",cost:0,hp:5,ac:5,speed:-1,space:0},
  {name:"Poor",cost:20,hp:5,ac:10,speed:0,space:1},
  {name:"Normal",cost:55,hp:10,ac:10,speed:1,space:1},
  {name:"Good",cost:85,hp:15,ac:13,speed:2,space:2},
  {name:"Very Good",cost:140,hp:20,ac:13,speed:3,space:2},
  {name:"Extremely Good",cost:300,hp:25,ac:15,speed:4,space:3},
  {name:"Mastercraft",cost:1000,hp:50,ac:15,speed:7,space:3}
 ],
 rudders:[
  {name:"Bad",cost:0,hp:5,ac:5,handling:-1,space:1},
  {name:"Poor",cost:20,hp:5,ac:10,handling:0,space:1},
  {name:"Normal",cost:55,hp:10,ac:10,handling:1,space:2},
  {name:"Good",cost:85,hp:15,ac:13,handling:2,space:2},
  {name:"Very Good",cost:140,hp:20,ac:13,handling:3,space:3},
  {name:"Extremely Good",cost:300,hp:25,ac:15,handling:4,space:3},
  {name:"Mastercraft",cost:1000,hp:50,ac:15,handling:6,space:4}
 ]
};
