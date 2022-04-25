import React, { useState } from 'react';
import break2 from './Food/break2.jpeg';
import break3 from './Food/break3.jpg';
import break4 from './Food/break4.jpeg';
import lunch1 from './Food/lunch1.jpg';
import lunch2 from './Food/lunch2.webp';
import lunch3 from './Food/lunch3.jpg';
import milk1 from './Food/milk1.jpg';
import milk2 from './Food/milk2.webp';
import miilk3 from './Food/miilk3.jpg';
import './Menu.css'
function All() {

  const [datas, setdatas] = useState([

    {
      id: 1,
      title: 'indian idly',
      category: 'breakfast',
      price: 15.99,
      img: break4,
      desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",
    },
    {
      id: 2,
      title: 'Dosa',
      category: 'breakfast',
      price: 13.99,
      img: break2,
      desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats ",
    },
    {
      id: 3,
      title: 'Poori',
      category: 'breakfast',
      price: 6.99,
      img: break3,
      desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    },
    {
      id: 4,
      title: 'full meal',
      category: 'lunch',
      price: 20.99,
      img: lunch1,
      desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    },
    {
      id: 5,
      title: 'Non-Veg',
      category: 'lunch',
      price: 22.99,
      img: lunch2,
      desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    },
    {
      id: 6,
      title: 'Curd Rice',
      category: 'lunch',
      price: 18.99,
      img: lunch3,
      desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    },
    {
      id: 7,
      title: 'bacon overflow',
      category: 'shakes',
      price: 8.99,
      img: milk1,
      desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird ",
    },
    {
      id: 8,
      title: 'american classic',
      category: 'shakes',
      price: 12.99,
      img: milk2,
      desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    },

    {
      id: 9,
      title: 'mermaid ',
      category: 'shakes',
      price: 16.99,
      img: miilk3,
      desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    },
  ]);
  const [Datanew, setDatanew] = useState(datas)
  const category = datas.map(data => data.category)
  const uniquecategory = [...new Set(category)]
  uniquecategory.unshift('All')
  console.log(uniquecategory)
  const handleTab = (a) => {
    console.log(a)
    if (a === 'All') {
      setDatanew(datas)
      return
    }
    const filterData = datas.filter(data => data.category === a)
    setDatanew(filterData)
  }
  return (
    <div>
     <div className= ' heading1 justify-content-center'><center>Our Menu</center></div>
      <center><div className='d-flex justify-content-evenly col-md-3  heading'>
        {uniquecategory.map((a, i) => <span key={i} onClick={() => handleTab(a) } className='px-2 my-3'>{a}</span>)}</div></center>
      <br />
      <div className='container'>
        <div className='row'>
          {Datanew.map(data => <div className=' col-12 col-md-6 mb-5'><div className='row'> <div className='col-sm-8  col-md-5' >
            <img src={data.img} width='100%' height='130' /></div>
            <div className='col-md-6'>

              <div className='d-flex justify-content-between'>
                <span>{data.title}</span>
                <span> ${data.price}</span>
              </div>
              <hr />
              <div>
                {data.desc}
              </div>
            </div>
            
          </div>

          </div>)
          }
        </div>

      </div> 
    </div>
  )
}
export default All
