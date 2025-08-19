import {  RiCamera2Fill, RiCameraLensAiFill, RiCameraLensAiLine, RiFolder5Fill, RiFolder5Line, RiFunctionLine, RiLayoutGridFill, RiTvFill, RiTvLine } from "@remixicon/react";

export const dataSidebar = [
    {
        iconDisabled: RiFunctionLine,
        label: "Home",
        href: "/",
        iconEnabled: RiLayoutGridFill
    }, {
        iconDisabled: RiTvLine,
        label: "Cursos",
        href: "/courses",
        iconEnabled: RiTvFill
    },
    {
        iconDisabled: RiFolder5Line,
        label: "Meus Cursos",
        href: "/courses/my-courses",
        iconEnabled: RiFolder5Fill
    },{
        iconDisabled: RiCameraLensAiLine,
        label: "Studio",
        href: "/courses/my-courses",
        iconEnabled: RiCameraLensAiFill
    },
   
] 