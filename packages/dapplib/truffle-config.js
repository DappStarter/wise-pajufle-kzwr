require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun foot alcohol release stereo snow gown light army genre'; 
let testAccounts = [
"0xf6f50288bccecf98ff464ffe9bf5f60492fdb783a1598d042c2f0628ed7a7dc8",
"0x09558e62dd0032849f25c0217351719c97241c2acc8dbfa914c8b37258c107f1",
"0xf39bed91ddfc222cf1e9eceee1d0bb5db7be8b089fdc464f32fa7117a4f9c007",
"0x6480d546de77c15e51a7b096634f0c91a4631e19d43886fe00550072fba460b7",
"0x2eb8cc67cc016188a3ff3d796f2d1c170535da7a32e4d22db121462f2be6f705",
"0x4530e5a2ca65d257fc133267e8d15be34c1b7ca545f11bb116309da97f65a430",
"0x9a6773125074f02656a71b34d89bee26cf2c2b151f6fba7453cb38b6c1512474",
"0x4b580fb34a6c811534ca6f53494251862e03c750d645c2562442cfe85fe3c3c3",
"0x952664af0d4e832e29f25eaa3339f3414b8b953b80872ae479686c2761ee7062",
"0x0bcb4959c6ddff35d04f154f1f00d3115e175cf55738030e858c12cb01bc7f14"
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


