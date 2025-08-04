import { Typography } from "@mui/joy";
import { SearchBar } from "../../components/search-bar";
import { BooksGrid } from "../books-grid/books-grid";

export const HomePage = () => {
  return (  
    <div className="home-page" style={{ width: '100%'}}>
      <Typography level="h1" sx={{ margin: '2rem'}}>Discover your next favorite book</Typography>
      <Typography level="h2" sx={{ margin: '2rem' }}>Smart recommendations tailored to your taste.</Typography>
      <SearchBar />
      <BooksGrid />
    </div>
  );
}