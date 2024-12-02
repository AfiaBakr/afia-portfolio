
'use client';
import React from "react";
import NavbarLink from "./NavbarLink";

const MenuOverlay = ({links}:any)=>{
    return(
        <ul className="flex flex-col py-4 items-center">
            <li key={"index"}>
            {links.map(({link, index}:any)=>(<NavbarLink href={link.path} title={link.title}/>))}
            </li>
        </ul>
    )
}

export default MenuOverlay;
