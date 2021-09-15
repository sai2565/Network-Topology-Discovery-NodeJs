import { configureMachine } from './configuremachine.js';

const A = configureMachine({ "name": "A", "ip": "9000", "neighbours": [] });
//scan network function would be triggered by different machines simultaneously
//here i am triggering for a random machine
A.scanNetwork();