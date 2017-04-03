import React from 'react'

const FilterLink = (props) => (
  <a onClick={(e)=>{
    e.preventDefault();
    console.log(props.filter);
  }}>{props.children}</a>
)

const Footer = () => (
  <p>
    Show: 
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ARCHIVE">
      Archive
    </FilterLink>
  </p>
)

export default Footer
