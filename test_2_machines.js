import { configureMachine } from './configuremachine.js';

const A = configureMachine({ "name": "A", "ip": "9000", "neighbours": [9001] });
const B = configureMachine({ "name": "B", "ip": "9001", "neighbours": [9000] });

//scan network function would be triggered by different machines simultaneously
//here i am triggering for a random machine
B.scanNetwork();