export default class Injectable {

	static get $inject() {
		return [];
	}

	constructor(...args) {
		this.constructor.$inject.forEach((dependencyName, index) => {
			this[dependencyName] = args[index];
		});
	}

}
