import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown, Dropdown } from "react-bootstrap";
// import "bootstrap-hover-dropdown";
import styles from "./Navbar.module.css";

export default function NavbarComponent(props: any) {
  const [showDropdownId, setShowDropdownId] = useState(null);
  const router = useRouter();
  let menuItems = [
    { id: 0, name: "Home", path: "/", dropDownLinks: [
      { id: 1, name: "About the Society", path: "/#about" },
      { id: 2, name: "Conservation at Devalsari", path: "/#conservation" },
      { id: 2, name: "DERC", path: "/#derc" },
      { id: 3, name: "Bee-keeping", path: "/#beekeeping" },
      { id: 4, name: "Devalsari Protection", path: "/#devalsariParyavaran" },
      { id: 6, name: "Partners", path: "/#partners" },
      { id: 6, name: "Support Us", path: "/#support-us" },
    ], },
    { id: 1, name: "About Us", path: "/about", dropDownLinks: [
      { id: 1, name: "About the society", path: "/about#aboutsociety" },
      { id: 2, name: "The Society Objectives", path: "/about#objective" },
      { id: 3, name: "Members of the Society", path: "/about#team" },
      { id: 6, name: "Awards", path: "/about#awards" },
  ], },
    { id: 2, name: "Events", path: "/events" },
    { id: 3, name: "Gallery", path: "/gallery" },
    { id: 4, name: "Devalsari in Press", path: "/media" },
    { id: 5, name: "Contact", path: "/joinus", },
    { id: 6, name: "Donate ", path: "/donate" },
  ];

  const closeMenu = () => {
    const menu = document.getElementById("responsive-navbar-nav");
    menu.classList.remove("show");
    setShowDropdownId(null)
  }

  const openMenu = (dropdownId) => { 

    setShowDropdownId(dropdownId)
    
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={styles.top_nav}
        fixed={"top"}
        bg="dark"
        variant="dark"
        style={{borderBottom:"1px solid",borderColor:"#f0f0f0",padding:"1rem 1rem",margin:"0rem"
      }}
      >
        <Navbar.Brand>
          <Link href="/">
            <a>
              <img
                alt="Logo"
                style={{
                  height: 64,
                  position: "absolute",
                  left: "10px",
                  top: "10px",
                  margin:"0rem 1rem"
                }}
                src={props.level === 1 ? "/assets/img/logobg.png" : "Devalsari.png"}
              />
            </a>
          </Link>
         
        </Navbar.Brand>

        <Navbar.Toggle style={{ color: 'white' }} aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse
          className={styles.nav_container}
          id="responsive-navbar-nav"
        >
          <Nav>
            {menuItems.map((item) => {
              return (
                <>
                  {item.dropDownLinks ? (
                    <NavDropdown
                      title={item.name}
                      className={styles.dropdown_main_link}
                      id={"basic-nav-dropdown-"+item.id}
                      show={showDropdownId === item.id}
                      onMouseEnter={(event) => openMenu(item.id)}
                      onMouseLeave={closeMenu}
                    // data-toggle="dropdown"
                    // data-hover="dropdown" 
                    >
                      {item.dropDownLinks.map((subitem) => {
                        return (
                          <NavDropdown.Item
                            key={subitem.id}
                            onClick={() => closeMenu()}
                          // show={show}
                          >
                

                            <Link href={subitem.path}>
                              <p>{subitem.name}</p>
                            </Link>
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                  ) : (
                      <Nav.Link key={item.id} onClick={() => closeMenu()}>
                        <Link href={item.path}>
                          <div className={styles.nav_link}>
                            <p>{item.name}</p>
                          </div>
                        </Link>
                      </Nav.Link>
                    )}
                </>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </>
  );
}