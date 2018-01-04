// Defines tasks

module.exports.run = function (creep) {
  for (let room in Memory.myRooms) {
  // First priority is energy
    if (room.energyAvailable < energyCapacityAvailable) {
      // Check if there are at least 2 creeps by source
      for (let src in room.memory.srcEnergy) {
        let nbWorkers = 0;
        for (let creep in Game.creeps) {
          if (creep.memory.task == src.id) {
            nbWorkers += 1;
          }
        }
        while (nbWorkers < 2) {
          spawn.harvester(src.id)
          nbWorkers += 2;
        }
      }
    }
  }
};
