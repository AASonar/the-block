import {
  FormControl,
  SelectChangeEvent,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useContext, useState } from "react";
import { Grid } from "@mui/material";
import { AddressContext } from "../../contexts/AddressContext";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import { NFTContext } from "../../contexts/NFTContext";
import FetchNFTs from "../../tzktAPI/fetchNFTs";
import FetchAccount from "../../tzktAPI/fetchAccount";
import { TezosNFTContext } from "../../contexts/TezosNFTContext";

export default function TezosForm() {
  const { address, setAddress, isSubmitAddress, setIsSubmitAddress } =
    useContext(AddressContext);

  const [loading, setLoading] = useState(false);

  const { tezosNftCardsData, setTezosNftCardsData } =
    useContext(TezosNFTContext);

  const handleAddressChange = (event: any) => {
    setAddress!(event.target.value);
  };

  function handleClick() {
    if (address && setTezosNftCardsData) {
      setIsSubmitAddress!(false);
      setLoading(true);
      FetchAccount(address, true).then((details: any) => {
        setLoading(false);
        setIsSubmitAddress!(true);
      });
      FetchNFTs(address, true).then((details: any) => {
        setTezosNftCardsData(null);
        setTezosNftCardsData(details);
        setLoading(false);
      });
    }
  }
  return (
    <Grid container justifyContent="center">
      <Grid xs="auto">
        <TextField
          sx={{ width: "35ch", marginRight: 2 }}
          id="filled-basic"
          label="Wallet Address"
          variant="filled"
          value={address}
          onChange={handleAddressChange}
        />
      </Grid>
      <Grid xs="auto"></Grid>
      <Grid item xs="auto">
        <LoadingButton
          onClick={handleClick}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
          sx={{
            width: "30ch",
            height: "7ch",
            marginLeft: 2,
          }}
        >
          Find Tezos
        </LoadingButton>
      </Grid>
    </Grid>
  );
}
function setTezosNftCardsData(arg0: null) {
  throw new Error("Function not implemented.");
}
