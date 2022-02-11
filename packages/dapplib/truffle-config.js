require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name renew magic mimic hunt perfect frame giggle'; 
let testAccounts = [
"0x69fa1e08e6926f8104d62eded3270a64e6823415d2fb8c42703d046a21bb1d4c",
"0xe1f19b7b0d4e91f294e50f8492f3b49b46041e5ac97a1bea142ff055e86b4f71",
"0x3aba61394764a117a7c2b6eb48c55254b7f09823664f1a8db62b0fc5b6145f5f",
"0x2779673a8593db44bb1488bb1c84e843a99d7a9edc6dd0857a37f01992868ced",
"0x1e09485afd9a0f6663fb067500beae71ac0a0b732b51ed9802da977f63b5235f",
"0xaf1cfb6a79896d50759b67a70911a20417c577e259f6b1f177bef4845d316d39",
"0x700a36cc4a61e2c647fe0a399b4f7240c713f60e99e0e7311af2a27fb387ffb3",
"0x050f33c9babc5697b5148b33a6b4ef1a01d6ed39523137d91d4f1461376b09ad",
"0x7c768b4bdc246c8104055488f6320dad79dccd577e4a239870376892f08891a3",
"0x65587630fa286fc2218859932838b33d7a7d2915618a09e721975eba1592e0bd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


