import { Link } from "react-router-dom"
import "./header.css"
export default function Header() {
  return (
    
    
    <header id="header" className="header header-style-1">
      <div className="container-fluid">
        <div className="row">
          <div className="topbar-menu-area">
            <div className="container">
              <div className="topbar-menu left-menu">
                <ul>
                  <li className="menu-item" >
                    <a title="Hotline: (+123) 456 789" href="a" ><span className="icon label-before fa fa-mobile"></span>Hotline: (+123) 456 789</a>
                  </li>
                </ul>
              </div>
              <div className="topbar-menu right-menu">
                <ul>
                  <li className="menu-item" ><Link title="Register or Login" to="/login">Login</Link></li>
                  <li className="menu-item" ><Link title="Register or Login" to="/register">Register</Link></li>
                  <li className="menu-item lang-menu menu-item-has-children parent">
                    <a title="English" href="a"><span className="img label-before"><img src="assets/images/lang-en.png" alt="lang-en"/></span>English<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                    <ul className="submenu lang" >
                      <li className="menu-item" ><a title="hungary" href="a"><span className="img label-before"><img src="assets/images/lang-hun.png" alt="lang-hun"/></span>Hungary</a></li>
                      <li className="menu-item" ><a title="german" href="a"><span className="img label-before"><img src="assets/images/lang-ger.png" alt="lang-ger" /></span>German</a></li>
                      <li className="menu-item" ><a title="french" href="a"><span className="img label-before"><img src="assets/images/lang-fra.png" alt="lang-fre"/></span>French</a></li>
                      <li className="menu-item" ><a title="canada" href="a"><span className="img label-before"><img src="assets/images/lang-can.png" alt="lang-can"/></span>Canada</a></li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children parent" >
                    <a title="Dollar (USD)" href="a">Dollar (USD)<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                    <ul className="submenu curency" >
                      <li className="menu-item" >
                        <a title="Pound (GBP)" href="a">Pound (GBP)</a>
                      </li>
                      <li className="menu-item" >
                        <a title="Euro (EUR)" href="a">Euro (EUR)</a>
                      </li>
                      <li className="menu-item" >
                        <a title="Dollar (USD)" href="a">Dollar (USD)</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="mid-section main-info-area container">

              <div className="wrap-logo-top left-section">
                <a href="a" className="link-to-home"><img src="./assets/images/logo-top-1.png" alt="mercado"/></a>
              </div>

              <div className="wrap-search center-section">
                <div className="wrap-search-form">
                  <form action="#" id="form-search-top" name="form-search-top">
                    <input type="text" name="search" value="" placeholder="Search here..."/>
                    <button form="form-search-top" type ="button"><i className ="fa fa-search" aria-hidden="true"></i></button>
                    <div className ="wrap-list-cate">
                      <input type="hidden" name="product-cate" value="0" id="product-cate"/>
                      <a href="a" className ="link-control">All Category
                      </a>
                    <ul className ="list-cate">
                    <li className ="level-0">All Category</li>
                    <li className ="level-1">-Electronics</li>
                    <li className ="level-2">Batteries & Chargens</li>
                    <li className ="level-2">Headphone & Headsets</li>
                    <li className ="level-2">Mp3 Player & Acessories</li>
                    <li className ="level-1">-Smartphone & Table</li>
                    <li className ="level-2">Batteries & Chargens</li>
                    <li className ="level-2">Mp3 Player & Headphones</li>
                    <li className ="level-2">Table & Accessories</li>
                    <li className ="level-1">-Electronics</li>
                    <li className ="level-2">Batteries & Chargens</li>
                    <li className ="level-2">Headphone & Headsets</li>
                    <li className ="level-2">Mp3 Player & Acessories</li>
                    <li className ="level-1">-Smartphone & Table</li>
                    <li className ="level-2">Batteries & Chargens</li>
                    <li className ="level-2">Mp3 Player & Headphones</li>
                    <li className ="level-2">Table & Accessories</li>
                    </ul>
                    </div>
                  </form>
                </div>
              </div>

              <div className="wrap-icon right-section">
                <div className="wrap-icon-section wishlist">
                  <a href="a" className="link-direction">
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    <div className="left-info">
                      <span className="index">0 item</span>
                      <span className="title">Wishlist</span>
                    </div>
                  </a>
                </div>
                <div className="wrap-icon-section minicart">
                  <a href="a" className="link-direction">
                    <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                    <div className="left-info">
                      <span className="index">4 items</span>
                      <span className="title">CART</span>
                    </div>
                  </a>
                </div>
                <div className="wrap-icon-section show-up-after-1024">
                  <a href="a" className="mobile-navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="nav-section header-sticky">
            <div className="header-nav-section">
              <div className="container">
                <ul className="nav menu-nav clone-main-menu" id="mercado_haead_menu" data-menuname="Sale Info" >
                  <li className="menu-item"><a href="a" className="link-term">Weekly Featured</a><span className="nav-label hot-label">hot</span></li>
                  <li className="menu-item"><a href="a" className="link-term">Hot Sale items</a><span className="nav-label hot-label">hot</span></li>
                  <li className="menu-item"><a href="a" className="link-term">Top new items</a><span className="nav-label hot-label">hot</span></li>
                  <li className="menu-item"><a href="a" className="link-term">Top Selling</a><span className="nav-label hot-label">hot</span></li>
                  <li className="menu-item"><a href="a" className="link-term">Top rated items</a><span className="nav-label hot-label">hot</span></li>
                </ul>
              </div>
            </div>

            <div className="primary-nav-section">
              <div className="container">
                <ul className="nav primary clone-main-menu" id="mercado_main" data-menuname="Main menu" >
                  <li className="menu-item home-icon">
                    <Link to="/" className="link-term mercado-item-title"><i className="fa fa-home" aria-hidden="true"></i></Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/aboutus" className="link-term mercado-item-title">About Us</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/shop" className="link-term mercado-item-title">Shop</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/cart" className="link-term mercado-item-title">Cart</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/checkout" className="link-term mercado-item-title">Checkout</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/contactus" className="link-term mercado-item-title">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    
    
  )
}