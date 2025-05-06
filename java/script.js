let storyIndex = 0;
const stories = [
    {
        content: "序章",
        speaker: "旁白",
        characterImage: null,
        isNarration: true,
    },
    {
        content: "沙漠的夜本该寂静，静的能听见同伴细微的鼾声和驼铃轻轻晃动的声响，静到能在安稳的梦中细细勾勒日思夜想的故乡的模样。",
        speaker: "旁白",
        characterImage: null,
        isNarration: true,
    },
    {
        content: "本该这样的。",
        speaker: "旁白",
        characterImage: null,
        isNarration: true,
    },
    {
        content: "阿拉在上！",
        speaker: "玩家",
        characterImage: "character1.png",
        isNarration: false,
    },
    {
        content: "年轻的商人用粗糙褪色的头巾紧紧裹住口鼻，可他依旧能尝到风沙的苦涩。",
        speaker: "旁白",
        characterImage: null,
        isNarration: true
    },
    {
        content: "狂风在耳边呼啸，飞沙走石略过他干燥泛红的脸，不留情面的留下一道道划痕。",
        speaker: "旁白",
        characterImage: null,
        isNarration: true
    },
    {
        content: "年轻的商人在狂风中不断的呼唤着他的同伴和驼队，猎猎的风轻而易举盖过了他的声音，将他声嘶力竭的呼喊撕成残缺的碎片。",
        speaker: "旁白",
        characterImage: null,
        isNarration: true
    },
    {
        content: "熟悉的同伴的呼唤在狂风中逐渐模糊，宽阔的骆驼的身影逐渐变成漫天黄沙中一个个小黑点，价值连城的精美丝绸被狂风撕扯开来，在月光下如幽灵般飞舞，装着瓷器的木箱从受惊的骆驼背上坠落，在咚的一声闷响中化为碎片。",
        speaker: "旁白",
        characterImage: null,
        isNarration: true
    },
    {
        content: "三天后，沙尘暴终于平息，惨白的日光终于穿透了似乎永无终止的黄沙。",
        speaker: "旁白",
        characterImage: null,
        isNarration: true
    },
    {
        content: "曾经安营扎寨的休息点如今只剩下零星散落的货物残骸掩埋在沙土之下。",
        speaker: "旁白",
        characterImage: null,
        isNarration: true
    },
    {
        content: "十五只骆驼组成的浩荡商队已不知所踪，只剩下他最可靠的老伙计疲惫且静默的立在一旁，那双从不迷失的眼也第一次露出迷茫。",
        speaker: "旁白",
        characterImage: null,
        isNarration: true
    },
    {
        content: "从景德镇购入的精美瓷器已经化为乌有，精心包装的药材已经变成了草木碎屑，本为贵族专供的丝绸更是无影无踪。",
        speaker: "旁白",
        characterImage: null,
        isNarration: true
    },
    {content: "糟了！",
        speaker: "玩家",
        characterImage: "character1.png",
        isNarration: false
    },
    {
        content: "双腿一瞬间泄了力，扑通一声跪下，颤抖的手下意识的捧起瓷器残片，锋利的边缘划破了他的手掌，鲜红的血滴落在白色的瓷片上，如瓷器上匠人精心描绘的梅花。",
        speaker: "旁白",
        characterImage: null,
        isNarration: true
    },
    {
        content: "这些货物是他心血的结晶，更是全部的家当，更别提他费尽口舌才借来的那些本金，债主们不会因为沙尘暴就原谅他，单主们也不会因为他堪称绝望的处境就原谅他。",
        speaker: "旁白",
        characterImage: null,
        isNarration: true
    },
    {
        content: "贴身存放的地图还妥帖的躺在他的怀里，但他更情愿自己干脆迷失在这无边的黄沙中。",
        speaker: "旁白",
        characterImage: null,
        isNarration: true
    },
    {
        content: "他也曾想一了百了，干脆化为沙漠上一个无根的游魂。",
        speaker: "旁白",
        characterImage: null,
        isNarration: true
    },
    {
        content: "但他放不下，放不下还等着自己归来的家人，放不下不知是否平安的同伴，放不下自己的野心和豪言壮志。",
        speaker: "旁白",
        characterImage: null,
        isNarration: true
    },
    {
        content: "是生的渴望，抑或仅仅是干渴难忍，已勾出淡淡血腥味喉咙指引着他寻觅着绿洲的方向。",
        speaker: "旁白",
        characterImage: null,
        isNarration: true
    },
    {
        content: "是海市蜃楼吗？",
        speaker: "旁白",
        characterImage: null,
        isNarration: true
    },
    {
        content: "不，是绿洲！",
        speaker: "旁白",
        characterImage: null,
        isNarration: true
    },
    {
        content: "清凉的泉水划过他干涩的喉咙，紧绷的神经终于放松下来，混沌的大脑也渐渐清晰。",
        speaker: "旁白",
        characterImage: null,
        isNarration: true
    },
    {
        content: "他跪在水边清洗伤口，水面中倒映出一张憔悴的脸——深陷的眼窝，干裂的嘴唇，哪里还有“全城最精明的商人”的风采？",
        speaker: "旁白",
        characterImage: null,
        isNarration: true
    },
    {
        content: "外乡人，你的眼神简直比骆驼蹄印中的积水还浑浊",
        speaker: "NPC",
        characterImage: "character2.png",
        isNarration: false
    },
    {
        content: "我失去了所有货物",
        speaker: "玩家",
        characterImage: "character1.png",
        isNarration: false
    },
    {
        content: "我的未来现在就像这片沙漠一样荒芜",
        speaker: "玩家",
        characterImage: "character1.png",
        isNarration: false
    },
    {
        content: "年轻人，你知道这些货物是从哪里来的吗？",
        speaker: "NPC",
        characterImage: "character2.png",
        isNarration: false
    },
    {
        content: "从中国商人手里，他们说这些货来自杭州，景德镇……",
        speaker: "玩家",
        characterImage: "character1.png",
        isNarration: false
    },
    {
        content: "不，你还没有看到它们的全貌，你不了解它们的价值",
        speaker: "NPC",
        characterImage: "character2.png",
        isNarration: false
    },
    {
        content: "我精挑细选的货物，我怎么会不了解",
        speaker: "玩家",
        characterImage: "character1.png",
        isNarration: false
    },
    {
        content: "你只看到了它们的价格，却没有看到它们的灵魂",
        speaker: "NPC",
        characterImage: "character2.png",
        isNarration: false
    },
    {
        content: "这对我的困境又有什么帮助？",
        speaker: "玩家",
        characterImage: "character1.png",
        isNarration: false
    },
    {
        content: "替我去会会几位老朋友吧，去这些货物的源头，学习它们的技艺，感受它们的灵魂，让它们在你手中诞生。作为报答，当这场漫长的旅途结束后，你会获得新的货物。",
        speaker: "NPC",
        characterImage: "character2.png",
        isNarration: false
    },
    {
        content: "这听起来是一场划算的买卖，更何况他现在根本无处可去",
        speaker: "旁白",
        characterImage: null,
        isNarration: true
    }
]

function startGame() {
    const playerName = document.getElementById('player-name').value;
    if (playerName.trim() === '') {
        alert('请输入你的名字！');
        return;
    }
     // 将玩家名存储到 localStorage
     localStorage.setItem('playerName', playerName);
     
    document.getElementById('player-name-display').textContent = playerName;
    document.getElementById('name-input-overlay').style.display = 'none';
    document.getElementById('dialogue').style.display = 'block';

    // 初始化隐藏所有角色图
    document.querySelector(".character-image").style.display = "none";
    document.querySelector(".npc-image").style.display = "none";

    // 进入第一个剧情
    nextStory();
}

function showMenu() {
    document.getElementById('menu-overlay').style.display = 'flex';
}

function goHome() {
    window.location.href = 'index2.html';
}

function goToArchive() {
    window.location.href = 'archive.html';
}


function stopStory() {
    document.getElementById('overlay').style.display = 'flex';
}

function confirmStop() {
    window.location.href = 'story.html';
}

function cancelStop() {
    document.getElementById('overlay').style.display = 'none';
}

function nextStory() {
    storyIndex++;
    if (storyIndex < stories.length) {
        const currentStory = stories[storyIndex];
        const dialogueContent = document.querySelector(".dialogue-content");
        const playerNameDisplay = document.getElementById("player-name-display");
        const characterImage = document.querySelector(".character-image");
        const npcImage = document.querySelector(".npc-image");

        dialogueContent.innerHTML = currentStory.content;

        if (currentStory.isNarration) {
            // 旁白部分
            playerNameDisplay.textContent = ""; // 清空名字
            characterImage.style.display = "none"; // 隐藏主角图
            npcImage.style.display = "none"; // 隐藏NPC图
        } else {
            // 玩家或 NPC 部分
            if (currentStory.speaker === "玩家") {
                characterImage.style.display = "block"; // 显示主角图
                characterImage.src = `img/${currentStory.characterImage}`; // 更新主角图
                playerNameDisplay.textContent = document.getElementById("player-name").value; // 显示玩家名字
                npcImage.style.display = "none"; // 隐藏NPC图
            } else if (currentStory.speaker === "NPC") {
                npcImage.style.display = "none"; // 由于没有，暂不显示
                npcImage.src = `img/${currentStory.characterImage}`; // 更新NPC图
                playerNameDisplay.textContent = "老者"; // 显示NPC名字
                characterImage.style.display = "none"; // 隐藏主角图
            }
        }
    } else {
        completeStory();
    }
}

function back() {
    document.getElementById('menu-overlay').style.display = 'none'; // 关闭菜单覆盖层
}
