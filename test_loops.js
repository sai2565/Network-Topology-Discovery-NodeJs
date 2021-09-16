import { configureMachine } from './configuremachine.js';

const A = configureMachine({ "name": "A", "ip": "9000", "neighbours": [9001, 9002, 9014] });
const B = configureMachine({ "name": "B", "ip": "9001", "neighbours": [9000, 9002] });
const C = configureMachine({ "name": "C", "ip": "9002", "neighbours": [9000, 9001, 9003] });
const D = configureMachine({ "name": "D", "ip": "9003", "neighbours": [9002, 9004] });
const E = configureMachine({ "name": "E", "ip": "9004", "neighbours": [9003, 9005, 9008] });
const F = configureMachine({ "name": "F", "ip": "9005", "neighbours": [9004, 9006] });
const G = configureMachine({ "name": "G", "ip": "9006", "neighbours": [9005, 9007] });
const H = configureMachine({ "name": "H", "ip": "9007", "neighbours": [9006, 9008] });
const I = configureMachine({ "name": "I", "ip": "9008", "neighbours": [9004, 9007, 9009] });
const J = configureMachine({ "name": "J", "ip": "9009", "neighbours": [9008, 9010] });
const K = configureMachine({ "name": "K", "ip": "9010", "neighbours": [9009, 9011] });
const L = configureMachine({ "name": "L", "ip": "9011", "neighbours": [9010, 9012] });
const M = configureMachine({ "name": "M", "ip": "9012", "neighbours": [9011, 9013] });
const N = configureMachine({ "name": "N", "ip": "9013", "neighbours": [9012, 9014] });
const O = configureMachine({ "name": "O", "ip": "9014", "neighbours": [9000, 9013] });
//scan network function would be triggered by different machines simultaneously
//here i am triggering for a random machine
A.scanNetwork();
B.scanNetwork();
C.scanNetwork();
D.scanNetwork();
E.scanNetwork();
F.scanNetwork();
G.scanNetwork();
H.scanNetwork();
I.scanNetwork();
J.scanNetwork();
K.scanNetwork();
L.scanNetwork();
M.scanNetwork();
N.scanNetwork();
O.scanNetwork();
