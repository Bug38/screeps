// load roles
let roles ={
    harvester: require('role.harvester'),
    upgrader: require('role.upgrader')
};
let spawn = require('spawnScript');

// Init Memory
if (typeof Memory.isInited !== 'undefined'){}
else{
    let memoryVars = require('memoryVars');
    memoryVars.init();
}

// Main loop
module.exports.loop = function() {

    // Check for population rules
    spawn.run();

    // Iter all workers
    for (let creep in Game.creeps) {
        roles[creep.memory.role].run();
    }
};
