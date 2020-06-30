import React from 'react';
import Header from './Header';
import MarketControl from './MarketControl'


function App(){
    return(
        <React.Fragment>
            <div class="header">
            <Header />

            </div>
            
            <MarketControl />
        </React.Fragment>
    )
}



export default App;
