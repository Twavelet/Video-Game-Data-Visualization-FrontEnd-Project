import React, { useState } from 'react';
// import React from 'react';


const SearchBar = (props) => {

    // need to figure out a way to pass the id of the search result into the end of the endpoint in our axios request

    const [searchInput, setSearchInput] = useState([])

    const  searchHandler = (event) => {
        event.preventDefault()
        if (searchInput !== ''){
            const filteredData = props.parentData.filter((item) => {
                if (item.name.toLowerCase().includes(searchInput.toLowerCase())){
                    return true
                }
            })
            props.setGetById(filteredData)
            
        }
        


    }

    return (
    <form onSubmit={searchHandler} className='form-inline'>
            <div classname='form-group mx-sm-3 mb-2'>
                <label className="sr-only"><b>SEARCH</b></label>
                <input placeholder='Enter a Game Title:' className="form-control" type='text' value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
            </div>
            <div>
                <button type='submit' className="btn btn-primary mb-2">Submit</button>
            </div>
        </form>
        

    )


}

export default SearchBar;


