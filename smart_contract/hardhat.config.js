//https://eth-ropsten.alchemyapi.io/v2/t0apUKiuIhCWDApL-02DHvAQn8J0ot_h

require('@nomiclabs/hardhat-waffle');

module.exports = {
	solidity: '0.8.4',
	networks: {
		ropsten: {
			url: 'https://eth-ropsten.alchemyapi.io/v2/t0apUKiuIhCWDApL-02DHvAQn8J0ot_h',
			accounts: ['df3ec66c9fb0f51e83e169e743d8085dbe281627cf563f8c65e04ea669fae31d']
		}
	}
}