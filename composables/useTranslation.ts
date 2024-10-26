import { useState } from "#app";
import { variantConfig } from "../config/variant";
import translate from "../utils/translate";

export function useTranslation() {
  const variant = useState("variant", () => variantConfig.siteVariant);

  const t = (key: string) => translate(key, variant.value);

  return { t, variant };
}
