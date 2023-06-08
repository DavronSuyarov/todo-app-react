import React from 'react'
import Banner from './Banner'
import Services from './Services'
import Feature from './Feature'
import PriceList from './PriceList'
import Clients from './Clients'
import Contacts from './Contacts'
import Footer from './Footer'


const App  = ()=>{

    return (
        <div>
            <Banner/>
            <Services/>
            <Feature type='right'/>
            <Feature type='left'/>
            <PriceList/>
            <Clients/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App