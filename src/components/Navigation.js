import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <div className="nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {/* 이런 식으로 props를 넘길 수 있음. 아무거나 */}
                    <Link to={{
                        pathname: "/about", 
                        search: "?sort=name", 
                        k2h: "abc", 
                        hash: "#123", 
                        state: {
                            fromNavigation: true
                        }
                    }}>About</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;