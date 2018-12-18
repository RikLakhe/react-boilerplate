import React, {Component} from 'react'
import {hot} from 'react-hot-loader'
import './App.css'

// import Index from './layout/form/index'
// import ValidationTable from './layout/table/ValidationTable'
import PrintPage from './layout/finalPrint/index'


// const Warning = React.lazy(() => {
//     import ('./warning')
// })

class App extends Component {
   
    render() {
        
        return (
            <div>
                
                        <PrintPage />
                    </div>
        )
    }
}

const hotFunction = hot(module);

export default hotFunction(App);