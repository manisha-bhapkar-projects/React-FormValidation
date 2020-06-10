import React from 'react';
import ReactDOM from 'react-dom';
import '../component/stylesheet.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';


class Forms extends React.Component{
   
    constructor(){
        
        super();
        this.state={
            name:"",
            email:"",
            description:"",
            phone:"",
            nameError:"",
            emailError:"",
            despError:"",
            value:{min:0 , max:500000},
           
        }
    }
        
        change = e => {
            this.setState({
              [e.target.name]: e.target.value
            });
          };

            validate = () => {
            let isError = false;
            const errors = {
                nameError: "",
                emailError: "",
                despError: "",
           
            };
            if (this.state.name.length < 5) {
                isError = true;
                errors.nameError = "Name needs to be atleast 5 characters long";
              }
             if(this.state.description =="")
             {
                 isError =true;
                errors.despError = "This field is required";


             }
          
              if (this.state.email.indexOf("@") === -1)

              {
                isError = true;
                errors.emailError = "Requires valid email";
              }
          
              this.setState({
                ...this.state,
                ...errors,
                
              });
               
              return isError;
            };
       


   
    onValid = e => {
    e.preventDefault();
    console.log(this.state);
    
    const err = this.validate();
    if (!err) {
      this.setState({
        nameError: "",
        emailError: "",
        despError: "",
   
      });
   
    }
  };


    

    render(){
        return(
                <div className="container-main container">
                 <div className="heading">
                 <svg className="bi bi-chat-square-dots-fill icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M0 2a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-2.5a1 1 0 00-.8.4l-1.9 2.533a1 1 0 01-1.6 0L5.3 12.4a1 1 0 00-.8-.4H2a2 2 0 01-2-2V2zm5 4a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
                     </svg>&nbsp;&nbsp;
                   <span>
                     <b>Get in touch to discuss your project, request a quote or even just to pick our brains.</b>

                   </span>
                    
                   
                 </div>

   
		<form  class="form-container">
			<div  className="form-row">
             <p>1. Tell us about your company</p>
            </div>
			<div className="form-row">
                <input type="text"  className="form-textbox" required
                 name="name"
                 value={this.state.name}
                 onChange={e => this.change(e)}
                 onBlur={e => this.onValid(e)}/>
				<label className="form-label">Your Name*</label>
			</div>

           <div style={{fontSize: 12, color:"red"}}>{this.state.nameError}</div>

			<div className="form-row">
                <input type="text"className="form-textbox" required
                 name="email"
                value={this.state.email}
                onChange={e => this.change(e)}
                onBlur={e => this.onValid(e)}/>
				<label  className="form-label">Your Email*</label>
			</div>

           <div style={{fontSize: 12, color:"red"}}>{this.state.emailError}</div>

            <div className="form-row">
				<input type="Number"className="form-textbox" required
                 name="phone"
                 onChange={e => this.change(e)}
                 />
				<label  className="form-label">Your Phone Number</label>
			</div>
            <div className="form-row">
				<input type="text"className="form-textbox" required
                 name="website"
                 onChange={e => this.change(e)}/>
				<label  className="form-label">Company Website</label>
			</div>
            <div className="form-row">
				<input type="text"className="form-textbox" required
                 name="challenges"
                 onChange={e => this.change(e)}/>
				<label  className="form-label">What's Your Company's Biggest Challenge Today?</label>
			</div>

            <div  className="form-row">
             <p>2. What are you looking to work on?</p>
            </div>
            <div className="form-row">
                <textarea type="text"className="form-textbox" required
                name="description"
                value={this.state.description}
                onChange={e => this.change(e)}
                onBlur={e => this.onValid(e)}/>
				<label  className="form-label">Describe Your Project?</label>
			</div>

           <div style={{fontSize: 12, color:"red"}}>{this.state.despError}</div>


            <div className="form-row">
				<p >What’s your budget?</p>
            
            </div>
            <InputRange 
            maxValue={500000}
            minValue={0}
            value={this.state.value}
            onChange={value=>this.setState({value})}/>
           <br/>

            <div className="form-row budget ">
            <input type="file"  name="filename"/>
                <p></p>
            </div>

            <div className="form-row">
                <p>3. What services are you interested in?</p>
                </div>
                <div className="form-col">

               
                <div class="checkbox radio">
                <label><input type="checkbox" value=""/>   Web or Mobile App Development</label>
               </div>
                <div class="checkbox radio">
                <label><input type="checkbox" value=""/>   Hire Dedicated Developers</label>
                </div>
                <div class="checkbox radio">
                <label><input type="checkbox" value="" />   AI/ML Development Services</label>
                 </div>
                 <div class="checkbox radio">
                <label><input type="checkbox" value=""/>   Custom Software Development</label>
                 </div>

                 </div>
               
         <div className="form-row">
           <button >Submit</button>
			</div>


			
		</form>

                 </div>

        );
    }
}

export default Forms;