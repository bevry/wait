import { equal } from 'assert-helpers'
import kava from 'kava'

import wait from './index.js'

kava.suite('@bevry/wait', function (suite, test) {
	test('waited', function (done) {
		let waited = 'pending'
		wait(200)
			.then(function () {
				equal(waited, 'waiting')
				waited = 'waited'
			})
			.then(() => done())
			.catch(done)
		equal(waited, 'pending')
		waited = 'waiting'
	})
})
