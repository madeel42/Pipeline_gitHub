import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
export default class About extends Component{


render(){

    return(
        <div>
            <Header />
            <Footer
                title="Meo-Sartawi App" 
                description="Copyright&copy;2019, Moe Sartawi Corporation"
             />
        </div>
    );
}

}