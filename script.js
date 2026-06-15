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
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/alchemist.png",
            text: "Алхимик"
        },
        3: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/ancient_apparition.png",
            text: "Апарат"
        },
        4: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/antimage.png",
            text: "Анти маг!"
        },
        5: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/arc_warden.png",
            text: "Арк варден"
        },
        6: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/axe.png",
            text: "Акс атакс!!"
        },
        7: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/bane.png",
            text: "Бейн"
        },
        8: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/batrider.png",
            text: "Бертрайдер"
        },
        9: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/beastmaster.png",
            text: "Бистмастер"
        },
        10: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/bloodseeker.png",
            text: "Бладсикер"
        },
        11: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/bounty_hunter.png",
            text: "Баунти хантер"
        },
        12: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/brewmaster.png",
            text: "Бревмастер"
        },
        13: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/bristleback.png",
            text: "Бристалбек"
        },
        14: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/broodmother.png",
            text: "Бруда"
        },
        15: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/centaur.png",
            text: "Кентавр"
        },
        16: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/chaos_knight.png",
            text: "ЦК"
        },
        17: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/chen.png",
            text: "Чен"
        },
        18: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/clinkz.png",
            text: "Клинкз"
        },
        19: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/clockwerk.png",
            text: "Болтозвяк"
        },
        20: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/crystal_maiden.png",
            text: "Цмка"
        },
        21: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/dark_seer.png",
            text: "Дарк сир"
        },
        22: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/dark_willow.png",
            text: "Вилка"
        },
        23: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/dawnbreaker.png",
            text: "Даун брейкер"
        },
        24: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/dazzle.png",
            text: "Дазл"
        },
        25: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/death_prophet (1).png",
            text: "Профетка"
        },
        26: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/disruptor.png",
            text: "Дизраптор"
        },
        27: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/doom_bringer.png",
            text: "Дум"
        },
        28: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/dragon_knight.png",
            text: "ДК"
        },
        29: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/drow_ranger.png",
            text: "Дровка"
        },
        30: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/earth_spirit.png",
            text: "Земеля"
        },
        31: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/earthshaker.png",
            text: "Шейкер"
        },
        32: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/elder_titan.png",
            text: "Елдер титан"
        },
        33: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/ember_spirit.png",
            text: "Ембер"
        },
        34: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/enchantress.png",
            text: "Энча"
        },
        35: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/enigma.png",
            text: "Енигма"
        },
        36: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/faceless_void.png",
            text: "Фейслес войд"
        },
        37: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/grimstroke.png",
            text: "Грим"
        },
        38: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/zuus.png",
            text: "Зевсятинка"
        },
        39: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/gyrocopter.png",
            text: "Гирокоптер"
        },
        40: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/hoodwink.png",
            text: "Белочка69"
        },
        41: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/huskar.png",
            text: "Хусик"
        },
        42: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/invoker.png",
            text: "Инвоука"
        },
        43: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/wisp.png",
            text: "IQ"
        },
        44: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/jakiro.png",
            text: "Жакиро"
        },
        45: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/juggernaut.png",
            text: "Юрнеру"
        },
        46: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/keeper_of_the_light.png",
            text: "КОНДАЛИНИ"
        },
        47: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/kez.png",
            text: "Попугай кеша"
        },
        48: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/kunkka.png",
            text: "Кунка"
        },
        49: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/largo.png",
            text: "Жаби Жаби"
        },
        50: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/legion_commander.png",
            text: "Лега"
        },
        51: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/leshrac.png",
            text: "Лешак"
        },
        52: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/lich.png",
            text: "Лич"
        },
        53: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/life_stealer.png",
            text: "Гуля"
        },
        54: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/lina.png",
            text: "Лина"
        },
        55: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/lion.png",
            text: "Лион"
        },
        56: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/lone_druid.png",
            text: "Дрон Луид"
        },
        57: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/luna.png",
            text: "Луна"
        },
        58: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/lycan.png",
            text: "Люкан"
        },
        59: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/magnataur.png",
            text: "КАЛАПС"
        },
        60: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/marci.png",
            text: "Марси"
        },
        61: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/mars.png",
            text: "Марс"
        },
        62: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/medusa.png",
            text: "Медуза"
        },
        63: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/meepo.png",
            text: "Мипо"
        },
        64: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/mirana.png",
            text: "Мирана"
        },
        65: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/monkey_king.png",
            text: "МК"
        },
        66: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/morphling.png",
            text: "Морфи"
        },
        67: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/muerta.png",
            text: "Муэрта"
        },
        68: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/naga_siren.png",
            text: "Нага"
        },
        69: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/furion.png",
            text: "По фарму чемпион"
        },
        70: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/necrolyte.png",
            text: "Некрофимозик"
        },
        71: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/night_stalker.png",
            text: "Найт сталкер"
        },
        72: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/nyx_assassin.png",
            text: "НИКС НИКС НИКС"
        },
        73: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/ogre_magi.png",
            text: "Огр маг"
        },
        74: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/omniknight.png",
            text: "Омник"
        },
        75: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/oracle.png",
            text: "Оракл"
        },
        76: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/obsidian_destroyer.png",
            text: "ОД"
        },
        77: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/pangolier.png",
            text: "Ammarthefacker"
        },
        78: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/phantom_assassin.png",
            text: "Фантомка через гниение"
        },
        79: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/phantom_lancer.png",
            text: "Допельгангер"
        },
        80: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/phoenix.png",
            text: "Феникс"
        },
        81: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/primal_beast.png",
            text: "Праймал бист"
        },
        82: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/puck.png",
            text: "Пук"
        },
        83: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/pudge.png",
            text: "Мясника много не бывает"
        },
        84: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/pugna.png",
            text: "Сосунья"
        },
        85: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/queenofpain.png",
            text: "Акаша"
        },
        86: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/razor.png",
            text: "Разор"
        },
        87: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/riki.png",
            text: "РИКИТИКИТИ"
        },
        88: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/ringmaster.png",
            text: "Властелин колец"
        },
        89: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/rubick.png",
            text: "ВЕЛИКИЙ МАГ"
        },
        90: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/sand_king.png",
            text: "СК"
        },
        91: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/shadow_demon.png",
            text: "шадоу димон"
        },
        92: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/nevermore.png",
            text: "1000-7"
        },
        93: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/shadow_shaman.png",
            text: "Раста"
        },
        94: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/silencer.png",
            text: "САЛО"
        },
        95: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/skywrath_mage.png",
            text: "Скай маг"
        },
        96: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/slardar.png",
            text: "ТЫ УЁБИЩЕ , УМРИ"
        },
        97: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/slark.png",
            text: "СЛАРК"
        },
        98: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/snapfire.png",
            text: "ЗАДЕНАИЛ БАБУЛЮ(СНЕПКА)"
        },
        99: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/sniper.png",
            text: "СНАЙПЕР"
        },
        100: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/spectre.png",
            text: "СПЕКТРА"
        },
        101: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/spirit_breaker.png",
            text: "ПИВО"
        },
        102: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/storm_spirit.png",
            text: "Шторм"
        },
        103: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/sven.png",
            text: "Свен"
        },
        104: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/techies.png",
            text: "Течка"
        },
        105: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/templar_assassin.png",
            text: "Ланая"
        },
        106: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/terrorblade.png",
            text: "ТБ"
        },
        107: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/tidehunter.png",
            text: "Тайд"
        },
        108: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/shredder.png",
            text: "Тимбер"
        },
        109: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/tinker.png",
            text: "У МЕНЯ ДЦП МОРЕ ПРОБЛЕМ С ГОЛОВОЙ"
        },
        110: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/tiny.png",
            text: "КРОХОТУЛЕЧНЫЙ"
        },
        111: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/treant.png",
            text: "ТРЕНТ"
        },
        112: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/troll_warlord.png",
            text: "ТРОЛЬ"
        },
        113: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/tusk.png",
            text: "ТУСИК"
        },
        114: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/abyssal_underlord.png",
            text: "АНДЕРЛОРД"
        },
        115: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/undying.png",
            text: "Андед"
        },
        116: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/ursa.png",
            text: "а Урса то медленная"
        },
        117: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/vengefulspirit.png",
            text: "Винга"
        },
        118: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/venomancer.png",
            text: "тфу тфу тфу(веник)"
        },
        119: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/viper.png",
            text: "тфу тфу тфу(вайпер)"
        },
        120: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/visage.png",
            text: "Висаж"
        },
        121: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/void_spirit.png",
            text: "Войд спирит"
        },
        122: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/warlock.png",
            text: "варлок"
        },
        123: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/weaver.png",
            text: "Таракан"
        },
        124: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/windrunner.png",
            text: "Врка"
        },
        125: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/winter_wyvern.png",
            text: "Виверна"
        },
        126: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/witch_doctor.png",
            text: "Сын шлюхи к вашим услугам"
        },
        127: {
            img: "C:/Users/PANK-L0RD/Desktop/сайт/images/skeleton_king.png",
            text: "Скелетон кинг"
        }
        
    };

    button.addEventListener('click', function(event) {
        event.preventDefault();

        // Генерируем случайное число от 1 до 126
        const randomNumber = Math.floor(Math.random() * 127) + 1;
        
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