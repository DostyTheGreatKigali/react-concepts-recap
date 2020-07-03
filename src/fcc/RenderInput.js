import React from 'react'

class RenderInput extends React.Component {

    render() {
        return (
            <div>
                <h3>Input Render:</h3>
                <p>{this.props.input}</p>
            </div>
        );
    }
};
export default RenderInput
