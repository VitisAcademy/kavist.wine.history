function shuffle(e){return e.sort((()=>Math.random()-.5))}const BOT_URL="https://api.telegram.org/bot1743289912:AAHH1JyL1PVZiCfsfy645Ea6B_6i0KVHqWI/sendMessage?chat_id=-508401413&text=",LESSON_URL="https://vitispro.getcourse.ru/pl/teach/control/lesson/view?id=202074119";let userEmail,userPicture=0,userSort=0,userCross=0,userScribe=0,contentList=["Что на фото?","Классификация","Кроссворд","Журналист"],imgPhoto=["img/moon.webp","img/dio.webp","img/simpoz.webp","img/mexico.webp","img/fphilloxera.webp","img/peynaud.webp","img/scale.webp","img/parker.webp","img/chipsy.webp","img/kavist.webp"],correctPhoto=[['Виноделие возникло в "Плодородном полумесяце"',"Виноделие раньше развивалось по законам лунного календаря","Виноделие зародилось в Турции"],["Бог вина и плодородия в Древней Греции","Бог вина и виноделия в Древнем Египте","Автопортрет древнего винодела"],["Собрание древних греков","Вечеринка в греческом стиле","Боги Олимпа"],["Первая страна Нового Света, где высадили лозу Vitis Vinifera","Страна, где никогда не производилось вино","Страна с большим количеством автохтонов"],["Тля, которая уничтожила виноградники","Жучок, который съедает вредителей виноградной лозы","Вредитель, живущий только на виноградниках Нового Света"],["Известный французский энолог XX века","Винодел из Бордо-Ротшильд","Американский винный критик - Паркер"],["Суд Парижа","Симпозиум","Сцена из сериала"],["Американский критик","Американский винодел","Американский винный журналист"],["Дубовые чипсы","Стружка от бочки","Топливо для дрожжей"],["Кавист","Сомелье","Винодел"]],contentSort=[[0,"привили виноделие в Старом Свете"],[0,"первые вели записи о виноделии"],[0,"бог вина - Бахус"],[0,"упоминания о чертах современных аппелласьонов"],[0,"за вином на праздниках и вечеринках следил тамада"],[1,"количество важнее его качества"],[1,"вина не только из винограда, но и инжира, финика, граната"],[1,"100 дней до урожая"],[1,"2 этапа прессования винограда"],[1,"несколько уровней вина"]],questionCross=["Результат прессования винограда вместе с косточками и стеблями; вкус, который косточки и стебли могут придать вину.","Первый уровень вина после прессования в Древнем Египте.","Один из двух ароматических белых сортов винограда, который распространили греки.","Бог вина и плодородия в Древнем Риме.","Люди, которые занимались производством вина в период Средневековья.","Вторая часть названия американского винограда; отличается от Vitis Vinifera.","Страна, где виноделием занимались английские каторжники."],correctCross=["горечь","самотёк","мальвазия","бахус","монахи","лабруска","австралия"],correctScribe=["иран","грузинские","брожение","вода","месопотамия","финикийцам","средиземноморью","злые","силы","напиток","богов"],contentAsked=["Какие страны на данный момент являются родиной вина и виноделия?","Какие инновации в виноделии придумали древние египтяне?","В чём разница между собраниями с вином у древних греков и древних римлян?","Как вы думаете, каким было вино во времена Древней Греции и Древнего Рима?","Что сделали для виноделия средневековые монахи?","Кто и когда привёз в ЮЖную Африку лозу и искусство виноделия?","Как удалось остановить нашествие филлоксеры в XIX веке?","В какую сторону изменился винный вектор в ХХ веке?","Что стало престижным с 80-х годов ХХ века?","Какие винные профессии существуют на данный момент?","Какие проблемы преодолевает виноделие в XXI веке?"];
