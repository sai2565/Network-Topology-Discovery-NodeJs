import { configureMachine } from './configuremachine.js';

const A = configureMachine({ "name": "A", "ip": "9000", "neighbours": [9001] });
const B = configureMachine({ "name": "B", "ip": "9001", "neighbours": [9000, 9002] });
const C = configureMachine({ "name": "C", "ip": "9002", "neighbours": [9001, 9003] });
const D = configureMachine({ "name": "D", "ip": "9003", "neighbours": [9002, 9004] });
const E = configureMachine({ "name": "E", "ip": "9004", "neighbours": [9003] });

//scan network function would be triggered by different machines simultaneously
//here i am triggering for a random machine
A.scanNetwork();
