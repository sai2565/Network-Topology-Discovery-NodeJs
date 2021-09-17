import { configureMachine } from '../configuremachine.js';

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
const Z1 = configureMachine({ "name": "Z1", "ip": "9051", "neighbours": [9050, 9052] });
const A2 = configureMachine({ "name": "A2", "ip": "9052", "neighbours": [9051, 9053] });
const B2 = configureMachine({ "name": "B2", "ip": "9053", "neighbours": [9052, 9054] });
const C2 = configureMachine({ "name": "C2", "ip": "9054", "neighbours": [9053, 9055] });
const D2 = configureMachine({ "name": "D2", "ip": "9055", "neighbours": [9054, 9056] });
const E2 = configureMachine({ "name": "E2", "ip": "9056", "neighbours": [9055, 9057] });
const F2 = configureMachine({ "name": "F2", "ip": "9057", "neighbours": [9056, 9058] });
const G2 = configureMachine({ "name": "G2", "ip": "9058", "neighbours": [9057, 9059] });
const H2 = configureMachine({ "name": "H2", "ip": "9059", "neighbours": [9058, 9060] });
const I2 = configureMachine({ "name": "I2", "ip": "9060", "neighbours": [9059, 9061] });
const J2 = configureMachine({ "name": "J2", "ip": "9061", "neighbours": [9060, 9062] });
const K2 = configureMachine({ "name": "K2", "ip": "9062", "neighbours": [9061, 9063] });
const L2 = configureMachine({ "name": "L2", "ip": "9063", "neighbours": [9062, 9064] });
const M2 = configureMachine({ "name": "M2", "ip": "9064", "neighbours": [9063, 9065] });
const N2 = configureMachine({ "name": "N2", "ip": "9065", "neighbours": [9064, 9066] });
const O2 = configureMachine({ "name": "O2", "ip": "9066", "neighbours": [9065, 9067] });
const P2 = configureMachine({ "name": "P2", "ip": "9067", "neighbours": [9066, 9068] });
const Q2 = configureMachine({ "name": "Q2", "ip": "9068", "neighbours": [9067, 9069] });
const R2 = configureMachine({ "name": "R2", "ip": "9069", "neighbours": [9068, 9070] });
const S2 = configureMachine({ "name": "S2", "ip": "9070", "neighbours": [9069, 9071] });
const T2 = configureMachine({ "name": "T2", "ip": "9071", "neighbours": [9070, 9072] });
const U2 = configureMachine({ "name": "U2", "ip": "9072", "neighbours": [9071, 9073] });
const V2 = configureMachine({ "name": "V2", "ip": "9073", "neighbours": [9072, 9074] });
const W2 = configureMachine({ "name": "W2", "ip": "9074", "neighbours": [9073, 9075] });
const X2 = configureMachine({ "name": "X2", "ip": "9075", "neighbours": [9074, 9076] });
const Y2 = configureMachine({ "name": "Y2", "ip": "9076", "neighbours": [9075, 9077] });
const Z2 = configureMachine({ "name": "Z2", "ip": "9077", "neighbours": [9076, 9078] });
const A3 = configureMachine({ "name": "A3", "ip": "9078", "neighbours": [9077, 9079] });
const B3 = configureMachine({ "name": "B3", "ip": "9079", "neighbours": [9078, 9080] });
const C3 = configureMachine({ "name": "C3", "ip": "9080", "neighbours": [9079, 9081] });
const D3 = configureMachine({ "name": "D3", "ip": "9081", "neighbours": [9080, 9082] });
const E3 = configureMachine({ "name": "E3", "ip": "9082", "neighbours": [9081, 9083] });
const F3 = configureMachine({ "name": "F3", "ip": "9083", "neighbours": [9082, 9084] });
const G3 = configureMachine({ "name": "G3", "ip": "9084", "neighbours": [9083, 9085] });
const H3 = configureMachine({ "name": "H3", "ip": "9085", "neighbours": [9084, 9086] });
const I3 = configureMachine({ "name": "I3", "ip": "9086", "neighbours": [9085, 9087] });
const J3 = configureMachine({ "name": "J3", "ip": "9087", "neighbours": [9086, 9088] });
const K3 = configureMachine({ "name": "K3", "ip": "9088", "neighbours": [9087, 9089] });
const L3 = configureMachine({ "name": "L3", "ip": "9089", "neighbours": [9088, 9090] });
const M3 = configureMachine({ "name": "M3", "ip": "9090", "neighbours": [9089, 9091] });
const N3 = configureMachine({ "name": "N3", "ip": "9091", "neighbours": [9090, 9092] });
const O3 = configureMachine({ "name": "O3", "ip": "9092", "neighbours": [9091, 9093] });
const P3 = configureMachine({ "name": "P3", "ip": "9093", "neighbours": [9092, 9094] });
const Q3 = configureMachine({ "name": "Q3", "ip": "9094", "neighbours": [9093, 9095] });
const R3 = configureMachine({ "name": "R3", "ip": "9095", "neighbours": [9094, 9096] });
const S3 = configureMachine({ "name": "S3", "ip": "9096", "neighbours": [9095, 9097] });
const T3 = configureMachine({ "name": "T3", "ip": "9097", "neighbours": [9096, 9098] });
const U3 = configureMachine({ "name": "U3", "ip": "9098", "neighbours": [9097, 9099] });
const V3 = configureMachine({ "name": "V3", "ip": "9099", "neighbours": [9098, 9100] });
const W3 = configureMachine({ "name": "W3", "ip": "9100", "neighbours": [9099, 9101] });
const X3 = configureMachine({ "name": "X3", "ip": "9101", "neighbours": [9100, 9102] });
const Y3 = configureMachine({ "name": "Y3", "ip": "9102", "neighbours": [9101, 9103] });
const Z3 = configureMachine({ "name": "Z3", "ip": "9103", "neighbours": [9102] });

//scan network function would be triggered by different machines simultaneously
//here i am triggering for a random machine
// A.scanNetwork();
// B.scanNetwork();
// C.scanNetwork();
// D.scanNetwork();
// E.scanNetwork();

// F.scanNetwork();
// G.scanNetwork();
// H.scanNetwork();
// I.scanNetwork();
// J.scanNetwork();

// K.scanNetwork();
// L.scanNetwork();
// M.scanNetwork();
// N.scanNetwork();
// O.scanNetwork();

// P.scanNetwork();
// Q.scanNetwork();
// R.scanNetwork();
// S.scanNetwork();
// T.scanNetwork();

U.scanNetwork();
V.scanNetwork();
W.scanNetwork();
X.scanNetwork();
Y.scanNetwork();

// Z.scanNetwork();
// A1.scanNetwork();
// B1.scanNetwork();
// C1.scanNetwork();
// D1.scanNetwork();

// E1.scanNetwork();
// F1.scanNetwork();
// G1.scanNetwork();
// H1.scanNetwork();
// I1.scanNetwork();

// J1.scanNetwork();
// K1.scanNetwork();
// L1.scanNetwork();
// M1.scanNetwork();
// N1.scanNetwork();

// O1.scanNetwork();
// P1.scanNetwork();
// Q1.scanNetwork();
// R1.scanNetwork();
// S1.scanNetwork();

// T1.scanNetwork();
// U1.scanNetwork();
// V1.scanNetwork();
// W1.scanNetwork();
// X1.scanNetwork();

// Y1.scanNetwork();
// Z1.scanNetwork();
// A2.scanNetwork();
// B2.scanNetwork();
// C2.scanNetwork();

// D2.scanNetwork();
// E2.scanNetwork();
// F2.scanNetwork();
// G2.scanNetwork();
// H2.scanNetwork();

// I2.scanNetwork();
// J2.scanNetwork();
// K2.scanNetwork();
// L2.scanNetwork();
// M2.scanNetwork();

// N2.scanNetwork();
// O2.scanNetwork();
// P2.scanNetwork();
// Q2.scanNetwork();
// R2.scanNetwork();

// S2.scanNetwork();
// T2.scanNetwork();
// U2.scanNetwork();
// V2.scanNetwork();
// W2.scanNetwork();

// X2.scanNetwork();
// Y2.scanNetwork();
// Z2.scanNetwork();
// A3.scanNetwork();
// B3.scanNetwork();

// C3.scanNetwork();
// D3.scanNetwork();
// E3.scanNetwork();
// F3.scanNetwork();
// G3.scanNetwork();

// H3.scanNetwork();
// I3.scanNetwork();
// J3.scanNetwork();
// K3.scanNetwork();
// L3.scanNetwork();

// M3.scanNetwork();
// N3.scanNetwork();
// O3.scanNetwork();
// P3.scanNetwork();
// Q3.scanNetwork();

// R3.scanNetwork();
// S3.scanNetwork();
// T3.scanNetwork();
// U3.scanNetwork();
// V3.scanNetwork();

// W3.scanNetwork();
// X3.scanNetwork();
// Y3.scanNetwork();
// Z3.scanNetwork();