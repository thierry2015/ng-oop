class DirectiveHelper {

	make(ngModule, name, directive) {
		return ngModule.directive(name, [
			() => {
				return directive;
			}
		]);
	}

}

export default new DirectiveHelper();
