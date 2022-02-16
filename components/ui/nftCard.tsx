import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, CardActionArea } from "@mui/material";
import getWebMetadata from "../axios/getWebMetadata";
import { useEffect, useState } from "react";
import { TezosNFTDetails } from "../types/tezos/tezosNFTType";
import { NFTCardDetails } from "../types/nftCardType";

export default function NFTCard({
  block_number,
  name,
  symbol,
  metadata: rawMetadata,
  token_uri,
}: NFTCardDetails) {
  const metadata = JSON.parse(rawMetadata ?? "{}");

  const [img, setImg] = useState<any>(metadata.image);

  useEffect(() => {
    if (!metadata.image && token_uri && rawMetadata) {
      getWebMetadata(token_uri).then((img: any) => setImg(img));
    }
    console.log(img);
  }, [token_uri, metadata.image, rawMetadata]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          alt={metadata.image}
          placeholder="blur"
          image={metadata.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name ?? metadata.name} ({symbol && symbol})
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {metadata.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
