import { useContext } from "react";
import { AssetContext } from "@/components/contexts/ImagesProvider";

const useDataAssets = () => useContext(AssetContext);

export default useDataAssets;
