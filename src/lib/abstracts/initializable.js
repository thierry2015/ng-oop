import Injectable from './injectable';

export default class Initializable extends Injectable {

	constructor(...args) {
		super(...args);
		this.init();
		angular.injector(['ng']).get('$timeout')(() => {
			this.delayedInit();
		});
	}

	init() {
		// eslint-disable-line empty-function
	}

	delayedInit() {
		// eslint-disable-line empty-function
	}

}
