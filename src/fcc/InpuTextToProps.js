import React from 'react'

export default function InpuTextToProps(props) {

    // const { statusFromState, handleClickFromState, handleChangeFromState } = props;
    return (
        <div>
            <input
                type="text"
                name="status"
                defaultValue={props.statusFromState}
                onChange={() => props.handleChangeFromState}
            // onChange={handleChangeFromState}
            // value={statusFromState}
            />
            <button type="submit">Render Text</button>
        </div>
    )
}
