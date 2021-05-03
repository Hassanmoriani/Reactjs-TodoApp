import React from 'react'
import '../components/nav.css'
import {Link} from 'react-router-dom'
function Nav() {
    return (
        <div>
            <ul>
                <Link  to='/CrudReact'>
                <li><a class="active" href="/">Create</a></li>
                </Link>
                <Link to='/view'>
                <li><a href="/">View</a></li>
                </Link>
            </ul>
        </div>
    )
}

export default Nav


