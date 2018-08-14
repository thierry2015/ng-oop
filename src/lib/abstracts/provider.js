import Initializable from './initializable';
import NotImplementedError from '../errors/not-implemented';

export default class Provider extends Initializable {

	get $get() {
		throw new NotImplementedError('$get', this, 'accessor');
	}

}
