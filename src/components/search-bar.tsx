import { IconButton, Input } from "@mui/joy";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useBookSearchStore } from "../store/bookStore";

export const SearchBar = () => {
    const [value, setValue] = useState('');
    const { setSearchTerm } = useBookSearchStore();
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Input type="text" placeholder="Search books"
            sx={{ width: '40%', marginRight: '0', paddingRight: '0' }} 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    setSearchTerm(value);
                }
            }}
            endDecorator={

            <IconButton
            onClick={() => {
                setSearchTerm(value);
              }}
              variant="solid"
              color="primary"
              type="submit"
              sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginRight: '0', paddingRight: '0', height: '100%'}}
            >
                <Search />
            </IconButton>
            }   
            />
        </div>
    )
}