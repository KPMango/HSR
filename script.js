//hp
function calculateHP() {
  var enhancementCount = document.getElementById("enhancementCountHP").value;
  const coefficient = 42; // 계수를 저장하는 변수 (원하는 값으로 변경 가능)
  var result = enhancementCount * coefficient;
  document.getElementById("hp").value = result;
}

document.getElementById("enhancementCountHP").addEventListener("change", calculateHP);
//hp%
function calculateHPP() {
  var enhancementCount = document.getElementById("enhancementCountHPP").value;
  const coefficient = 4.32; // 계수를 저장하는 변수 (원하는 값으로 변경 가능)
  var result = enhancementCount * coefficient;
  document.getElementById("hpPercent").value = result;
}

document.getElementById("enhancementCountHPP").addEventListener("change", calculateHPP);
//attack
function calculateAT() {
  var enhancementCount = document.getElementById("enhancementCountAT").value;
  const coefficient = 21; // 계수를 저장하는 변수 (원하는 값으로 변경 가능)
  var result = enhancementCount * coefficient;
  document.getElementById("attack").value = result;
}

document.getElementById("enhancementCountAT").addEventListener("change", calculateAT);

//attack%
function calculateATP() {
  var enhancementCount = document.getElementById("enhancementCountATP").value;
  const coefficient = 4.32; // 계수를 저장하는 변수 (원하는 값으로 변경 가능)
  var result = enhancementCount * coefficient;
  document.getElementById("attackPercent").value = result;
}

document.getElementById("enhancementCountATP").addEventListener("change", calculateATP);

//def
function calculateDF() {
  var enhancementCount = document.getElementById("enhancementCountDF").value;
  const coefficient = 21; // 계수를 저장하는 변수 (원하는 값으로 변경 가능)
  var result = enhancementCount * coefficient;
  document.getElementById("defense").value = result;
}

document.getElementById("enhancementCountDF").addEventListener("change", calculateDF);

//def%
function calculateDFP() {
  var enhancementCount = document.getElementById("enhancementCountDFP").value;
  const coefficient = 5.4; // 계수를 저장하는 변수 (원하는 값으로 변경 가능)
  var result = enhancementCount * coefficient;
  document.getElementById("defensePercent").value = result;
}

document.getElementById("enhancementCountDF").addEventListener("change", calculateDF);

//speed
function calculateSP() {
  var enhancementCount = document.getElementById("enhancementCountSP").value;
  const coefficient = 2.6; // 계수를 저장하는 변수 (원하는 값으로 변경 가능)
  var result = enhancementCount * coefficient;
  document.getElementById("speed").value = result;
}

document.getElementById("enhancementCountSP").addEventListener("change", calculateSP);


//치확
function calculateCriticalChance() {
  var enhancementCount = document.getElementById("enhancementCountCC").value;
  const coefficient = 3.4; // 계수를 저장하는 변수 (원하는 값으로 변경 가능)
  var result = enhancementCount * coefficient;
  document.getElementById("criticalChance").value = result;
}
document.getElementById("enhancementCountCC").addEventListener("change", calculateCriticalChance);

//치피
function calculateCriticalDamage() {
  var enhancementCount = document.getElementById("enhancementCountCD").value;
  const coefficient = 6.48; // 계수를 저장하는 변수 (원하는 값으로 변경 가능)
  var result = enhancementCount * coefficient;
  document.getElementById("criticalDamage").value = result;
}

document.getElementById("enhancementCountCD").addEventListener("change", calculateCriticalDamage);

//격특
function calculateSE() {
  var enhancementCount = document.getElementById("enhancementCountSE").value;
  const coefficient = 6.48; // 계수를 저장하는 변수 (원하는 값으로 변경 가능)
  var result = enhancementCount * coefficient;
  document.getElementById("specialEffect").value = result;
}

document.getElementById("enhancementCountSE").addEventListener("change", calculateSE);
//치보(부옵없음)
/*
function calculateCriticalDamage() {
  var enhancementCount = document.getElementById("enhancementCountCD").value;
  const coefficient = 6.48; // 계수를 저장하는 변수 (원하는 값으로 변경 가능)
  var result = enhancementCount * coefficient;
  document.getElementById("criticalDamage").value = result;
}

document.getElementById("enhancementCountCD").addEventListener("change", calculateCriticalDamage);
*/

//원충(부옵없음)
/*
function calculateCriticalDamage() {
  var enhancementCount = document.getElementById("enhancementCountCD").value;
  const coefficient = 6.48; // 계수를 저장하는 변수 (원하는 값으로 변경 가능)
  var result = enhancementCount * coefficient;
  document.getElementById("criticalDamage").value = result;
}

document.getElementById("enhancementCountCD").addEventListener("change", calculateCriticalDamage);
*/

//효명
function calculateHE() {
  var enhancementCount = document.getElementById("enhancementCountHE").value;
  const coefficient = 4.32; // 계수를 저장하는 변수 (원하는 값으로 변경 가능)
  var result = enhancementCount * coefficient;
  document.getElementById("hitEffect").value = result;
}

document.getElementById("enhancementCountHE").addEventListener("change", calculateHE);

//효저
function calculateRE() {
  var enhancementCount = document.getElementById("enhancementCountRE").value;
  const coefficient = 4.32; // 계수를 저장하는 변수 (원하는 값으로 변경 가능)
  var result = enhancementCount * coefficient;
  document.getElementById("effectResistance").value = result;
}

document.getElementById("enhancementCountRE").addEventListener("change", calculateRE);

//속피 (부옵없음)
/*
function calculateED() {
  var enhancementCount = document.getElementById("enhancementCountED").value;
  const coefficient = 6.48; // 계수를 저장하는 변수 (원하는 값으로 변경 가능)
  var result = enhancementCount * coefficient;
  document.getElementById("criticalDamage").value = result;
}

document.getElementById("enhancementCountCD").addEventListener("change", calculateCriticalDamage);
*/

/*
const coefficient = {
    hp: 42,
    hpPercent: 4.32,
    attack: 21,
    attackPercent: 4.32,
    defense: 21,
    defensePercent: 5.4,
    speed: 2.6,
    criticalChance: 3.24,
    criticalDamage: 6.48,
    specialEffect: 6.48,
    healingBonus: 0.1,
    energyRecovery: 0.05,
    hitEffect: 2.6,
    effectResistance: 4.3,
    elementDamage: 1.2
  };
  
  function calculateTotal() {
    const hpInput = document.getElementById('hp').value;
    const hpPercentInput = document.getElementById('hpPercent').value;
    const attackInput = document.getElementById('attack').value;
    const attackPercentInput = document.getElementById('attackPercent').value;
    const defenseInput = document.getElementById('defense').value;
    const defensePercentInput = document.getElementById('defensePercent').value;
    const speedInput = document.getElementById('speed').value;
    const criticalChanceInput = document.getElementById('criticalChance').value;
    const criticalDamageInput = document.getElementById('criticalDamage').value;
    const specialEffectInput = document.getElementById('specialEffect').value;
    const healingBonusInput = document.getElementById('healingBonus').value;
    const energyRecoveryInput = document.getElementById('energyRecovery').value;
    const hitEffectInput = document.getElementById('hitEffect').value;
    const effectResistanceInput = document.getElementById('effectResistance').value;
    const elementDamageInput = document.getElementById('elementDamage').value;
  
    const hp = hpInput * coefficient.hp;
    const hpPercent = hpPercentInput * coefficient.hpPercent;
    const attack = attackInput * coefficient.attack;
    const attackPercent = attackPercentInput * coefficient.attackPercent;
    const defense = defenseInput * coefficient.defense;
    const defensePercent = defensePercentInput * coefficient.defensePercent;
    const speed = speedInput * coefficient.speed;
    const criticalChance = criticalChanceInput * coefficient.criticalChance;
    const criticalDamage = criticalDamageInput * coefficient.criticalDamage;
    const specialEffect = specialEffectInput * coefficient.specialEffect;
    const healingBonus = healingBonusInput * coefficient.healingBonus;
    const energyRecovery = energyRecoveryInput * coefficient.energyRecovery;
    const hitEffect = hitEffectInput * coefficient.hitEffect;
    const effectResistance = effectResistanceInput * coefficient.effectResistance;
    const elementDamage = elementDamageInput * coefficient.elementDamage;
  
    const total = hp + hpPercent + attack + attackPercent + defense + defensePercent +
      speed + criticalChance + criticalDamage + specialEffect + healingBonus +
      energyRecovery + hitEffect + effectResistance + elementDamage;
  
    document.getElementById('result').textContent = total;
  }
  */