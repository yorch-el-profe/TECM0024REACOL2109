import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

function PokemonList({ pokemon }) {
  return (
    <List>
      {pokemon.map((p) => (
        <ListItem>
          <ListItemButton>{p.pokemon.name}</ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default PokemonList;
