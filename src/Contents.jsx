import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { BiSolidMessage } from "react-icons/bi";
import Home from './home';
import Search from './search';

const StyledHeader = styled.header`
  font-size: 34px;
  
  & ul{
    display:flex;
    justify-content:space-between;
    & > li{
      flex-grow:1;
    }
  }
`
const LinkItem = styled(Link)`
  display:block;
  text-align:center;
  color:#333;
  padding: 10px 0;
  transition:0.3s;
  &:hover{
    color:#fff;
    background-color:#BF1F2C;
  }
`
function Header() {
  return(
    <StyledHeader>
      <h1 className="sr-only">SelfTalk</h1>
      <nav>
        <ul>
          <li>
            <LinkItem to="/"><IoMdHome /></LinkItem>
          </li>
          <li>
            <LinkItem to="/Search"><CgProfile /></LinkItem>
          </li>
          <li>
            <LinkItem to="/Search"><FaSearch /></LinkItem>
          </li>
          <li>
            <LinkItem to="/Search"><BiSolidMessage /></LinkItem>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default function Contents(){
    return(
        <main>            
          <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Search" element={<Search />} />
          </Routes>
          </BrowserRouter>
        </main>
    )
}