import CovalentLogEvent from 'src/interfaces/covalent-log-event-interface';
import CovalentLogEventDecoded from 'src/interfaces/covalent-log-event-decoded-interface';

const getDecodedLogEvent = (
	logEvents: CovalentLogEvent[],
	eventName: string
): CovalentLogEventDecoded => {
	const swapLogEvent = logEvents.find((logEvent) => {
		return logEvent.decoded.name === eventName;
	});

	return swapLogEvent.decoded;
};

export default getDecodedLogEvent;
