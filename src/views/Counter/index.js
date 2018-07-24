import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Counter extends React.Component{
    render(){
        return(
            <div>
                <TextField value={this.props.counterValue}/>
                <br/>      <br/>
                <Button variant="raised" color="default" onClick={this.props.incrementFunction}>
                    increment
                </Button>
                <Button  variant="raised" color="secondary" onClick={this.props.resetFunction}>
                    reset
                </Button>
                <Button  variant="raised" color="default" onClick={this.props.decrementFunction}>
                    decrement
                </Button>

            </div>
        );
    }
}
export default Counter;