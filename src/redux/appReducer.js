import {SearchAPI} from '../DAL/api'

let defaultState = {
	result: [],
	chosen: [],
	adden: []

}

export let appReducer = (state = defaultState, action) => {
	switch (action.type){
		case "DELETE_RESULT":
		return {
			...state,
			result: []
		}
		case "ADD_RESULT":
		return {
			...state,
			result: [{id:action.id, image: "https://cdn-images.win.gg/" + action.image, title:action.title, description:action.description}, ...state.result]
		}
		case "ADD_CHOSEN":
		return {
			...state,
			chosen: [...state.chosen, action.item],
			adden: [action.item.id, ...state.adden]

		}
		case "REMOVE":
		return {
			...state,
			chosen: state.chosen.filter(e => e !== action.item),
			adden: state.adden.filter(e => e !== action.id)

		}
	}
return state
    
}

export let deleteResult = () => {return {type:"DELETE_RESULT"}}
export let addResult = (id, image, title, description) => {return {type:"ADD_RESULT", id, image, title, description}}
export let addChosen = (item) => {return {type:"ADD_CHOSEN", item}}
export let removed = (item, id) => {return {type:"REMOVE", item, id}}




export let searchThunk = (value) => {
	return (dispatch) => {
		dispatch(deleteResult())
		SearchAPI(value).then(res => {
			if(!!res.data[0]){
				res.data[0].documents.map(e => {dispatch(addResult(e.id, e.images.square.filePath, e.title, e.description))})
			}
			
		})
        
	}
}



export let chosenThunk = (item) => {
	debugger
	return(dispatch) => {
		dispatch(addChosen(item))
		dispatch(deleteResult())
	}
}

