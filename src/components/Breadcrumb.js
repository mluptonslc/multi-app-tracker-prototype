import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Breadcrumbs extends Component {

    constructor(props) {
        super(props)

        this.state = {
            application: this.props.location.state.breadcrumbs
        }

        this.getBreadCrumbs = this.getBreadCrumbs.bind(this);
    }

    getBreadCrumbs() {
        this.state.breadcrumbs.map((breadcrumb, index) => {
            return (
                <div></div>
            );
        })
    }

    render() {
        return (
            <div className="breadcrumb">
                <ol className="breadcrumb__list">
                    <li className="breadcrumb__list__item">
                        <Link to="home">home</Link>
                    </li>
                    <li className="breadcrumb__list__item">
                        applications
                        </li>
                </ol>
            </div>
        );
    }
}

export default Breadcrumbs;
