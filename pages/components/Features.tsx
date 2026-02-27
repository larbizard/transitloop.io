import { useTranslation } from "react-i18next";
import {
  BellAlertIcon,
  BugAntIcon,
  BuildingLibraryIcon,
  CloudArrowUpIcon,
  EyeDropperIcon,
  PaperAirplaneIcon,
  PuzzlePieceIcon,
  RectangleStackIcon,
  RssIcon,
  ScaleIcon,
  SignalIcon,
  Square3Stack3DIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import Feature from "./Feature";
import Founder from "./Founder";
import NosReferences from "./NosReferences";
import NosRealisations from "./NosRealisations";
import DownloadApp from "./DownloadApp";
import Blassty from "./Blassty";

const dataIcons = [
  Square3Stack3DIcon,
  SignalIcon,
  SwatchIcon,
  PuzzlePieceIcon,
];

const appIcons = [
  CloudArrowUpIcon,
  BellAlertIcon,
  RssIcon,
  BugAntIcon,
  EyeDropperIcon,
];

const whiteLabelAppIcons = [
  BellAlertIcon,
  RssIcon,
  BugAntIcon,
  EyeDropperIcon,
];

const amoIcons = [
  BuildingLibraryIcon,
  PaperAirplaneIcon,
  RectangleStackIcon,
  ScaleIcon,
];

const Features = () => {
  const { t } = useTranslation();

  const dataFeaturesTranslated = t("Features.Data", { returnObjects: true }) as {
    title: string;
    features: { name: string; description: string }[];
  };
  const appFeaturesTranslated = t("Features.App", { returnObjects: true }) as {
    title: string;
    features: { name: string; description: string }[];
  };
  const appWhiteFeaturesTranslated = t("Features.AppWhite", { returnObjects: true }) as {
    title: string;
    features: { name: string; description: string }[];
  };
  const amoFeaturesTranslated = t("Features.Amo", { returnObjects: true }) as {
    title: string;
    features: { name: string; description: string }[];
  };

  const dataFeatures = {
    title: dataFeaturesTranslated?.title ?? "",
    features:
      Array.isArray(dataFeaturesTranslated?.features) ?
        dataFeaturesTranslated.features.map((f, i) => ({
          ...f,
          icon: dataIcons[i],
        }))
        : [],
  };

  const appFeatures = {
    title: appFeaturesTranslated?.title ?? "",
    features:
      Array.isArray(appFeaturesTranslated?.features) ?
        appFeaturesTranslated.features.map((f, i) => ({
          ...f,
          icon: appIcons[i],
        }))
        : [],
  };

  const whiteLabelAppFeatures = {
    title: appWhiteFeaturesTranslated?.title ?? "",
    features:
      Array.isArray(appWhiteFeaturesTranslated?.features) ?
        appWhiteFeaturesTranslated.features.map((f, i) => ({
          ...f,
          icon: whiteLabelAppIcons[i],
        }))
        : [],
  };

  const amoFeatures = {
    title: amoFeaturesTranslated?.title ?? "",
    features:
      Array.isArray(amoFeaturesTranslated?.features) ?
        amoFeaturesTranslated.features.map((f, i) => ({
          ...f,
          icon: amoIcons[i],
        }))
        : [],
  };

  return (
    <div className="">
      <Feature {...dataFeatures} />
      <Founder />
      <NosReferences />
      <NosRealisations />
      <Feature {...whiteLabelAppFeatures} />
      <Blassty />
      <Feature {...appFeatures} />
      <DownloadApp />
      <Feature {...amoFeatures} />
    </div>
  );
};

export default Features;
