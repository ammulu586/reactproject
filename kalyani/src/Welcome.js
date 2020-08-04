import React from "react";


export default function Welcome(props) {

	return(
		<div>
		    <h1> {props.name} </h1>
		    {props.children}
		</div>
	)
	
}






/*class Welcome extends React.Component{
	render(){
		return(
			<div>
			    <h1> Kalyani </h1>
			    <h2> Sandu </h2>
			    <h3> Ammu </h3>
			    <Welcome1/>
			</div>
		)
	}
}*/


/*class Welcome1 extends React.Component{
	render() {
		return (
			<div>
			    <h1> Lakshmi </h1>
			</div>
		)
	}
}*/