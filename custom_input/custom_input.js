import fs from 'fs';
import readline from 'readline';
import { configureMachine } from '../configuremachine.js';

var lineReader = readline.createInterface({
    input: fs.createReadStream('./input.txt')
  });
let serverInfos = [];
  lineReader.on('line', function (line) {
    serverInfos.push(line.split(','));  
  });
  lineReader.on('close', function(){
        exec();
  });

function exec(){
    let servers = [];
    serverInfos.forEach((s) => {
        servers.push(configureMachine({"name": s[0],"ip":s[1],"neighbours":s.splice(2)}));
    });
        
    servers.forEach((s) => {
        s.scanNetwork();
    });
}
