import React, {Component} from 'react'
import {Table,Form,Button,Row,Col,DatePicker} from 'antd';
import {Resizable} from 'react-resizable';

const FormItem = Form.Item;
const ResizeableTitle = (props) => {
    const {
        onResize,
        width,
        ...restProps
    } = props;

    if (!width) {
        return <th {...restProps}/>;
    }

    return (
        <Resizable width={width} height={0} onResize={onResize}>
            <th {...restProps}/>
        </Resizable>
    );
};
const columns = [
    {
        title: 'Transaction Number',
        dataIndex: 'transactionNumber',
        sorter: (a, b) => a.transactionNumber.length - b.transactionNumber.length
    }, {
        title: 'Sender Name',
        dataIndex: 'senderName',
        sorter: (a, b) => a.senderName.length - b.senderName.length
    }, {
        title: 'Sender Code',
        dataIndex: 'sendercode',
        sorter: (a, b) => a.sendercode.length - b.sendercode.length
    }, {
        title: 'BeneficiaryName',
        dataIndex: 'beneficiaryName',
        sorter: (a, b) => a.beneficiaryName.length - b.beneficiaryName.length
    }, {
        title: 'Benefucuary Phone',
        dataIndex: 'beneficiaryPhone',
        sorter: (a, b) => a.beneficiaryPhone.length - b.beneficiaryPhone.length
    }, {
        title: 'Sending Amount',
        dataIndex: 'sendingAmount',
        sorter: (a, b) => a.sendingAmount.length - b.sendingAmount.length
    }, {
        title: 'ExRate',
        dataIndex: 'exRate',
        sorter: (a, b) => a.exRate.length - b.exRate.length
    }, {
        title: 'Paying Amount',
        dataIndex: 'payingAmount',
        sorter: (a, b) => a.payingAmount.length - b.payingAmount.length
    }, {
        title: 'USD',
        dataIndex: 'usd',
        sorter: (a, b) => a.usd.length - b.usd.length
    }, {
        title: 'Stand Number',
        dataIndex: 'standNumber',
        sorter: (a, b) => a.standNumber.length - b.standNumber.length
    }, {
        title: 'Creator',
        dataIndex: 'creator',
        sorter: (a, b) => a.creator.length - b.creator.length
    }, {
        title: 'Created Date',
        dataIndex: 'createdDate',
        sorter: (a, b) => a.createdDate.length - b.namcreatedDatee.length
    }, {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a href="javascript:;">view</a> | <a href="javascript:;">approve</a>
    }
]

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
}

const data = [
    {
        transactionNumber: '1',
        senderName: 'dinesh',
        sendercode: '2341',
        beneficiaryName: 'sudir',
        beneficiaryPhone: '985932412',
        sendingAmount: '2351',
        exRate: '34',
        usd: '234',
        payingAmount: '12000',
        standNumber: '235',
        creator: 'teller 1',
        createdDate: '2018-12-12'
    }, {
        transactionNumber: '2',
        senderName: 'dinesh',
        sendercode: '2341',
        beneficiaryName: 'sudir',
        beneficiaryPhone: '985932412',
        sendingAmount: '2351',
        exRate: '34',
        payingAmount: '12000',
        standNumber: '235',
        creator: 'teller 1',
        createdDate: '2018-12-12'
    }, {
        transactionNumber: '3',
        senderName: 'dinesh',
        sendercode: '2341',
        beneficiaryName: 'sudir',
        beneficiaryPhone: '985932412',
        sendingAmount: '2351',
        exRate: '34',
        payingAmount: '12000',
        standNumber: '235',
        creator: 'teller 1',
        createdDate: '2018-12-12'
    }, {
        transactionNumber: '4',
        senderName: 'dinesh',
        sendercode: '2341',
        beneficiaryName: 'sudir',
        beneficiaryPhone: '985932412',
        sendingAmount: '2351',
        exRate: '34',
        payingAmount: '12000',
        standNumber: '235',
        creator: 'teller 1',
        createdDate: '2018-12-12'
    }
]
export default class ValidationTable extends Component {

    render() {

        return (
            <React.Fragment>
                <h2>Transaction List</h2>
                <div className="row">
                    <div className="col-12">
                        <Form layout="inline">
                            <Row gutter={16}>
                                <Col lg={6} md={12} sm={24}>
                                    <FormItem label="From">
                                        <DatePicker
                                            format="MM-DD-YYYY"
                                            disableDate={this.disabledFromDate}
                                            onChange={this.onFromChange}
                                            onOpenChange={this.handleStartOpenChange}/>
                                    </FormItem>
                                </Col>
                                <Col
                                    xl={{
                                    span: 6,
                                    offset: 2
                                }}
                                    lg={{
                                    span: 8
                                }}
                                    md={{
                                    span: 12
                                }}
                                    sm={24}>
                                    <FormItem
                                        label="To"
                                        labelCol={{
                                        span: 8
                                    }}
                                        wrapperCol={{
                                        span: 16
                                    }}>

                                        <DatePicker
                                            format="MM-DD-YYYY"
                                            disabledDate={this.disabledToDate}
                                            onChange={this.onToChange}
                                            onOpenChange={this.handleEndOpenChange}/>
                                    </FormItem>
                                </Col>

                                <Col
                                    xl={{
                                    span: 8,
                                    offset: 2
                                }}
                                    lg={{
                                    span: 10
                                }}
                                    md={{
                                    span: 24
                                }}
                                    sm={24}>
                                    <FormItem
                                        labelCol={{
                                        span: 7
                                    }}
                                        wrapperCol={{
                                        span: 12
                                    }}>
                                        <Button type="primary" htmlType="submit">Search</Button>
                                    </FormItem>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
                <Table columns={columns} dataSource={data} onChange={onChange}/>
            </React.Fragment>
        )
    }
}