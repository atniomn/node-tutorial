module.exports = {
	apps: [{
		name: 'tutorial-2',
		script: '~/server/current/index.js'
	}],
	deploy: {
		production: {
			user: 'ubuntu',
			host: '18.222.48.98',
			key: '~/.ssh/aws_key.pem',
			ref: 'origin/master',
			repo: 'git@github.com:atniomn/node-tutorial.git',
			path: '/home/ubuntu/server',
			post-deploy: 'npm install && pm2 startOrRestart ecosystem.config.js'
		}
	}
}
