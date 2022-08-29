import React, { useState } from 'react';
import Card from './Card.js';
import prop1 from '../Images/prop1.jpg';
import prop2 from '../Images/prop2.jpg';
import prop3 from '../Images/prop3.jpg';
import prop4 from '../Images/prop4.jpg';
import prop5 from '../Images/prop5.jpg';
import prop6 from '../Images/prop6.jpg';
import prop7 from '../Images/prop7.jpg';
import prop8 from '../Images/prop8.jpg';
import prop9 from '../Images/prop9.jpg';
import prop10 from '../Images/prop10.jpg';
import prop11 from '../Images/prop11.jpg';
import prop12 from '../Images/prop12.jpg';
import prop13 from '../Images/prop13.jpeg';
import prop14 from '../Images/prop14.jpg';
import prop15 from '../Images/prop15.jpg';
import prop16 from '../Images/prop16.jpg';
import prop17 from '../Images/prop17.jpg';
import prop18 from '../Images/prop18.jpg';
import land1 from '../Images/land1.jpg';
import land2 from '../Images/land2.jpg';
import land3 from '../Images/land3.jpg';
import land4 from '../Images/land4.jpg';
import land5 from '../Images/land5.jpg';
import land6 from '../Images/land6.jpg';
import bed from '../Images/bed.jpg';
import bathroom from '../Images/bathroom.jpg';
import area from '../Images/area.jpg';
import heart from '../Images/heart.jpg';



export default function Result({ update, filters }) {

    const [rec_value, setrec_value] = useState(0);

    const houses = [
        {
            src: prop1,
            sale: "rent",
            price: "43,000/-",
            month: "/month",
            name: "Kanasu",
            address: "#83,Dream Meadows,Kundalahalli",
            bed: "3 beds",
            bathroom: "2 bathroom",
            area: "3,300 sq.ft",
            region: "Kundalahalli",
            value: 43000,
            status: "Move in",
            type: "House",
            rec: 1,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area

        },
        {
            src: prop2,
            sale: "rent",
            price: "55,000/-",
            month: "/month",
            name: "Bliss",
            address: "#183,Dream Meadows,Kundalahalli",
            bed: "4 beds",
            bathroom: "2 bathroom",
            area: "3,500 sq.ft",
            region: "Kundalahalli",
            value: 55000,
            status: "After 1 week",
            type: "House",
            rec: 1,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },
        {
            src: prop3,
            sale: "rent",
            price: "20,000/-",
            month: "/month",
            name: "Manath",
            address: "#45,Dream Meadows,Kundalahalli",
            bed: "2 beds",
            bathroom: "2 bathroom",
            area: "1,200 sq.m",
            region: "Kundalahalli",
            value: 20000,
            status: "Move in",
            type: "Office",
            rec: 1,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop4,
            sale: "rent",
            price: "60,000/-",
            month: "/month",
            name: "Lake View",
            address: "1001,Purva Revera, Marathalli",
            bed: "4 beds",
            bathroom: "3 bathroom",
            area: "3,150 sq.ft",
            region: "Marathalli",
            value: 60000,
            status: "More than 1 Week",
            type: "House",
            rec: 2,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop5,
            sale: "rent",
            price: "35,000/-",
            month: "/month",
            name: "La Astria",
            address: "6942 ,Outer-Ring Road, Marathalli",
            bed: "2 beds",
            bathroom: "2 bathroom",
            area: "2,000 sq.ft",
            region: "Marathalli",
            value: 35000,
            status: "Move in",
            type: "Office",
            rec: 2,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop6,
            sale: "rent",
            price: "1,20,000/-",
            month: "/month",
            name: "Paradise",
            address: "104 ,Palm Meadows, Marathalli",
            bed: "5 beds",
            bathroom: "4 bathroom",
            area: "5,400 sq.ft",
            region: "Marathalli",
            value: 120000,
            status: "Move in",
            type: "House",
            rec: 2,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop7,
            sale: "rent",
            price: "65,000/-",
            month: "/month",
            name: "Prestige Ferns Residency",
            address: "#1016, Harlur Road, HSR Layout",
            bed: "3 beds",
            bathroom: "2 bathroom",
            area: "3,650 sq.ft",
            region: "HSR Layout",
            value: 65000,
            status: "Move in",
            type: "House",
            rec: 3,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },
        {
            src: prop8,
            sale: "rent",
            price: "40,000/-",
            month: "/month",
            name: "Prestige Samarpan Residency",
            address: "#1038, Harlur Road, HSR Layout",
            bed: "3 beds",
            bathroom: "2 bathroom",
            area: "2,500 sq.ft",
            region: "HSR Layout",
            value: 40000,
            status: "After 1 Week",
            type: "Office",
            rec: 3,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },
        {
            src: prop9,
            sale: "rent",
            price: "1,30,000/-",
            month: "/month",
            name: "SJR Brooklynn Residency",
            address: "2nd cross, Harlur Road, HSR Layout",
            bed: "6 beds",
            bathroom: "5 bathroom",
            area: "6,500 sq.ft",
            region: "HSR Layout",
            value: 130000,
            status: "Move in",
            type: "House",
            rec: 3,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop10,
            sale: "rent",
            price: "55,000/-",
            month: "/month",
            name: "LA Groove",
            address: "1038, Harlur Road, HSR Layout",
            bed: "3 beds",
            bathroom: "3 bathroom",
            area: "2,900 sq.ft",
            region: "HSR Layout",
            value: 55000,
            status: "Move in",
            type: "House",
            rec: 3,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop11,
            sale: "rent",
            price: "45,000/-",
            month: "/month",
            name: "AAdarsh Palm",
            address: "#3rd Cross, HSR Layout",
            bed: "3 beds",
            bathroom: "3 bathroom",
            area: "2,500 sq.ft",
            region: "HSR Layout",
            value: 45000,
            status: "After 1 Week",
            type: "Office",
            rec: 3,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop12,
            sale: "rent",
            price: "75,000/-",
            month: "/month",
            name: "AAdarsh Palm",
            address: "#4th Cross, HSR Layout",
            bed: "4 beds",
            bathroom: "3 bathroom",
            area: "3,000 sq.ft",
            region: "HSR Layout",
            value: 75000,
            status: "More than 1 Week",
            type: "Office",
            rec: 3,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop13,
            sale: "rent",
            price: "35,000/-",
            month: "/month",
            name: "Spring Beauty",
            address: "ACES Layout, Kundalahalli",
            bed: "3 beds",
            bathroom: "3 bathroom",
            area: "2,850 sq.ft",
            region: "Kundalahalli",
            value: 35000,
            status: "Move in",
            type: "House",
            rec: 1,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop14,
            sale: "rent",
            price: "70,000/-",
            month: "/month",
            name: "Willow Herbs",
            address: "ACES Layout, Kundalahalli",
            bed: "4 beds",
            bathroom: "3 bathroom",
            area: "4,100 sq.ft",
            region: "Kundalahalli",
            value: 70000,
            status: "After 1 Week",
            type: "House",
            rec: 1,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop15,
            sale: "rent",
            price: "40,000/-",
            month: "/month",
            name: "Hawan",
            address: "148 ,Palm Meadows, Marathalli",
            bed: "4 beds",
            bathroom: "3 bathroom",
            area: "4,670 sq.ft",
            region: "Marathalli",
            value: 40000,
            status: "Move in",
            type: "Office",
            rec: 2,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop16,
            sale: "rent",
            price: "1,50,000/-",
            month: "/month",
            name: "Heavens",
            address: "198 ,Palm Meadows, Marathalli",
            bed: "6 beds",
            bathroom: "4 bathroom",
            area: "7,090 sq.ft",
            region: "Marathalli",
            value: 150000,
            status: "Move in",
            type: "House",
            rec: 2,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop17,
            sale: "rent",
            price: "80,000/-",
            month: "/month",
            name: "Sterling Waters",
            address: "1982 ,Purva Revera, Marathalli",
            bed: "4 beds",
            bathroom: "4 bathroom",
            area: "5,190 sq.ft",
            region: "Marathalli",
            value: 80000,
            status: "More than 1 Week",
            type: "House",
            rec: 2,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop18,
            sale: "rent",
            price: "90,000/-",
            month: "/month",
            name: "Sterling Square",
            address: "897 ,Purva Revera, Marathalli",
            bed: "4 beds",
            bathroom: "4 bathroom",
            area: "5,090 sq.ft",
            region: "Marathalli",
            value: 90000,
            status: "More than 1 Week",
            type: "House",
            rec: 2,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop1,
            sale: "buy",
            price: "60.5 Lakh/-",
            month: "/month",
            name: "Kani",
            address: "#893,Dream Meadows,Kundalahalli",
            bed: "3 beds",
            bathroom: "2 bathroom",
            area: "3,300 sq.ft",
            region: "Kundalahalli",
            value: 6050000,
            status: "Move in",
            type: "House",
            rec: 1,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },
        {
            src: prop2,
            sale: "buy",
            price: "50 Lakh/-",
            month: "/month",
            name: "Bliss",
            address: "#183,Dream Meadows,Kundalahalli",
            bed: "4 beds",
            bathroom: "2 bathroom",
            area: "3,500 sq.ft",
            region: "Kundalahalli",
            value: 5000000,
            status: "After 1 week",
            type: "House",
            rec: 1,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },
        {
            src: land1,
            sale: "buy",
            price: "30 Lakh/-",
            // month: "/month",
            name: "Manath",
            address: "#45,Dream Meadows,Kundalahalli",
            // bed: "2 beds",
            // bathroom: "2 bathroom",
            area: "1,200 sq.m",
            region: "Kundalahalli",
            value: 3000000,
            status: "Move in",
            type: "Land",
            rec: 1,
            heart_icon: heart,
            // bed_icon: bed,
            // bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop4,
            sale: "buy",
            price: "65 Lakh/-",
            month: "/month",
            name: "Lake View",
            address: "1001,Purva Revera, Marathalli",
            bed: "4 beds",
            bathroom: "3 bathroom",
            area: "3,150 sq.ft",
            region: "Marathalli",
            value: 6500000,
            status: "More than 1 Week",
            type: "House",
            rec: 2,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: land2,
            sale: "buy",
            price: "35 Lakh/-",
            // month: "/month",
            name: "La Astria",
            address: "6942 ,Outer-Ring Road, Marathalli",
            // bed: "2 beds",
            // bathroom: "2 bathroom",
            area: "2,000 sq.ft",
            region: "Marathalli",
            value: 3500000,
            status: "Move in",
            type: "Land",
            rec: 2,
            heart_icon: heart,
            // bed_icon: bed,
            // bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop6,
            sale: "buy",
            price: "1.7 Crore/-",
            month: "/month",
            name: "Paradise",
            address: "104 ,Palm Meadows, Marathalli",
            bed: "5 beds",
            bathroom: "4 bathroom",
            area: "5,400 sq.ft",
            region: "Marathalli",
            value: 1702000000,
            status: "Move in",
            type: "House",
            rec: 2,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop7,
            sale: "buy",
            price: "80 Lakh/-",
            month: "/month",
            name: "Prestige Ferns Residency",
            address: "#1016, Harlur Road, HSR Layout",
            bed: "3 beds",
            bathroom: "2 bathroom",
            area: "3,650 sq.ft",
            region: "HSR Layout",
            value: 8000000,
            status: "Move in",
            type: "House",
            rec: 3,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: land3,
            sale: "buy",
            price: "40 Lakh/-",
            // month: "/month",
            name: "Prestige Samarpan Residency",
            address: "1038, Harlur Road, HSR Layout",
            // bed: "3 beds",
            // bathroom: "2 bathroom",
            area: "2,500 sq.ft",
            region: "HSR Layout",
            value: 4000000,
            status: "After 1 Week",
            type: "Land",
            rec: 3,
            heart_icon: heart,
            // bed_icon: bed,
            // bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop9,
            sale: "buy",
            price: "1.3 Crore/-",
            month: "/month",
            name: "SJR Brooklynn Residency",
            address: "2nd cross, Harlur Road, HSR Layout",
            bed: "6 beds",
            bathroom: "5 bathroom",
            area: "6,500 sq.ft",
            region: "HSR Layout",
            value: 13000000,
            status: "Move in",
            type: "House",
            rec: 3,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop10,
            sale: "buy",
            price: "49 Lakh/-",
            month: "/month",
            name: "LA Groove",
            address: "1038, Harlur Road, HSR Layout",
            bed: "3 beds",
            bathroom: "3 bathroom",
            area: "2,900 sq.ft",
            region: "HSR Layout",
            value: 4900000,
            status: "Move in",
            type: "House",
            rec: 3,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: land4,
            sale: "buy",
            price: "42 Lakh/-",
            // month: "/month",
            name: "AAdarsh Palm",
            address: "#3rd Cross, HSR Layout",
            // bed: "3 beds",
            // bathroom: "3 bathroom",
            area: "2,500 sq.ft",
            region: "HSR Layout",
            value: 45000,
            status: "After 1 Week",
            type: "Land",
            rec: 3,
            heart_icon: heart,
            // bed_icon: bed,
            // bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: land5,
            sale: "buy",
            price: "72 Lakh/-",
            // month: "/month",
            name: "AAdarsh Palm",
            address: "#4th Cross, HSR Layout",
            // bed: "4 beds",
            // bathroom: "3 bathroom",
            area: "3,000 sq.ft",
            region: "HSR Layout",
            value: 7200000,
            status: "More than 1 Week",
            type: "Land",
            rec: 3,
            heart_icon: heart,
            // bed_icon: bed,
            // bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop13,
            sale: "buy",
            price: "68 Lakh/-",
            month: "/month",
            name: "Spring Beauty",
            address: "ACES Layout, Kundalahalli",
            bed: "3 beds",
            bathroom: "3 bathroom",
            area: "2,850 sq.ft",
            region: "Kundalahalli",
            value: 6800000,
            status: "Move in",
            type: "House",
            rec: 1,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop14,
            sale: "buy",
            price: "90 Lakh/-",
            month: "/month",
            name: "Willow Herbs",
            address: "ACES Layout, Kundalahalli",
            bed: "4 beds",
            bathroom: "3 bathroom",
            area: "4,100 sq.ft",
            region: "Kundalahalli",
            value: 9000000,
            status: "After 1 Week",
            type: "House",
            rec: 1,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: land6,
            sale: "buy",
            price: "88 Lakh/-",
            // month: "/month",
            name: "Hawan",
            address: "148 ,Palm Meadows, Marathalli",
            // bed: "4 beds",
            // ba0throom: "3 bathroom",
            area: "4,670 sq.ft",
            region: "Marathalli",
            value: 8000000,
            status: "Move in",
            type: "Land",
            rec: 2,
            heart_icon: heart,
            // bed_icon: bed,
            // bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop16,
            sale: "buy",
            price: "2.5 Crore/-",
            month: "/month",
            name: "Heavens",
            address: "198 ,Palm Meadows, Marathalli",
            bed: "6 beds",
            bathroom: "4 bathroom",
            area: "7,090 sq.ft",
            region: "Marathalli",
            value: 25000000,
            status: "Move in",
            type: "House",
            rec: 2,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop17,
            sale: "buy",
            price: "85 Lakh/-",
            month: "/month",
            name: "Sterling Waters",
            address: "1982 ,Purva Revera, Marathalli",
            bed: "4 beds",
            bathroom: "4 bathroom",
            area: "5,190 sq.ft",
            region: "Marathalli",
            value: 8500000,
            status: "More than 1 Week",
            type: "House",
            rec: 2,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        },

        {
            src: prop18,
            sale: "buy",
            price: "97.5 Lakh/-",
            month: "/month",
            name: "Sterling Square",
            address: "897 ,Purva Revera, Marathalli",
            bed: "4 beds",
            bathroom: "4 bathroom",
            area: "5,090 sq.ft",
            region: "Marathalli",
            value: 9750000,
            status: "More than 1 Week",
            type: "House",
            rec: 2,
            heart_icon: heart,
            bed_icon: bed,
            bathroom_icon: bathroom,
            area_icon: area
        }

    ]
    return (
        <div>
            <div className='Result-outer'>
                <div className='Result-inner'>
                    {
                        houses.map((house, index) => {

                            if (filters["area"] === "all")
                                return <Card key={index} House={house} />

                            else {
                                if (filters["rob"] === "rent") {
                                    console.log(filters["rob"]);
                                    if (filters["area"] === house.region && filters["rob"] === house.sale) {
                                        console.log(filters["area"]);
                                        if (filters["type"] === house.type) {
                                            console.log(filters["type"]);
                                            if (filters["when"] === house.status) {
                                                console.log(filters["when"]);
                                                {
                                                    if (filters["price"] >= house.value) {
                                                        console.log(filters["price"]);
                                                        return <Card key={index} House={house} />
                                                    }
                                                }

                                            }

                                        }
                                    }
                                }

                                else if (filters["rob"] === "buy" && filters["rob"] === house.sale) {
                                    console.log(filters["rob"]);
                                    if (filters["area"] === house.region) {
                                        console.log(filters["area"]);
                                        if (filters["type"] === house.type) {
                                            console.log(filters["type"]);
                                            if (filters["when"] === house.status) {
                                                console.log(filters["when"]);
                                                {
                                                    if (filters["price"] >= house.value) {
                                                        console.log(filters["price"]);

                                                        return <Card key={index} House={house} />
                                                    }
                                                }

                                            }

                                        }
                                    }

                                }

                            }
                        })


                    }
                </div>
            </div>
            <hr />
            <p className='Results-title'>All Properties In {filters["area"]}</p>
            <div className='Result-outer2'>
                <div className='Result-inner'>
                    {
                        houses.map((house, index) => {
                            if (filters["area"] === house.region && filters["rob"] === house.sale) {
                                return <Card key={index} House={house} />
                            }
                        })
                    }
                </div>
            </div>

        </div>
    )
}
