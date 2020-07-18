import React from 'react'
import {reduxForm, Field} from 'redux-form'
import style from './result.module.css'

let SearchForm = (props) => {
	return (
          <form  onSubmit={props.handleSubmit}>
             <Field className={style.input} name={'search'} component="input"/>
             <button className={style.button}>Search</button>
          </form>
		)
}

let ReduxSearchForm = reduxForm({form:'app'})(SearchForm)


export default ReduxSearchForm