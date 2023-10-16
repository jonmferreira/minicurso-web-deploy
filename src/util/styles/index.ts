import "./style.css"

import iconProjetoBase from "@/assets/logo/logoEST.png";
import logoUEA from "@/assets/logo/logoUEA.svg";


export const styleFlexRow = `
flex
flex-row
`
export const styeleFlexRowCenter = `
${styleFlexRow}
justify-content-center
align-items-center
`

export const flexScreenCenter = "flex " +
    "w-screen " +
    "h-screen " +
    "justify-content-center " +
    "align-items-center ";

export {
    logoUEA,
    iconProjetoBase,

};
