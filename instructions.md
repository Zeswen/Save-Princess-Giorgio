#Object: canvas {
  Purpose: gameboard + store/common zones,
}


#Object: player {
  Purpose: defeat monster waves to defend princess,
  Class: Warrior (tloz altp sfx), Archer (tlozaltp arrow sound), Mage (terraria magic missile sfx),
  Stats: xp, level, coins, health, attack, dextery, speed, skill,
  Skill: Roar (fear the enemies for 2 seconds), Bow mastery (gets your dextery to the maximum for 3 seconds), Blizzard (Freeze the monsters around you for 2 seconds),
}

#Object: princessGiorgio {
  Purpose: stand still doing nothing, shouting italian things,
}

#Object: enemy (array in canvas) {
  Purpose: hit princess unless your player gets in his radius,
  Classes: warrior zombie, archer zombie, boss,
  Drop: coins, xp,
}


##Zones {
  ###Game Area: where the game takes place {
    Princess: center,
    Go to shop: canvas height,
    Enemies: spawning from canvas borders,
  }

  ###Store: where the player upgrades {
    General Store (Juan): potions and consumables,
    Weapon Store (Diego): upgrades to your weapons,
    Armor Store (Teo): upgrade your armor,
    Powerups (Gabi): gets you some stat boosts,
  }

  ###Dark Room: after defeating the wave 5 {
    front-end god (Master Vicario): Gives you a super upgrade to your weapon (x2 strength),
    back-end god (Jesus): Gives you a super upgrade to your weapon (x2 hp),
  }
}

#Game {
Purpose: Defeat the waves for 30 seconds each that appear every (counter % (decreases every wave)) to defend the beautiful princess giorgio
}


#Timer {
  If already var wave1 is true after completing wave1 it'll pass to the next if statement,
  after 30s of wave stopEnemyfunction will stop generating em
}