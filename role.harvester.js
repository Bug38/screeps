// Harvester module

let depositStruct = FIND_MY_SPAWNS;
let energySource  = FIND_SOURCES_ACTIVE;

module.exports.run = function (creep) {
    if (creep.memory.isHarvesting === true && creep.carry === creep.carryCapacity) {
        creep.memory.isHarvesting = false;
        creep.memory.targetStorage = creep.pos.findClosestByRange(depositStruct);
    }
    else if (creep.carry < creep.carryCapacity) {
        creep.memory.isHarvesting = true;
        creep.memory.targetMine = creep.pos.findClosestByRange(energySource);
    }

    if (creep.memory.isHarvesting) {
        if (creep.transfer(creep.memory.targetStorage, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.memory.targetStorage);
        }
    }
    else {
        if (creep.harvest(creep.memory.targetMine) === ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.memory.targetMine);
        }
    }
};