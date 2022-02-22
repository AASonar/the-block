import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import { NftCards } from "../components/ui";
import AddressForm from "../components/ui/addressForm";
import { NFTBaseContext } from "../components/contexts/NFTContext";
import { useContext, useState } from "react";
import {
  NFTBaseType,
  NFTDataType,
  NFTItemsType,
} from "../components/types/nftType";
import { AddressContext } from "../components/contexts/AddressContext";
import { TezosNFTType } from "../components/types/tezos/tezosNFTType";

const Home: NextPage = () => {
  const { chain_id, setChain_id, address, setAddress } =
    useContext(AddressContext);

  const [nftBaseData, setNftBaseData] = useState<NFTBaseType>();
  const [nftItemsData, setNftItemsData] = useState<NFTItemsType>();
  const [nftData, setNftData] = useState<NFTDataType>();

  return (
    <div className={styles.container}>
      {/* <Script src="https://unpkg.com/moralis/dist/moralis.js"></Script> */}
      <NFTBaseContext.Provider
        value={{
          nftBaseData,
          setNftBaseData,
          nftItemsData,
          setNftItemsData,
          nftData,
          setNftData,
        }}
      >
        <Head>
          <title>NFT Explorer</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <AddressForm></AddressForm>
          <h1>{address}</h1>
          {nftBaseData && <NftCards></NftCards>}
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </NFTBaseContext.Provider>
    </div>
  );
};

export default Home;
