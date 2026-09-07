const flagLogo: string = "";

const getFlagLogo = (flagLogo: string): string => {
  switch (flagLogo) {
    case "english":
      return "en";
    case "italy":
      return "it";
    case "japan":
      return "jp";
    case "korea":
      return "kr";
    case "spain":
      return "es";
    case "united states":
      return "us";
    case "china":
      return "cn";
    case "russia":
      return "ru";
    case "france":
      return "fr";
    case "germany":
      return "de";
    case "india":
      return "in";
    case "turkey":
      return "tr";
    case "brazil":
      return "br";
    case "australia":
      return "au";
    case "canada":
      return "ca";
    case "singapore":
      return "sg";
    case "hongkong":
      return "hk";
    case "malaysia":
      return "my";
    case "newzealand":
      return "nz";
    case "indonesia":
      return "id";
    case "thailand":
      return "th";
    case "vietnam":
      return "vn";
    case "poland":
      return "pl";
    case "portugal":
      return "pt";
    case "austria":
      return "at";
    case "czech":
      return "cz";
    case "denmark":
      return "dk";
    case "finland":
      return "fi";
    case "greece":
      return "gr";
    case "hungary":
      return "hu";
    case "ireland":
      return "ie";
    case "israel":
      return "il";
    case "jamaica":
      return "jm";
    case "mexico":
      return "mx";
    case "netherlands":
      return "nl";
    case "norway":
      return "no";
    case "philippines":
      return "ph";
    case "portugal":
      return "pt";
    case "saudi arabia":
      return "sa";
    case "switzerland":
      return "ch";
    case "sweden":
      return "se";
    case "united states":
      return "us";
    case "united kingdom":
      return "gb";
    case "united arab":
      return "ae";
    case "united arab emirates":
      return "ae";
    default:
      return "";
  }
};

const countryCode: string = getFlagLogo(flagLogo);

export default countryCode;
