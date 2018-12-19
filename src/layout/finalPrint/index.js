import React, {Component} from 'react'
import logo from '../assets/img/imgg.png'
import './index.css'

export default class Index extends Component {
    render() {
        return (
            <div className="book">
                <div className="page">
                    <div className="subpage">
                        <div className="row top-header">
                            <div className="top-date col col-md-2">
                                12/12/2018
                            </div>
                            <div className="top-middle-content col col-md-10 d-flex justify-content-center">
                                City-Xpress Nepal
                            </div>
                        </div>
                        <div className="content">
                            <div className="top-header">
                                <div className="top-header-top">
                                    <div className="top-img">
                                        <img
                                            src={logo}
                                            alt=""
                                            srcset=""
                                            style={{
                                            height: '50px'
                                        }}/>
                                    </div>
                                    <div className="top-content">
                                        APPLICATION FOR REMITTANCE
                                    </div>
                                </div>
                                <div className="top-header-bottom">
                                    <div className="bottom-datetime">
                                        Date: 12/12/2018 9:49:17 PM
                                    </div>
                                    <div className="bottom-content">
                                        Customer Copy:<span style={{
                color: 'red'
            }}>[Duplicate Copy]</span>
                                    </div>
                                </div>
                            </div>

                            <div className="content-table">
                                <table
                                    className="table table-borderless table-sm"
                                    style={{
                                    border: '1px solid black'
                                }}>
                                    <tbody>

                                        <tr className="table-first-row">

                                            <td
                                                className="custom-data"
                                                colSpan="2"
                                                style={{
                                                border: '1px solid black'
                                            }}>
                                                Customer Id :</td>

                                            <td
                                                className="transaction-data "
                                                colSpan="2"
                                                style={{
                                                border: '1px solid black'
                                            }}>
                                                <strong>Transaction ID: 100038</strong>

                                            </td>

                                        </tr>
                                        <tr>

                                            <td
                                                className="custom-data"
                                                colSpan="2"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>
                                                <strong>Sender Information</strong>
                                            </td>

                                            <td
                                                className=""
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                Transfer Amount:
                                            </td>
                                            <td
                                                className="transfer-amount-value"
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                1,200.00 AUD
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="customer-enter">
                                                Sender's Name:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>
                                                DEEPENDRA KUMAR RAI
                                            </td>

                                            <td
                                                className=""
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                Exchange Rate:
                                            </td>
                                            <td
                                                className="transfer-amount-value"
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                83.7102 NRP
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="customer-enter">
                                                Sender's Address:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>
                                                ,44 Neville St, Box Hill South,
                                            </td>

                                            <td
                                                className=""
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                Payout Amount:
                                            </td>
                                            <td
                                                className="transfer-amount-value"
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                100,452.00 NRP
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="customer-enter">
                                                Sender's Mobile:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>+998-9519-842548
                                            </td>

                                            <td
                                                className=""
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                Service Charge:
                                            </td>
                                            <td
                                                className="transfer-amount-value"
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                0 AUD
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="custom-data"
                                                colSpan="2"
                                                style={{
                                                borderTop: '1px solid black',
                                                borderRight: '1px solid black'
                                            }}>
                                                <strong>
                                                    Receiver Information</strong>
                                            </td>

                                            <td
                                                className=""
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                Additional Charge:
                                            </td>
                                            <td
                                                className="transfer-amount-value"
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                0 AUD
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="customer-enter">
                                                Reciver's Name:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>RAJESHWARI KUMARI RAI
                                            </td>

                                            <td
                                                className="collect-amount"
                                                rowSpan="2"
                                                style={{
                                                borderBottom: '1px solid black',
                                                verticalAlign: 'middle'
                                            }}>
                                                <strong>
                                                    Collected Amount:
                                                </strong>
                                            </td>
                                            <td
                                                className="transfer-amount-value collect-amount"
                                                rowSpan="2"
                                                style={{
                                                borderBottom: '1px solid black',
                                                verticalAlign: 'middle'
                                            }}>
                                                <strong>
                                                    1,200.00 AUD
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="customer-enter">
                                                Reciver's Address:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>Sukeshowore tole, Okhaldhunga NPL
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="customer-enter side-padding">
                                                Reciver's Contact Info:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>+984-4871-45651321
                                            </td>
                                            <td rowSpan="3"></td>
                                            <td rowSpan="2"></td>
                                        </tr>
                                        <tr>
                                            <td className="customer-enter">
                                                Bank / Branch:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>NEPAL
                                                INVESTMENT BANK LTD ATTARIYA, 100 METTER FROM SEWA NARSINGH HOSPITAL|ATTARIYA
                                            </td>

                                        </tr>
                                        <tr>
                                            <td className="customer-enter">
                                                Account No. / Cash Card Number:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>036771000012112
                                            </td>

                                            <td className="transfer-amount-value">API_CItyAus</td>

                                        </tr>
                                        <tr>
                                            <td className="customer-enter">
                                                Transaction Type:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>Bank Transfer
                                            </td>
                                            <td rowSpan="2">______________________<br/>Signature of Sender</td>
                                            <td className="transfer-amount-value" rowSpan="2">______________________<br/>Processed By</td>

                                        </tr>
                                        <tr>
                                            <td className="customer-enter">
                                                Purpose of Remittance:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}></td>

                                        </tr>

                                        <tr>
                                            <td
                                                colSpan="4"
                                                style={{
                                                borderTop: '1px solid black',
                                                borderBottom: '1px solid black'
                                            }}>
                                                <strong>IMPORTANT REMINDERS TO OUR VALUED CLIENTS</strong>
                                            </td>
                                        </tr>
                                        <tr >
                                            <td
                                                colSpan="4"
                                                style={{
                                                borderTop: '1px solid black',
                                                borderBottom: '1px solid black'
                                            }}>
                                                <ol>
                                                    <li>Please sign this form using similar signature orginally registered with
                                                        City-Xpress Nepal.</li>
                                                    <li>Mailing address should match with your registered address (as shown in you
                                                        valid ID*). Any irregularity in your registerred address may result in
                                                        non-implementation of your remittance.</li>
                                                    <li>Always notify us clear and proper instructions as to beneficiary details are
                                                        correct remittance amount for us to be able to facilitate processing of your
                                                        remittance.</li>
                                                </ol>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td
                                                colSpan="4"
                                                style={{
                                                borderTop: '1px solid black',
                                                borderBottom: '1px solid black'
                                            }}>
                                                <p className="table-bottom-content">
                                                    <strong>City Express Money Transfer Pvt Ltd</strong>
                                                    City Express Complex, Kamaladi, Kathmandu, Nepal Tel. No.:+977-01-4431900
                                                    <br/>
                                                    Email: infro@ctxpress.com Troll Free.16600-11-12-13 www.ctxpress.com</p>
                                            </td>
                                        </tr>

                                    </tbody>

                                </table>

                                <div className="signature">
                                    ..................................................................................................................</div>
                            </div>

                        </div>

                        <div className="content">
                            <div className="top-header">
                                <div className="top-header-top">
                                    <div className="top-img">
                                        <img
                                            src={logo}
                                            alt=""
                                            srcset=""
                                            style={{
                                            height: '50px'
                                        }}/>
                                    </div>
                                    <div className="top-content">
                                        APPLICATION FOR REMITTANCE
                                    </div>
                                </div>
                                <div className="top-header-bottom">
                                    <div className="bottom-datetime">
                                        Date: 12/12/2018 9:49:17 PM
                                    </div>
                                    <div className="bottom-content">
                                        Office Copy:<span style={{
                color: 'red'
            }}>[Duplicate Copy]</span>
                                    </div>
                                </div>
                            </div>

                            <div className="content-table">
                                <table
                                    className="table table-borderless table-sm"
                                    style={{
                                    border: '1px solid black'
                                }}>
                                    <tbody>

                                        <tr className="table-first-row">

                                            <td
                                                className="custom-data"
                                                colSpan="2"
                                                style={{
                                                border: '1px solid black'
                                            }}>
                                                Customer Id :</td>

                                            <td
                                                className="transaction-data "
                                                colSpan="2"
                                                style={{
                                                border: '1px solid black'
                                            }}>
                                                <strong>Transaction ID: 100038</strong>

                                            </td>

                                        </tr>
                                        <tr>

                                            <td
                                                className="custom-data"
                                                colSpan="2"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>
                                                <strong>Sender Information</strong>
                                            </td>

                                            <td
                                                className=""
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                Transfer Amount:
                                            </td>
                                            <td
                                                className="transfer-amount-value"
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                1,200.00 AUD
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="customer-enter">
                                                Sender's Name:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>
                                                DEEPENDRA KUMAR RAI
                                            </td>

                                            <td
                                                className=""
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                Exchange Rate:
                                            </td>
                                            <td
                                                className="transfer-amount-value"
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                83.7102 NRP
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="customer-enter">
                                                Sender's Address:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>
                                                ,44 Neville St, Box Hill South,
                                            </td>

                                            <td
                                                className=""
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                Payout Amount:
                                            </td>
                                            <td
                                                className="transfer-amount-value"
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                100,452.00 NRP
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="customer-enter">
                                                Sender's Mobile:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>+998-9519-842548
                                            </td>

                                            <td
                                                className=""
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                Service Charge:
                                            </td>
                                            <td
                                                className="transfer-amount-value"
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                0 AUD
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="custom-data"
                                                colSpan="2"
                                                style={{
                                                borderTop: '1px solid black',
                                                borderRight: '1px solid black'
                                            }}>
                                                <strong>
                                                    Receiver Information</strong>
                                            </td>

                                            <td
                                                className=""
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                Additional Charge:
                                            </td>
                                            <td
                                                className="transfer-amount-value"
                                                style={{
                                                borderBottom: '1px solid black'
                                            }}>
                                                0 AUD
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="customer-enter">
                                                Reciver's Name:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>RAJESHWARI KUMARI RAI
                                            </td>

                                            <td
                                                className="collect-amount"
                                                rowSpan="2"
                                                style={{
                                                borderBottom: '1px solid black',
                                                verticalAlign: 'middle'
                                            }}>
                                                <strong>
                                                    Collected Amount:
                                                </strong>
                                            </td>
                                            <td
                                                className="transfer-amount-value collect-amount"
                                                rowSpan="2"
                                                style={{
                                                borderBottom: '1px solid black',
                                                verticalAlign: 'middle'
                                            }}>
                                                <strong>
                                                    1,200.00 AUD
                                                </strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="customer-enter">
                                                Reciver's Address:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>Sukeshowore tole, Okhaldhunga NPL
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="customer-enter side-padding">
                                                Reciver's Contact Info:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>+984-4871-45651321
                                            </td>
                                            <td rowSpan="3"></td>
                                            <td rowSpan="2"></td>
                                        </tr>
                                        <tr>
                                            <td className="customer-enter">
                                                Bank / Branch:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>NEPAL
                                                INVESTMENT BANK LTD ATTARIYA, 100 METTER FROM SEWA NARSINGH HOSPITAL|ATTARIYA
                                            </td>

                                        </tr>
                                        <tr>
                                            <td className="customer-enter">
                                                Account No. / Cash Card Number:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>036771000012112
                                            </td>

                                            <td className="transfer-amount-value">API_CItyAus</td>

                                        </tr>
                                        <tr>
                                            <td className="customer-enter">
                                                Transaction Type:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}>Bank Transfer
                                            </td>
                                            <td rowSpan="2">______________________<br/>Signature of Sender</td>
                                            <td className="transfer-amount-value" rowSpan="2">______________________<br/>Processed By</td>

                                        </tr>
                                        <tr>
                                            <td className="customer-enter">
                                                Purpose of Remittance:
                                            </td>
                                            <td
                                                className="customer-enter-data"
                                                style={{
                                                borderRight: '1px solid black'
                                            }}></td>

                                        </tr>

                                        <tr>
                                            <td
                                                colSpan="4"
                                                style={{
                                                borderTop: '1px solid black',
                                                borderBottom: '1px solid black'
                                            }}>
                                                <p className="table-bottom-content">
                                                    <strong>City Express Money Transfer Pvt Ltd</strong>
                                                    City Express Complex, Kamaladi, Kathmandu, Nepal Tel. No.:+977-01-4431900
                                                    <br/>
                                                    Email: infro@ctxpress.com Troll Free.16600-11-12-13 www.ctxpress.com</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                colSpan="4"
                                                style={{
                                                borderTop: '1px solid black',
                                                borderBottom: '1px solid black'
                                            }}>
                                                <p className="table-bottom-content">
                                                    Printed server time: 12/12/2018 5:45:51 PM</p>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}