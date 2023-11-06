import type { ToastSettings } from "@skeletonlabs/skeleton";

export const ogImageUrl =
  "https://image.nostr.build/35a3489682170c6797e36559088b7622900b541bfd5a627d8e3fee841675f5da.png";
export const ogLogoImg =
  "https://image.nostr.build/7ece73d2d074d556eb8faad803af00b9a50f005f97648d047d2302ee9fe6f554.png";
export const kindLinks = 30001;
export const kindNotes = 1;
export const kindArticles = 30023;
export const kindCSSReplaceableAsset = 35393;
export const kindCSSAsset = 5393;
export const toastTimeOut = 3500;
export const outNostrLinksUrl = "https://njump.me";
export const CORSproxyUrl = "https://corsproxy.io/?";
export const defaulTheme = "nostree-theme";

export const succesPublishToast: ToastSettings = {
  message: "Published successfully!",
  timeout: toastTimeOut,
  hoverable: true,
  background: "variant-filled-success",
};
export const errorPublishToast: ToastSettings = {
  message: "Error on publishing, look at console!",
  timeout: toastTimeOut,
  hoverable: true,
  background: "variant-filled-error",
};
export const succesDeletingToast: ToastSettings = {
  message: "Deleted successfully!",
  timeout: toastTimeOut,
  hoverable: true,
  background: "variant-filled-success",
};
 export const defaultThemes = [
  { type: 'nostree-theme', name: 'Nostree', icon: '🦩' },
  { type: 'skeleton', name: 'Skeleton', icon: '💀' },
  { type: 'crimson', name: 'Crimson', icon: '⭕' },
  { type: 'modern', name: 'Modern', icon: '🤖' },
  { type: 'rocket', name: 'Rocket', icon: '🚀' },
  { type: 'sahara', name: 'Sahara', icon: '🏜️' },
  { type: 'wintry', name: 'Wintry', icon: '🌨️' },
  { type: 'seafoam', name: 'Seafoam', icon: '🧜‍♀️' },
  { type: 'vintage', name: 'Vintage', icon: '📺' },
  { type: 'hamlindigo', name: 'Hamlindigo', icon: '👔' },
  { type: 'gold-nouveau', name: 'Gold Nouveau', icon: '💫' },
  { type: 'customTheme', name: 'Custom', icon: '🎨' }
];