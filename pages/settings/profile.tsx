import type { NextPage } from "next";
import Footer from "../../components/ui/footer";
import NavBar from "../../components/ui/navbar";
import { Image, Space, Avatar, TextInput, Textarea } from "@mantine/core";
import SettingsTabs from "../../components/ui/settings/settingsNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
  defaultVariant: { backgroundColor: "#28293D", borderColor: "#464874" },
  label: { color: "white", opacity: 25 },
  input: { color: "white" },
  wrapper: { width: 732, borderColor: "#464874" },
};

const Account: NextPage = () => {
  return (
    <div>
      <NavBar />

      <div
        className="allcontent inline-flex space-x-16 items-start justify-start px-24 pt-16"
        style={{ width: 2000, height: 1215 }}
      >
        <SettingsTabs />
        <Space w="xl" />
        <div
          className="appearancesettings wrapper inline-flex flex-col space-y-6 items-start justify-start pt-10"
          style={{ width: 780, height: 1155 }}
        >
          <p className="UserProfile text-2xl font-bold leading-normal text-white">
            User Profile
          </p>
          <div
            className="customization1 relative bg-lightPurple border-lightPurpleOutline border rounded"
            style={{ width: 780, height: 327 }}
          >
            <Image
              className="bannercover inline-flex items-end justify-end pl-96 pr-3 pt-44 pb-2 absolute"
              style={{ width: 732, height: 219, left: 24, top: 24 }}
              src="https://wallpaperaccess.com/full/411002.jpg"
            >
              <div className="nft/button/icon flex space-x-0.5 items-center justify-center flex-1 h-full p-2 bg-gray-600 border rounded-full border-indigo-500">
                <p className=" text-xs font-solid tracking-wide leading-none text-indigo-500 capitalize">
                  s
                </p>
                <p className="+ text-xs font-solid tracking-wide leading-3 text-indigo-500 capitalize">
                  +
                </p>
              </div>
            </Image>
            <Avatar
              className="image w-32 h-32 absolute border rounded-full border-gray-600"
              style={{ left: 45, top: 180 }}
              src="https://via.placeholder.com/125x125"
            />
            <div
              className="nft/button/icon inline-flex space-x-0.5 items-center justify-center w-8 h-8 p-2 absolute bg-gray-600 border rounded-full border-indigo-500"
              style={{ left: 136, top: 266 }}
            >
              <p className=" text-xs font-solid tracking-wide leading-none text-indigo-500 capitalize">
                <FontAwesomeIcon icon={["fas", "image"]} />
              </p>
              <p className="+ text-xs font-solid tracking-wide leading-3 text-indigo-500 capitalize">
                +
              </p>
            </div>
          </div>
          <div
            className="customization2 flex flex-col space-y-4 items-start justify-start p-6 bg-lightPurple border rounded border-lightPurpleOutline"
            style={{ width: 780, height: 716 }}
          >
            <div className="field flex flex-col space-y-1 items-start justify-start">
              <TextInput
                placeholder="Sonaru"
                label="Username"
                styles={styles}
              />
            </div>
            <div className="field flex flex-col space-y-1 items-start justify-start">
              <Textarea
                placeholder="🇵🇭 NFT Artist | Art Acc of @frozensonar | OBJTK: http://objkt.com/@frozensonar FND: http://foundation.app/@frozensonar | Banner: Space Voyagers on OBJKT"
                label="Bio"
                styles={styles}
              />
            </div>
            <div className="field flex flex-col space-y-1 items-start justify-start">
              <TextInput
                placeholder="ronin:2435325234"
                label="Wallet"
                styles={styles}
              />
            </div>
            <div className="field flex flex-col space-y-1 items-start justify-start">
              <TextInput
                placeholder="bryan@acadarena.com"
                label="Email"
                styles={styles}
              />
            </div>
            <div className="field flex flex-col space-y-1 items-start justify-start">
              <TextInput
                placeholder="behance.net/frozensonar"
                label="Website"
                styles={styles}
              />
            </div>
            <div className="field flex flex-col space-y-1 items-start justify-start">
              <TextInput
                placeholder="frozensonar"
                label="Twitter Handle"
                icon={<FontAwesomeIcon icon={["fas", "at"]} />}
                styles={styles}
              />
            </div>
            <div className="field flex flex-col space-y-1 items-start justify-start">
              <TextInput
                placeholder="frozensonar"
                label="Instagram Handle"
                icon={<FontAwesomeIcon icon={["fas", "at"]} />}
                styles={styles}
              />
            </div>
          </div>
        </div>
      </div>
      <Space h="xl" />
      <Footer />
    </div>
  );
};

export default Account;
