import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Record = (props) => (
    <tr>


        <td>{props.record.name}</td>
        <td>{props.record.description}</td>
        <td>{props.record.qty}</td>
        <td>{props.record.price}</td>
        <td>
            <Link to={"/admin/update/" + props.record._id}>Edit</Link> |
            <a
                href="/admin"
                onClick={() => {
                    props.deleteRecord(props.record._id);

                }}
            >
                Delete
            </a>
        </td>
    </tr>
);

export default class ProductsViewTrader extends Component {

    constructor(props) {
        super(props);
        this.deleteRecord = this.deleteRecord.bind(this);
        this.state = { records: [] };
    }


    componentDidMount() {
        axios
            .get("http://localhost:8000/products/")
            .then((response) => {
                this.setState({ records: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    deleteRecord(id) {
        axios.delete("http://localhost:8000/products/" + id).then((response) => {
            console.log(response.data);
        });

        this.setState({
            record: this.state.records.filter((el) => el._id !== id),
        });
    }


    recordList() {
        return this.state.records.map((currentRecord) => {
            return (
                <Record
                    record={currentRecord}
                    deleteRecord={this.deleteRecord}
                    key={currentRecord._id}
                />
            );
        });
    }


    render() {
        return (
            <div>
                <div>
                    <a class="btn btn-primary" href="/addproduct" role="button">Add Products</a>
                    <br/><br/>
                    <a class="btn btn-primary" href="/admin/viewcustomers" role="button">All Customers</a>

                </div>

                <br/><br/><br/><br/>
                <div className="container">

                    <div><h3> Product Record List</h3></div>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                        <tr>


                            <th>name</th>
                            <th>description</th>
                            <th>qty</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>{this.recordList()}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}
