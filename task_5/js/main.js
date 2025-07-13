"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MajorCredits"
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MinorCredits"
    };
}
