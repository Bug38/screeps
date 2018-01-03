// Upgrader module

let energySource = FIND_SOURCES_ACTIVE;
let upradeStruct = "";

module.exports.run = function (creep) {
    if (creep.memory.isUpgrading === true && creep.carry === 0) {
        creep.memory.isUpgrading = false;
        creep.memory.targetUpgrade = creep.room.controller;
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