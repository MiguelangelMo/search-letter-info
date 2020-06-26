import React, { useState } from 'react'

const Error = (props) => {
    return (<div>
        <p className="alert alert-danger text-center p-2 font-weight-bold">
            {props.title}
        </p>
    </div>);
}

export default Error;