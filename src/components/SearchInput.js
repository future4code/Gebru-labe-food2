import React from "react";


const SearchInput = ({value, onChange}) => {
    const handleChange = (event) => {
        onChange(event.target.value)
    }
    return (
        <input
         type="search"
          value={value}
           onChange={handleChange}/>
    )


}
export default SearchInput;