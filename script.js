const allCallButtons = document.querySelectorAll(".callButton");


const allCopyButtons = document.querySelectorAll(".copyButton");


const allHeartButtons = document.querySelectorAll(".heartButton");


for (let i = 0; i < allHeartButtons.length; i++) {
    const button = allHeartButtons[i];
    button.addEventListener("click", function () {
        const heartCount = parseInt(document.getElementById("heartCount").innerText);
        const totalHeartCount = heartCount + 1;
        document.getElementById("heartCount").innerText = totalHeartCount;
    })
}


for (let i = 0; i < allCopyButtons.length; i++) {
    const button = allCopyButtons[i];
    button.addEventListener("click", function (e) {
        const clickedButton = e.target;
        const copyText = clickedButton.dataset.number;
        navigator.clipboard.writeText(copyText);
        const copy = parseInt(document.getElementById("copyCount").innerText);
        alert(`নাম্বার কপি হয়েছে, ${copyText}`);
        const newCopy = copy + 1;
        document.getElementById("copyCount").innerText = newCopy;
    })
}


for (let i = 0; i < allCallButtons.length; i++) {
    const button = allCallButtons[i];
    button.addEventListener("click", function (e) {
        const clickedButton = e.target;
        const callName = clickedButton.dataset.name;
        const callNumber = clickedButton.dataset.number;
        const coinCountElement = document.getElementById("coinCount");
        let currentCoins = parseInt(coinCountElement.innerText);
        if (currentCoins < 20) {
            alert(`দুঃখিত ! ${callNumber} এ কল করার জন্য আপনার পর্যাপ্ত কয়েন নেই`);
            return;
        }
        currentCoins -= 20;
        coinCountElement.innerText = currentCoins;
        alert(`📞 ${callName} ${callNumber} এ কল করা হচ্ছে...`);

        document.getElementById("noHistory").style.display = "none";

        const newCallData = {
            name: callName,
            time: new Date().toLocaleTimeString('en-BD')
        };

        const historyContainer = document.getElementById("history");
        console.log(historyContainer);
        const newHistoryItem = document.createElement("div");
        newHistoryItem.innerHTML = `
            <div class="flex justify-between items-center bg-[#FEFBED] py-2.5 px-3 rounded-2xl my-2">
                <div>
                    <h3 class="text-lg font-semibold">${newCallData.name}</h3>
                    <p class="text-[#5C5C5C]">${callNumber}</p>
                </div>
                <p class="font-medium">${newCallData.time}</p>
            </div>
        `;
        historyContainer.prepend(newHistoryItem);
    });
}


document.getElementById("historyClrButton").addEventListener("click", function () {
    const historyContainer = document.getElementById("history");
    historyContainer.innerHTML = ``;
    document.getElementById("noHistory").style.display = "block";
})