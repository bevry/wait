/** A promise that resolves after the specified milliseconds. */
export default function wait(milliseconds: number) {
	if (milliseconds > 0 && milliseconds < 100) {
		console.warn(
			'`@bevry/wait` accepts milliseconds, you may have attempted to send it seconds',
		)
	}
	return new Promise(function (resolve, reject) {
		setTimeout(resolve, milliseconds)
	})
}
