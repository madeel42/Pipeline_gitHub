import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
export default class HomeComponent extends React.Component {

    render(){
        return(
            <div>
                <Header />
                <h2>Home Page </h2>

                <Footer title="Meo-Sartawi App" description="Copyright&copy;2019, Moe Sartawi Corporation"/>
      

            </div>
        );
    }
} 