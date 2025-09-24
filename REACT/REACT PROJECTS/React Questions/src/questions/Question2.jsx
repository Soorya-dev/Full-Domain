//!List onclick pass id using url Params to another component

import { useParams,useNavigate } from "react-router-dom";

const ListPage = () => {
  const navigate = useNavigate();

  const items = [
    { id: 1, name: "Book" },
    { id: 2, name: "Laptop" },
    { id: 3, name: "Phone" }
  ];

  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map(item => (
          <li 
            key={item.id} 
            onClick={() => navigate(`/detail/${item.id}`)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};


const DetailPage = () => {
  const { id } = useParams();  // <-- reading URL param

  return (
    <div>
      <h2>Detail Page</h2>
      <p>Item ID: {id}</p>
    </div>
  );
};


export default ListPage;
export {DetailPage}