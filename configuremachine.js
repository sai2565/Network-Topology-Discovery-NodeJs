import net from 'net';

function configureMachine(configInfo){
    let server = net.createServer();
    let name = configInfo.name;
    let ip = configInfo.ip;
    let neighbours = configInfo.neighbours;
    let discovrdNeibrs = [];
    let discvrdNibrsInfo = [];
    let neighboursExplored = false;

    discovrdNeibrs.push(ip);
    discvrdNibrsInfo.push(configInfo);

    server.listen(configInfo.ip, () => {
        console.log(`Machine ${name} is listening on port ${ip}`)
    });

    server.on('connection', function (socket) {
        
        let alrdyDiscvrdNeibrs;
        let totalNeibrs = neighbours.length;
        let curNeibrScanned = 0;

        socket.on('data', function(data){
            if(neighboursExplored){
                socket.write(JSON.stringify(discvrdNibrsInfo));
                socket.destroy();
            }
            else{
                alrdyDiscvrdNeibrs = data+","+ip;
                scnRemNtwrk();
            }
            
        });

        async function scnRemNtwrk(){
            if(curNeibrScanned < totalNeibrs){
                if(!alrdyDiscvrdNeibrs.includes(neighbours[curNeibrScanned])){
                    let netwrkScnnr = new Promise((resolve) => {
                        let nibrConn = net.connect({
                            port: neighbours[curNeibrScanned], //to be replaced with portno 443 for remote tcp connection
                            host: "localhost", //to be replaced with remote host 
                            onread: {
                                buffer: Buffer.alloc(64 * 1024),
                                callback: function(nread, data){
                                    // discvrdNibrsInfo = [...discvrdNibrsInfo, ...JSON.parse(data.toString('utf8', 0, nread))];
                                    JSON.parse(data.toString('utf8', 0, nread)).forEach((neibr) => {
                                        if(!discovrdNeibrs.includes(neibr.ip)){
                                            discovrdNeibrs.push(neibr.ip);
                                            alrdyDiscvrdNeibrs += "," + neibr.ip;
                                            discvrdNibrsInfo.push(neibr);
                                        }
                                    });
                                    curNeibrScanned++;
                                    resolve(200);
                                    nibrConn.destroy();
                                }
                            }
                        }, function(){});
                        nibrConn.write(alrdyDiscvrdNeibrs.toString());
                    });
                    netwrkScnnr.then(() => {
                        scnRemNtwrk();
                    });
                    netwrkScnnr.catch((err) => {
                        console.error("Error occurred while scanning", err.message);
                    });
                }else{
                    curNeibrScanned++;
                    scnRemNtwrk();
                }
            }else{
                socket.write(JSON.stringify(discvrdNibrsInfo));
                socket.destroy();
            }
        }
    }); 

    server.scanNetwork = async function (){
        console.time(`${name}`);
        const totNeibrs = neighbours.length;
        let curNeibrScnd = 0;
        setTimeout(() => {
            async function networkScanner(){
                let ntwrkScnr = new Promise((resolve) => {
                    let neibrConn = net.connect({
                        port: neighbours[curNeibrScnd], //to be replaced with portno 443 for remote tcp connection 
                        host: "localhost", //to be replaced with remote host
                        onread: {
                            buffer: Buffer.alloc(64 * 1024),
                            callback: function(nread, data){
                                // discvrdNibrsInfo = [...discvrdNibrsInfo, ...JSON.parse(data.toString('utf8', 0, nread))];
                                JSON.parse(data.toString('utf8', 0, nread)).forEach((neibr) => {
                                    if(!discovrdNeibrs.includes(neibr.ip)){
                                        discovrdNeibrs.push(neibr.ip);
                                        discvrdNibrsInfo.push(neibr);
                                    }
                                });
                                curNeibrScnd ++;
                                resolve(200);
                                neibrConn.destroy();
                            }
                        }
                    },function(){});
                    neibrConn.write(discovrdNeibrs.toString());
                });
                ntwrkScnr.then(() => {
                    if(curNeibrScnd < totNeibrs){
                        networkScanner();
                    }
                    else{
                        sortAndPrintTopology(discvrdNibrsInfo);
                    }
                });
                ntwrkScnr.catch((err) => {
                    console.error("Error occurred while scanning", err.message);
                });
            }
            if(curNeibrScnd < totNeibrs){
                networkScanner();
            }
            else{
                sortAndPrintTopology(discvrdNibrsInfo);
            }
        },0);
    }
    
    function sortAndPrintTopology(networkInfo){
        neighboursExplored = true;

        console.log(`There are ${networkInfo.length} machines in this topology. The following are the machines and their neighbors discovered from machine ${name}:`);
        
        networkInfo.sort((m1, m2) => {
            if(m1.name < m2.name){
                return -1;
            }
            else if(m1.name > m2.name){
                return 1;
            }
            else{
                return 0;
            }
        });
        
        networkInfo.forEach((m) => {
            let nibrsNams = [];

            m.neighbours.forEach((nibr) => {
                let fm = networkInfo.filter(mac => mac.ip == nibr);
                // console.log(fm);
                if(fm.length>0){
                    nibrsNams.push(fm[0].name);
                }
            });

            nibrsNams.sort((n1, n2) => {
                if(n1 < n2){
                    return -1;
                }
                else if(n1 > n2){
                    return 1;
                }
                else{
                    return 0;
                }
            });
            console.log(`${m.name}: [${nibrsNams}]`);
        })
        console.log(`Total time taken for discovery for machine`);
        console.timeEnd(`${name}`)

        discovrdNeibrs = [];
        discvrdNibrsInfo = [];
        discovrdNeibrs.push(ip);
        discvrdNibrsInfo.push(configInfo);
    }

    return server;
}

export {configureMachine};
