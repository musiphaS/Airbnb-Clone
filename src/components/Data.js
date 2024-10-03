
// In this section we are going to store our data for our different clients in order to retrieve it to our app.js using mapping 


const container = [
    {
        id: 1,
        coverImg: "image 12.png",
        stats: {
            rating: 5.0,
            reviewCount: 6,
        },
        title: "Life Lessons with Katie Zaferes",
        description: "l will share with you what l call success in my career.",
        price: 136,
        openSlots: 0,
    },

    {
        id: 2,
        coverImg: "wedding-photography 1.png",
        stats: {
            rating: 5.0,
            reviewCount: 30,
        },
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
    },

    {
        id: 3,
        coverImg: "mountain-bike 1.png",
        stats: {
            rating: 4.8,
            reviewCount: 2,
        },
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
    },
];

export default container;