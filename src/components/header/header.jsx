import React, { Component } from 'react';


class Header extends Component {
    state= {
        navigations: ["about", "projects", "collaborate"]
    }

    render() { 
        const{navigations}=this.state
        
        return ( 
        <React.Fragment>
        {navigations.map(navigation => (
            <div key={navigation} className={navigation}>
                <nav className="navigation">
                    <ul key={navigation}>
                        <li className="list-items"><a href={"#" + navigation}>{navigation}</a></li>
                    </ul>
                </nav>
            </div>
        ))}
        </React.Fragment>
         );
    }
}
 
export default Header;