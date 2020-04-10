import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactToExcel from 'react-html-table-to-excel';
import classes from "./Dashboard.module.css";

class Dashboard extends React.Component {
    state = {
        bgImg: {},
        registeredData: [],
    };

    componentDidMount() {
        axios
            .all([
                axios.get("https://jsonplaceholder.typicode.com/photos/1"),
                axios.get(
                    "https://react-task-cf9bb.firebaseio.com/registered.json"
                ),
            ])
            .then(
                axios.spread((imgRes, regRes) => {
                    this.setState({
                        bgImg: imgRes.data,
                        registeredData: regRes.data,
                    });
                })
            )
            .catch((error) => {
                console.log(error);
            });
    }

    render() {

        return (
            <div
                className={classes.Dashboard}
                style={{ backgroundImage: `url(${this.state.bgImg.url}` }}
            >
                <div className="">
                    <nav className="nav-wrapper grey darken-3">
                        <ul>
                            <li><Link to="/">SG</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className={classes.Export}>Export to Excel</div>
                <table id='export-table'>
                    <thead>
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Password</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(this.state.registeredData).map(
                            (item) => {
                                return (
                                    <tr key={item.password}>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.password}</td>
                                        <td>{item.email}</td>
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </table>
                <ReactToExcel 
                    className='btn btn-primary'
                    table='export-table'
                    filename='excelFile'
                    sheet='sheet_1'
                    buttonText='Export'
                />
            </div>
        );
    }
}

export default Dashboard;
