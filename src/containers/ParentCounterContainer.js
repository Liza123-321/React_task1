import React from 'react';
import ParentCounter from '../views/ParentCounter/index';
import CounterContainer from './CounterContainer';
import PropTypes from 'prop-types';

class ParentCounterContainer extends React.Component{
    constructor(props){
        super(props);
        this.addCounterContainer=this.addCounterContainer.bind(this);
        this.resetCounterContainer=this.resetCounterContainer.bind(this);
        this.removeCounterContainer=this.removeCounterContainer.bind(this);
        this.eachTask=this.eachTask.bind(this);
        this.state={
            countCounter: 1,
            counterContainers:[
                0,
            ],
        }
    };
    addCounterContainer() {
        var arr = this.state.counterContainers;
        this.setState({ countCounter: this.state.countCounter + 1 });
        arr.push (this.state.countCounter);
        this.setState ({counterContainers: arr});
        console.log(this.state.counterContainers);
    }
    resetCounterContainer() {
        var arr = [0];
        this.setState ({counterContainers: arr});
        this.setState({ countCounter: 1 });
    }
    removeCounterContainer() {
        if(this.state.countCounter>1){
            var arr = this.state.counterContainers;
            arr.splice (this.state.countCounter-1);
            this.setState({ countCounter: this.state.countCounter - 1  });
            this.setState ({counterContainers: arr});
            console.log(this.state.counterContainers);
        }
        else  console.log('only 1 countContainer');
    }
    eachTask = (i) => {
        return (
            <CounterContainer key={i}></CounterContainer>
        )
    }
    render(){
        return(
            <div>
                <ParentCounter
                    countCounter={this.state.countCounter}
                    addFunction={this.addCounterContainer}
                    resetFunction={this.resetCounterContainer}
                    removeFunction={this.removeCounterContainer}
                />
                <div>
                    {
                        this.state.counterContainers.map(this.eachTask)
                    }
                </div>
            </div>
        );
    }
}
ParentCounterContainer.propTypes={
    countCounter: PropTypes.number,
    addFunction: PropTypes.func,
    resetFunction: PropTypes.func,
    removeFunction: PropTypes.func,
};

export default ParentCounterContainer;