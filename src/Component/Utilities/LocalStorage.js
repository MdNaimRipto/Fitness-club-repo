const addToLocal = (breakTime) => {
    const time = breakTime;
    localStorage.setItem("break time", JSON.stringify(time))
}

const getFromLocal = () => {
    let time = {};
    const storedTime = localStorage.getItem("break time");
    if (storedTime) {
        time = storedTime;
    }
    return time;
}
export { addToLocal, getFromLocal };