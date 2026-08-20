import {
  Soup,
  FlaskConical,
  Droplets,
  Activity,
  HeartPulse,
  Gauge,
  Wind,
  Thermometer,
  Bone,
  Flame,
  Sparkles,
  Feather,
  Mars,
  Venus,
  Baby,
  Leaf,
} from "lucide-react";

const ICONS = {
  Soup,
  FlaskConical,
  Droplets,
  Activity,
  HeartPulse,
  Gauge,
  Wind,
  Thermometer,
  Bone,
  Flame,
  Sparkles,
  Feather,
  Mars,
  Venus,
  Baby,
};

export default function CategoryIcon({ name, className }) {
  const Icon = ICONS[name] || Leaf;
  return <Icon className={className} strokeWidth={1.75} />;
}
