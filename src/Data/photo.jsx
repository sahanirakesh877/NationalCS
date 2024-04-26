import IbdImg from "/IBD.png";
import colonCancerImg from "/colCan.png";
import constipationImg from "/constipation.png";
import rectalCancerImg from "/rectalCancer.png";
import pilesImg from "/piles.png";
import fistulaImg from "/fistula.png";
import fissureImg from "/fissure.png";
import sinusImg from "/pinodialSinus.png";
import polypImg from "/polyp.png";
import prolapseImg from "/prolapse.png";

const images = [
    // Haemmoroids
    {
        id: 1,
        img: pilesImg,
    
    },

    //Anal Fissure ***
  {
    id: 2,
    img: fissureImg,
  },

    //IBD
    {
        id: 3, //CONTENT LEFT TO EDIT
        img: IbdImg,
    },

    //Colon Cancer ***
  {
    id: 4,
    img: colonCancerImg,
  },

    //Constipation
   {
    id: 5,
    img: constipationImg,
   },

    //Rectal Cancer
  {
    id: 6, //LEFT TO EDIT
    img: rectalCancerImg,
  },
    //Fistula ***
  {
    id: 7,
    img: fistulaImg,
  },

  {
    id: 8, //LEFT TO EDIT
    img: sinusImg,
  },
   
   
    //Rectal Prolapse ***
   {
    id: 9,
    img: prolapseImg,
   },

    //Polyp
 {
    id: 10, //LEFT TO EDIT
    img: polypImg,
 }
];

export default images;
