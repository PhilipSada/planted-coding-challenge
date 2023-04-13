import React, {useState} from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import './SearchBox.scss';
import { CustomerLocation } from '../../interfaces/customerLocation';

interface SearchBoxProps {
   setFilteredData:React.Dispatch<React.SetStateAction<CustomerLocation[]>>;
   data:CustomerLocation[];
}
const SearchBox: React.FC<SearchBoxProps> = ({data, setFilteredData}) => {
    const [searchText, setSearchText] = useState<string>('');
    
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchText(e.currentTarget.value);
    
        let value = e.currentTarget.value;
        if (!value) return setFilteredData(data);

        const filteredCustomerLocation = data.filter((location: any) => {
            return (location.name).toLowerCase().includes(value.toLowerCase());
        });
        
        setFilteredData(filteredCustomerLocation);
    }
    
    return (
        <div className="search-box">
            <IoSearchOutline className="search-box__icon"/>
            <input className="search__input form-control form-control-lg" placeholder="Filter locations" value={searchText} onChange={handleChange}/>
        </div>
    );
}

export default SearchBox;