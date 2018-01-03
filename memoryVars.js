// Memory init

module.exports.init = function() {
    Memory.spawn = 'BugCity';
    Memory.population = {
        max:          10,
        current:       0,
        maxWorkers:   10
    };
    Memory.workers = {
        ratioHarvester: 0.5,
        ratioUpgrader:  0.2,
        ratioBuilder:   0.2,
        ratioRepairer:  0.1
    };
    Memory.isInited = true;
};
