import React from 'react';
const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;

  return (
      <div>
          {/* {console.log(repos.stores)} */}
          <h1>{repos.stores.name}</h1>
          <img src={repos.stores.logo}></img>
          <h1>Store ID:{repos.stores.store_id}</h1>
          <ul>
            {/* {
              Object.assign([],repos.products).map(i=>{
                // console.log(i.product_name)
                return(
                  <li key={i.product_id}>{i.product_name}
                  <img src={i.image} width="100px"></img>
                  
                  </li>
                )
              })
            } */}

            {
              Object.values(repos.products).map(i=>{
                return(
                  <li key={i.product_name}>{i.product_name}
                  <img src={i.image} width="100px"></img>
                  </li>
                )
              })
            }

          </ul>
          
      </div>
  );
};
export default List;
