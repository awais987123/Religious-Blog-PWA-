import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';
import logo from '../public/logo.png';
const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
   
   { <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
  
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-black">
            <img src="https://i.ibb.co/gD4ZFgq/TRANS-LOGO-FOR-APP-PAGES.webp" 
            class="object-cover min-w-40 h-40"
            alt="logo"/>
      
            </span>
            
          </Link>
          <span className="cursor-pointer font-bold text-1xl text-black"> | INSPIRE| DEVELOP| ELEVATE| AID </span>
        </div>
      </div>
  }
    </div>
  );
};

export default Header;