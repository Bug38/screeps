// Spawn module

module.exports.run = function () {
    // Check if population changed
    if (Game.creeps.length >= Memory.population.max) {
        return
    }

    let numCreeps = {
        harvester: 0,
        upgrader: 0,
        builder: 0,
        repairer: 0,
        soldier: 0,
        total: 0
    };

    let lightBody = [CARRY, WORK, MOVE];

    // clear dead creeps
    for (let creep in Memory.creeps) {
        if (typeof Game.creeps[creep.name] === 'undefined' || Game.creeps[creep.name] === null) {
            Memory.creeps[creep.name] = undefined
        }
    }

    // counts the manpower of each job
    for (let creep in Game.creeps) {
        numCreeps[creep.memory.role] += 1;
        numCreeps.total += 1;
    }

    // spawn the right job
    if (numCreeps.harvester < Memory.workers.ratioHarvester * Memory.population.maxWorkers) {
        Game.spawns[Memory.spawn].createCreep(lightBody,undefined,{memory: {role: "harvester"}});
    }
    else if (numCreeps.upgrader < Memory.workers.ratioUpgrader * Memory.population.maxWorkers) {
        Game.spawns[Memory.spawn].createCreep(lightBody,undefined,{memory: {role: "upgrader"}});
    }
    else if (numCreeps.builder < Memory.workers.ratioBuilder * Memory.population.maxWorkers) {
        Game.spawns[Memory.spawn].createCreep(lightBody,undefined,{memory: {role: "builder"}});
    }
};
