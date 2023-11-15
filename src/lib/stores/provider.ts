import { writable } from "svelte/store";
import NDK from "@nostr-dev-kit/ndk";
import type { NDKCacheAdapter } from "@nostr-dev-kit/ndk";
import NDKCacheAdapterDexie from "@nostr-dev-kit/ndk-cache-dexie";
import { browser } from "$app/environment";

let cacheAdapter: NDKCacheAdapter | undefined;

if (browser) {
  cacheAdapter = new NDKCacheAdapterDexie({
    dbName: "nostreeV02",
    expirationTime: 3600 * 24 * 2,
  });
}

export const defaulRelaysUrls: string[] = [
  "wss://purplepag.es",
  "wss://relay.nostr.band",
  "wss://nos.lol",
  "wss://offchain.pub/",
  "wss://nostr-pub.wellorder.net",
];

const ndk = new NDK({
  explicitRelayUrls: defaulRelaysUrls,
  cacheAdapter,
  enableOutboxModel: false,
});

const ndkStore = writable(ndk);

export default ndkStore;
