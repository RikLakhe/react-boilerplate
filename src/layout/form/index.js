import React, {Component} from 'react';
import {Steps, Form, Button,message} from 'antd';
import './index.css'
import Step1 from './Step1';
import Step2 from './Step2';
const {Step} = Steps;
const steps = [
    {
        title: 'First',
        loadout: Step1
    }, {
        title: 'Second',
        loadout: Step1
    }, {
        title: 'Last',
        loadout: Step2
    }
];
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        };
    }
    next() {
        const current = this.state.current + 1;
        this.setState({current});
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({current});
    }

    render() {
        const {current} = this.state;
        return (
            <React.Fragment>
                < div >
                    <Steps id='stepslayout' current={current}>
                        {steps.map(item => <Step key={item.title} title={item.title}/>)}
                    </Steps>
                    <div className="steps-content">
                        <Form>
                        <h1>{steps[current].title}</h1>
                            {current === 0
                                ? <Step1/>
                                : null
}
                            {current === 1
                                ? <Step2/>
                                : null
}
                            {current === 2
                                ? <Step1/>
                                : null
}
                        </Form>
                    </div>
                </ div>
                <div className="steps-action">
                {
                  current < steps.length - 1
                  && <Button type="primary" onClick={() => this.next()}>Next</Button>
                }
                {
                  current === steps.length - 1
                  && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                }
                {
                  current > 0
                  && (
                  <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                    Previous
                  </Button>
                  )
                }
              </div>
            </React.Fragment>
        );
    }
}