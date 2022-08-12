// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc1, ctc0, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function _Buyer_buy4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Buyer_buy4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Buyer_buy4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Data({
    Buyer_buy0_47: ctc3,
    Seller_sell0_47: ctc4
    });
  const ctc6 = stdlib.T_Null;
  
  
  const [v283, v306, v307] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2]);
  const v339 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:48:7:application call to [unknown function] (defined at: ./index.rsh:48:7:function exp)', 'at ./index.rsh:30:40:application call to "runBuyer_buy0_47" (defined at: ./index.rsh:48:7:function exp)', 'at ./index.rsh:30:40:application call to [unknown function] (defined at: ./index.rsh:30:40:function exp)'],
    msg: 'in',
    who: 'Buyer_buy'
    });
  const v343 = ['Buyer_buy0_47', v339];
  
  const txn1 = await (ctc.sendrecv({
    args: [v283, v306, v307, v343],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v307, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v349], secs: v351, time: v350, didSend: v183, from: v348 } = txn1;
      
      switch (v349[0]) {
        case 'Buyer_buy0_47': {
          const v352 = v349[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Buyer_buy"
            });
          sim_r.txns.push({
            amt: v307,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v362 = null;
          const v363 = await txn1.getOutput('Buyer_buy', 'v362', ctc6, v362);
          
          sim_r.txns.push({
            kind: 'from',
            to: v306,
            tok: undefined /* Nothing */
            });
          const v601 = v348;
          const v602 = v307;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Seller_sell0_47': {
          const v387 = v349[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v349], secs: v351, time: v350, didSend: v183, from: v348 } = txn1;
  switch (v349[0]) {
    case 'Buyer_buy0_47': {
      const v352 = v349[1];
      undefined /* setApiDetails */;
      ;
      const v362 = null;
      const v363 = await txn1.getOutput('Buyer_buy', 'v362', ctc6, v362);
      if (v183) {
        stdlib.protect(ctc6, await interact.out(v352, v363), {
          at: './index.rsh:48:8:application',
          fs: ['at ./index.rsh:48:8:application call to [unknown function] (defined at: ./index.rsh:48:8:function exp)', 'at ./index.rsh:53:6:application call to "k" (defined at: ./index.rsh:52:7:function exp)', 'at ./index.rsh:52:7:application call to [unknown function] (defined at: ./index.rsh:52:7:function exp)'],
          msg: 'out',
          who: 'Buyer_buy'
          });
        }
      else {
        }
      
      ;
      const v601 = v348;
      const v602 = v307;
      return;
      
      break;
      }
    case 'Seller_sell0_47': {
      const v387 = v349[1];
      return;
      break;
      }
    }
  
  
  };
export async function Owner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Owner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Owner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_Data({
    Buyer_buy0_47: ctc1,
    Seller_sell0_47: ctc3
    });
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Address;
  
  
  const v279 = stdlib.protect(ctc0, interact.nft, 'for Owner\'s interact field nft');
  
  const txn1 = await (ctc.sendrecv({
    args: [v279],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v283], secs: v285, time: v284, didSend: v27, from: v282 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v283
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v283], secs: v285, time: v284, didSend: v27, from: v282 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v282, v283],
    evt_cnt: 0,
    funcNum: 1,
    lct: v284,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:28:12:decimal', stdlib.UInt_max, '1'), v283]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v295, time: v294, didSend: v34, from: v293 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:28:12:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v283
        });
      const v306 = v282;
      const v307 = stdlib.checkedBigNumberify('./index.rsh:30:42:decimal', stdlib.UInt_max, '0');
      const v308 = v294;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v283
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v295, time: v294, didSend: v34, from: v293 } = txn2;
  ;
  ;
  const v305 = stdlib.addressEq(v282, v293);
  stdlib.assert(v305, {
    at: './index.rsh:28:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Owner'
    });
  let v306 = v282;
  let v307 = stdlib.checkedBigNumberify('./index.rsh:30:42:decimal', stdlib.UInt_max, '0');
  let v308 = v294;
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v349], secs: v351, time: v350, didSend: v183, from: v348 } = txn3;
    switch (v349[0]) {
      case 'Buyer_buy0_47': {
        const v352 = v349[1];
        undefined /* setApiDetails */;
        ;
        const v362 = null;
        await txn3.getOutput('Buyer_buy', 'v362', ctc5, v362);
        ;
        const cv306 = v348;
        const cv307 = v307;
        const cv308 = v350;
        
        v306 = cv306;
        v307 = cv307;
        v308 = cv308;
        
        continue;
        break;
        }
      case 'Seller_sell0_47': {
        const v387 = v349[1];
        undefined /* setApiDetails */;
        ;
        const v409 = v387[stdlib.checkedBigNumberify('./index.rsh:34:7:spread', stdlib.UInt_max, '0')];
        const v410 = stdlib.gt(v409, stdlib.checkedBigNumberify('./index.rsh:42:15:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v410, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:42:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:41:10:application call to [unknown function] (defined at: ./index.rsh:41:10:function exp)'],
          msg: null,
          who: 'Owner'
          });
        const v412 = stdlib.addressEq(v348, v306);
        stdlib.assert(v412, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:43:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:41:10:application call to [unknown function] (defined at: ./index.rsh:41:10:function exp)'],
          msg: null,
          who: 'Owner'
          });
        const v414 = true;
        await txn3.getOutput('Seller_sell', 'v414', ctc6, v414);
        const cv306 = v306;
        const cv307 = v409;
        const cv308 = v350;
        
        v306 = cv306;
        v307 = cv307;
        v308 = cv308;
        
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  
  
  };
export async function _Seller_sell4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Seller_sell4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Seller_sell4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_Tuple([]);
  const ctc5 = stdlib.T_Data({
    Buyer_buy0_47: ctc4,
    Seller_sell0_47: ctc3
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Null;
  
  
  const [v283, v306, v307] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc2]);
  const v322 = ctc.selfAddress();
  const v324 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:34:20:application call to [unknown function] (defined at: ./index.rsh:34:20:function exp)', 'at ./index.rsh:30:40:application call to "runSeller_sell0_47" (defined at: ./index.rsh:34:7:function exp)', 'at ./index.rsh:30:40:application call to [unknown function] (defined at: ./index.rsh:30:40:function exp)'],
    msg: 'in',
    who: 'Seller_sell'
    });
  const v325 = v324[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v328 = stdlib.gt(v325, stdlib.checkedBigNumberify('./index.rsh:35:15:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v328, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:35:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:34:20:application call to [unknown function] (defined at: ./index.rsh:34:20:function exp)', 'at ./index.rsh:34:20:application call to [unknown function] (defined at: ./index.rsh:34:20:function exp)', 'at ./index.rsh:30:40:application call to "runSeller_sell0_47" (defined at: ./index.rsh:34:7:function exp)', 'at ./index.rsh:30:40:application call to [unknown function] (defined at: ./index.rsh:30:40:function exp)'],
    msg: null,
    who: 'Seller_sell'
    });
  const v330 = stdlib.addressEq(v322, v306);
  stdlib.assert(v330, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:36:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:34:20:application call to [unknown function] (defined at: ./index.rsh:34:20:function exp)', 'at ./index.rsh:34:20:application call to [unknown function] (defined at: ./index.rsh:34:20:function exp)', 'at ./index.rsh:30:40:application call to "runSeller_sell0_47" (defined at: ./index.rsh:34:7:function exp)', 'at ./index.rsh:30:40:application call to [unknown function] (defined at: ./index.rsh:30:40:function exp)'],
    msg: null,
    who: 'Seller_sell'
    });
  const v335 = ['Seller_sell0_47', v324];
  
  const txn1 = await (ctc.sendrecv({
    args: [v283, v306, v307, v335],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v349], secs: v351, time: v350, didSend: v183, from: v348 } = txn1;
      
      switch (v349[0]) {
        case 'Buyer_buy0_47': {
          const v352 = v349[1];
          
          break;
          }
        case 'Seller_sell0_47': {
          const v387 = v349[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Seller_sell"
            });
          ;
          const v409 = v387[stdlib.checkedBigNumberify('./index.rsh:34:7:spread', stdlib.UInt_max, '0')];
          const v414 = true;
          const v415 = await txn1.getOutput('Seller_sell', 'v414', ctc6, v414);
          
          const v610 = v306;
          const v611 = v409;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v349], secs: v351, time: v350, didSend: v183, from: v348 } = txn1;
  switch (v349[0]) {
    case 'Buyer_buy0_47': {
      const v352 = v349[1];
      return;
      break;
      }
    case 'Seller_sell0_47': {
      const v387 = v349[1];
      undefined /* setApiDetails */;
      ;
      const v409 = v387[stdlib.checkedBigNumberify('./index.rsh:34:7:spread', stdlib.UInt_max, '0')];
      const v410 = stdlib.gt(v409, stdlib.checkedBigNumberify('./index.rsh:42:15:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v410, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:42:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:41:10:application call to [unknown function] (defined at: ./index.rsh:41:10:function exp)'],
        msg: null,
        who: 'Seller_sell'
        });
      const v412 = stdlib.addressEq(v348, v306);
      stdlib.assert(v412, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:43:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:41:10:application call to [unknown function] (defined at: ./index.rsh:41:10:function exp)'],
        msg: null,
        who: 'Seller_sell'
        });
      const v414 = true;
      const v415 = await txn1.getOutput('Seller_sell', 'v414', ctc6, v414);
      if (v183) {
        stdlib.protect(ctc7, await interact.out(v387, v415), {
          at: './index.rsh:34:8:application',
          fs: ['at ./index.rsh:34:8:application call to [unknown function] (defined at: ./index.rsh:34:8:function exp)', 'at ./index.rsh:44:6:application call to "k" (defined at: ./index.rsh:41:10:function exp)', 'at ./index.rsh:41:10:application call to [unknown function] (defined at: ./index.rsh:41:10:function exp)'],
          msg: 'out',
          who: 'Seller_sell'
          });
        }
      else {
        }
      
      const v610 = v306;
      const v611 = v409;
      return;
      
      break;
      }
    }
  
  
  };
export async function Buyer_buy(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer_buy expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer_buy expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Buyer_buy4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Seller_sell(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller_sell expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller_sell expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Seller_sell4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Buyer_buy()byte[0]`, `Seller_sell(uint64)byte`],
    pure: [],
    sigs: [`Buyer_buy()byte[0]`, `Seller_sell(uint64)byte`]
    },
  appApproval: `BiAHAAEECJLkopsKA6CNBiYDAQAAAQEiNQAxGEECBilkSSJbNQElWzUCNhoAF0lBADIiNQQjNQZJIQQMQAARIQQSRCk1/yg0/1Alr1BCADKB3qPWkQESRDYaATX/KjT/UEIAHjYaAhc1BDYaAzYaARdJIwxAAORJIQUMQACdIQUSRCQ0ARJENARJIhJMNAISEUQoZEk1A0lJIls1/1cIIDX+gShbNf1JNQU1/IAEkfGnmjT8ULA0/CJVQAAuNP2IAYGACAAAAAAAAAFqsCk1B7EisgE0/bIII7IQNP6yB7M0/zEANP0yBkIAxzT8VwEINfs0+xdJNfoiDUQxADT+EkSACQAAAAAAAAGeAbAqNQc0/zT+NPoyBkIAlyMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/4EgWzX+gASai5F0sCM0/ogBEDT/MQASRDT+NP8iMgZCAFdIIQaIAOIiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULAhBogAvLEisgEishIkshAyCrIUNP+yEbMxADT/FlAoSwFXAChnSCM1ATIGNQJCAD81/zX+Nf1JNfwWNP1QNP4WUChLAVcAMGdIJDUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 48,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v283",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v283",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T10",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Buyer_buy0_47",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "_Seller_sell0_47",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T10",
                "name": "v349",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v362",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v414",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Buyer_buy",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Seller_sell",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T10",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Buyer_buy0_47",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T9",
                    "name": "_Seller_sell0_47",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T10",
                "name": "v349",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200112b3803806200112b8339810160408190526200002691620001d2565b6000805543600355604080513381528251602080830191909152830151516001600160a01b03168183015290517f0d6fab7154ce0a94b131216395b92f2e84190b0a295f5e2d18b75b3f1a456c479181900360600190a16200008b3415600762000102565b604080518082018252600060208083018281523380855286830151516001600160a01b0390811683526001948590554390945585519283015251909116928101929092529060600160405160208183030381529060405260029080519060200190620000f99291906200012c565b505050620002cd565b81620001285760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200013a9062000290565b90600052602060002090601f0160209004810192826200015e5760008555620001a9565b82601f106200017957805160ff1916838001178555620001a9565b82800160010185558215620001a9579182015b82811115620001a95782518255916020019190600101906200018c565b50620001b7929150620001bb565b5090565b5b80821115620001b75760008155600101620001bc565b6000818303604080821215620001e757600080fd5b80518082016001600160401b0380821183831017156200021757634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200023157600080fd5b8351945060208501915084821081831117156200025e57634e487b7160e01b600052604160045260246000fd5b509091526020840151906001600160a01b03821682146200027e57600080fd5b90825260208101919091529392505050565b600181811c90821680620002a557607f821691505b60208210811415620002c757634e487b7160e01b600052602260045260246000fd5b50919050565b610e4e80620002dd6000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100d15780639285512c146100e6578063ab53f2c6146100ee578063c462630d1461011157005b80631e93b0f1146100775780632c10a1591461009b5780635df523e6146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610a37565b610124565b6100c16100bc366004610a4f565b610154565b6040519015158152602001610092565b3480156100dd57600080fd5b50600154610088565b6100c161019e565b3480156100fa57600080fd5b506101036101d7565b604051610092929190610a94565b61007561011f366004610ace565b610274565b604080518082019091526000808252602082015261015061014a36849003840184610b8a565b826102a0565b5050565b600061015e61091c565b602081810180515160019052515160409081015185905280518082019091526000808252918101919091526101938282610442565b602001519392505050565b60006101a861091c565b6020818101515160009081905260408051808201909152818152918201526101d08282610442565b5192915050565b6000606060005460028080546101ec90610bd8565b80601f016020809104026020016040519081016040528092919081815260200182805461021890610bd8565b80156102655780601f1061023a57610100808354040283529160200191610265565b820191906000526020600020905b81548152906001019060200180831161024857829003601f168201915b50505050509050915091509091565b604080518082019091526000808252602082015261015061029a36849003840184610c0d565b82610442565b6102b0600160005414600b61073f565b81516102cb9015806102c457508251600154145b600c61073f565b6000808055600280546102dd90610bd8565b80601f016020809104026020016040519081016040528092919081815260200182805461030990610bd8565b80156103565780601f1061032b57610100808354040283529160200191610356565b820191906000526020600020905b81548152906001019060200180831161033957829003601f168201915b505050505080602001905181019061036e9190610cd1565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16103c53415600861073f565b6103df6103d83383602001516001610765565b600961073f565b80516103f7906001600160a01b03163314600a61073f565b6103ff610966565b60208083015182516001600160a01b0391821690528351838301805191909216905280516000920191909152514360409091015261043c8161077d565b50505050565b610452600460005414601161073f565b815161046d90158061046657508251600154145b601261073f565b60008080556002805461047f90610bd8565b80601f01602080910402602001604051908101604052809291908181526020018280546104ab90610bd8565b80156104f85780601f106104cd576101008083540402835291602001916104f8565b820191906000526020600020905b8154815290600101906020018083116104db57829003601f168201915b50505050508060200190518101906105109190610d02565b905061052d60408051808201909152600060208201908152815290565b7ff6577fdde4998b863f59dae23a9427c0d3f8366471223c8043b0398188b7bbbf338560405161055e929190610d78565b60405180910390a1600060208501515151600181111561058057610580610bc2565b14156106555761059782604001513414600d61073f565b604051600081527f2af83fe8f8ec0db967bfb6522f3f62e7163c6932484374eeffc0e8935d66500d9060200160405180910390a16000808452602083015160408085015190516001600160a01b039092169281156108fc029290818181858888f1935050505015801561060e573d6000803e3d6000fd5b50610617610966565b825181516001600160a01b03909116905260208082018051339052604080860151825190930192909252514391015261064f8161077d565b5061043c565b600160208501515151600181111561066f5761066f610bc2565b141561043c5760208401515160400151815261068d3415600e61073f565b80515161069d901515600f61073f565b6106c082602001516001600160a01b0316336001600160a01b031614601061073f565b604051600181527f8e903ba1fbe04dad7769efe8be286bf46334a9e3d7ed1e4cb79660cc154df9f79060200160405180910390a160016020840152610703610966565b825181516001600160a01b0391821690526020808501518184018051919093169052835151825190910152514360409091015261064f8161077d565b816101505760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061077383853085610807565b90505b9392505050565b6040805160608082018352600080835260208084018281528486018381528751516001600160a01b0390811680885289850180515183168552518501518352600490955543600155875180850195909552915190911683870152518284015284518083039093018352608090910190935280519192610802926002929091019061099e565b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161086e91610ddf565b60006040518083038185875af1925050503d80600081146108ab576040519150601f19603f3d011682016040523d82523d6000602084013e6108b0565b606091505b50915091506108c1828260016108e1565b50808060200190518101906108d69190610dfb565b979650505050505050565b606083156108f0575081610776565b8251156109005782518084602001fd5b60405163100960cb60e01b81526004810183905260240161075c565b60405180604001604052806000815260200161096160408051608081018252600060208083018281528385018390528451918201909452908152606082015290815290565b905290565b604080516060810182526000918101918252908190815260408051606081018252600080825260208281018290529282015291015290565b8280546109aa90610bd8565b90600052602060002090601f0160209004810192826109cc5760008555610a12565b82601f106109e557805160ff1916838001178555610a12565b82800160010185558215610a12579182015b82811115610a125782518255916020019190600101906109f7565b50610a1e929150610a22565b5090565b5b80821115610a1e5760008155600101610a23565b600060408284031215610a4957600080fd5b50919050565b600060208284031215610a6157600080fd5b5035919050565b60005b83811015610a83578181015183820152602001610a6b565b8381111561043c5750506000910152565b8281526040602082015260008251806040840152610ab9816060850160208701610a68565b601f01601f1916919091016060019392505050565b600060808284031215610a4957600080fd5b6040805190810167ffffffffffffffff81118282101715610b1157634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610b1157634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610b1157634e487b7160e01b600052604160045260246000fd5b8015158114610b8757600080fd5b50565b600060408284031215610b9c57600080fd5b610ba4610ae0565b823581526020830135610bb681610b79565b60208201529392505050565b634e487b7160e01b600052602160045260246000fd5b600181811c90821680610bec57607f821691505b60208210811415610a4957634e487b7160e01b600052602260045260246000fd5b60008183036080811215610c2057600080fd5b610c28610ae0565b833581526060601f1983011215610c3e57600080fd5b610c46610b17565b610c4e610b48565b602086013560028110610c6057600080fd5b81526040860135610c7081610b79565b806020830152506020605f1985011215610c8957600080fd5b610c91610b17565b60609690960135865260408101959095529384526020810193909352509092915050565b80516001600160a01b0381168114610ccc57600080fd5b919050565b600060408284031215610ce357600080fd5b610ceb610ae0565b610cf483610cb5565b8152610bb660208401610cb5565b600060608284031215610d1457600080fd5b6040516060810181811067ffffffffffffffff82111715610d4557634e487b7160e01b600052604160045260246000fd5b604052610d5183610cb5565b8152610d5f60208401610cb5565b6020820152604083015160408201528091505092915050565b6001600160a01b0383168152815160208083019190915282015151805160a08301919060028110610db957634e487b7160e01b600052602160045260246000fd5b806040850152506020810151151560608401526040810151516080840152509392505050565b60008251610df1818460208701610a68565b9190910192915050565b600060208284031215610e0d57600080fd5b815161077681610b7956fea264697066735822122044f376a1e26a453f4348707b68c745ff57d37342b54bc339430b7cb8b5341fd064736f6c634300080c0033`,
  BytecodeLen: 4395,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:27:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:59:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:30:40:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Buyer_buy": Buyer_buy,
  "Owner": Owner,
  "Seller_sell": Seller_sell
  };
export const _APIs = {
  Buyer: {
    buy: Buyer_buy
    },
  Seller: {
    sell: Seller_sell
    }
  };
