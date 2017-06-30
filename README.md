# Redux Reducer
Keeps your reducers organised as an object literal where each key is the action name.

## Example

```javascript
import {createReducer} from 'redux-reducer'

var initial = fromJS({
	campaigns: {}
})

var handlers = {

	SOME_ACTION: function(state, action) {
		return state.mutate()
	}
}

export default createReducer(initial, handlers)
```

