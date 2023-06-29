import React from 'react'
import "./menu.css"
import Container from '../../Components/Container/container'
import H2Title from "../../Components/H2 title/h2Title"
import SectionHeader from "../../Components/Section header/sectionHeader"
import Item from '../../Components/Item/item'
import imageItem1 from "../../Assets/images/menu/menu1.png"
import imageItem2 from "../../Assets/images/menu/menu2.png"
import imageItem3 from "../../Assets/images/menu/menu3.png"
import imageItem4 from "../../Assets/images/menu/menu4.png"
import imageItem5 from "../../Assets/images/menu/menu5.png"
import imageItem6 from "../../Assets/images/menu/menu6.png"
import imageItem7 from "../../Assets/images/menu/menu7.png"
import imageItem8 from "../../Assets/images/menu/menu8.png"
import imageItem9 from "../../Assets/images/menu/menu9.png"
import imageItem10 from "../../Assets/images/menu/menu10.png"
import imageItem11 from "../../Assets/images/menu/menu11.png"
import imageItem12 from "../../Assets/images/menu/menu12.png"


function Menu() {
  return (
      <Container>
           <section className='menu' id='#menu'>
            <SectionHeader headerText = "Straight From Kitchen"/>
            <H2Title title ="Our Menu"/> 
            <div className="menu-items">
                <Item imageItem = {imageItem1} name ="Lorem ipsum dolor sit amet" details = "Lorem ipsum dolor sit amet" price = "15 RS"/>
                <Item imageItem = {imageItem2} name ="Lorem ipsum dolor sit amet" details = "Lorem ipsum dolor sit amet" price = "15 RS"/>
                <Item imageItem = {imageItem3}name ="Vestibulum est turpis" details = "Lorem ipsum dolor sit amet" price = "15 RS"/>
                <Item imageItem = {imageItem4}name ="Lorem ipsum dolor sit amet" details = "Lorem ipsum dolor sit amet" price = "15 RS"/>
                <Item imageItem = {imageItem5}name ="Vivamus sodales augue vita" details = "Lorem ipsum dolor sit amet" price = "15 RS"/>
                <Item imageItem = {imageItem6}name ="Lorem ipsum dolor sit amet" details = "Lorem ipsum dolor sit amet" price = "15 RS"/>
                <Item imageItem = {imageItem7}name ="Lorem ipsum dolor sit amet" details = "Lorem ipsum dolor sit amet" price = "15 RS"/>
                <Item imageItem = {imageItem8}name ="Vestibulum est turpis" details = "Lorem ipsum dolor sit amet" price = "15 RS"/>
                <Item imageItem = {imageItem9}name ="Lorem ipsum dolor sit amet" details = "Lorem ipsum dolor sit amet" price = "15 RS"/>
                <Item imageItem = {imageItem10}name ="Nullam elementum magna" details = "Lorem ipsum dolor sit amet" price = "15 RS"/>
                <Item imageItem = {imageItem11}name ="Lorem ipsum dolor sit amet" details = "Lorem ipsum dolor sit amet" price = "15 RS"/>
                <Item imageItem = {imageItem12}name ="Pellentesque semper semper" details = "Lorem ipsum dolor sit amet" price = "15 RS"/>
      
            </div>
    </section>
      </Container>
  )
}
export default Menu
