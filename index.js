/**
 * @function createReducer
 * @since 0.1.0
 */
export function createReducer(initial, handlers) {

	return function(state = initial, action) {

		var handler = handlers[action.type]
		if (handler) {
			return handler(state, action)
		}

		return state
	}
}