import React from 'react';
import {newId} from "../foundation/newId";
import {observer} from "mobx-react";

export class ControlComponent extends React.Component {
	componentWillMount() {
		this.id = newId();
	}
}

export class Input extends ControlComponent {
	render() {
		let {label, help, ...rest} = this.props;
		return (
			<div className="form-group font-weight-bold">
				{!!label && <label htmlFor={"input_" + this.id}>{label}</label>}
				<input
					id={"input_" + this.id}
					className="form-control"
					{...rest}
				/>
				{!!help && <small className="form-text text-muted">{help}</small>}
			</div>
		)
	}
}

export class Checkbox extends ControlComponent {
	render() {
		let {label, help, ...rest} = this.props;
		return (
			<div className="form-check mb-1">
				<input type="checkbox" className="form-check-input" id={"check_" + this.id} {...rest}/>
				{!!label && <label className="form-check-label" htmlFor={"check_" + this.id}>{label}</label>}
				{!!help && <small className="form-text text-muted">{help}</small>}
			</div>
		)
	}
}

export class Radio extends ControlComponent {
	render() {
		let {label, help, ...rest} = this.props;
		return (
			<div className="form-check mb-1">
				<input type="radio" className="form-check-input" id={"radio_" + this.id} {...rest}/>
				{!!label && <label className="form-check-label" htmlFor={"radio_" + this.id}>{label}</label>}
				{!!help && <small className="form-text text-muted">{help}</small>}
			</div>
		)
	}
}

/**
 * Some messed up shit is going on there. Don't blame me, blame spaghetti with cheese!
 * Imagine you have 5 radio buttons with the same name and you want to two-way bind them to
 * object {value1:true, value2:false, value3:false, value4:false, value5:false}
 * When radiobutton becomes unchecked due to the click on the other radio within the same name,
 * no 'Change' event is dispatched on unchecked radio, so standard binding (which is based on onChange and value handling)
 * helper does not sets unchecked radio to false in binded object
 * So there is attempt to make it work by providing component which can accept object to bind to as prop
 * and array of options (checkboxes), each of them consisting of label and key it should be binded to in object
 * i dont think that is most wise approach to that problem, but i don't really care in the case of that particular project
 *
 * Danila Alpatov <alpatovdanila@gmail.com>
 */
@observer
export class LinkedRadioGroup extends ControlComponent {
	constructor(props) {
		super(props);
		this.store = props.linkObject;
	}

	render() {
		return (
			<div>{this.props.options.map((option, index) => (
				<Radio
					label={option.label}
					key={index}
					name={'CHECK_'+this.id}
					onChange={this.onChange(option)}
					disabled={option.disabled || this.props.disabled}
					checked={this.store[option.linkKey]}/>
			))}</div>
		)
	}

	onChange(option){
		return e => {

			let options = this.props.options;
			let siblings = options.filter( o => o !== option );

			siblings.forEach(option => {
				this.store[option.linkKey] = false;
			})

			this.store[option.linkKey] = true;
		}
	}


}
