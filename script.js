function toggleFuInput() {
    const directFu = document.getElementById("directFu");
    const calcFu = document.getElementById("calcFu");
    const fuMethod = document.querySelector('input[name="fuMethod"]:checked').value;
    directFu.style.display = fuMethod === "direct" ? "block" : "none";
    calcFu.style.display = fuMethod === "calc" ? "block" : "none";
}

function calculateFu() {
    const winMethod = document.querySelector('input[name="winMethod"]:checked').value;
    const juntsuChuchan = parseInt(document.getElementById("juntsuChuchan").value) || 0;
    const juntsuYaochu = parseInt(document.getElementById("juntsuYaochu").value) || 0;
    const ankoChuchan = parseInt(document.getElementById("ankoChuchan").value) || 0;
    const ankoYaochu = parseInt(document.getElementById("ankoYaochu").value) || 0;
    const minkoChuchan = parseInt(document.getElementById("minkoChuchan").value) || 0;
    const minkoYaochu = parseInt(document.getElementById("minkoYaochu").value) || 0;
    const ankanChuchan = parseInt(document.getElementById("ankanChuchan").value) || 0;
    const ankanYaochu = parseInt(document.getElementById("ankanYaochu").value) || 0;
    const minkanChuchan = parseInt(document.getElementById("minkanChuchan").value) || 0;
    const minkanYaochu = parseInt(document.getElementById("minkanYaochu").value) || 0;
    const machi = document.getElementById("machi").checked;
    const doubleWind = document.getElementById("doubleWind").checked;

    let fu = 20; // 基本符（ツモ・ロン共通）
    fu += ankoChuchan * 4;
    fu += ankoYaochu * 8;
    fu += minkoChuchan * 2;
    fu += minkoYaochu * 4;
    fu += ankanChuchan * 16;
    fu += ankanYaochu * 32;
    fu += minkanChuchan * 8;
    fu += minkanYaochu * 16;
    fu += machi ? 2 : 0;
    fu += doubleWind ? 2 : 0;
    fu += winMethod === "tsumo" ? 2 : 0; // 門前ツモ+2符
    fu += winMethod === "ron" ? 10 : 0; // 門前ロン+10符
    fu = Math.ceil(fu / 10) * 10;
    return fu;
}

function updateFuDisplay() {
    const winMethod = document.querySelector('input[name="winMethod"]:checked').value;
    const juntsuChuchan = parseInt(document.getElementById("juntsuChuchan").value) || 0;
    const juntsuYaochu = parseInt(document.getElementById("juntsuYaochu").value) || 0;
    const ankoChuchan = parseInt(document.getElementById("ankoChuchan").value) || 0;
    const ankoYaochu = parseInt(document.getElementById("ankoYaochu").value) || 0;
    const minkoChuchan = parseInt(document.getElementById("minkoChuchan").value) || 0;
    const minkoYaochu = parseInt(document.getElementById("minkoYaochu").value) || 0;
    const ankanChuchan = parseInt(document.getElementById("ankanChuchan").value) || 0;
    const ankanYaochu = parseInt(document.getElementById("ankanYaochu").value) || 0;
    const minkanChuchan = parseInt(document.getElementById("minkanChuchan").value) || 0;
    const minkanYaochu = parseInt(document.getElementById("minkanYaochu").value) || 0;
    const machi = document.getElementById("machi").checked;
    const doubleWind = document.getElementById("doubleWind").checked;

    // 基本点
    document.getElementById("baseFu").innerText = `20符`;
    document.getElementById("baseTotalFu").innerText = `20符`;

    // 各項目の符数
    const menzenTsumoFu = winMethod === "tsumo" ? 2 : 0;
    document.getElementById("menzenTsumoFu").innerText = `${menzenTsumoFu}符`;
    document.getElementById("menzenTsumoTotalFu").innerText = `${menzenTsumoFu}符`;
    const menzenRonFu = winMethod === "ron" ? 10 : 0;
    document.getElementById("menzenRonFu").innerText = `${menzenRonFu}符`;
    document.getElementById("menzenRonTotalFu").innerText = `${menzenRonFu}符`;
    document.getElementById("machiFu").innerText = `${machi ? 2 : 0}符`;
    document.getElementById("machiTableFu").innerText = `${machi ? 2 : 0}符`;
    document.getElementById("machiTotalFu").innerText = `${machi ? 2 : 0}符`;
    document.getElementById("doubleWindFu").innerText = `${doubleWind ? 2 : 0}符`;
    document.getElementById("doubleWindTableFu").innerText = `${doubleWind ? 2 : 0}符`;
    document.getElementById("doubleWindTotalFu").innerText = `${doubleWind ? 2 : 0}符`;
    document.getElementById("juntsuChuchanFu").innerText = `${juntsuChuchan * 0}符`;
    document.getElementById("juntsuYaochuFu").innerText = `${juntsuYaochu * 0}符`;
    document.getElementById("ankoChuchanFu").innerText = `${ankoChuchan * 4}符`;
    document.getElementById("ankoYaochuFu").innerText = `${ankoYaochu * 8}符`;
    document.getElementById("minkoChuchanFu").innerText = `${minkoChuchan * 2}符`;
    document.getElementById("minkoYaochuFu").innerText = `${minkoYaochu * 4}符`;
    document.getElementById("ankanChuchanFu").innerText = `${ankanChuchan * 16}符`;
    document.getElementById("ankanYaochuFu").innerText = `${ankanYaochu * 32}符`;
    document.getElementById("minkanChuchanFu").innerText = `${minkanChuchan * 8}符`;
    document.getElementById("minkanYaochuFu").innerText = `${minkanYaochu * 16}符`;

    // 行ごとの合計
    document.getElementById("juntsuTotalFu").innerText = `${(juntsuChuchan * 0 + juntsuYaochu * 0)}符`;
    document.getElementById("ankoTotalFu").innerText = `${(ankoChuchan * 4 + ankoYaochu * 8)}符`;
    document.getElementById("minkoTotalFu").innerText = `${(minkoChuchan * 2 + minkoYaochu * 4)}符`;
    document.getElementById("ankanTotalFu").innerText = `${(ankanChuchan * 16 + ankanYaochu * 32)}符`;
    document.getElementById("minkanTotalFu").innerText = `${(minkanChuchan * 8 + minkanYaochu * 16)}符`;

    // 列ごとの合計
    const chuchanTotal = juntsuChuchan * 0 + ankoChuchan * 4 + minkoChuchan * 2 + ankanChuchan * 16 + minkanChuchan * 8;
    const yaochuTotal = juntsuYaochu * 0 + ankoYaochu * 8 + minkoYaochu * 4 + ankanYaochu * 32 + minkanYaochu * 16;
    document.getElementById("chuchanTotalFu").innerText = `${chuchanTotal}符`;
    document.getElementById("yaochuTotalFu").innerText = `${yaochuTotal}符`;

    // 全体合計
    let grandTotal = 20 + chuchanTotal + yaochuTotal + (machi ? 2 : 0) + (doubleWind ? 2 : 0) + menzenTsumoFu + menzenRonFu;
    grandTotal = Math.ceil(grandTotal / 10) * 10;
    document.getElementById("grandTotalFu").innerText = `${grandTotal}符`;
}

function calculatePoints(isSpecial = false, specialType = "") {
    const rule = document.getElementById("rule").value;
    const isDealer = document.querySelector('input[name="dealer"]:checked').value === "dealer";
    const winMethod = document.querySelector('input[name="winMethod"]:checked').value;
    let han = parseInt(document.getElementById("han").value) || 0;
    let fu = 0;

    const pinfulOptions = document.getElementById("pinfulOptions");
    if (specialType === "pinful") {
        pinfulOptions.style.display = "block";
    } else {
        pinfulOptions.style.display = "none";
    }

    if (isSpecial) {
        if (specialType === "chitoi") { fu = 25; }
        else if (specialType === "pinful") {
            const pinfulMethod = document.querySelector('input[name="pinfulMethod"]:checked').value;
            if (pinfulMethod === "tsumo") {
                fu = 20;
                if (han < 2) {
                    document.getElementById("result").innerText = "翻数が正しくありません（平和ツモは最低2翻必要です）";
                    return;
                }
            } else {
                fu = 30;
            }
        }
        else if (specialType === "yakuman") { han = 13; fu = "-"; }
    } else {
        const fuMethod = document.querySelector('input[name="fuMethod"]:checked').value;
        fu = fuMethod === "direct" ? parseInt(document.getElementById("fu").value) : calculateFu();
    }

    let basePoints = isSpecial && specialType === "yakuman" ? 8000 : fu * (2 ** (2 + han));
    if (han >= 13) basePoints = 8000;
    else if (han >= 11) basePoints = 6000;
    else if (han >= 8) basePoints = 4000;
    else if (han >= 6) basePoints = 3000;
    else if (han >= 5 || basePoints >= 2000) basePoints = 2000;
    else if (rule === "mleague" && fu === 30 && han === 4) basePoints = 2000;

    let result = "";
    if (isDealer) {
        if (winMethod === "tsumo") {
            const childPayment = Math.ceil(basePoints * 2 / 100) * 100;
            const totalPoints = childPayment * 3;
            result = `親のツモ: ${han}翻 ${fu}符 - 合計 ${totalPoints}点 (子1人あたり ${childPayment}点)`;
        } else {
            const childPayment = Math.ceil(basePoints * 6 / 100) * 100;
            result = `親のロン: ${han}翻 ${fu}符 - 合計 ${childPayment}点 (子1人から)`;
        }
    } else {
        if (winMethod === "tsumo") {
            const dealerPayment = Math.ceil(basePoints * 2 / 100) * 100;
            const childPayment = Math.ceil(basePoints / 100) * 100;
            const totalPoints = dealerPayment + childPayment * 2;
            result = `子のツモ: ${han}翻 ${fu}符 - 合計 ${totalPoints}点 (親 ${dealerPayment}点, 子 ${childPayment}点)`;
        } else {
            const payment = Math.ceil(basePoints * 4 / 100) * 100;
            result = `子のロン: ${han}翻 ${fu}符 - 合計 ${payment}点 (親または子1人から)`;
        }
    }

    document.getElementById("result").innerText = result;
}

function calculateSettlement() {
    const startPoints = parseInt(document.getElementById("startPoints").value) || 0;
    const returnPoints = parseInt(document.getElementById("returnPoints").value) || 0;
    const rate = parseInt(document.getElementById("rate").value) || 1;
    const umaType = document.getElementById("umaType").value;
    const names = [
        document.getElementById("name1").value || "プレイヤー1",
        document.getElementById("name2").value || "プレイヤー2",
        document.getElementById("name3").value || "プレイヤー3",
        document.getElementById("name4").value || "プレイヤー4"
    ];
    const scores = [
        parseInt(document.getElementById("score1").value) || 0,
        parseInt(document.getElementById("score2").value) || 0,
        parseInt(document.getElementById("score3").value) || 0,
        parseInt(document.getElementById("score4").value) || 0
    ];

    let uma;
    switch (umaType) {
        case "mleague": uma = [30, 10, -10, -30]; break;
        case "10-5": uma = [10, 5, -5, -10]; break;
        case "20-10": uma = [20, 10, -10, -20]; break;
        case "30-15": uma = [30, 15, -15, -30]; break;
        default: uma = [30, 10, -10, -30];
    }

    const sortedScores = [...scores].sort((a, b) => b - a);
    const rankings = scores.map(score => sortedScores.indexOf(score) + 1);

    const basePoints = scores.map(score => (score - returnPoints) / 1000);
    const okaPoints = new Array(4).fill(0);
    const umaPoints = new Array(4).fill(0);

    const topIndices = rankings.reduce((acc, r, idx) => r === 1 ? [...acc, idx] : acc, []);
    const okaPerTop = 20 / topIndices.length;
    topIndices.forEach(idx => okaPoints[idx] = okaPerTop);

    for (let i = 0; i < 4; i++) {
        umaPoints[i] = uma[rankings[i] - 1];
    }

    const rankCounts = {};
    rankings.forEach(rank => rankCounts[rank] = (rankCounts[rank] || 0) + 1);
    for (let rank = 1; rank <= 4; rank++) {
        if (rankCounts[rank] > 1) {
            const sameRankIndices = rankings.reduce((acc, r, idx) => r === rank ? [...acc, idx] : acc, []);
            let totalOka = rank === 1 ? 20 : 0;
            let totalUma = 0;
            sameRankIndices.forEach(idx => totalUma += uma[rank - 1]);
            const avgOka = totalOka / sameRankIndices.length;
            const avgUma = totalUma / sameRankIndices.length;
            sameRankIndices.forEach(idx => {
                okaPoints[idx] = avgOka;
                umaPoints[idx] = avgUma;
            });
        }
    }

    const totalPoints = basePoints.map((bp, i) => bp + okaPoints[i] + umaPoints[i]);
    const ratedPoints = totalPoints.map(p => p * rate);

    for (let i = 0; i < 4; i++) {
        document.getElementById(`baseResult${i + 1}`).innerText = `${basePoints[i].toFixed(1)}`;
        document.getElementById(`okaResult${i + 1}`).innerText = `${okaPoints[i].toFixed(1)}`;
        document.getElementById(`umaResult${i + 1}`).innerText = `${umaPoints[i].toFixed(1)}`;
        document.getElementById(`totalResult${i + 1}`).innerText = `${totalPoints[i].toFixed(1)}`;
        document.getElementById(`moneyResult${i + 1}`).innerText = `${ratedPoints[i].toFixed(0)}ポイント`;
    }
}

function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}