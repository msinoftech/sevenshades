export type CounterIcon =
  | "projects"
  | "sqft"
  | "experience"
  | "clients";

export type CounterItem = {
  id: string;
  value: string;
  label: string;
  icon: CounterIcon;
};

export const counterItems: CounterItem[] = [
  {
    id: "projects",
    value: "1,000+",
    label: "Projects Completed",
    icon: "projects",
  },
  {
    id: "sqft",
    value: "2M+",
    label: "Sq. Ft. Delivered",
    icon: "sqft",
  },
  {
    id: "experience",
    value: "10+ Years",
    label: "Industry Experience",
    icon: "experience",
  },
  {
    id: "clients",
    value: "750+",
    label: "Happy Clients",
    icon: "clients",
  },
];
