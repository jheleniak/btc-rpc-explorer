var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

var currencyUnits = [
	{
		type:"native",
		name:"PRCX",
		multiplier:1,
		default:true,
		values:["", "prcx", "PRCX"],
		decimalPlaces:8
	},
	{
		type:"native",
		name:"lite",
		multiplier:1000,
		values:["lite"],
		decimalPlaces:5
	},
	{
		type:"native",
		name:"photon",
		multiplier:1000000,
		values:["photon"],
		decimalPlaces:2
	},
	{
		type:"native",
		name:"litoshi",
		multiplier:100000000,
		values:["litoshi", "lit"],
		decimalPlaces:0
	},
	{
		type:"exchanged",
		name:"USD",
		multiplier:"usd",
		values:["usd"],
		decimalPlaces:2,
		symbol:"$"
	},
];

module.exports = {
	name:"PricecoinX",
	ticker:"PRCX",
	logoUrl:"/img/logo/prcx.svg",
	siteTitle:"PricecoinX Explorer",
	siteDescriptionHtml:"<b>PricecoinX Explorer</b> is <a href='https://github.com/jheleniak/btc-rpc-explorer). ",	
	nodeTitle:"PricecoinX Full Node",
	nodeUrl:"https://pricecoincrpyto.com",
	demoSiteUrl: "https://pricecoincrpyto.com/",
	miningPoolsConfigUrls:[
		"https://raw.githubusercontent.com/btccom/Blockchain-Known-Pools/master/pools.json",
		"https://raw.githubusercontent.com/blockchain/Blockchain-Known-Pools/master/pools.json"
	],
	maxBlockWeight: 4000000,
	targetBlockTimeSeconds: 30,
	currencyUnits:currencyUnits,
	currencyUnitsByName:{"PRCX":currencyUnits[0], "lite":currencyUnits[1], "photon":currencyUnits[2], "litoshi":currencyUnits[3]},
	baseCurrencyUnit:currencyUnits[3],
	defaultCurrencyUnit:currencyUnits[0],
	feeSatoshiPerByteBucketMaxima: [5, 10, 25, 50, 100, 150, 200, 250],
	genesisBlockHashesByNetwork:{
		"main":    "e96fe042f9a306b109b7276c47488fceafcbd98a4456676bcf42307087af30f2"			
			},
	genesisCoinbaseTransactionIdsByNetwork: {
		"main":    "d6e9a320e9aa8aef4618a7a7c3fa99c971c1cf936d512031e60fcd8ea83e6744",
			},
	genesisCoinbaseTransactionsByNetwork:{
		"main": {
			"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0804ffff001d02fd04ffffffff0100f2052a01000000434104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac00000000",
			"txid": "d6e9a320e9aa8aef4618a7a7c3fa99c971c1cf936d512031e60fcd8ea83e6744",
			"hash": "d6e9a320e9aa8aef4618a7a7c3fa99c971c1cf936d512031e60fcd8ea83e6744",
			"size": 165,
			"vsize": 165,
			"version": 1,
			"confirmations":167385,
			"vin": [
				{
					"coinbase": "04ffff001d01041e31342f31302f32303139205072696365636f696e58204c61756e63686573",
					"sequence": 4294967295
				}
			],
			"vout": [
				{
					"value": 50,
					"n": 0,
					"scriptPubKey": {
						"asm": "040184710fa689ad5023690c80f3a49c8f13f8d45b8c857fbcbc8bc4a8e4d3eb4b10f4d4604fa08dce601aaf0f470216fe1b51850b4acf21b179c45070ac7b03a9 OP_CHECKSIG",
						"hex": "41040184710fa689ad5023690c80f3a49c8f13f8d45b8c857fbcbc8bc4a8e4d3eb4b10f4d4604fa08dce601aaf0f470216fe1b51850b4acf21b179c45070ac7b03a9ac",
						"reqSigs": 1,
						"type": "pubkey",
						"addresses": [
							"PUDHB8FFeCnpuoF8nBiFnfutDxGqjBV7QF"
						]
					}
				}
			],
			"blockhash": "e96fe042f9a306b109b7276c47488fceafcbd98a4456676bcf42307087af30f2",
			"time": 1571048398,
			"blocktime": 1571048398
		},
		},
	genesisCoinbaseOutputAddressScripthash:"a5910e72fee6a2aca123d79e95c5bdd5b4eae54f2f755b57e8df836c099c0db5",
	historicalData: [
		{
			type: "blockheight",
			date: "2019-10-14",
			chain: "main",
			blockHeight: 0,
			blockHash: "e96fe042f9a306b109b7276c47488fceafcbd98a4456676bcf42307087af30f2",
			summary: "The PricecoinX Genesis Block.",
			alertBodyHtml: "This is the first block in the PricecoinX blockchain, known as the 'Genesis Block'.",
			referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
		},
		{
			type: "tx",
			date: "2019-10-14",
			chain: "main",
			txid: "d6e9a320e9aa8aef4618a7a7c3fa99c971c1cf936d512031e60fcd8ea83e6744",
			summary: "The coinbase transaction of the Genesis Block for PricecoinX.",
			alertBodyHtml: "This is the Coinbase transacation for the Genesis Block for PricecoinX",
			referenceUrl: "https://bitcoin.org/en/glossary/coinbase"
		},
		],
	exchangeRateData:{
		jsonUrl:"https://api.coindesk.com/v1/bpi/currentprice.json",
		responseBodySelectorFunction:function(responseBody) {
			//console.log("Exchange Rate Response: " + JSON.stringify(responseBody));

			var exchangedCurrencies = ["USD", "GBP", "EUR"];

			if (responseBody.bpi) {
				var exchangeRates = {};

				for (var i = 0; i < exchangedCurrencies.length; i++) {
					if (responseBody.bpi[exchangedCurrencies[i]]) {
						exchangeRates[exchangedCurrencies[i].toLowerCase()] = responseBody.bpi[exchangedCurrencies[i]].rate_float;
					}
				}

				return exchangeRates;
			}
			
			return null;
		}
	},
	blockRewardFunction:function(blockHeight, chain) {
		var eras = [ new Decimal8(50) ];
		for (var i = 1; i < 34; i++) {
			var previous = eras[i - 1];
			eras.push(new Decimal8(previous).dividedBy(2));
		}

		var halvingBlockInterval = (chain == "regtest" ? 150 : 210000);
		var index = Math.floor(blockHeight / halvingBlockInterval);

		return eras[index];
	}
};
