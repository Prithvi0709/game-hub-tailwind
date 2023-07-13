import FetchResponse from "../Interface";
import {
  FaApple,
  FaAndroid,
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaLinux,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";

//Function to generate the platform icons for every GameCard
export function platformIcons(data: FetchResponse) {
  let temp: string[] = [];

  data.platforms.map((d) => {
    temp.push(d.platform.slug);
  });

  // Split the hi-fun
  // Remove the numbers
  for (let i = 0; i < temp.length; i++) {
    temp[i] = temp[i].split("-")[0];
    temp[i] = temp[i].replace(/\d/g, "");

    // Temporary Fix
    if (temp[i] == "ios") temp[i] = temp[i].replace("ios", "macos");
    if (temp[i] == "ps") temp[i] = temp[i].replace("ps", "playstation");
  }
  const unique = Array.from(new Set(temp));

  let finalIcons: React.ReactElement[] = [];
  const icons: Set<React.ReactElement> = new Set();

  unique.map((u) => {
    switch (u) {
      case "playstation":
        icons.add(<FaPlaystation />);
        break;
      case "xbox":
        icons.add(<FaXbox />);
        break;
      case "pc":
        icons.add(<FaWindows />);
        break;
      case "android":
        icons.add(<FaAndroid />);
        break;
      case "linux":
        icons.add(<FaLinux />);
        break;
      case "macos":
        icons.add(<FaApple />);
        break;
      case "nintendo":
        icons.add(<SiNintendo />);
        break;
    }
  });

  finalIcons = Array.from(icons);

  return (
    <div className="flex">
      {finalIcons.map((i) => (
        <div className="mr-2 opacity-50">{i}</div>
      ))}
    </div>
  );
}
