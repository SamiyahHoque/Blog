import Infobox from "@/components/InfoBox";

export const infobox = {
  render: Infobox,
  attributes: {
   type: {
    type: String,
    default: "info",
    matches: ["warning", "info", "error"],
   },
   title: {
    type: String,
   },
  },
};