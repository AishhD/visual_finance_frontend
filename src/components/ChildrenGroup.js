import React from 'react';


export default class ChildrenGroup extends React.Component {


    render() {
        return (
            <div className="ui stackable center aligned page grid">
                <h1>Selct your children group</h1>
                <select onChange={this.props.onChildrenChange} defaultValue="Children" name='children'>
                    {/* <option selected disabled>Children</option> */}
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        )
    }
}