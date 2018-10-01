import React from 'react';
import {Input} from "../FormControls";

const sendPhone = phone => fetch('/', {
	method:'POST',
	body:{phone}
});

export class PhoneCollector extends React.Component{

	constructor(){
		super();
		this.state = {
			phone:'',
			sent:false,
		}

		this.onInput = this.onInput.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	render(){
		return(

			<div className="phone-container col-sm-12" id="phone-form">
				{!this.state.sent && (
					<form action="" onSubmit={this.onFormSubmit}>
                     
					
					  <label>Остались вопросы? Оставьте свой номер телефона и мы с вами свяжемся.</label>
					  <div className="row">
					  <div className="col">
						<Input 
						placeholder={"+7 ___ ___-__-__"} 
						onInput={this.onInput} 
						value={this.state.phone} 
						required/></div>

						<div><button className={"btn btn-warning font-weight-bold text-white"}>Хорошо, жду звонка</button></div>
						</div> 
					</form>
					 
				)}
             
				{this.state.sent && (
					<div>Заявка отправлена!</div>
				)}
			</div>

		)
	}

	onInput(event){
		this.setState({phone: event.target.value});
	}

	onFormSubmit(event){
		event.preventDefault();
		sendPhone(this.state.phone).then( response => {
			// fake
			this.setState({sent:true})
		})
	}
}


