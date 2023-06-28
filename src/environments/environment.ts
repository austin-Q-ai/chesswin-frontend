export const environment = {
	production: false,

	cognito: {
		identityPoolId: 'us-east-1:d5a20882-05be-48cc-82bc-fcb9b2211080',
		poolId: 'us-east-1_i7YIR7dpe',
		poolName: 'i7YIR7dpe',
		webClientId: '252vhvn71nnnoromuhovo6qvg1',
		region: 'us-east-1',
	},

	socket: {
		userPoolName: 'ChessGame',
		userPoolId: 'us-east-1_i7YIR7dpe',
		userPoolWebClientId: '252vhvn71nnnoromuhovo6qvg1',
		identityPoolId: 'us-east-1:d5a20882-05be-48cc-82bc-fcb9b2211080',
		userPoolRegion: 'us-east-1',
		webSocketUrl: 'wss://iwbi8s1f69.execute-api.us-east-1.amazonaws.com/prod?userId=',
	},

	lambdaAlias: '$LATEST',

	admin: {
		username: 'admin@chesswin',
		password: '123456',
	},
};
