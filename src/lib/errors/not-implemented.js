export default class NotImplementedError extends Error {

	constructor(property, instance, type = 'method') {
		super(`The ${type} "${property}" is not implemented for class "${instance.constructor.name}"`);
		this.name = 'NotImplementedError';
	}

}
