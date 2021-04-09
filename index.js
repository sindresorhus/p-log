import pTap from 'p-tap';

const pLog = (logger = console.log) => pTap(value => {
	logger(value);
});

pLog.catch = (logger = console.log) => pTap.catch(error => {
	logger(error.stack || error);
});

export default pLog;
