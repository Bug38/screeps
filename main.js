// load roles
let roles ={
    harvester: require ('role.harvester'),
    upgrader: require ('role.upgrader')
};
let spawn = require ('spawnScript');
let rooms = require ('rooms')
let tasks = require ('tasks');

// Init Memory
if (typeof Memory.isInited !== 'undefined'){}
else{
	Game.spawn.BugCity.room.name = 'spawnRoom'
    let memoryVars = require('memoryVars');
    memoryVars.init();
}

// Main loop
module.exports.loop = function() {

    console.log('[Tick] Start');
    console.log('[Time] Time available : '+Game.cpu.tickLimit);
    // Check for new rooms
    rooms.run();

    // Check for todo tasks
    tasks.run();

    // Iter all workers
    for (let creep in Game.creeps) {
        roles[creep.memory.role].run();
    }
    console.log('[Tick] End');
    console.log('[Time] Time used   : '+Game.cpu.getUsed());
    console.log('[Time] Bucket time : '+Game.cpu.bucket);
};
