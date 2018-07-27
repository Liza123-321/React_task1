import React from 'react';
import TextField from '@material-ui/core/TextField';

 const Errors = ({formErrors}) =>
    <div>
        {Object.keys(formErrors).map((fieldName, i) => {
            return (<div key={i}>
                    <TextField
                        error
                        label="Email Error"
                        value={formErrors[fieldName]}
                    />
                    <br/><br/>
                </div>

            )
        })}
    </div>

export default Errors;