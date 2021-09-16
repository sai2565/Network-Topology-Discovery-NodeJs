import { configureMachine } from './configuremachine.js';

const A = configureMachine({ "name": "A", "ip": "9000", "neighbours": [9001] });
const B = configureMachine({ "name": "B", "ip": "9001", "neighbours": [9000, 9002] });
const C = configureMachine({ "name": "C", "ip": "9002", "neighbours": [9001, 9003] });
const D = configureMachine({ "name": "D", "ip": "9003", "neighbours": [9002, 9004] });
const E = configureMachine({ "name": "E", "ip": "9004", "neighbours": [9003, 9005] });
const F = configureMachine({ "name": "F", "ip": "9005", "neighbours": [9004, 9006] });
const G = configureMachine({ "name": "G", "ip": "9006", "neighbours": [9005, 9007] });
const H = configureMachine({ "name": "H", "ip": "9007", "neighbours": [9006, 9008] });
const I = configureMachine({ "name": "I", "ip": "9008", "neighbours": [9007, 9009] });
const J = configureMachine({ "name": "J", "ip": "9009", "neighbours": [9008, 9010] });
const K = configureMachine({ "name": "K", "ip": "9010", "neighbours": [9009, 9011] });
const L = configureMachine({ "name": "L", "ip": "9011", "neighbours": [9010, 9012] });
const M = configureMachine({ "name": "M", "ip": "9012", "neighbours": [9011, 9013] });
const N = configureMachine({ "name": "N", "ip": "9013", "neighbours": [9012, 9014] });
const O = configureMachine({ "name": "O", "ip": "9014", "neighbours": [9013, 9015] });
const P = configureMachine({ "name": "P", "ip": "9015", "neighbours": [9014, 9016] });
const Q = configureMachine({ "name": "Q", "ip": "9016", "neighbours": [9015, 9017] });
const R = configureMachine({ "name": "R", "ip": "9017", "neighbours": [9016, 9018] });
const S = configureMachine({ "name": "S", "ip": "9018", "neighbours": [9017, 9019] });
const T = configureMachine({ "name": "T", "ip": "9019", "neighbours": [9018, 9020] });
const U = configureMachine({ "name": "U", "ip": "9020", "neighbours": [9019, 9021] });
const V = configureMachine({ "name": "V", "ip": "9021", "neighbours": [9020, 9022] });
const W = configureMachine({ "name": "W", "ip": "9022", "neighbours": [9021, 9023] });
const X = configureMachine({ "name": "X", "ip": "9023", "neighbours": [9022, 9024] });
const Y = configureMachine({ "name": "Y", "ip": "9024", "neighbours": [9023, 9025] });
const Z = configureMachine({ "name": "Z", "ip": "9025", "neighbours": [9024, 9026] });
const A1 = configureMachine({ "name": "A1", "ip": "9026", "neighbours": [9025, 9027] });
const B1 = configureMachine({ "name": "B1", "ip": "9027", "neighbours": [9026, 9028] });
const C1 = configureMachine({ "name": "C1", "ip": "9028", "neighbours": [9027, 9029] });
const D1 = configureMachine({ "name": "D1", "ip": "9029", "neighbours": [9028, 9030] });
const E1 = configureMachine({ "name": "E1", "ip": "9030", "neighbours": [9029, 9031] });
const F1 = configureMachine({ "name": "F1", "ip": "9031", "neighbours": [9030, 9032] });
const G1 = configureMachine({ "name": "G1", "ip": "9032", "neighbours": [9031, 9033] });
const H1 = configureMachine({ "name": "H1", "ip": "9033", "neighbours": [9032, 9034] });
const I1 = configureMachine({ "name": "I1", "ip": "9034", "neighbours": [9033, 9035] });
const J1 = configureMachine({ "name": "J1", "ip": "9035", "neighbours": [9034, 9036] });
const K1 = configureMachine({ "name": "K1", "ip": "9036", "neighbours": [9035, 9037] });
const L1 = configureMachine({ "name": "L1", "ip": "9037", "neighbours": [9036, 9038] });
const M1 = configureMachine({ "name": "M1", "ip": "9038", "neighbours": [9037, 9039] });
const N1 = configureMachine({ "name": "N1", "ip": "9039", "neighbours": [9038, 9040] });
const O1 = configureMachine({ "name": "O1", "ip": "9040", "neighbours": [9039, 9041] });
const P1 = configureMachine({ "name": "P1", "ip": "9041", "neighbours": [9040, 9042] });
const Q1 = configureMachine({ "name": "Q1", "ip": "9042", "neighbours": [9041, 9043] });
const R1 = configureMachine({ "name": "R1", "ip": "9043", "neighbours": [9042, 9044] });
const S1 = configureMachine({ "name": "S1", "ip": "9044", "neighbours": [9043, 9045] });
const T1 = configureMachine({ "name": "T1", "ip": "9045", "neighbours": [9044, 9046] });
const U1 = configureMachine({ "name": "U1", "ip": "9046", "neighbours": [9045, 9047] });
const V1 = configureMachine({ "name": "V1", "ip": "9047", "neighbours": [9046, 9048] });
const W1 = configureMachine({ "name": "W1", "ip": "9048", "neighbours": [9047, 9049] });
const X1 = configureMachine({ "name": "X1", "ip": "9049", "neighbours": [9048, 9050] });
const Y1 = configureMachine({ "name": "Y1", "ip": "9050", "neighbours": [9049, 9051] });
const Z1 = configureMachine({ "name": "Z1", "ip": "9051", "neighbours": [9050] });

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
P.scanNetwork();
Q.scanNetwork();
R.scanNetwork();
S.scanNetwork();
T.scanNetwork();
U.scanNetwork();
V.scanNetwork();
W.scanNetwork();
X.scanNetwork();
Y.scanNetwork();
Z.scanNetwork();
A1.scanNetwork();
B1.scanNetwork();
C1.scanNetwork();
D1.scanNetwork();
E1.scanNetwork();
F1.scanNetwork();
G1.scanNetwork();
H1.scanNetwork();
I1.scanNetwork();
J1.scanNetwork();
K1.scanNetwork();
L1.scanNetwork();
M1.scanNetwork();
N1.scanNetwork();
O1.scanNetwork();
P1.scanNetwork();
Q1.scanNetwork();
R1.scanNetwork();
S1.scanNetwork();
T1.scanNetwork();
U1.scanNetwork();
V1.scanNetwork();
W1.scanNetwork();
X1.scanNetwork();
Y1.scanNetwork();
Z1.scanNetwork();
