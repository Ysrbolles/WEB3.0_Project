//https://eth-ropsten.alchemyapi.io/v2/t0apUKiuIhCWDApL-02DHvAQn8J0ot_h

require('@nomiclabs/hardhat-waffle');

module.exports = {
	solidity: '0.8.4',
	networks: {
		ropsten: {
			url: 'YOUR_ROPSTEN_URL',
			accounts: ['YOUR_ACCOUNT_ADDRESS'],
		}
	}
}