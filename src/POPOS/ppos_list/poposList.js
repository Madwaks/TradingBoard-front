import React from 'react'
import POPOSSpace from "../popos_space/poposSpace";
import "./list.css"


class POPOSList extends React.Component {
    render() {
        return (
            <div className="POPOSList">
                <POPOSSpace name="50 California Street" address="50 California St." image="50-california-st.jpg"/>
                <POPOSSpace name="San francisco" address="40 avenue alphonse bordereau" image="100-pine.jpg"/>
            </div>
        )
    }
}

export default POPOSList
