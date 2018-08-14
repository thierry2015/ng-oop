class FactoryHelper {

	make(Service) {
		const factory = (...args) => {
			return new Service(...args);
		};

		factory.$inject = Service.$inject;

		return factory;
	}

}

export default new FactoryHelper();
