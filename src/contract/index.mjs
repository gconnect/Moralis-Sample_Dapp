import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const accOwner =
  await stdlib.newTestAccount(startingBalance);
console.log('Hello, Alice and Bob!');

console.log('Launching...');
const ctcOwner= accOwner.contract(backend);
// const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const nft = await stdlib.launchToken(accOwner, "MyNFT", "MNT", {supply: 1})
console.log(nft.id)
console.log('Starting backends...');
await Promise.all([
  backend.Owner(ctcOwner, {
    ...stdlib.hasRandom,
    nft: nft.id
    // implement Alice's interact object here
  }),

]);

const users = await stdlib.newTestAccounts(2, startingBalance);
const ctcWho = (whoi) =>  users[whoi].contract(backend, ctcAlice.getInfo());

const bob = async (whoi) => {
  const who = users[whoi];
  const ctc = ctcWho(whoi);
  console.log('Address of', stdlib.formatAddress(who));
  // console.log(`Before account balance of ${who} is ${await getAccountBalance(ctc)}`)
  await who.tokenAccept(nft.id) 

  const msg = await ctc.apis.Seller.sell(5);  
  console.log(msg)
    // console.log(`After account balance of ${who} is ${await getAccountBalance(ctc)}`)
  }

await bob(0)
await bob(1)

console.log('Goodbye, Alice and Bob!');
