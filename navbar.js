import React from 'react';
function Navbar() {
    

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">ToDo Items</a>
                <ul class="nav">
                    <li class="nav-item">
                        {/* <button type="button" className="btn btn-primary" >Add Todo</button> */}
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar