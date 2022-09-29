const addToLocal = (breakTime) => {
    const time = breakTime;
    localStorage.setItem("break time", JSON.stringify(time))
}

export { addToLocal };