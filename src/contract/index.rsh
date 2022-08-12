'reach 0.1';

export const main = Reach.App(() => {

  const O = Participant('Owner', {
    // Specify Alice's interact interface here
    nft: Token
  });

  const S = API('Seller', {
    // Specify Bob's interact interface here
    sell: Fun([UInt], Bool)
  });

  const B = API('Buyer', {
    // Specify Bob's interact interface here
    buy: Fun([], Null)
  });


  init();
  // The first one to publish deploys the contract
  O.only(() =>{
    const nftId = declassify(interact.nft)
  })
  O.publish(nftId);
  commit();
  O.pay([ [1, nftId] ])

  const [price, owner] = parallelReduce([0, O])
  .invariant(balance() == 0 && balance(nftId) == 1)
  .while(true)
  //Assume function
  .api(S.sell, (p) =>{
    check(p > 0)
    check(this == owner)
  },
  //pay function
  (p) => 0,
  //consensus function
  (p, k) => {
    check(p > 0)
    check(this == owner)
    k(true)
    return[p, owner]
  })

  .api(B.buy, 
  //pay function
  () => price,
  //consensus function
  (k) => {
    k(null)
    transfer(price).to(owner)
    return[price, this]
  })

  // transfer(price).to(O)
  commit()
  exit();
});
