var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'BlogShell';
config.appDescription = 'BlogCoin Wallet';
config.appSlogan = 'Slow and steady wins the race!';
config.appId = 'cf.blogcoin.blogshell';
config.appGitRepo = 'https://github.com/blognetwork/BlogCoin-electron-wallet';

// default port number for your daemon (e.g. BlogCoinDeamon)
config.daemonDefaultRpcPort = 54313;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'wallet';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'blogcoin-service';

// version on the bundled service (blogcoin-service)
config.walletServiceBinaryVersion = "v0.1.0";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 54311;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'http://be.stx.nl/BLOG/?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'be.stx.nl:54313';

// remote node list update url, set to null if you don't have one
// raw list: https://raw.githubusercontent.com/blognetwork/BlogCoin-nodes-data/master/blogcoin-nodes.json
config.remoteNodeListUpdateUrl = 'https://raw.githubusercontent.com/blognetwork/BlogCoin-nodes-data/master/blogcoin-nodes.json';

// set to false if using raw/unfiltered node list
config.remoteNodeListFiltered = false;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  'mine2.live:54313'
];
config.remoteNodeCacheSupported = false;
config.remoteNodeSslSupported = false;

// your currency name
config.assetName = 'BlogCoin';
// your currency ticker
config.assetTicker = 'BLOG';
// your currency address prefix, for address validation
config.addressPrefix = 'bL';
// standard wallet address length, for address validation
config.addressLength = 97;
// integrated wallet address length, for address validation. Added length is length of payment ID encoded in base58.
config.integratedAddressLength = config.addressLength + ((64 * 11) / 8);

// minimum fee for sending transaction
config.minimumFee = 0.05;
// minimum amount for sending transaction
config.mininumSend = 0.0;
// default mixin/anonimity for transaction
config.defaultMixin = 2;
// to represent human readable value
config.decimalPlaces = 7;
// to convert from atomic unit
config.decimalDivisor = 10 ** config.decimalPlaces;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79119fbc0ca1b7130832a42de56142cf6c4b7f333fe6fcb5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'BlogCoin Donation',
    address: 'bL3vfsyGGN24ZfNxfMEuhpgL61VAwc8ioi6aYh8nf7R5HMsfhGQMP6vYNk1WvAh3NtjgjSoFpsrst8ET4pwtrdRg1cXGwfYHv',
    paymentId: '',
  }
];
// cipher config for private address book
config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;
