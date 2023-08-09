export const environment = {
	production: false,

	cognito: {
		identityPoolId: 'us-east-1:b3796c0d-bdb6-4a87-a0cf-5507bad14df1',
		poolId: 'us-east-1_Ts5kGVwQz',
		poolName: 'chess-identity-pool',
		webClientId: '6v3baohtsd1r1lru9136osuebq',
		region: 'us-east-1',
	},

	socket: {
		userPoolName: 'chess-user-pool',
		userPoolId: 'us-east-1_Ts5kGVwQz',
		userPoolWebClientId: '6v3baohtsd1r1lru9136osuebq',
		identityPoolId: 'us-east-1:b3796c0d-bdb6-4a87-a0cf-5507bad14df1',
		userPoolRegion: 'us-east-1',
		webSocketUrl: ' wss://0d0o8mpqqg.execute-api.us-east-1.amazonaws.com/prod?userId=',
	},

	lambdaAlias: '$LATEST',

	admin: {
		username: 'admin@chesswin',
		password: '123456',
	},
};
