  


export interface MajorCredits {
 credits: number;
 brand:"MajorCredits";
}

export interface MinorCredits {
  credits: number;
  brand:"MajorCredits";
}

function sumMajorCredits (subject1:MajorCredits, subject2:MajorCredits ){
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits"
  }
}

function sumMinorCredits (subject1:MinorCredits, subject2:MinorCredits ){
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits"
  }
}