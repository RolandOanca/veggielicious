import risotto from "../../assets/risotto.jpeg";
import pasta from "../../assets/pasta.png";
import eggs from "../../assets/eggs.jpeg";
import scrabbeleggs from "../../assets/scrabbeleggs.jpeg";
import chickensalad from "../../assets/chickensalad.jpg";
import steak from "../../assets/steak.jpeg";
import beef from "../../assets/beef.jpeg";
import pizza_med from "../../assets/pizza_med.jpg";
import pizza from "../../assets/pizza.png";
import burgger1 from "../../assets/burgger1.jpg";
import burgger2 from "../../assets/burgger2.jpg";




const MenuData = [
    {
        id: 1,
        name:'Baked Eggs & Swiss Chard ',
        image: eggs,
        category:'breakfast',
        price: '5$',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat erat neque, ac ultricies quam sodales in. Nulla placerat quis ligula eget hendrerit. '
    },

    {
        id: 2,
        name:'Soft-scrambled eggs',
        image: scrabbeleggs,
        category: 'breakfast',
        price: '5$',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat erat neque, ac ultricies quam sodales in. Nulla placerat quis ligula eget hendrerit. '
    },

    {
        id: 3,
        name:'Pasta Puttanesca',
        image: pasta,
        category:'lunch',
        price: '5$',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat erat neque, ac ultricies quam sodales in. Nulla placerat quis ligula eget hendrerit. '
    },

    {
        id: 4,
        name:'Butternut Squash Risotto',
        image: risotto,
        category:'lunch',
        price: '10$',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat erat neque, ac ultricies quam sodales in. Nulla placerat quis ligula eget hendrerit. '
    },

    {
        id: 5,
        name:'Chicken Salad',
        image: chickensalad,
        category:'lunch',
        price: '8$',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat erat neque, ac ultricies quam sodales in. Nulla placerat quis ligula eget hendrerit. '
    },

    {
        id: 6,
        name:'Chicken Salad',
        image: chickensalad,
        category:'lunch',
        price: '8$',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat erat neque, ac ultricies quam sodales in. Nulla placerat quis ligula eget hendrerit. '
    },

    {
        id: 7,
        name: 'Perfect Flank Steak',
        image: steak,
        category:'dinner',
        price: '5$',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat erat neque, ac ultricies quam sodales in. Nulla placerat quis ligula eget hendrerit. '
    },

    {
        id: 8,
        name: 'Beef & Broccoli',
        image: beef,
        category:'dinner',
        price: '5$',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat erat neque, ac ultricies quam sodales in. Nulla placerat quis ligula eget hendrerit. '
    },

    {
        id: 9,
        name:'Mediterranean Pizza',
        image: pizza_med,
        category:'pizza',
        price: '5$',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat erat neque, ac ultricies quam sodales in. Nulla placerat quis ligula eget hendrerit. '
    },
    
    {
        id: 10,
        name: 'Home Made Pasta',
        image: pizza,
        category:'pizza',
        price: '5$',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat erat neque, ac ultricies quam sodales in. Nulla placerat quis ligula eget hendrerit. '
    },

    {
        id: 11,
        name: 'Classic Burgger',
        image:burgger1,
        category:'burgger',
        price: '5$',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat erat neque, ac ultricies quam sodales in. Nulla placerat quis ligula eget hendrerit. '
    },

    {
        id: 12,
        name: 'Cheeses for Burgger',
        image:burgger2,
        category:'burgger',
        price: '5$',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat erat neque, ac ultricies quam sodales in. Nulla placerat quis ligula eget hendrerit. '
    }
];



export default MenuData;

