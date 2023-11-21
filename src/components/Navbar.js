import PropTypes from 'prop-types'
import About from './About'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  
  return (
    
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {/* <li className='nav-item'>
                <button onClick={()=> {console.log(props.name)}}>Hi</button>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={About}>About</Link>
              </li>
              <li className='nav-link' herf="/">
              <a onClick={()=> {console.log(props.ptg)}}>Pritam</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`} >  {/* ternary operator ${prop.mode==="light"?"dark":"light"} */}
              <input className="form-check-input" type="checkbox" onClick={props.togglemode}  role="switch" id="flexSwitchCheckDefault"/>
              <label   className="form-check-label" htmlFor="flexSwitchCheckDefault" > Enable {props.mode} mode</label>
            </div>
            
          </div>

        </div>
      </nav>
      
    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired, //isRequired will make u compulsary to defind the title, with the title a error will appear
    props: PropTypes.string
}

// impling a default value in props
Navbar.defaultProps = {
    title: 'set title here',
    props: 'about u here'
}
 