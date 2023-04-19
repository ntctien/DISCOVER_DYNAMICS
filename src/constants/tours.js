import {
    caoBangImg,
    daLatImg,
    daoCatBaImg,
    hoTriAnImg,
    phuQuocImg,
    quangBinhImg,
} from "../assets/tour_images";

const tours = [
    {
        name: "Cao Bằng",
        duration: "5 ngày 4 đêm",
        description: "Trải nghiệm đạp xe, đi bộ khám phá non nước Cao Bằng",
        expense: 6600000,
        image: caoBangImg,
    },
    {
        name: "Quảng Bình",
        duration: "2 ngày 1 đêm",
        description: "Đi bộ vượt thác Dương Cầm, khám phá Động Châu Khe Nước Trong",
        expense: 4500000,
        image: quangBinhImg,
    },
    {
        name: "Đảo Cát Bà - Vịnh Lan Hạ",
        duration: "3 ngày 2 đêm",
        description: "Đạp xe, đi bộ, chèo kayak",
        expense: 4620000,
        image: daoCatBaImg,
    },
    {
        name: "Phú Quốc",
        duration: "3 ngày 2 đêm",
        description:
            "Chèo kayak, lặn ngắm san hô, trải nghiệm vui chơi tại VinWonders",
        expense: 6000000,
        image: phuQuocImg,
    },
    {
        name: "Đà Lạt",
        duration: "2 ngày 1 đêm",
        description: "Chèo thuyền, cắm trại hồ Tuyền Lâm",
        expense: 1600000,
        image: daLatImg,
    },
    {
        name: "Hồ Trị An",
        duration: "2 ngày 1 đêm",
        description: "Chèo thuyền, đi bộ trekking Mã Đà",
        expense: 2390000,
        image: hoTriAnImg,
    },
];

export default tours;