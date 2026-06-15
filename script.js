document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const resultContainer = document.getElementById('result-container');
    const imageOutput = document.getElementById('image-output'); // Картинка
    const textOutput = document.getElementById('text-output');   // Текст

    // --- СОЗДАЕМ СЛОВАРЬ РЕЗУЛЬТАТОВ ---
    // Это главный объект, где хранится вся логика.
    // Ключ (например, '1') - это выпавшее число.
    // Значение - это объект с двумя свойствами: img (картинка) и text (надпись).
    const outcomes = {
        1: {
            img: "images/abaddon.png",
            text: "абадон"
        },
        2: {
            img: "images/alchemist.png",
            text: "Алхимик"
        },
        3: {
            img: "images/ancient_apparition.png",
            text: "Апарат"
        },
        4: {
            img: "images/antimage.png",
            text: "Анти маг!"
        },
        5: {
            img: "images/arc_warden.png",
            text: "Арк варден"
        },
        6: {
            img: "images/axe.png",
            text: "Акс атакс!!"
        },
        7: {
            img: "images/bane.png",
            text: "Бейн"
        },
        8: {
            img: "images/batrider.png",
            text: "Бертрайдер"
        },
        9: {
            img: "images/beastmaster.png",
            text: "Бистмастер"
        },
        10: {
            img: "images/bloodseeker.png",
            text: "Бладсикер"
        },
        11: {
            img: "images/bounty_hunter.png",
            text: "Баунти хантер"
        },
        12: {
            img: "images/brewmaster.png",
            text: "Бревмастер"
        },
        13: {
            img: "images/bristleback.png",
            text: "Бристалбек"
        },
        14: {
            img: "images/broodmother.png",
            text: "Бруда"
        },
        15: {
            img: "images/centaur.png",
            text: "Кентавр"
        },
        16: {
            img: "images/chaos_knight.png",
            text: "ЦК"
        },
        17: {
            img: "images/chen.png",
            text: "Чен"
        },
        18: {
            img: "images/clinkz.png",
            text: "Клинкз"
        },
        19: {
            img: "images/clockwerk.png",
            text: "Болтозвяк"
        },
        20: {
            img: "images/crystal_maiden.png",
            text: "Цмка"
        },
        21: {
            img: "images/dark_seer.png",
            text: "Дарк сир"
        },
        22: {
            img: "images/dark_willow.png",
            text: "Вилка"
        },
        23: {
            img: "images/dawnbreaker.png",
            text: "Даун брейкер"
        },
        24: {
            img: "images/dazzle.png",
            text: "Дазл"
        },
        25: {
            img: "images/death_prophet (1).png",
            text: "Профетка"
        },
        26: {
            img: "images/disruptor.png",
            text: "Дизраптор"
        },
        27: {
            img: "images/doom_bringer.png",
            text: "Дум"
        },
        28: {
            img: "images/dragon_knight.png",
            text: "ДК"
        },
        29: {
            img: "images/drow_ranger.png",
            text: "Дровка"
        },
        30: {
            img: "images/earth_spirit.png",
            text: "Земеля"
        },
        31: {
            img: "images/earthshaker.png",
            text: "Шейкер"
        },
        32: {
            img: "images/elder_titan.png",
            text: "Елдер титан"
        },
        33: {
            img: "images/ember_spirit.png",
            text: "Ембер"
        },
        34: {
            img: "images/enchantress.png",
            text: "Энча"
        },
        35: {
            img: "images/enigma.png",
            text: "Енигма"
        },
        36: {
            img: "images/faceless_void.png",
            text: "Фейслес войд"
        },
        37: {
            img: "images/grimstroke.png",
            text: "Грим"
        },
        38: {
            img: "images/zuus.png",
            text: "Зевсятинка"
        },
        39: {
            img: "images/gyrocopter.png",
            text: "Гирокоптер"
        },
        40: {
            img: "images/hoodwink.png",
            text: "Белочка69"
        },
        41: {
            img: "images/huskar.png",
            text: "Хусик"
        },
        42: {
            img: "images/invoker.png",
            text: "Инвоука"
        },
        43: {
            img: "images/wisp.png",
            text: "IQ"
        },
        44: {
            img: "images/jakiro.png",
            text: "Жакиро"
        },
        45: {
            img: "images/juggernaut.png",
            text: "Юрнеру"
        },
        46: {
            img: "images/keeper_of_the_light.png",
            text: "КОНДАЛИНИ"
        },
        47: {
            img: "images/kez.png",
            text: "Попугай кеша"
        },
        48: {
            img: "images/kunkka.png",
            text: "Кунка"
        },
        49: {
            img: "images/largo.png",
            text: "Жаби Жаби"
        },
        50: {
            img: "images/legion_commander.png",
            text: "Лега"
        },
        51: {
            img: "images/leshrac.png",
            text: "Лешак"
        },
        52: {
            img: "images/lich.png",
            text: "Лич"
        },
        53: {
            img: "images/life_stealer.png",
            text: "Гуля"
        },
        54: {
            img: "images/lina.png",
            text: "Лина"
        },
        55: {
            img: "images/lion.png",
            text: "Лион"
        },
        56: {
            img: "images/lone_druid.png",
            text: "Дрон Луид"
        },
        57: {
            img: "images/luna.png",
            text: "Луна"
        },
        58: {
            img: "images/lycan.png",
            text: "Люкан"
        },
        59: {
            img: "images/magnataur.png",
            text: "КАЛАПС"
        },
        60: {
            img: "images/marci.png",
            text: "Марси"
        },
        61: {
            img: "images/mars.png",
            text: "Марс"
        },
        62: {
            img: "images/medusa.png",
            text: "Медуза"
        },
        63: {
            img: "images/meepo.png",
            text: "Мипо"
        },
        64: {
            img: "images/mirana.png",
            text: "Мирана"
        },
        65: {
            img: "images/monkey_king.png",
            text: "МК"
        },
        66: {
            img: "images/morphling.png",
            text: "Морфи"
        },
        67: {
            img: "images/muerta.png",
            text: "Муэрта"
        },
        68: {
            img: "images/naga_siren.png",
            text: "Нага"
        },
        69: {
            img: "images/furion.png",
            text: "По фарму чемпион"
        },
        70: {
            img: "images/necrolyte.png",
            text: "Некрофимозик"
        },
        71: {
            img: "images/night_stalker.png",
            text: "Найт сталкер"
        },
        72: {
            img: "images/nyx_assassin.png",
            text: "НИКС НИКС НИКС"
        },
        73: {
            img: "images/ogre_magi.png",
            text: "Огр маг"
        },
        74: {
            img: "images/omniknight.png",
            text: "Омник"
        },
        75: {
            img: "images/oracle.png",
            text: "Оракл"
        },
        76: {
            img: "images/obsidian_destroyer.png",
            text: "ОД"
        },
        77: {
            img: "images/pangolier.png",
            text: "Ammarthefacker"
        },
        78: {
            img: "images/phantom_assassin.png",
            text: "Фантомка через гниение"
        },
        79: {
            img: "images/phantom_lancer.png",
            text: "Допельгангер"
        },
        80: {
            img: "images/phoenix.png",
            text: "Феникс"
        },
        81: {
            img: "images/primal_beast.png",
            text: "Праймал бист"
        },
        82: {
            img: "images/puck.png",
            text: "Пук"
        },
        83: {
            img: "images/pudge.png",
            text: "Мясника много не бывает"
        },
        84: {
            img: "images/pugna.png",
            text: "Сосунья"
        },
        85: {
            img: "images/queenofpain.png",
            text: "Акаша"
        },
        86: {
            img: "images/razor.png",
            text: "Разор"
        },
        87: {
            img: "images/riki.png",
            text: "РИКИТИКИТИ"
        },
        88: {
            img: "images/ringmaster.png",
            text: "Властелин колец"
        },
        89: {
            img: "images/rubick.png",
            text: "ВЕЛИКИЙ МАГ"
        },
        90: {
            img: "images/sand_king.png",
            text: "СК"
        },
        91: {
            img: "images/shadow_demon.png",
            text: "шадоу димон"
        },
        92: {
            img: "images/nevermore.png",
            text: "1000-7"
        },
        93: {
            img: "images/shadow_shaman.png",
            text: "Раста"
        },
        94: {
            img: "images/silencer.png",
            text: "САЛО"
        },
        95: {
            img: "images/skywrath_mage.png",
            text: "Скай маг"
        },
        96: {
            img: "images/slardar.png",
            text: "ТЫ УЁБИЩЕ , УМРИ"
        },
        97: {
            img: "images/slark.png",
            text: "СЛАРК"
        },
        98: {
            img: "images/snapfire.png",
            text: "ЗАДЕНАИЛ БАБУЛЮ(СНЕПКА)"
        },
        99: {
            img: "images/sniper.png",
            text: "СНАЙПЕР"
        },
        100: {
            img: "images/spectre.png",
            text: "СПЕКТРА"
        },
        101: {
            img: "images/spirit_breaker.png",
            text: "ПИВО"
        },
        102: {
            img: "images/storm_spirit.png",
            text: "Шторм"
        },
        103: {
            img: "images/sven.png",
            text: "Свен"
        },
        104: {
            img: "images/techies.png",
            text: "Течка"
        },
        105: {
            img: "images/templar_assassin.png",
            text: "Ланая"
        },
        106: {
            img: "images/terrorblade.png",
            text: "ТБ"
        },
        107: {
            img: "images/tidehunter.png",
            text: "Тайд"
        },
        108: {
            img: "images/shredder.png",
            text: "Тимбер"
        },
        109: {
            img: "images/tinker.png",
            text: "У МЕНЯ ДЦП МОРЕ ПРОБЛЕМ С ГОЛОВОЙ"
        },
        110: {
            img: "images/tiny.png",
            text: "КРОХОТУЛЕЧНЫЙ"
        },
        111: {
            img: "images/treant.png",
            text: "ТРЕНТ"
        },
        112: {
            img: "images/troll_warlord.png",
            text: "ТРОЛЬ"
        },
        113: {
            img: "images/tusk.png",
            text: "ТУСИК"
        },
        114: {
            img: "images/abyssal_underlord.png",
            text: "АНДЕРЛОРД"
        },
        115: {
            img: "images/undying.png",
            text: "Андед"
        },
        116: {
            img: "images/ursa.png",
            text: "а Урса то медленная"
        },
        117: {
            img: "images/vengefulspirit.png",
            text: "Винга"
        },
        118: {
            img: "images/venomancer.png",
            text: "тфу тфу тфу(веник)"
        },
        119: {
            img: "images/viper.png",
            text: "тфу тфу тфу(вайпер)"
        },
        120: {
            img: "images/visage.png",
            text: "Висаж"
        },
        121: {
            img: "images/void_spirit.png",
            text: "Войд спирит"
        },
        122: {
            img: "images/warlock.png",
            text: "варлок"
        },
        123: {
            img: "images/weaver.png",
            text: "Таракан"
        },
        124: {
            img: "images/windrunner.png",
            text: "Врка"
        },
        125: {
            img: "images/winter_wyvern.png",
            text: "Виверна"
        },
        126: {
            img: "images/witch_doctor.png",
            text: "Сын шлюхи к вашим услугам"
        },
        127: {
            img: "images/skeleton_king.png",
            text: "Скелетон кинг"
        }
        
    };

    button.addEventListener('click', function(event) {
        event.preventDefault();

        // Генерируем случайное число от 1 до 126
        const randomNumber = Math.floor(Math.random() * 1) + 1;
        
        // Всегда показываем выпавшее число
        resultContainer.textContent = randomNumber;

        // --- ЛОГИКА ВЫВОДА ---
        // Проверяем, есть ли у нас заготовленный вариант для этого числа
        if (outcomes.hasOwnProperty(randomNumber)) {
            // Если ЕСТЬ:
            // Берём картинку и текст из нашего объекта
            imageOutput.src = outcomes[randomNumber].img;
            textOutput.textContent = outcomes[randomNumber].text;
        } else {
            // Если НЕТ (для всех чисел, которые мы не прописали):
            // Можно скрыть элементы или вывести что-то стандартное
            imageOutput.style.display = 'none'; // Прячем картинку
            textOutput.textContent = "Выпало обычное число."; // Стандартный текст
        }
    });
});