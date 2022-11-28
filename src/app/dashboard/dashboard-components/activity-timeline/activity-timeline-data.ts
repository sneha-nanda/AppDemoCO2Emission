export interface Activity{
    name:string;
    image:string;
    commentTime:string;
    comment:string;

    bottomImage:string;
    buttonColor:string;

}

export const activities:Activity[]=[
    {
        name:'Check the fridge',
        //image:'assets/images/users/1.jpg',
        image:'assets/images/big/img2.jpg',
        commentTime:'Tip No. 1',
        comment:'Check what food you already have in your cupboards and fridge before going shopping.',
    
        //bottomImage:'assets/images/big/img2.jpg',
        bottomImage:'',
        buttonColor:''
    
    },
    {
        name:'Use meal plans',
        image:'assets/images/big/img2.jpg',
        commentTime:'Tip No. 2',
        comment:'Write a weekly meal plan and only buy what you need – remember to include leftovers in your plan',
    
        bottomImage:'',
        buttonColor:'primary'
    
    },
    {
        name:'Use your freezer',
        // image:'assets/images/users/3.jpg',
        image:'assets/images/big/img2.jpg',
        commentTime:'Tip No. 3',
        comment:'Freezing food can extend its lifespan and stop it from going to waste',
    
        //bottomImage:'assets/images/big/img1.jpg',
        bottomImage:'',
        buttonColor:''
    
    },
    {
        name:'Label and date your leftovers',
        //image:'assets/images/users/4.jpg',
        image:'assets/images/big/img1.jpg',
        
        commentTime:'Tip No. 4',
        comment:'Having an organised fridge and freezer lets you know clearly what is where and when you need to use it by.',
    
        bottomImage:'',
        buttonColor:'warn'
    
    }

]