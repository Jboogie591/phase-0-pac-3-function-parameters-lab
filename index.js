function introduction(Johnny) {
    return `Hi, my name is ${Johnny}.`;
}
function introductionWithLanguage(Johnny,English) {
    return `Hi, my name is ${Johnny} and I am learning to program in ${English}.`;
}
function introductionWithLanguageOptional(Johnny,English = "JavaScript") {
    return `Hi, my name is ${Johnny} and I am learning to program in ${English}.`;
}
