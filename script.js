function convertAge() {
    const petType = document.getElementById("petType").value;
    const petAge = document.getElementById("petAge").value;
    let humanAge;

    if (petType === "dog") {
        humanAge = 16 * Math.log(petAge) + 31;
    } else if (petType === "cat") {
        humanAge = 15 * Math.sqrt(petAge);
    }

    document.getElementById("result").innerHTML = `Your pet's human age is approximately ${humanAge.toFixed(2)} years.`;
}
