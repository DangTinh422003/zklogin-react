import { SuiClient } from "@mysten/sui.js/client";

const FULLNODE_URL = process.env.REACT_APP_FULLNODE_URL;
export const PACKAGE_ID = process.env.REACT_APP_PACKAGE_ID;

export const SUI_CLIENT = new SuiClient({ url: FULLNODE_URL });
