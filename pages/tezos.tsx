import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import { NftCards } from "../components/ui";
import { NFTContext } from "../components/contexts/NFTContext";
import { useContext, useState } from "react";
import { NFTCardType } from "../components/types/nftCardType";
import { AddressContext } from "../components/contexts/AddressContext";
import TezosForm from "../components/ui/tezos/tezosForm";
import AccCard from "../components/ui/tezos/accCard";
import { TezosNFTType } from "../components/types/tezos/tezosNFTType";
import { TezosNFTContext } from "../components/contexts/TezosNFTContext";

const Tezos: NextPage = () => {
  const {
    address,
    setAddress,
    network,
    setNetwork,
    setIsSubmitAddress,
    isSubmitAddress,
  } = useContext(AddressContext);

  const [tezosNftCardsData, setTezosNftCardsData] = useState<TezosNFTType>();

  return (
    <div className={styles.container}>
      <TezosNFTContext.Provider
        value={{ tezosNftCardsData, setTezosNftCardsData }}
      >
        <Head>
          <title>Tezos Explorer</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <TezosForm />
          <h1>{address}</h1>
          {isSubmitAddress && <AccCard />}
          {<NftCards></NftCards>}
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
      </TezosNFTContext.Provider>
    </div>
  );
};

export default Tezos;
