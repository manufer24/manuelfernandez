import { variantConfig } from "../config/variant";

const translate = (
  key: string,
  variant: keyof typeof variantConfig.siteLangs,
) => {
  const keys = key.split(".");
  let translation = variantConfig.siteLangs[variant];

  for (const k of keys) {
    // @ts-ignore
    translation = translation[k];
  }

  return translation;
};

export default translate;
