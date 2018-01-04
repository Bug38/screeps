// Manage rooms

module.exports.run = function () {
  // If a unknown room is met AND it's not hostile, add it
  for (let room in Game.rooms) {
    if (typeof Memory.myRooms[room.name] === 'undefined' && room.find(FIND_HOSTILE_STRUCTURES).length == 0) {
      room.memory.spawn = room.find(FIND_STRUCTURES, {
      filter: { structureType: STRUCTURE_SPAWN, my: true})};
      if (room.controller && room.controller.my) {
        room.memory.srcEnergy   = room.find(FIND_SOURCES);
        room.memory.srcMinerals = Memory.spawn.room.find(FIND_MINERALS);
        Memory.myRooms[room.name] = room;
        console.log('Added room '+room.name)
      }
    }
  }

  // If an own room is lost, remove it
  for (let room in Memory.myRooms) {
    if (room.controller && room.controller.my == false) {
      delete Memory.myRooms[room.name];
    }
  }
};