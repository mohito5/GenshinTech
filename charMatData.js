const materialCategories = {
  amountsPerLevel: {
    10: {mora:1 },
    20: { mora: 20000,
      localSpecialty:3,
      sliver:1,

        },
    30: {mora:0},
    40: {bossMaterial:6, mora:300000, },
    50: {mora:0},
    60: {mora:0},
    70: { mora: 2000000, 

          sliver: 1,
          fragment:9,
          chunk:6,
          gemstone:6,
          
          EnemyDropsSt1:18,
          EnemyDropsSt2:30,
          EnemyDropsSt3:36,
          
          localSpecialty: 168,
          bossMaterial: 46,
          experience: 421
      }
    },
  attack: {
    2:  { mora: 12500,
          EnemyDropsSt1: 6,
          teachings: 3
    },
    3:  { mora:30000,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 3,
          teachings: 3,
          guide: 2
    },
    4:  { mora: 55000,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 7,
          teachings: 3,
          guide: 6
    },
    5:  { mora:85000,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 13,
          teachings: 3,
          guide: 12
    },
    6:  { mora:122500,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 22,
          teachings: 3,
          guide: 21
    },
    7:  { mora:242500,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 22,
          EnemyDropsSt3:4,
          teachings: 3,
          guide: 21,
          philosophies: 4,
          weeklyBossDrops:1
    },
    8:  { mora:502500,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 22,
          EnemyDropsSt3:10,
          teachings: 3,
          guide: 21,
          philosophies: 10,
          weeklyBossDrops:2
    },
    9:  { mora:952500,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 22,
          EnemyDropsSt3:19,
          teachings: 3,
          guide: 21,
          philosophies: 22,
          weeklyBossDrops:4
    },
    10: { mora:1652500,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 22,
          EnemyDropsSt3:31,
          teachings: 3,
          guide: 21,
          philosophies: 38,
          weeklyBossDrops:6,
          crown:1
    },
  },
    skill: {
    2:  { mora: 12500,
          EnemyDropsSt1: 6,
          teachings: 3
    },
    3:  { mora:30000,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 3,
          teachings: 3,
          guide: 2
    },
    4:  { mora: 55000,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 7,
          teachings: 3,
          guide: 6
    },
    5:  { mora:85000,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 13,
          teachings: 3,
          guide: 12
    },
    6:  { mora:122500,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 22,
          teachings: 3,
          guide: 21
    },
    7:  { mora:242500,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 22,
          EnemyDropsSt3:4,
          teachings: 3,
          guide: 21,
          philosophies: 4,
          weeklyBossDrops:1
    },
    8:  { mora:502500,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 22,
          EnemyDropsSt3:10,
          teachings: 3,
          guide: 21,
          philosophies: 10,
          weeklyBossDrops:2
    },
    9:  { mora:952500,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 22,
          EnemyDropsSt3:19,
          teachings: 3,
          guide: 21,
          philosophies: 22,
          weeklyBossDrops:4
    },
    10: { mora:1652500,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 22,
          EnemyDropsSt3:31,
          teachings: 3,
          guide: 21,
          philosophies: 38,
          weeklyBossDrops:6,
          crown:1
    },
  },
  burst: {
    2:  { mora: 12500,
          EnemyDropsSt1: 6,
          teachings: 3
    },
    3:  { mora:30000,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 3,
          teachings: 3,
          guide: 2
    },
    4:  { mora: 55000,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 7,
          teachings: 3,
          guide: 6
    },
    5:  { mora:85000,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 13,
          teachings: 3,
          guide: 12
    },
    6:  { mora:122500,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 22,
          teachings: 3,
          guide: 21
    },
    7:  { mora:242500,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 22,
          EnemyDropsSt3:4,
          teachings: 3,
          guide: 21,
          philosophies: 4,
          weeklyBossDrops:1
    },
    8:  { mora:502500,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 22,
          EnemyDropsSt3:10,
          teachings: 3,
          guide: 21,
          philosophies: 10,
          weeklyBossDrops:2
    },
    9:  { mora:952500,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 22,
          EnemyDropsSt3:19,
          teachings: 3,
          guide: 21,
          philosophies: 22,
          weeklyBossDrops:4
    },
    10: { mora:1652500,
          EnemyDropsSt1: 6,
          EnemyDropsSt2: 22,
          EnemyDropsSt3:31,
          teachings: 3,
          guide: 21,
          philosophies: 38,
          weeklyBossDrops:6,
          crown:1
    },
  },
};

const materialsInfo = {
  mora:{
    name: "Мора",
    icon:"assets/mora.png",
  },
  sliver:{
    name: "sliver",
    icon: "assets/unknown.png",
    Electro: { name:"sl",
        icon:"assets/tmp256.png"}
    },
    fragment:{
    name: "frag",
    icon: "assets/unknown.png",
    Electro: { name:"sl",
        icon:"assets/tmp256 (1).png"}
    },
    chunk:{
    name: "ch",
    icon: "assets/unknown.png",
    Electro: { name:"sl",
        icon:"assets/tmp256 (2).png"}
    },
    gemstone:{
    name: "gem",
    icon: "assets/unknown.png",
    Electro: { name:"sl",
        icon:"assets/tmp256 (3).png"}
    },
  
  EnemyDropsSt1:{
    name:"Drops ???",
    icon:"assets/unknown.png",
    Shaft:{
      name:"Broken Drive Shaft",
      icon:"assets/drops/brokenShaft.webp"
    }
  },
  EnemyDropsSt2:{
    name:"Drops ???",
    icon:"assets/unknown.png",
    Shaft:{
      name:"Reinforced Drive Shaft",
      icon:"assets/drops/ReinforcedShaft.webp"
    }
  },
  EnemyDropsSt3:{
    name:"Drops ???",
    icon:"assets/unknown.png",
    Shaft:{
      name:"Precision Drive Shaft",
      icon:"assets/drops/PrecisionShaft.webp"
    }
  },
  
  teachings:{
    name:"???",
    icon:"assets/unknown.png",
    vagrancy:{
      name: "Teachings of Vagrancy",
      icon: "assets/talent/teaching_of_vagrancy.webp"
    },
  },
  guide:{
    name:"Guide to ???",
    icon:"assets/unknown.png",
    vagrancy:{
      name: "Guide to Vagrancy",
      icon: "assets/talent/teaching_of_vagrancy.webp"
    },
  },
  philosophies:{
    name:"Philosophies of ???",
    icon:"assets/unknown.png",
    vagrancy:{
      name: "Philosophies of Vagrancy",
      icon: "assets/talent/teaching_of_vagrancy.webp"
    },
  },
  weeklyBossDrops:{
    name: "Weekly Boss ???",
    icon: "assets/unknown.png",
    AscendedSampleQueen:{
      name:"Ascended Sample: Queen",
      icon: "assets/unknown.png"
    }
  },
  crown: {
    name: "Crown of Insight",
    icon: "assets/unknown.png"
  },
  bossMaterial: {
    name: "Boss",
    icon: "assets/unknown.png",
    nodkray1: {
      name:"Штамповочная форма Кууваяки",
      icon: "assets/SHtampovochnaya-forma-kuuvyaki.webp",
    },
    drugkrumkake: {
      name: "Другкрумкаке",
      icon: "assets/drugkrumkake.png",
    },
    kuuvyaka:{name: "Другкрумкаке",
      icon: "assets/SHtampovochnaya-forma-kuuvyaki.webp"}
  },
  localSpecialty: {
    name: "Local Material ???",
    icon: "assets/unknown.png",
    frostlampFlower: {
      name: "Frostlamp Flower",
      icon: "assets/localSpecial/frostlampFlower.webp",
    },
    local2: {
      name: "Локальный материал 2",
      icon: "icons/local2.png",
    },
  },
  experience: {name:"exp",
    icon:"assets/unknown.png"
  }
};
