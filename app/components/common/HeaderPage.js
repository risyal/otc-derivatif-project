import React from "react";

function HeaderPage({ name, namePage, parentPage }) {
    if (parentPage != "") {
        parent = <li className="breadcrumb-item">
            <a>{parentPage}</a>
        </li>;
    } else {
        parent = "  ";
    }
    return (
        <div className="row wrapper border-bottom white-bg page-heading">
            <div className="col-lg-10">
                <h2>{name}</h2>
                <ol className="breadcrumb">

                    {parent}
                    <li className="breadcrumb-item active">
                        <strong>{namePage}</strong>
                    </li>
                </ol>
            </div>
            <div className="col-lg-2">

            </div>
        </div>
    )
}

export default HeaderPage;