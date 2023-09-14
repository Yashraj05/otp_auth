export const generateOtp =  ():string => {
    
    const otpLength : number = 6;
    let otp : string= '';
    for (let i = 0; i < otpLength; i++) {
      otp += Math.floor(Math.random() * 10);
    }
    return otp;
  };