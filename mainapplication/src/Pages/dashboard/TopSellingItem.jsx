import React from 'react'

function TopSellingItem({ item }) {
    let imgStyle = {
        width: "60px"
    }
  return (
    <tr>
    <th scope="row">
        <a href="#" className='imageeee'>
            <img src={item.preview} alt="" className='imageeee' style={imgStyle}/>
        </a>
    </th>
    <td>
        <a href="#" className="text-primary fw-bold">
            {item.name}
        </a>
    </td>
    <td>{item.price.toFixed(2)}</td>
    <td className="fw-bold">{item.sold}</td>
    <td>
        ${(item.price * item.sold).toLocaleString('en-US')}
    </td>
</tr>
  )
}

export default TopSellingItem