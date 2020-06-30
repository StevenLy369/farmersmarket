import React from 'react';
import MarketList from './MarketList';
import StoreHours from './StoreHours';


class MarketControl extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            selectionVisible:false
        };

    }
    handleClick =() =>{
        this.setState(prevState => ({
            selectionVisible: !prevState.selectionVisible
        }));
    }

    render(){
        let selectionVisible = null;
        let buttonText = null;

        if(this.state.selectionVisible){
            selectionVisible = <StoreHours />;
            buttonText = "Return to Selection";
        }else{
            selectionVisible = <MarketList />;
            buttonText="Return to Hours"
        }
        return(
            <React.Fragment>
                <button onClick={this.handleClick}>{buttonText}</button>
                {selectionVisible}
                
            </React.Fragment>
        )


    }
}


export default MarketControl;
