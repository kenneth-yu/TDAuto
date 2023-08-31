import engineImg from "../../assets/photogallery/engine.webp"
import subframeImg from "../../assets/photogallery/subframe.webp"
import crateEngineImg from "../../assets/photogallery/crate-engine.webp"
import bodyRepairedImg from "../../assets/photogallery/bodywork-repaired.webp"
import bodyRepaired2Img from "../../assets/photogallery/bodywork-repaired2.webp"
import bodyDamagedImg from "../../assets/photogallery/bodywork-damaged.webp"
import bodyDamaged2Img from "../../assets/photogallery/bodywork-damaged2.webp"
import engineRemoval from "../../assets/photogallery/engine-removal.webp"

export const photogalleryFallBackData = {
    heading: "Past \n Work",
    images:[
        {
            src: engineImg,
            altText: 'engine-image'
        },
        {
            src: subframeImg,
            altText: 'subframe-image'
        },
        {
            src: crateEngineImg,
            altText: 'crate-engine-image'
        },
        {
            src: bodyRepairedImg,
            altText: 'bodywork-after-image'
        },
        {
            src: bodyRepaired2Img,
            altText: 'bodywork-after-2-image'
        },
        {
            src: bodyDamagedImg,
            altText: 'bodywork-before-image'
        },
        {
            src: bodyDamaged2Img,
            altText: 'bodywork-before-2-image'
        },
        {
            src: engineRemoval,
            altText: 'engine-removal-image'
        }
    ]
}