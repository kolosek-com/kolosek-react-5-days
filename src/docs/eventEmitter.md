import EventEmitter from 'events';

// emitting
EventEmitter.prototype.emit('emitting_event', params);


// start listening to event
EventEmitter.prototype.addListener('emitting_event', functionName);

// stop listening to event
EventEmitter.prototype.removeListener('emitting_event', functionName);
