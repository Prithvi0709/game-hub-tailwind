import FetchResponse from "../Interface";
import jsonData from "../../assets/platformData.json";
import {
  FaApple,
  FaAndroid,
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaLinux,
  FaGlobe,
} from "react-icons/fa";
import { SiNintendo, SiAtari, SiSega, SiCommodore } from "react-icons/si";

interface Platform {
  id: number;
  name: string;
  slug: string;
  platforms: SubPlatform[];
}

interface SubPlatform {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: any;
  year_start: any;
  year_end: any;
}

//Function to generate the platform icons for every GameCard
export function platformIcons(data: FetchResponse) {
  let extractedPlatformSlugs: string[] = [];
  let platformsData: Platform[] = jsonData.results; // Store the platforms json data
  const icons: Set<String> = new Set(); // Store unique extracted parent platform slugs
  let finalIcons: React.ReactElement[] = []; // Store the final react icons for the parent platforms

  if (data.platforms == null) return;

  // Extract the platform slugs and sture
  data.platforms.map((d) => {
    extractedPlatformSlugs.push(d.platform.slug);
  });

  function getParentPlatformSlug(
    data: Platform[],
    subPlatformName: string
  ): string | null {
    for (let platform of data) {
      for (let subPlatform of platform.platforms) {
        if (subPlatform.slug === subPlatformName) {
          return platform.slug;
        }
      }
    }

    return null;
  }

  extractedPlatformSlugs.map((word) => {
    let parentPlatform = getParentPlatformSlug(platformsData, word);
    parentPlatform != null && icons.add(parentPlatform);
  });

  // Slugs "ios" and "mac" must display the same apple icon
  if (icons.has("mac") && icons.has("ios")) icons.delete("ios");

  Array.from(icons).map((word) => {
    switch (word) {
      case "playstation":
        finalIcons.push(<FaPlaystation />);
        break;
      case "xbox":
        finalIcons.push(<FaXbox />);
        break;
      case "pc":
        finalIcons.push(<FaWindows />);
        break;
      case "android":
        finalIcons.push(<FaAndroid />);
        break;
      case "linux":
        finalIcons.push(<FaLinux />);
        break;
      case "mac":
      case "ios":
        finalIcons.push(<FaApple />);
        break;
      case "nintendo":
        finalIcons.push(<SiNintendo />);
        break;
      case "atari":
        finalIcons.push(<SiAtari />);
        break;
      case "sega":
        finalIcons.push(<SiSega />);
        break;
      case "commodore-amiga":
        finalIcons.push(<SiCommodore />);
        break;
      case "web":
        finalIcons.push(<FaGlobe />);
        break;
    }
  });

  return (
    <div className="flex">
      {finalIcons.map((i) => (
        <div className="mr-2 opacity-50">{i}</div>
      ))}
    </div>
  );
}
