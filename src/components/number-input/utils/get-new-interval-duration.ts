import {
	ACCELERATED_SPIN_HOLD_TIMEOUT,
	ACCELERATED_SPIN_TRESHOLD_TIMEOUT,
	HOLDING_SPIN_TIMEOUT,
	INITIAL_SPIN_HOLD_TIMEOUT,
	INITIAL_SPIN_TRESHOLD_TIMEOUT,
} from '@/components/number-input/constants/constants'

function getNewIntervalDuration(duration: number) {
	if (duration === INITIAL_SPIN_TRESHOLD_TIMEOUT) {
		return INITIAL_SPIN_HOLD_TIMEOUT // initial delay of 500ms
	}

	if (duration < ACCELERATED_SPIN_TRESHOLD_TIMEOUT) {
		return ACCELERATED_SPIN_HOLD_TIMEOUT // then repeat once with delay of 100ms
	}

	return HOLDING_SPIN_TIMEOUT // then repeat every 10ms
}

export { getNewIntervalDuration }
