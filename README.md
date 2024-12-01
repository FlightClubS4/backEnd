<h3 id="mLpUo">Arbitrum Sepolia Address：</h3>
+ fatTokenAddress 0xbbD39D4Ce21340FbE612cd69D24Eb54e716CCFfa
+ soapTokenAddress 0xbf68E42292d3FE3050314e2090860435D5548768
+ factoryAddress 0x13604405640d7d06B9C429FDbcd172412efd46ed
+ proxyFatTokenAddress 0xDcD044748F6bc017d0a0A6A1d30C322b4bc6Df9F
+ proxySoapTokenAddress 0x5345F0009E42d5a5e5cFC3561982436ed00BD577
+ proxyFactoryAddress 0x41A7a15F319866265e05110772a3b53721499414
+ gameAddress 0xF6638F5312E91C0bA2E8d5017058D0C1e227F419

<h3 id="Rac6j">Dynamic Datasources Implemention:</h3>
[https://thegraph.com/docs/zh/developing/creating-a-subgraph/#%E5%8A%A8%E6%80%81%E5%88%9B%E5%BB%BA%E5%90%88%E7%BA%A6%E7%9A%84%E6%95%B0%E6%8D%AE%E6%BA%90%E6%A8%A1%E6%9D%BF](https://thegraph.com/docs/zh/developing/creating-a-subgraph/#%E5%8A%A8%E6%80%81%E5%88%9B%E5%BB%BA%E5%90%88%E7%BA%A6%E7%9A%84%E6%95%B0%E6%8D%AE%E6%BA%90%E6%A8%A1%E6%9D%BF)

```plain

//./src/game-efactory.ts:handleFlightClub_GameCreated
Game.bind(event.params.gameCA); 
```

<h3 id="WSNj1">Query Examples</h3>
```plain
//base example
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"query": "{ flightClubGameCreateds(first: 5) { id gameCA creator bet } }", "operationName": "Subgraphs", "variables": {}}' \
  https://api.studio.thegraph.com/query/93439/airplane_arb_sepolia/version/latest


//game List
{
  flightClubGameCreateds (first: 10){
    gameCA
    creator
    bet
  }
}
```

  


