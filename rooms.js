// Manage rooms

module.exports.run = function () {
  // If a unknown room is met AND it's not hostile, add it
  for (let room in Game.rooms) {
    if (typeof Memory.myRooms[room.name] === 'undefined' && room.find(FIND_HOSTILE_STRUCTURES).length == 0) {
      room.spawn = room.find(FIND_STRUCTURES, {
      filter: { structureType: STRUCTURE_SPAWN, my: true})};
      if (room.spawn.length !== 0 || (typeof room.controller !== 'undefined' && room.controller.my == true)) {
        room.srcEnergy   = room.find(FIND_SOURCES);
        room.srcMinerals = Memory.spawn.room.find(FIND_MINERALS);
        Memory.myRooms[room.name] = room;
        console.log('Added room '+room.name)
      }
    }
  }

  // If an own room is lost, remove it
  for (let room in Memory.myRooms) {
    if ((typeof room.spawn !== 'undefined' && room.spawn.my == true) || (typeof room.controller !== 'undefined' && room.controller.my == true)) {
      delete Memory.myRooms[room.name];
    }
  }
};