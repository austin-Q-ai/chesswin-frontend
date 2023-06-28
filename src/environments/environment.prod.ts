export const environment = {
	production: true,

	cognito: {
		identityPoolId: 'us-east-1:e09e7ff1-17da-4d2a-b0f2-7148ca30fb30',
		poolId: 'us-east-1_rri38aeY3',
		poolName: 'bHGSpZhIu',
		webClientId: '4bkjn5rstvvdjev33e0si7jj',
		region: 'us-east-1',
	},

	socket: {
		userPoolName: 'ChessGame',
		userPoolId: 'us-east-1_rri38aeY3',
		userPoolWebClientId: '13jrcfr509rjcaf1tn4qmstdts',
		identityPoolId: 'us-east-1:e09e7ff1-17da-4d2a-b0f2-7148ca30fb30',
		userPoolRegion: 'us-east-1',
		webSocketUrl: 'wss://3yd2l51t28.execute-api.us-east-1.amazonaws.com/prod?userId=',
	},

	lambdaAlias: 'prod-v1',

	admin: {
		username: 'admin@chesswin',
		password: '123456',
	},
};
