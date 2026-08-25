import { Leaf } from "lucide-react";
import {
  StomachIcon,
  LiverIcon,
  KidneyIcon,
  DiabetesIcon,
  HeartIcon,
  BloodPressureIcon,
  LungsIcon,
  ThroatIcon,
  JointIcon,
  PainIcon,
  SkinIcon,
  HairIcon,
  MensHealthIcon,
  WomensHealthIcon,
  FertilityIcon,
} from "./icons/CategoryIcons";

const ICONS = {
  Stomach: StomachIcon,
  Liver: LiverIcon,
  Kidney: KidneyIcon,
  Diabetes: DiabetesIcon,
  Heart: HeartIcon,
  BloodPressure: BloodPressureIcon,
  Lungs: LungsIcon,
  Throat: ThroatIcon,
  Joint: JointIcon,
  Pain: PainIcon,
  Skin: SkinIcon,
  Hair: HairIcon,
  MensHealth: MensHealthIcon,
  WomensHealth: WomensHealthIcon,
  Fertility: FertilityIcon,
};

function FallbackIcon(props) {
  return <Leaf {...props} strokeWidth={1.6} />;
}

export default function CategoryIcon({ name, className }) {
  const Icon = ICONS[name] || FallbackIcon;
  return <Icon className={className} />;
}
