import { Component } from 'react';

class Form extends Component{

state={
    username:'',
    color:'',
    colors: ["","red","blue","green","black","pink"],
    commentaire:''
}
handlePseudo= e =>{
this.setState({
    username : e.target.value

})
}
handleColor=event=>{
    this.setState({
        color : event.target.value
    
    })
}
handleText=event=>{
    this.setState({
        commentaire : event.target.value
    
    })
}
handsubmit=e=>{
    e.preventDefault();
    
    }
// }

render(){
    return(
        <div>
            <h1>Formulaire</h1>
            <form onSubmit={this.handsubmit}>
                <div>
                <label>pseudo</label>
                <input type="text" value={this.state.username} onChange={this.handlePseudo} />
                </div>

                <div>
                    <label>Couleur</label>
                    <select value={this.state.color} onChange={this.handleColor}>
                        {
                            this.state.colors.map((color,index)=>{
                            return  <option key={index} value={color}>{color}</option>
                            })
                        }
                        
                       
                    </select>
                </div>
                <div>
                    <label>Commentaire</label>
                    <textarea value={this.state.commentaire} onChange={this.handleText}></textarea>

                </div>

         

            </form>

        </div>
    )
}

}

export { Form };