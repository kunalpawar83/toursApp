const Tour = require('../models/tourModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const User  = require('../models/userModel');


exports.getOverview = catchAsync(async(req,res,next)=>{
    const tours =  await Tour.find();

    res.status(200).render('overview',{
     title:'All tours',
     tours
    });
});
exports.getTour = catchAsync(async(req,res,next)=>{
     const tour  = await Tour.findOne({slug:req.params.slug}).populate({
          path:'reviews',
          fields: ' review rating user'
     })
     if(!tour){
          return next( new AppError('There is  no tour with that name.',404));
     }
    res.status(200).render('tour',{
     title:tour.name,
     tour
    })
});

exports.getLogin = catchAsync(async(req,res,next)=>{

     res.status(200).render('login',{
        title:'login Page'
     })
});

exports.getSignup = catchAsync(async(req,res,next)=>{
     res.status(200).render('signup',{
          title:'signup Page'
       })
})

exports.getAccount =catchAsync(async(req,res,next)=>{
     res.status(200).render('account',{
          title:'Account  Page'
       })
})

exports.updateUserData =catchAsync(async(req,res,next)=>{
     const updateuser = await User.findByIdAndUpdate(req.user.id,{
       name:req.body.name,
       email:req.body.email
      },{
       new:true,
       runValidators:true
      }
     );
     res.status(200).render('account',{
       title:'your account',
       user:updateuser
     });
   })