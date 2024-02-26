import { PUBLIC_PB_URL } from "$env/static/public";

import Pocketbase from "pocketbase";

const pb = new Pocketbase(PUBLIC_PB_URL);

export default pb;
