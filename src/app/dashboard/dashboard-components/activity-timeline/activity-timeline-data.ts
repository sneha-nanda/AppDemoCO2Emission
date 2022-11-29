export interface Activity{
    name:string;
    //image:string;
    number:string;
    commentTime:string;
    comment:string;

    bottomImage:string;
    buttonColor:string;

}
export interface HomeEnergy{
    name:string;
    //image:string;
    number:string;
    commentTime:string;
    comment:string;

    bottomImage:string;
    buttonColor:string;

}
export interface FoodWastage{
    name:string;
    //image:string;
    number:string;
    commentTime:string;
    comment:string;

    bottomImage:string;
    buttonColor:string;

}

export const activities:Activity[]=[
    {
        name:'Active Travel',
        number:'1',
        commentTime:'Tip No. 1',
        comment:'Walking or wheeling are great travel options and are also the most accessible – walking costs nothing while wheeling provides more opportunity to access the benefits of active travel..',
    
        bottomImage:'',
        buttonColor:''
    
    },
    {
        name:'Go electric',
        number:'2',
        commentTime:'Tip No. 2',
        comment:'If you need some assistance with your cycling, why not go electric? Ebikes and ecargo bikes have an electric motor and battery to help you cover longer journeys more easily than on a conventional cycle. Ebikes and ecargo bikes have grown in popularity in recent years, it’s likely you have seen them in your local area and not noticed the difference.',
    
        bottomImage:'',
        buttonColor:'primary'
    
    },
    {
        name:'Shared travel options',
        number:'3',
        commentTime:'Tip No. 3',
        comment:'Shared transport options, such as using public transport, car sharing or bike hire schemes offer a low carbon method of travel.The primary benefit of shared transport is its variety – there is bound to be a suitable option for you. Shared transport includes: bike share schemes,public transport,car clubs,lift sharing',
    
        bottomImage:'',
        buttonColor:''
    
    },
    {
        name:'Efficient driving',
        number:'4',
        commentTime:'Tip No. 4',
        comment:'Efficient driving is a driving style that reduces fuel bills, cuts carbon emissions and lowers accident rates. It is about becoming a better driver, rather than sacrificing the performance or enjoyment of driving. For electric vehicles (EVs), efficient driving also brings greater vehicle range.',
    
        bottomImage:'',
        buttonColor:'warn'
    
    }

]
export const energyTips:HomeEnergy[]=[
    {
        name:'Heating your home',
        number:'1',
        commentTime:'Tip No. 1',
        comment:'Having an efficient heating system running on a low carbon fuel is one of the most important steps you can take to reduce your fuel bills and your carbon dioxide emissions.',
    
        bottomImage:'',
        buttonColor:''
    
    },
    {
        name:'Reducing home heat loss',
        number:'2',
        commentTime:'Tip No. 2',
        comment:'Installing insulation or draught-proofing will reduce heat loss',
    
        bottomImage:'',
        buttonColor:'primary'
    
    },
    {
        name:'Generating renewable electricity',
        number:'3',
        commentTime:'Tip No. 3',
        comment:'With over 1 million homes in the UK already generating electricity from either solar or wind, renewables are quickly becoming a common sight across the UK.',
    
        bottomImage:'',
        buttonColor:''
    
    },
    {
        name:'Buying energy efficient products',
        number:'4',
        commentTime:'Tip No. 4',
        comment:'Moving to energy efficient appliances can be an excellent way to save money on your bills, as well as reducing your carbon footprint.',
    
        bottomImage:'',
        buttonColor:'warn'
    
    }

]
export const foodTips:FoodWastage[]=[
    {
        name:'Check the fridge',
        number:'1',
        //image:'assets/images/users/1.jpg',
        // image:'assets/images/big/img2.jpg',
        commentTime:'Tip No. 1',
        comment:'Check what food you already have in your cupboards and fridge before going shopping.',
    
        //bottomImage:'assets/images/big/img2.jpg',
        bottomImage:'',
        buttonColor:''
    
    },
    {
        name:'Use meal plans',
        // image:'assets/images/big/img2.jpg',
        number:'2',
        commentTime:'Tip No. 2',
        comment:'Write a weekly meal plan and only buy what you need – remember to include leftovers in your plan',
    
        bottomImage:'',
        buttonColor:'primary'
    
    },
    {
        name:'Use your freezer',
        // image:'assets/images/users/3.jpg',
        //image:'assets/images/big/img2.jpg',
        number:'3',
        commentTime:'Tip No. 3',
        comment:'Freezing food can extend its lifespan and stop it from going to waste',
    
        //bottomImage:'assets/images/big/img1.jpg',
        bottomImage:'',
        buttonColor:''
    
    },
    {
        name:'Label and date your leftovers',
        //image:'assets/images/users/4.jpg',
        //image:'assets/images/big/img1.jpg',
        number:'4',
        commentTime:'Tip No. 4',
        comment:'Having an organised fridge and freezer lets you know clearly what is where and when you need to use it by.',
    
        bottomImage:'',
        buttonColor:'warn'
    
    }

]