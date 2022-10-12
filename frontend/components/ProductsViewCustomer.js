import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import CustomerAccNav from "./CustomerAccNav";

const Record = (props) => (
    <tr>


        <td>{props.record.name}</td>
        <td>{props.record.description}</td>
        <td>{props.record.qty}</td>
        <td>{props.record.price}</td>
        <td>
            <Link to={"/cart/" + props.record._id}>Add to cart</Link> |
            <Link to={"/wishlist/" + props.record._id}>Add to wishlist</Link>

        </td>
    </tr>
);

export default class ProductsViewCustomer extends Component {

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
        axios.delete("http://localhost:8000/products" + id).then((response) => {
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

                <br /><br />
                <div className="container">
                    <CustomerAccNav/>
                    <h1>Featured Products</h1>
                    <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                        <tr>


                            <th>name</th>
                            <th>description</th>
                            <th>qty</th>
                            <th>price</th>

                        </tr>
                        </thead>
                        <tbody>{this.recordList()}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}
