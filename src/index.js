import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import POPOSList from "./POPOS/ppos_list/poposList";
import Footer from "./footer/Footer"
import Header from "./header/Header";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <POPOSList />
                <Footer />
            </div>

        );
    }
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
