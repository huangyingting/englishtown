"use client";
// @ts-nocheck
import { oh } from "@/lib/router";

export var dh = [
    {
      id: `life`,
      name: `生活区`,
      emoji: `🏘️`,
      blurb: `点咖啡、订餐厅、过海关、看医生、租房子，出门一天用得上的全在这`,
      locations: [
        {
          id: `cafe`,
          districtId: `life`,
          name: `咖啡店`,
          nameEn: `Café`,
          emoji: `☕`,
          blurb: `点单、改单、要 WiFi，早上第一杯从这开始`,
          npc: {
            id: `mia`,
            name: `Mia`,
            role: `咖啡师`,
            roleEn: `barista`,
            emoji: `👩‍🍳`,
            voice: `female`,
            persona: `Mia is a cheerful barista in her late twenties who loves chatting with regulars. She speaks casual, friendly American English, keeps replies short and upbeat, and asks follow-up questions like "For here or to go?".`,
          },
          freeChatTopics: [
            `问她推荐什么咖啡豆`,
            `聊聊你早上的习惯`,
            `问附近有什么好玩的`,
            `问她周末一般干什么`,
          ],
          missions: [
            {
              id: `cafe-order`,
              locationId: `cafe`,
              title: `点一杯拿铁`,
              level: `A2`,
              xp: 40,
              playerRole: `你刚到美国出差，早上走进楼下咖啡店。你想要一杯燕麦奶拿铁，少糖，顺便问 WiFi 密码。`,
              scene: `A busy neighborhood café in Seattle at 8 a.m. The learner is a new customer at the counter. Mia takes orders, suggests sizes (small / medium / large), asks about milk and sugar, and knows the WiFi password is "latte2024".`,
              objectives: [
                {
                  zh: `点一杯燕麦奶拿铁`,
                  en: `Learner orders a latte with oat milk`,
                },
                {
                  zh: `说明要少糖或不加糖`,
                  en: `Learner asks for less sugar or no sugar`,
                },
                {
                  zh: `说明杯型，堂食还是带走`,
                  en: `Learner states a size and whether it is for here or to go`,
                },
                {
                  zh: `问到 WiFi 密码`,
                  en: `Learner asks for the WiFi password`,
                },
              ],
              opening: `Morning! Welcome to Bluebird Coffee. What can I get started for you?`,
              phrases: [
                {
                  en: `Could I get a medium latte with oat milk, please?`,
                  zh: `请给我一杯中杯燕麦奶拿铁`,
                },
                { en: `Just a little sugar, please.`, zh: `少放点糖` },
                { en: `No sugar for me, thanks.`, zh: `我不要糖，谢谢` },
                { en: `For here, please.`, zh: `在这儿喝` },
                { en: `To go, please.`, zh: `带走` },
                { en: `What's the WiFi password?`, zh: `WiFi 密码是什么？` },
                { en: `That's all, thanks.`, zh: `就这些，谢谢` },
              ],
              grammar: {
                title: `礼貌点单：Could I get … / I'd like …`,
                explain: [
                  `点东西别说 I want，用 Could I get … 或 I'd like … 更自然`,
                  `please 放句尾，语气就够客气了`,
                  `问价钱、问密码都可以用 What's the …?`,
                ],
                examples: [
                  {
                    en: `Could I get a small cappuccino, please?`,
                    zh: `请给我一杯小杯卡布奇诺`,
                  },
                  {
                    en: `I'd like an iced americano with no sugar.`,
                    zh: `我要一杯不加糖的冰美式`,
                  },
                  {
                    en: `What's the WiFi password, by the way?`,
                    zh: `顺便问一下，WiFi 密码是什么？`,
                  },
                ],
              },
              shadow: [
                { en: `What can I get started for you?`, zh: `想喝点什么？` },
                {
                  en: `Could I get a medium latte with oat milk, please?`,
                  zh: `请给我一杯中杯燕麦奶拿铁`,
                },
                {
                  en: `Just a little sugar, not too sweet.`,
                  zh: `少放点糖，别太甜`,
                },
                { en: `For here or to go?`, zh: `堂食还是带走？` },
                {
                  en: `To go, please. And what's the WiFi password?`,
                  zh: `带走。对了，WiFi 密码是什么？`,
                },
                {
                  en: `That'll be four fifty. Your name for the cup?`,
                  zh: `一共四块五。杯子上写什么名字？`,
                },
              ],
              twist: `When the learner orders, say you are out of oat milk today and offer almond or soy milk instead.`,
            },
            {
              id: `cafe-wrong`,
              locationId: `cafe`,
              title: `拿错单了`,
              level: `A2`,
              xp: 45,
              playerRole: `你点的是热拿铁，拿到手却是冰的，而且好像多收了钱。礼貌地说清楚，让 Mia 重做并退差价。`,
              scene: `The same café, ten minutes later. The learner ordered a hot latte for $4.50 but received an iced caramel latte and was charged $5.75. Mia is apologetic and will remake the drink and refund the difference, but she first needs to understand exactly what went wrong.`,
              objectives: [
                {
                  zh: `说清楚拿到的饮品不对`,
                  en: `Learner explains that they received the wrong drink`,
                },
                {
                  zh: `说清楚自己本来点的是什么`,
                  en: `Learner says what they actually ordered`,
                },
                {
                  zh: `指出多收了钱`,
                  en: `Learner points out they were overcharged`,
                },
                {
                  zh: `提出要重做或退差价`,
                  en: `Learner asks for the drink to be remade or for a refund of the difference`,
                },
              ],
              opening: `Here's your drink! Have a good one.`,
              phrases: [
                {
                  en: `Sorry, I think this isn't mine.`,
                  zh: `不好意思，这好像不是我的`,
                },
                {
                  en: `I ordered a hot latte, but this is iced.`,
                  zh: `我点的是热拿铁，这杯是冰的`,
                },
                {
                  en: `I think I was charged for the wrong drink.`,
                  zh: `我觉得收的是别的饮品的钱`,
                },
                { en: `Could you remake it, please?`, zh: `能重做一杯吗？` },
                { en: `Could I get the difference back?`, zh: `能退差价吗？` },
                { en: `No worries, it happens.`, zh: `没事，难免的` },
                { en: `Thanks for sorting it out.`, zh: `谢谢你帮我处理` },
              ],
              grammar: {
                title: `客气地指出问题：I think … / It seems …`,
                explain: [
                  `先说 Sorry 或 Excuse me 再讲问题，对方不会有被指责的感觉`,
                  `I think … 和 It seems … 把语气放软，意思不变`,
                  `想要对方做什么，用 Could you …? 而不是 You should …`,
                ],
                examples: [
                  {
                    en: `Sorry, I think this is the wrong order.`,
                    zh: `不好意思，这单好像拿错了`,
                  },
                  {
                    en: `It seems I was charged twice.`,
                    zh: `好像扣了我两次钱`,
                  },
                  {
                    en: `Could you check the receipt for me?`,
                    zh: `能帮我看一下小票吗？`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Sorry, I think this isn't my drink.`,
                  zh: `不好意思，这好像不是我的饮品`,
                },
                {
                  en: `I ordered a hot latte, but this one is iced.`,
                  zh: `我点的是热拿铁，这杯是冰的`,
                },
                { en: `Oh no, I am so sorry about that.`, zh: `哎呀，真抱歉` },
                {
                  en: `And I think I was charged five seventy-five instead of four fifty.`,
                  zh: `而且我好像被收了五块七五，不是四块五`,
                },
                {
                  en: `Let me remake it and refund the difference right away.`,
                  zh: `我马上重做，并把差价退给你`,
                },
                {
                  en: `No worries, it happens. Thanks for sorting it out.`,
                  zh: `没事，难免的。谢谢你处理`,
                },
              ],
            },
            {
              id: `cafe-regular`,
              locationId: `cafe`,
              title: `和咖啡师闲聊`,
              level: `B1`,
              xp: 50,
              playerRole: `你来这家店一周了，Mia 已经认得你。今天店里不忙，和她聊聊你的工作、这座城市，再让她推荐一款新饮品。`,
              scene: `A quiet afternoon at the café. The learner has become a regular over the past week. Mia is curious about where the learner is from and what they do in Seattle, and she is excited about a new seasonal drink, a maple oat cold brew.`,
              objectives: [
                {
                  zh: `说说你来自哪里、来这做什么`,
                  en: `Learner says where they are from and why they are in the city`,
                },
                {
                  zh: `聊一聊你的工作或日常`,
                  en: `Learner talks about their job or daily routine`,
                },
                {
                  zh: `问她推荐什么新饮品`,
                  en: `Learner asks Mia for a drink recommendation`,
                },
                {
                  zh: `问一个关于她的问题`,
                  en: `Learner asks Mia a question about herself`,
                },
              ],
              opening: `Hey, you're back! The usual? Or are you feeling adventurous today?`,
              phrases: [
                {
                  en: `I'm here on a work trip for a month.`,
                  zh: `我来出差一个月`,
                },
                {
                  en: `I work in software, mostly backend stuff.`,
                  zh: `我做软件的，主要是后端`,
                },
                { en: `What would you recommend?`, zh: `你推荐什么？` },
                { en: `I'll give that a try.`, zh: `那我试试` },
                {
                  en: `How long have you worked here?`,
                  zh: `你在这儿做多久了？`,
                },
                {
                  en: `What's your favorite thing about the city?`,
                  zh: `你最喜欢这座城市的哪一点？`,
                },
                { en: `Nice talking to you!`, zh: `和你聊天很开心` },
              ],
              grammar: {
                title: `闲聊的万能句：How long / What do you … / I'm here for …`,
                explain: [
                  `说来意用 I'm here for + 名词，或 I'm here to + 动词`,
                  `问对方经历用 How long have you …?`,
                  `接别人的话，先回应一句（Oh nice / Really?）再问下一个`,
                ],
                examples: [
                  {
                    en: `I'm here for a conference, just for a week.`,
                    zh: `我来开会，就待一周`,
                  },
                  {
                    en: `How long have you been in Seattle?`,
                    zh: `你在西雅图多久了？`,
                  },
                  {
                    en: `Oh nice, what do you do on weekends?`,
                    zh: `不错啊，你周末一般干什么？`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Hey, you're back! The usual?`,
                  zh: `嘿，你又来了！还是老样子？`,
                },
                {
                  en: `Actually, I'm feeling adventurous. What would you recommend?`,
                  zh: `今天想换换口味，你推荐什么？`,
                },
                {
                  en: `The maple oat cold brew is new and really popular.`,
                  zh: `枫糖燕麦冷萃是新品，很受欢迎`,
                },
                {
                  en: `I'll give that a try. I'm here on a work trip, by the way.`,
                  zh: `那我试试。对了，我是来出差的`,
                },
                {
                  en: `How long have you been working here?`,
                  zh: `你在这儿工作多久了？`,
                },
                {
                  en: `Almost three years. I love the regulars.`,
                  zh: `快三年了。我很喜欢这些常客`,
                },
              ],
            },
          ],
          writing: [
            {
              id: `cafe-review`,
              locationId: `cafe`,
              title: `给咖啡店写点评`,
              level: `A2`,
              type: `review`,
              prompt: `你在 Bluebird Coffee 待了一周。在点评网站上写一条短评，让没来过的人知道该不该来。`,
              mustInclude: [
                `你点过什么，味道怎么样`,
                `店员服务怎么样`,
                `环境或 WiFi 适不适合办公`,
                `给几星，推不推荐`,
              ],
              words: [60, 100],
              tips: [
                {
                  en: `I stopped by almost every morning this week.`,
                  zh: `这周我几乎每天早上都来`,
                },
                {
                  en: `The oat milk latte was smooth and not too sweet.`,
                  zh: `燕麦拿铁很顺滑，不太甜`,
                },
                {
                  en: `The staff are friendly and remember your name.`,
                  zh: `店员很友好，还记得你的名字`,
                },
                {
                  en: `The WiFi is fast and there are plenty of outlets.`,
                  zh: `WiFi 快，插座也多`,
                },
                {
                  en: `Four stars, I would definitely come back.`,
                  zh: `四星，肯定还会再来`,
                },
              ],
              sample: `I stopped by Bluebird Coffee almost every morning this week while I was in town for work. The oat milk latte is smooth and not too sweet, and the maple cold brew is worth trying if you like something new. The staff are friendly and quick, and Mia remembered my order by day three. The WiFi is fast and there are plenty of outlets, so it is a good spot to answer emails. It gets busy around 8 a.m., so come a bit earlier if you need a seat. Four stars, I would definitely come back.`,
            },
          ],
        },
        {
          id: `restaurant`,
          districtId: `life`,
          name: `餐厅`,
          nameEn: `Restaurant`,
          emoji: `🍝`,
          blurb: `订位、点菜、说过敏、对账单，坐下吃顿饭不慌`,
          npc: {
            id: `luis`,
            name: `Luis`,
            role: `服务员`,
            roleEn: `server`,
            emoji: `🧑‍🍳`,
            voice: `male`,
            persona: `Luis is a warm, slightly chatty server at an Italian-American restaurant called Rosa's. He speaks clear friendly American English, loves describing dishes, and always checks for allergies. He says things like "Great choice" and "I'll get that right out to you."`,
          },
          freeChatTopics: [
            `问他今天的特色菜`,
            `聊聊你老家的食物`,
            `问他这家店开了多久`,
            `请他推荐附近的甜品店`,
          ],
          missions: [
            {
              id: `restaurant-book`,
              locationId: `restaurant`,
              title: `订位和入座`,
              level: `A2`,
              xp: 40,
              playerRole: `周五晚上你带两个同事去 Rosa's 吃饭。你没有预约。想要一张三人桌，最好靠窗，还要问要等多久。`,
              scene: `Friday 7 p.m. at Rosa's, a popular Italian restaurant. Luis is at the host stand. There is a 20-minute wait for a table by the window, but a table near the kitchen is free right now. The learner has no reservation and wants a table for three.`,
              objectives: [
                {
                  zh: `说明人数`,
                  en: `Learner says how many people are in the party`,
                },
                {
                  zh: `说明没有预约`,
                  en: `Learner says they do not have a reservation`,
                },
                {
                  zh: `提出想要靠窗的位置`,
                  en: `Learner asks for a table by the window`,
                },
                {
                  zh: `问要等多久并做决定`,
                  en: `Learner asks about the wait time and decides whether to wait`,
                },
              ],
              opening: `Good evening, welcome to Rosa's! Do you have a reservation with us tonight?`,
              phrases: [
                { en: `A table for three, please.`, zh: `三位，谢谢` },
                {
                  en: `We don't have a reservation, sorry.`,
                  zh: `我们没有预约`,
                },
                {
                  en: `Could we get a table by the window?`,
                  zh: `能给我们一张靠窗的桌子吗？`,
                },
                { en: `How long is the wait?`, zh: `要等多久？` },
                { en: `We'll wait, that's fine.`, zh: `我们等一下，没关系` },
                {
                  en: `We'll take the one near the kitchen.`,
                  zh: `那就要厨房旁边那桌吧`,
                },
                { en: `Could you put us on the list?`, zh: `能把我们记上吗？` },
              ],
              grammar: {
                title: `数量和地点：a table for three / by the window`,
                explain: [
                  `人数用 for + 数字：a table for two`,
                  `位置用介词：by the window、near the door、outside`,
                  `问时长用 How long …? 回答用 about + 时间`,
                ],
                examples: [
                  {
                    en: `Could we get a table for four by the window?`,
                    zh: `能给我们一张靠窗的四人桌吗？`,
                  },
                  {
                    en: `How long is the wait for a table outside?`,
                    zh: `外面的桌子要等多久？`,
                  },
                  {
                    en: `About twenty minutes, is that okay?`,
                    zh: `大概二十分钟，可以吗？`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Do you have a reservation with us tonight?`,
                  zh: `今晚有预约吗？`,
                },
                {
                  en: `No, we don't. A table for three, please.`,
                  zh: `没有。三位，谢谢`,
                },
                {
                  en: `Could we get a table by the window?`,
                  zh: `能安排靠窗的位置吗？`,
                },
                {
                  en: `There is a twenty-minute wait for the window.`,
                  zh: `靠窗的要等二十分钟`,
                },
                {
                  en: `That's fine, we'll wait. Could you put us on the list?`,
                  zh: `没关系，我们等。能记上我们吗？`,
                },
                { en: `Of course. Your name, please?`, zh: `当然。请问贵姓？` },
              ],
              twist: `After the learner decides, mention that the window table just opened up early, so they can sit now if they like.`,
            },
            {
              id: `restaurant-order`,
              locationId: `restaurant`,
              title: `点菜和说过敏`,
              level: `B1`,
              xp: 55,
              playerRole: `你们坐下了。你对坚果过敏，想让 Luis 推荐一道没有坚果的主菜，再点一份前菜分着吃，饮料要无酒精的。`,
              scene: `At the table at Rosa's. Tonight's specials are seared salmon with pesto (pesto contains pine nuts) and mushroom risotto (no nuts). Popular starters: bruschetta and calamari. Luis describes dishes enthusiastically and always asks about allergies. Drinks include house lemonade and sparkling water.`,
              objectives: [
                {
                  zh: `说明自己对坚果过敏`,
                  en: `Learner says they have a nut allergy`,
                },
                {
                  zh: `让服务员推荐一道没有坚果的主菜`,
                  en: `Learner asks for a main dish recommendation without nuts`,
                },
                {
                  zh: `点一份前菜给大家分`,
                  en: `Learner orders a starter to share`,
                },
                {
                  zh: `点一杯无酒精饮料`,
                  en: `Learner orders a non-alcoholic drink`,
                },
              ],
              opening: `Here are your menus. Can I start you off with something to drink? And any allergies I should know about?`,
              phrases: [
                { en: `I'm allergic to nuts.`, zh: `我对坚果过敏` },
                {
                  en: `Does this dish contain any nuts?`,
                  zh: `这道菜有坚果吗？`,
                },
                { en: `What would you recommend?`, zh: `你推荐什么？` },
                { en: `I'll have the mushroom risotto.`, zh: `我要蘑菇烩饭` },
                {
                  en: `Could we get the bruschetta to share?`,
                  zh: `能来一份烤面包片大家分吗？`,
                },
                {
                  en: `Just a sparkling water for me, please.`,
                  zh: `我要一杯气泡水`,
                },
                { en: `How is the salmon cooked?`, zh: `三文鱼是怎么做的？` },
              ],
              grammar: {
                title: `点菜句型：I'll have … / Does it contain …?`,
                explain: [
                  `决定了就说 I'll have …，比 I want 自然得多`,
                  `问成分用 Does it contain …? 或 Is there … in it?`,
                  `过敏说 I'm allergic to …，严重的话加 I can't have any …`,
                ],
                examples: [
                  {
                    en: `I'll have the risotto, and she'll have the salmon.`,
                    zh: `我要烩饭，她要三文鱼`,
                  },
                  {
                    en: `Does the pesto contain pine nuts?`,
                    zh: `青酱里有松子吗？`,
                  },
                  {
                    en: `I'm allergic to shellfish, so no shrimp, please.`,
                    zh: `我对贝类过敏，请不要放虾`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Any allergies I should know about?`,
                  zh: `有什么过敏需要我注意的吗？`,
                },
                {
                  en: `Yes, I'm allergic to nuts. What would you recommend?`,
                  zh: `有，我对坚果过敏。你推荐什么？`,
                },
                {
                  en: `The mushroom risotto is nut-free and really popular.`,
                  zh: `蘑菇烩饭不含坚果，很受欢迎`,
                },
                {
                  en: `Perfect, I'll have that. And the bruschetta to share.`,
                  zh: `好，我要这个。再来一份烤面包片分着吃`,
                },
                {
                  en: `Anything to drink? We have a great house lemonade.`,
                  zh: `喝点什么？我们的自制柠檬水很棒`,
                },
                {
                  en: `Just a sparkling water for me, please.`,
                  zh: `我要一杯气泡水就好`,
                },
              ],
              twist: `If the learner asks about the salmon, warn them clearly that the pesto has pine nuts and offer it without pesto.`,
            },
            {
              id: `restaurant-bill`,
              locationId: `restaurant`,
              title: `结账和小费`,
              level: `B1`,
              xp: 55,
              playerRole: `吃完了。账单上多了一份你们没点的提拉米苏。指出来，让他改账单，然后分开付款，并问清小费怎么给。`,
              scene: `End of the meal at Rosa's. The bill is $86 and includes a tiramisu ($9) that the table never ordered. Luis will remove it and apologize. Splitting the bill three ways is fine. Tips are not included; 18-20% is customary and can be added on the card machine.`,
              objectives: [
                { zh: `要账单`, en: `Learner asks for the bill` },
                {
                  zh: `指出账单上多了一道没点的菜`,
                  en: `Learner points out an item on the bill they did not order`,
                },
                { zh: `提出分开付款`, en: `Learner asks to split the bill` },
                {
                  zh: `问小费是否已包含，或怎么给`,
                  en: `Learner asks whether the tip is included or how to tip`,
                },
              ],
              opening: `How was everything tonight? Can I get you anything else, or are you all set?`,
              phrases: [
                { en: `Could we get the check, please?`, zh: `麻烦结账` },
                {
                  en: `I think there's a mistake on the bill.`,
                  zh: `账单好像有点问题`,
                },
                { en: `We didn't order the tiramisu.`, zh: `我们没点提拉米苏` },
                { en: `Could we split it three ways?`, zh: `能分成三份付吗？` },
                { en: `Is the tip included?`, zh: `小费包含在内了吗？` },
                {
                  en: `Can I add the tip on the card?`,
                  zh: `小费可以刷卡吗？`,
                },
                { en: `Everything was great, thank you.`, zh: `都很好，谢谢` },
              ],
              grammar: {
                title: `指出错误不伤和气：I think there's a mistake`,
                explain: [
                  `先说 I think there's a mistake，再说具体是什么`,
                  `否定过去的事用 didn't + 动词原形：We didn't order …`,
                  `美国餐厅 check 和 bill 都指账单，服务员更常说 check`,
                ],
                examples: [
                  {
                    en: `I think there's a mistake, we didn't have dessert.`,
                    zh: `好像有点问题，我们没吃甜品`,
                  },
                  {
                    en: `We only ordered two starters, not three.`,
                    zh: `我们只点了两份前菜，不是三份`,
                  },
                  {
                    en: `Could you take that off, please?`,
                    zh: `能把那项去掉吗？`,
                  },
                ],
              },
              shadow: [
                { en: `Could we get the check, please?`, zh: `麻烦结账` },
                {
                  en: `I think there's a mistake. We didn't order the tiramisu.`,
                  zh: `好像有点问题，我们没点提拉米苏`,
                },
                {
                  en: `You're right, I'm so sorry. Let me take that off.`,
                  zh: `您说得对，抱歉，我把它去掉`,
                },
                {
                  en: `Thanks. Could we split it three ways?`,
                  zh: `谢谢。能分三份付吗？`,
                },
                {
                  en: `Is the tip included, or do we add it on the card?`,
                  zh: `小费含了吗，还是刷卡时加？`,
                },
                {
                  en: `It's not included. You can add it on the machine.`,
                  zh: `没含。可以在刷卡机上加`,
                },
              ],
            },
          ],
          writing: [
            {
              id: `restaurant-review`,
              locationId: `restaurant`,
              title: `餐厅点评`,
              level: `B1`,
              type: `review`,
              prompt: `给 Rosa's 写一条点评。你对坚果过敏，店员处理得很好，但账单出了点小错。写得公道一点。`,
              mustInclude: [
                `点了什么，好不好吃`,
                `店员怎么处理过敏问题`,
                `账单的小插曲以及他们怎么解决`,
                `总体评分和推荐人群`,
              ],
              words: [80, 130],
              tips: [
                {
                  en: `We came in on a Friday without a reservation.`,
                  zh: `我们周五没预约就去了`,
                },
                {
                  en: `Our server, Luis, took my nut allergy seriously.`,
                  zh: `服务员 Luis 很认真对待我的坚果过敏`,
                },
                {
                  en: `The only hiccup was an extra dessert on the bill.`,
                  zh: `唯一的小插曲是账单上多了份甜品`,
                },
                {
                  en: `They fixed it right away with an apology.`,
                  zh: `他们马上改了，还道了歉`,
                },
                {
                  en: `Great for a casual dinner with friends.`,
                  zh: `适合和朋友随便吃顿晚饭`,
                },
              ],
              sample: `We came to Rosa's on a Friday night without a reservation and only waited about fifteen minutes for a window table. Our server, Luis, took my nut allergy seriously and steered me to the mushroom risotto, which was creamy and full of flavor. The bruschetta was fresh and big enough for three. The only hiccup was an extra tiramisu on the bill, but Luis took it off right away and apologized. Prices are fair for the portion sizes and the house lemonade is worth ordering. Four stars, great for a casual dinner with friends, just book ahead on weekends.`,
            },
          ],
        },
        {
          id: `airport`,
          districtId: `life`,
          name: `机场`,
          nameEn: `Airport`,
          emoji: `✈️`,
          blurb: `值机、过关、找行李，落地第一小时别掉链子`,
          npc: {
            id: `sam`,
            name: `Sam`,
            role: `机场地勤`,
            roleEn: `airline ground agent`,
            emoji: `🧑‍✈️`,
            voice: `male`,
            persona: `Sam is a patient airline ground agent at the check-in and baggage desk. He speaks clear, slightly formal American English, repeats key information like gate numbers and times, and asks standard questions such as "Did you pack this bag yourself?".`,
          },
          freeChatTopics: [
            `问他哪些航线最常晚点`,
            `聊聊你最远的一次旅行`,
            `问候机楼哪里有好吃的`,
            `问怎么打发五小时转机`,
          ],
          missions: [
            {
              id: `airport-checkin`,
              locationId: `airport`,
              title: `值机和托运`,
              level: `A2`,
              xp: 40,
              playerRole: `你要飞芝加哥。柜台值机：出示护照，托运一件行李，要一个靠过道的座位，问登机口和登机时间。`,
              scene: `Check-in counter for flight UA 512 to Chicago, departing 14:35 from gate B22, boarding at 14:00. The learner has one suitcase to check (23 kg limit) and a backpack. Aisle seats are available in row 24. Sam asks for the passport and the standard security questions.`,
              objectives: [
                {
                  zh: `说明去哪里并出示护照`,
                  en: `Learner states their destination and presents their passport`,
                },
                { zh: `托运一件行李`, en: `Learner asks to check one bag` },
                {
                  zh: `要一个靠过道的座位`,
                  en: `Learner requests an aisle seat`,
                },
                {
                  zh: `问登机口和登机时间`,
                  en: `Learner asks about the gate and boarding time`,
                },
              ],
              opening: `Good afternoon. Where are you flying to today? May I see your passport, please?`,
              phrases: [
                { en: `I'm flying to Chicago.`, zh: `我飞芝加哥` },
                { en: `Here is my passport.`, zh: `这是我的护照` },
                { en: `I'd like to check one bag.`, zh: `我要托运一件行李` },
                {
                  en: `Could I have an aisle seat?`,
                  zh: `能给我靠过道的座位吗？`,
                },
                { en: `Which gate is it?`, zh: `在几号登机口？` },
                { en: `What time does boarding start?`, zh: `几点开始登机？` },
                {
                  en: `Is my backpack okay as a carry-on?`,
                  zh: `我的背包可以随身带吗？`,
                },
              ],
              grammar: {
                title: `机场常用：一般现在时问时间表`,
                explain: [
                  `航班、登机这类固定安排，用一般现在时问：What time does boarding start?`,
                  `问地点用 Which gate / Where is …?`,
                  `想要什么用 I'd like to … 或 Could I have …?`,
                ],
                examples: [
                  {
                    en: `What time does the flight leave?`,
                    zh: `航班几点起飞？`,
                  },
                  {
                    en: `Which gate does it board from?`,
                    zh: `从哪个登机口登机？`,
                  },
                  {
                    en: `I'd like to check this suitcase, please.`,
                    zh: `我想托运这个箱子`,
                  },
                ],
              },
              shadow: [
                { en: `Where are you flying to today?`, zh: `今天飞哪里？` },
                {
                  en: `I'm flying to Chicago. Here's my passport.`,
                  zh: `我飞芝加哥。这是护照`,
                },
                {
                  en: `I'd like to check one bag, please.`,
                  zh: `我要托运一件行李`,
                },
                {
                  en: `Did you pack this bag yourself?`,
                  zh: `这个包是你自己装的吗？`,
                },
                {
                  en: `Yes. Could I have an aisle seat?`,
                  zh: `是的。能给我靠过道的座位吗？`,
                },
                {
                  en: `Gate B22, boarding starts at two o'clock.`,
                  zh: `B22 登机口，两点开始登机`,
                },
              ],
              twist: `The suitcase weighs 25 kg, two kilos over the limit. Tell the learner and let them decide whether to pay the fee or move items to the backpack.`,
            },
            {
              id: `airport-immigration`,
              locationId: `airport`,
              title: `过海关问答`,
              level: `B1`,
              xp: 55,
              playerRole: `你刚落地，排到了入境柜台。Sam 今天在海关帮忙。回答来访目的、待多久、住哪里，别紧张。`,
              scene: `Immigration counter at Chicago O'Hare. Sam is acting as the officer: polite but brisk, asks the purpose of the visit, length of stay, where the learner is staying, whether they are carrying food or more than $10,000 cash, and what they do for work. He stamps the passport when satisfied.`,
              objectives: [
                {
                  zh: `说明来访目的`,
                  en: `Learner states the purpose of their visit`,
                },
                {
                  zh: `说明待多久`,
                  en: `Learner says how long they will stay`,
                },
                {
                  zh: `说明住在哪里`,
                  en: `Learner says where they are staying`,
                },
                {
                  zh: `回答有没有带食物或大额现金`,
                  en: `Learner answers whether they are bringing food or large amounts of cash`,
                },
              ],
              opening: `Next, please. Passport. What is the purpose of your visit to the United States?`,
              phrases: [
                { en: `I'm here on business.`, zh: `我来出差` },
                { en: `I'm visiting a friend.`, zh: `我来看朋友` },
                { en: `I'll be staying for two weeks.`, zh: `我待两周` },
                {
                  en: `I'm staying at the Hilton downtown.`,
                  zh: `我住在市中心的希尔顿`,
                },
                { en: `I'm not carrying any food.`, zh: `我没带食物` },
                { en: `I'm a software engineer.`, zh: `我是软件工程师` },
                { en: `Could you repeat that, please?`, zh: `能再说一遍吗？` },
              ],
              grammar: {
                title: `说计划：will be staying / am staying at`,
                explain: [
                  `已安排好的计划用现在进行时：I'm staying at the Hilton`,
                  `说时长用 for + 一段时间：for ten days`,
                  `回答是非题先说 Yes / No，再补一句细节`,
                ],
                examples: [
                  {
                    en: `I'm here for a conference, I'll be staying for five days.`,
                    zh: `我来开会，待五天`,
                  },
                  {
                    en: `I'm staying with a friend in Evanston.`,
                    zh: `我住在埃文斯顿的朋友家`,
                  },
                  {
                    en: `No, nothing to declare. Just some clothes and a laptop.`,
                    zh: `没有要申报的，只有衣服和电脑`,
                  },
                ],
              },
              shadow: [
                {
                  en: `What is the purpose of your visit?`,
                  zh: `你此行的目的是什么？`,
                },
                {
                  en: `I'm here on business for a conference.`,
                  zh: `我来出差，参加一个会议`,
                },
                { en: `How long will you be staying?`, zh: `待多久？` },
                {
                  en: `Ten days. I'm staying at the Hilton downtown.`,
                  zh: `十天。住市中心的希尔顿`,
                },
                {
                  en: `Are you bringing any food or more than ten thousand dollars?`,
                  zh: `带食物或超过一万美元现金了吗？`,
                },
                {
                  en: `No, just clothes and my laptop.`,
                  zh: `没有，只有衣服和电脑`,
                },
              ],
            },
            {
              id: `airport-lostbag`,
              locationId: `airport`,
              title: `行李没到`,
              level: `B1`,
              xp: 60,
              playerRole: `转盘停了，你的行李没出来。去行李服务台描述箱子、出示行李牌、留下酒店地址和电话，问什么时候能送到。`,
              scene: `Baggage service desk. The learner's black hard-shell suitcase with a red ribbon did not arrive on UA 512. Sam needs the baggage tag number (on the boarding pass), a description, the hotel address and a phone number. The bag is likely on the next flight and can be delivered to the hotel tomorrow morning.`,
              objectives: [
                {
                  zh: `说明行李没到`,
                  en: `Learner reports that their bag did not arrive`,
                },
                { zh: `描述箱子的样子`, en: `Learner describes the suitcase` },
                {
                  zh: `提供酒店地址和联系电话`,
                  en: `Learner gives a delivery address and phone number`,
                },
                {
                  zh: `问什么时候能送到`,
                  en: `Learner asks when the bag will be delivered`,
                },
              ],
              opening: `Hi there, how can I help you? Oh no, missing bag? Let's get a report started. Which flight were you on?`,
              phrases: [
                { en: `My suitcase didn't come out.`, zh: `我的箱子没出来` },
                {
                  en: `It's a black hard-shell suitcase with a red ribbon.`,
                  zh: `黑色硬壳箱，系了红丝带`,
                },
                { en: `Here is my baggage tag.`, zh: `这是我的行李牌` },
                {
                  en: `I'm staying at the Hilton on Michigan Avenue.`,
                  zh: `我住在密歇根大道的希尔顿`,
                },
                {
                  en: `You can reach me at this number.`,
                  zh: `可以打这个号码找我`,
                },
                { en: `When will it be delivered?`, zh: `什么时候能送到？` },
                {
                  en: `Can I get a reference number?`,
                  zh: `能给我一个查询编号吗？`,
                },
              ],
              grammar: {
                title: `描述物品：颜色 + 材质 + 特征`,
                explain: [
                  `形容词顺序：大小、颜色、材质，再说名词：a small black leather bag`,
                  `补充特征用 with + 名词：with a red ribbon`,
                  `问未来被动用 When will it be + 过去分词`,
                ],
                examples: [
                  {
                    en: `It's a medium blue suitcase with four wheels.`,
                    zh: `中号蓝色箱子，四个轮`,
                  },
                  {
                    en: `There is a name tag with my phone number on it.`,
                    zh: `上面有写我电话的名牌`,
                  },
                  {
                    en: `When will it be sent to my hotel?`,
                    zh: `什么时候送到我酒店？`,
                  },
                ],
              },
              shadow: [
                {
                  en: `My suitcase didn't come out on the belt.`,
                  zh: `我的箱子没从传送带出来`,
                },
                { en: `Which flight were you on?`, zh: `你坐的哪趟航班？` },
                {
                  en: `UA 512 from Seattle. Here's my baggage tag.`,
                  zh: `从西雅图来的 UA 512。这是行李牌`,
                },
                {
                  en: `It's a black hard-shell suitcase with a red ribbon.`,
                  zh: `黑色硬壳箱，系了红丝带`,
                },
                {
                  en: `Where are you staying, and what number can we reach you at?`,
                  zh: `你住哪儿，打什么号码能找到你？`,
                },
                {
                  en: `It should be on the next flight and delivered tomorrow morning.`,
                  zh: `应该在下一班，明早送到`,
                },
              ],
            },
          ],
          writing: [
            {
              id: `airport-claim`,
              locationId: `airport`,
              title: `行李延误索赔邮件`,
              level: `B1`,
              type: `email`,
              prompt: `行李晚了两天才送到，你买了换洗衣物花了 $120。给航空公司客服写邮件申请报销，附上编号。`,
              mustInclude: [
                `航班号、日期和行李报告编号`,
                `行李延误了多久`,
                `买了什么、花了多少钱`,
                `明确提出报销要求并说明附了收据`,
              ],
              words: [90, 140],
              tips: [
                {
                  en: `I am writing to request reimbursement for…`,
                  zh: `我写信是想申请报销……`,
                },
                {
                  en: `My bag was delayed for two days.`,
                  zh: `我的行李晚了两天`,
                },
                {
                  en: `I had to buy basic clothing and toiletries.`,
                  zh: `我不得不买了基本衣物和洗漱用品`,
                },
                { en: `The receipts are attached.`, zh: `收据已附上` },
                {
                  en: `I would appreciate a prompt response.`,
                  zh: `希望尽快回复`,
                },
              ],
              sample: `Subject: Delayed baggage reimbursement – UA 512, report CHI48213

Dear Customer Relations,

I am writing to request reimbursement for expenses caused by delayed baggage. I flew on UA 512 from Seattle to Chicago on 6 October. My checked suitcase did not arrive, and I filed report CHI48213 at the airport. The bag was delivered to my hotel two days later, on 8 October.

During those two days I had to buy basic clothing and toiletries for a work event, which cost $120 in total. The receipts are attached to this email.

I would appreciate a prompt response and confirmation of how the refund will be processed.

Kind regards,
[Your name]`,
            },
          ],
        },
        {
          id: `hotel`,
          districtId: `life`,
          name: `酒店`,
          nameEn: `Hotel`,
          emoji: `🏨`,
          blurb: `入住、投诉、换房、晚退房，前台说什么都接得住`,
          npc: {
            id: `nora`,
            name: `Nora`,
            role: `前台`,
            roleEn: `hotel front desk receptionist`,
            emoji: `💁‍♀️`,
            voice: `female`,
            persona: `Nora is a polished front desk receptionist at the Hilton downtown. She speaks professional, warm American English, uses phrases like "Certainly" and "Let me check that for you", and tries to solve problems without escalating. She is firm about hotel policy but flexible when the guest is polite.`,
          },
          freeChatTopics: [
            `问她附近哪里吃早餐`,
            `问健身房和泳池几点开`,
            `聊聊你在这座城市的计划`,
            `问她做前台最难忘的事`,
          ],
          missions: [
            {
              id: `hotel-checkin`,
              locationId: `hotel`,
              title: `办入住`,
              level: `A2`,
              xp: 40,
              playerRole: `你到酒店了，预订在公司名下。办入住：报姓名、确认住几晚、问早餐和 WiFi，顺便要一间高楼层安静的房。`,
              scene: `Front desk of the Hilton downtown, 9 p.m. The learner has a reservation for 4 nights under their company, Brightline. Breakfast is 6:30–10:00 on the second floor, WiFi is free with the room number, and a quiet room on the 18th floor is available. Nora needs a passport and a credit card for incidentals.`,
              objectives: [
                {
                  zh: `报姓名和预订信息`,
                  en: `Learner gives their name and reservation details`,
                },
                {
                  zh: `确认住几晚`,
                  en: `Learner confirms the number of nights`,
                },
                {
                  zh: `要一间高楼层安静的房间`,
                  en: `Learner asks for a quiet room on a high floor`,
                },
                {
                  zh: `问早餐时间和 WiFi`,
                  en: `Learner asks about breakfast and WiFi`,
                },
              ],
              opening: `Good evening, welcome to the Hilton. Are you checking in with us tonight?`,
              phrases: [
                {
                  en: `I have a reservation under Brightline.`,
                  zh: `我有一个以 Brightline 名义的预订`,
                },
                { en: `I'm staying for four nights.`, zh: `我住四晚` },
                {
                  en: `Could I have a quiet room on a high floor?`,
                  zh: `能给我一间高楼层的安静房间吗？`,
                },
                { en: `What time is breakfast?`, zh: `早餐几点？` },
                { en: `Is WiFi included?`, zh: `WiFi 包含在内吗？` },
                { en: `What time is checkout?`, zh: `几点退房？` },
                {
                  en: `Here is my passport and credit card.`,
                  zh: `这是我的护照和信用卡`,
                },
              ],
              grammar: {
                title: `预订和入住：under + 名字 / for + 几晚`,
                explain: [
                  `预订在谁名下用 under：a reservation under Wang`,
                  `住多久用 for + 数字 + nights`,
                  `问包不包含用 Is … included?`,
                ],
                examples: [
                  {
                    en: `I have a reservation under Li, for three nights.`,
                    zh: `我有一个李姓名下的预订，住三晚`,
                  },
                  {
                    en: `Is breakfast included in the rate?`,
                    zh: `房价含早餐吗？`,
                  },
                  {
                    en: `Could I get a room away from the elevator?`,
                    zh: `能给我一间离电梯远点的房间吗？`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Are you checking in with us tonight?`,
                  zh: `今晚入住吗？`,
                },
                {
                  en: `Yes, I have a reservation under Brightline.`,
                  zh: `是的，预订在 Brightline 名下`,
                },
                {
                  en: `I'm staying for four nights, checking out on Friday.`,
                  zh: `住四晚，周五退房`,
                },
                {
                  en: `Could I have a quiet room on a high floor?`,
                  zh: `能给我一间高楼层的安静房间吗？`,
                },
                {
                  en: `Certainly, I have a room on the eighteenth floor for you.`,
                  zh: `当然，我给您安排十八楼的房间`,
                },
                {
                  en: `What time is breakfast, and is WiFi included?`,
                  zh: `早餐几点，WiFi 包含吗？`,
                },
              ],
              twist: `The reservation shows only 3 nights, not 4. Point this out and offer to extend at the same rate.`,
            },
            {
              id: `hotel-problem`,
              locationId: `hotel`,
              title: `房间有问题`,
              level: `B1`,
              xp: 55,
              playerRole: `房间空调不制冷，隔壁还很吵，你明早有重要会议。打电话到前台，说明问题，要求换房或派人来修。`,
              scene: `A phone call to the front desk at 10:30 p.m. The air conditioning in room 1812 is blowing warm air and the guests next door are loud. Maintenance cannot come until morning. Nora can move the learner to room 2104, a similar room on a quieter floor, and can offer a late checkout or breakfast voucher as an apology.`,
              objectives: [
                {
                  zh: `说明空调坏了`,
                  en: `Learner reports that the air conditioning is not working`,
                },
                {
                  zh: `说明隔壁太吵`,
                  en: `Learner mentions the noise from the next room`,
                },
                {
                  zh: `说明明早有重要安排，需要今晚解决`,
                  en: `Learner explains why it needs to be solved tonight`,
                },
                {
                  zh: `要求换房或立即维修`,
                  en: `Learner asks for a room change or immediate repair`,
                },
              ],
              opening: `Front desk, this is Nora. How can I help you tonight?`,
              phrases: [
                { en: `The air conditioning isn't working.`, zh: `空调不工作` },
                { en: `It's blowing warm air.`, zh: `吹出来的是热风` },
                {
                  en: `The people next door are really loud.`,
                  zh: `隔壁的人特别吵`,
                },
                {
                  en: `I have an important meeting at eight tomorrow.`,
                  zh: `我明早八点有重要会议`,
                },
                { en: `Could I switch to another room?`, zh: `能换个房间吗？` },
                {
                  en: `Could you send someone up tonight?`,
                  zh: `今晚能派人上来吗？`,
                },
                {
                  en: `I really need a good night's sleep.`,
                  zh: `我真的需要睡个好觉`,
                },
              ],
              grammar: {
                title: `描述故障：isn't working / keeps + doing`,
                explain: [
                  `东西坏了说 isn't working 或 doesn't work，别说 is broken（那是碎了）`,
                  `反复发生用 keeps + 动词 ing：The light keeps flickering`,
                  `提要求前先说原因，对方更愿意帮忙`,
                ],
                examples: [
                  {
                    en: `The shower isn't working properly.`,
                    zh: `淋浴不太好用`,
                  },
                  {
                    en: `The TV keeps turning off by itself.`,
                    zh: `电视老是自己关掉`,
                  },
                  {
                    en: `I have an early flight, so I really need to sleep.`,
                    zh: `我明早赶飞机，真的得睡觉`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Hi, this is room 1812. The air conditioning isn't working.`,
                  zh: `你好，我是 1812 房。空调不工作`,
                },
                {
                  en: `It's blowing warm air, and the people next door are really loud.`,
                  zh: `吹的是热风，隔壁还特别吵`,
                },
                {
                  en: `I'm so sorry to hear that. Let me see what I can do.`,
                  zh: `非常抱歉。我看看能怎么办`,
                },
                {
                  en: `I have an important meeting at eight, so I need this fixed tonight.`,
                  zh: `我八点有重要会议，今晚得解决`,
                },
                {
                  en: `I can move you to a quieter room on the twenty-first floor.`,
                  zh: `我可以把您换到二十一楼安静的房间`,
                },
                {
                  en: `That would be great. Thank you so much.`,
                  zh: `那太好了。非常感谢`,
                },
              ],
            },
            {
              id: `hotel-checkout`,
              locationId: `hotel`,
              title: `退房和延时`,
              level: `B1`,
              xp: 50,
              playerRole: `退房日航班是晚上。先问能不能延到下午两点退房，再核对账单：mini bar 的 $12 你没动过。最后让前台帮忙寄存行李、叫车。`,
              scene: `Checkout morning. Standard checkout is 11 a.m.; late checkout until 2 p.m. costs $30 but Nora can waive it for the AC trouble earlier in the stay. The bill includes a $12 mini bar charge the learner did not use. Luggage storage is free and the desk can call a taxi to the airport.`,
              objectives: [
                { zh: `申请延迟退房`, en: `Learner asks for a late checkout` },
                {
                  zh: `对账单上的 mini bar 费用提出异议`,
                  en: `Learner disputes the mini bar charge on the bill`,
                },
                {
                  zh: `请求寄存行李`,
                  en: `Learner asks to store their luggage`,
                },
                {
                  zh: `让前台帮忙叫车去机场`,
                  en: `Learner asks the desk to arrange a taxi to the airport`,
                },
              ],
              opening: `Good morning! Checking out today? How was your stay with us?`,
              phrases: [
                { en: `Could I get a late checkout?`, zh: `能延迟退房吗？` },
                {
                  en: `My flight isn't until the evening.`,
                  zh: `我的航班要到晚上`,
                },
                { en: `I didn't use the mini bar.`, zh: `我没动 mini bar` },
                {
                  en: `Could you take that off the bill?`,
                  zh: `能把这项从账单上去掉吗？`,
                },
                {
                  en: `Could I leave my bags here for a few hours?`,
                  zh: `能把包寄存几小时吗？`,
                },
                {
                  en: `Could you call a taxi to the airport for me?`,
                  zh: `能帮我叫辆去机场的出租车吗？`,
                },
                { en: `Thanks for everything.`, zh: `谢谢你们的照顾` },
              ],
              grammar: {
                title: `一次提多个请求：Could you also …? / One more thing`,
                explain: [
                  `第二个请求前加 also 或 One more thing，听起来有条理`,
                  `until 表示「要到……才」：My flight isn't until 8 p.m.`,
                  `否定过去用 didn't：I didn't use it`,
                ],
                examples: [
                  {
                    en: `Could I also leave my bags here until three?`,
                    zh: `我能不能也把包寄存到三点？`,
                  },
                  {
                    en: `One more thing, could you call me a taxi?`,
                    zh: `还有一件事，能帮我叫辆出租车吗？`,
                  },
                  {
                    en: `The meeting isn't until Thursday.`,
                    zh: `会议要到周四才开`,
                  },
                ],
              },
              shadow: [
                {
                  en: `My flight isn't until the evening. Could I get a late checkout?`,
                  zh: `我的航班晚上才飞。能延迟退房吗？`,
                },
                {
                  en: `I can give you until two o'clock, no charge.`,
                  zh: `可以到两点，不收费`,
                },
                {
                  en: `Thanks. Also, I didn't use the mini bar, but it's on the bill.`,
                  zh: `谢谢。还有，我没动 mini bar，账单上却有`,
                },
                {
                  en: `Let me remove that for you right away.`,
                  zh: `我马上去掉`,
                },
                {
                  en: `One more thing, could I leave my bags here for a few hours?`,
                  zh: `还有，能把包寄存几小时吗？`,
                },
                {
                  en: `Of course, and I can call a taxi whenever you are ready.`,
                  zh: `当然，您准备好我随时叫车`,
                },
              ],
            },
          ],
          writing: [
            {
              id: `hotel-feedback`,
              locationId: `hotel`,
              title: `给酒店经理的反馈邮件`,
              level: `B1`,
              type: `email`,
              prompt: `住店四晚，空调坏过一次，前台 Nora 处理得很好。退房后给酒店经理写邮件：表扬具体的人，也提一条改进建议。`,
              mustInclude: [
                `住店日期和房号`,
                `遇到的问题`,
                `具体表扬哪位员工做了什么`,
                `一条改进建议`,
              ],
              words: [90, 140],
              tips: [
                {
                  en: `I stayed at your hotel from … to …`,
                  zh: `我……到……住在贵酒店`,
                },
                {
                  en: `I wanted to pass on some feedback.`,
                  zh: `我想反馈一些意见`,
                },
                { en: `Nora went out of her way to…`, zh: `Nora 特意……` },
                { en: `One suggestion: …`, zh: `一个建议：……` },
                {
                  en: `Overall, I would happily stay again.`,
                  zh: `总体来说，我很愿意再来`,
                },
              ],
              sample: `Subject: Feedback on my stay, room 1812

Dear General Manager,

I stayed at your hotel from 6 to 10 October in rooms 1812 and 2104, and I wanted to pass on some feedback. On my first night the air conditioning stopped working and the next room was very noisy. Nora at the front desk went out of her way to help: she moved me to a quieter room within twenty minutes and later waived the late checkout fee. That turned a bad night into a good stay.

One suggestion: it would help to have a maintenance person on call in the evening, since problems like this often happen after 10 p.m.

Overall, I would happily stay again and will recommend the hotel to colleagues.

Best regards,
[Your name]`,
            },
          ],
        },
        {
          id: `clinic`,
          districtId: `life`,
          name: `诊所`,
          nameEn: `Clinic`,
          emoji: `🩺`,
          blurb: `说症状、问用药、要病假条，看病不靠翻译`,
          npc: {
            id: `patel`,
            name: `Dr. Patel`,
            role: `全科医生`,
            roleEn: `family doctor`,
            emoji: `👩‍⚕️`,
            voice: `female`,
            persona: `Dr. Patel is a calm, thorough family doctor at a walk-in clinic. She speaks clear, reassuring American English, asks one question at a time about symptoms ("When did it start?", "On a scale of one to ten?"), explains things simply, and never uses jargon without explaining it.`,
          },
          freeChatTopics: [
            `问她怎么倒时差`,
            `聊聊你的运动习惯`,
            `问长期对着电脑怎么护眼`,
            `问美国看病流程和国内有啥不一样`,
          ],
          missions: [
            {
              id: `clinic-symptoms`,
              locationId: `clinic`,
              title: `描述症状`,
              level: `B1`,
              xp: 55,
              playerRole: `你喉咙痛、低烧三天了，还有点咳嗽。向医生说清楚症状、从什么时候开始、有没有吃过药，再问是不是要吃抗生素。`,
              scene: `A walk-in clinic consultation room. The learner has had a sore throat, mild fever (38.2°C) and a dry cough for three days, and has taken ibuprofen once. Dr. Patel examines the throat, asks about symptoms, and concludes it is most likely a viral infection: rest, fluids, no antibiotics needed, come back if the fever goes above 39°C or lasts more than five days.`,
              objectives: [
                {
                  zh: `说明主要症状`,
                  en: `Learner describes their main symptoms`,
                },
                {
                  zh: `说明症状从什么时候开始`,
                  en: `Learner says when the symptoms started`,
                },
                {
                  zh: `说明吃过什么药`,
                  en: `Learner says what medicine, if any, they have taken`,
                },
                {
                  zh: `问要不要吃抗生素或怎么治`,
                  en: `Learner asks whether they need antibiotics or how to treat it`,
                },
              ],
              opening: `Hi, I'm Dr. Patel. Have a seat. So what brings you in today?`,
              phrases: [
                {
                  en: `I have a sore throat and a slight fever.`,
                  zh: `我喉咙痛，有点低烧`,
                },
                { en: `It started three days ago.`, zh: `三天前开始的` },
                { en: `I've had a dry cough too.`, zh: `还有干咳` },
                {
                  en: `I took some ibuprofen yesterday.`,
                  zh: `我昨天吃了点布洛芬`,
                },
                { en: `Do I need antibiotics?`, zh: `我需要吃抗生素吗？` },
                {
                  en: `How long will it take to get better?`,
                  zh: `多久能好？`,
                },
                { en: `Is it contagious?`, zh: `会传染吗？` },
              ],
              grammar: {
                title: `说症状：I have … / It started … ago / I've had …`,
                explain: [
                  `症状用 I have a + 名词：a headache, a cough, a fever`,
                  `什么时候开始用 ago：three days ago`,
                  `从开始持续到现在用 I've had … for / since`,
                ],
                examples: [
                  {
                    en: `I've had a headache since Monday.`,
                    zh: `我从周一开始头疼`,
                  },
                  {
                    en: `The pain started two days ago and got worse.`,
                    zh: `两天前开始疼，后来更严重了`,
                  },
                  {
                    en: `I've been feeling dizzy in the mornings.`,
                    zh: `我早上一直头晕`,
                  },
                ],
              },
              shadow: [
                { en: `So what brings you in today?`, zh: `今天哪里不舒服？` },
                {
                  en: `I have a sore throat and a slight fever.`,
                  zh: `我喉咙痛，有点低烧`,
                },
                { en: `When did it start?`, zh: `什么时候开始的？` },
                {
                  en: `Three days ago. I've had a dry cough too.`,
                  zh: `三天前。还有干咳`,
                },
                { en: `Have you taken anything for it?`, zh: `吃过什么药吗？` },
                {
                  en: `Just some ibuprofen yesterday. Do I need antibiotics?`,
                  zh: `昨天吃了点布洛芬。需要吃抗生素吗？`,
                },
              ],
              twist: `Ask whether the learner has any allergies to medication before suggesting anything.`,
            },
            {
              id: `clinic-medicine`,
              locationId: `clinic`,
              title: `问清怎么吃药`,
              level: `B1`,
              xp: 55,
              playerRole: `医生开了止咳药和退烧药。问清楚怎么吃、一天几次、饭前饭后、有什么副作用，能不能和咖啡一起，还要一张病假条。`,
              scene: `End of the consultation. Dr. Patel prescribes a cough syrup (10 ml, three times a day after meals, may cause drowsiness, avoid alcohol) and acetaminophen for fever (500 mg every six hours as needed, max 4 doses a day). Coffee is fine in moderation. She can write a sick note for two days.`,
              objectives: [
                {
                  zh: `问每种药怎么吃、一天几次`,
                  en: `Learner asks how to take each medicine and how often`,
                },
                {
                  zh: `问饭前还是饭后`,
                  en: `Learner asks whether to take it before or after meals`,
                },
                {
                  zh: `问有什么副作用或注意事项`,
                  en: `Learner asks about side effects or things to avoid`,
                },
                { zh: `要一张病假条`, en: `Learner asks for a sick note` },
              ],
              opening: `Okay, I'm going to give you a cough syrup and something for the fever. Any questions before you go?`,
              phrases: [
                { en: `How often should I take this?`, zh: `这个多久吃一次？` },
                {
                  en: `Should I take it before or after meals?`,
                  zh: `饭前还是饭后吃？`,
                },
                { en: `Are there any side effects?`, zh: `有什么副作用吗？` },
                { en: `Can I drink coffee with it?`, zh: `能和咖啡一起吗？` },
                {
                  en: `Could you write me a sick note?`,
                  zh: `能给我开张病假条吗？`,
                },
                { en: `How many days should I rest?`, zh: `我该休息几天？` },
                {
                  en: `What if the fever comes back?`,
                  zh: `如果又发烧了怎么办？`,
                },
              ],
              grammar: {
                title: `问做法：How often / Should I … / Can I …`,
                explain: [
                  `问频率用 How often …? 回答 three times a day、every six hours`,
                  `问该不该用 Should I …?，问能不能用 Can I …?`,
                  `假设情况用 What if …?`,
                ],
                examples: [
                  {
                    en: `How often should I change the bandage?`,
                    zh: `纱布多久换一次？`,
                  },
                  {
                    en: `Should I stop taking it when I feel better?`,
                    zh: `好转了就停药吗？`,
                  },
                  { en: `What if I miss a dose?`, zh: `要是漏吃一次怎么办？` },
                ],
              },
              shadow: [
                {
                  en: `How often should I take the cough syrup?`,
                  zh: `止咳糖浆多久吃一次？`,
                },
                {
                  en: `Ten milliliters, three times a day, after meals.`,
                  zh: `十毫升，一天三次，饭后`,
                },
                {
                  en: `Are there any side effects I should know about?`,
                  zh: `有什么副作用需要注意吗？`,
                },
                {
                  en: `It may make you drowsy, so no driving and no alcohol.`,
                  zh: `可能犯困，别开车，别喝酒`,
                },
                {
                  en: `Could you write me a sick note for work?`,
                  zh: `能给我开张病假条吗？`,
                },
                {
                  en: `Sure, I'll give you two days. Come back if it gets worse.`,
                  zh: `可以，给你两天。加重了再来`,
                },
              ],
            },
          ],
          writing: [
            {
              id: `clinic-reschedule`,
              locationId: `clinic`,
              title: `改约复诊的邮件`,
              level: `A2`,
              type: `email`,
              prompt: `你下周二上午十点约了复诊，但那天要出差。给诊所前台写邮件改约到下周四或周五，并问改约要不要收费。`,
              mustInclude: [
                `原来的预约时间和医生`,
                `为什么要改`,
                `希望改到什么时候`,
                `问改约是否收费`,
              ],
              words: [60, 100],
              tips: [
                {
                  en: `I have an appointment with Dr. Patel on…`,
                  zh: `我和 Patel 医生约在……`,
                },
                {
                  en: `Unfortunately, I will be out of town that day.`,
                  zh: `很遗憾那天我出差`,
                },
                {
                  en: `Would it be possible to move it to…?`,
                  zh: `能改到……吗？`,
                },
                {
                  en: `Is there a fee for rescheduling?`,
                  zh: `改约要收费吗？`,
                },
                { en: `Thank you for your help.`, zh: `谢谢帮忙` },
              ],
              sample: `Subject: Rescheduling my appointment on Tuesday

Hello,

I have a follow-up appointment with Dr. Patel next Tuesday, 14 October, at 10 a.m. Unfortunately, I will be out of town for work that day. Would it be possible to move it to Thursday or Friday the same week, any time in the morning? Please also let me know if there is a fee for rescheduling at this notice.

Thank you for your help.

Best regards,
[Your name]
Phone: [your number]`,
            },
          ],
        },
        {
          id: `apartment`,
          districtId: `life`,
          name: `租房`,
          nameEn: `Apartment`,
          emoji: `🏠`,
          blurb: `看房、砍价、报修、退押金，和房东打交道不吃亏`,
          npc: {
            id: `walsh`,
            name: `Mr. Walsh`,
            role: `房东`,
            roleEn: `landlord`,
            emoji: `👨‍🦳`,
            voice: `male`,
            persona: `Mr. Walsh is a 60-year-old landlord who owns a few apartments in the neighborhood. He is friendly but business-minded, speaks plain American English with a bit of dry humor, likes tenants who are direct and polite, and will negotiate a little if you give him a good reason.`,
          },
          freeChatTopics: [
            `问他这个街区住着怎么样`,
            `聊聊垃圾分类和回收日`,
            `问附近超市和地铁在哪`,
            `问他当房东多少年了`,
          ],
          missions: [
            {
              id: `apartment-viewing`,
              locationId: `apartment`,
              title: `看房和问租金`,
              level: `B1`,
              xp: 55,
              playerRole: `你在看一套一居室。问清租金包不包水电网、押金多少、租期多长、能不能养猫，再试着把租金往下谈一点。`,
              scene: `A one-bedroom apartment viewing. Rent is $1,650 a month, water included, electricity and internet not included. Deposit is one month. Minimum lease is 12 months. Pets: one cat is okay with a $300 pet deposit. Mr. Walsh might drop the rent to $1,600 for a tenant who signs 18 months or pays on the first of each month.`,
              objectives: [
                {
                  zh: `问租金包含什么`,
                  en: `Learner asks what the rent includes`,
                },
                {
                  zh: `问押金和租期`,
                  en: `Learner asks about the deposit and the lease length`,
                },
                {
                  zh: `问能不能养猫`,
                  en: `Learner asks whether a cat is allowed`,
                },
                {
                  zh: `尝试谈低租金`,
                  en: `Learner tries to negotiate a lower rent`,
                },
              ],
              opening: `Come on in, mind the step. So this is the one-bedroom. Nice light in the afternoon. What do you think?`,
              phrases: [
                { en: `How much is the rent?`, zh: `租金多少？` },
                { en: `Does that include utilities?`, zh: `包水电吗？` },
                { en: `How much is the deposit?`, zh: `押金多少？` },
                { en: `How long is the lease?`, zh: `租期多长？` },
                {
                  en: `Are pets allowed? I have a cat.`,
                  zh: `能养宠物吗？我有只猫`,
                },
                {
                  en: `Would you take 1,550 if I sign for 18 months?`,
                  zh: `我签 18 个月的话，1550 行吗？`,
                },
                { en: `I'd like to think it over.`, zh: `我想考虑一下` },
              ],
              grammar: {
                title: `谈条件：Would you … if I …?`,
                explain: [
                  `谈判句型 Would you + 动词 + if I + 一般现在时`,
                  `问允许不允许用 Are … allowed? / Is it okay to …?`,
                  `include 问包含：Does the rent include water?`,
                ],
                examples: [
                  {
                    en: `Would you lower the rent if I pay six months upfront?`,
                    zh: `我预付半年的话能降点租金吗？`,
                  },
                  { en: `Is it okay to paint the walls?`, zh: `可以刷墙吗？` },
                  {
                    en: `Does the rent include parking?`,
                    zh: `租金包车位吗？`,
                  },
                ],
              },
              shadow: [
                {
                  en: `How much is the rent, and does it include utilities?`,
                  zh: `租金多少，包水电吗？`,
                },
                {
                  en: `Sixteen fifty a month. Water is included, electricity is not.`,
                  zh: `每月 1650。包水，不包电`,
                },
                {
                  en: `How much is the deposit, and how long is the lease?`,
                  zh: `押金多少，租期多长？`,
                },
                {
                  en: `One month deposit, twelve-month lease minimum.`,
                  zh: `押一个月，最少租十二个月`,
                },
                {
                  en: `Are pets allowed? I have a cat.`,
                  zh: `能养宠物吗？我有只猫`,
                },
                {
                  en: `Would you take sixteen hundred if I sign for eighteen months?`,
                  zh: `我签十八个月，1600 行吗？`,
                },
              ],
              twist: `Mention that another person is coming to see the apartment tomorrow, to add some pressure, but stay friendly.`,
            },
            {
              id: `apartment-repair`,
              locationId: `apartment`,
              title: `报修漏水`,
              level: `B1`,
              xp: 55,
              playerRole: `你搬进来两个月了。厨房水龙头漏水，暖气也不太热。给房东打电话，说清楚问题、严重程度，约个时间让人来修，问费用谁出。`,
              scene: `A phone call to Mr. Walsh. The kitchen faucet has been dripping for a week and there is now a small puddle under the sink. The radiator in the bedroom only gets lukewarm. Mr. Walsh will send his plumber, Dave, and needs to know when the learner is home; repairs for normal wear are the landlord's cost.`,
              objectives: [
                {
                  zh: `说明水龙头漏水和严重程度`,
                  en: `Learner describes the leaking faucet and how bad it is`,
                },
                {
                  zh: `说明暖气不热`,
                  en: `Learner mentions the heating problem`,
                },
                {
                  zh: `约一个维修时间`,
                  en: `Learner arranges a time for the repair`,
                },
                {
                  zh: `确认维修费用谁出`,
                  en: `Learner confirms who pays for the repair`,
                },
              ],
              opening: `Walsh speaking. Oh hi, it's you from 3B. Everything okay over there?`,
              phrases: [
                {
                  en: `The kitchen faucet has been leaking for a week.`,
                  zh: `厨房水龙头漏了一周了`,
                },
                {
                  en: `There's water pooling under the sink.`,
                  zh: `水槽下面积水了`,
                },
                {
                  en: `The radiator in the bedroom barely gets warm.`,
                  zh: `卧室暖气几乎不热`,
                },
                {
                  en: `When could someone come and take a look?`,
                  zh: `什么时候能来人看看？`,
                },
                {
                  en: `I'm home after six on weekdays.`,
                  zh: `我工作日六点以后在家`,
                },
                {
                  en: `Will I be charged for the repair?`,
                  zh: `维修费要我出吗？`,
                },
                { en: `Thanks, I appreciate it.`, zh: `谢谢，感激不尽` },
              ],
              grammar: {
                title: `持续的问题：has been + doing + for / since`,
                explain: [
                  `从过去一直到现在还在发生，用 has been + 动词 ing`,
                  `持续多久用 for a week，从何时起用 since Monday`,
                  `约时间用 When could someone …? 或 Would … work?`,
                ],
                examples: [
                  {
                    en: `The faucet has been dripping since last Tuesday.`,
                    zh: `水龙头从上周二开始滴水`,
                  },
                  {
                    en: `The heating has been acting up for a few days.`,
                    zh: `暖气这几天一直不正常`,
                  },
                  {
                    en: `Would Thursday evening work for the plumber?`,
                    zh: `周四晚上水管工方便吗？`,
                  },
                ],
              },
              shadow: [
                {
                  en: `The kitchen faucet has been leaking for about a week.`,
                  zh: `厨房水龙头漏了大概一周了`,
                },
                {
                  en: `Now there's water pooling under the sink.`,
                  zh: `现在水槽下面积水了`,
                },
                {
                  en: `Also, the radiator in the bedroom barely gets warm.`,
                  zh: `还有，卧室暖气几乎不热`,
                },
                {
                  en: `I'll send Dave over. When are you home?`,
                  zh: `我让 Dave 过去。你什么时候在家？`,
                },
                {
                  en: `I'm home after six on weekdays. Would Thursday work?`,
                  zh: `我工作日六点后在家。周四行吗？`,
                },
                {
                  en: `Thursday it is. And no, you won't be charged for this.`,
                  zh: `那就周四。这个不用你出钱`,
                },
              ],
            },
          ],
          writing: [
            {
              id: `apartment-notice`,
              locationId: `apartment`,
              title: `退租通知`,
              level: `B2`,
              type: `email`,
              prompt: `你要搬走了。按合同要提前 30 天通知。给房东写一封正式的退租邮件，约时间验房，并说明押金怎么退。`,
              mustInclude: [
                `地址或房号，以及搬离日期`,
                `引用合同要求的提前通知期`,
                `提出验房时间`,
                `押金退回的方式和账户信息如何提供`,
              ],
              words: [100, 150],
              tips: [
                {
                  en: `I am writing to give notice that I will be moving out on…`,
                  zh: `我写信通知我将于……搬离`,
                },
                {
                  en: `As required by the lease, this is 30 days' notice.`,
                  zh: `按合同要求，这是提前 30 天的通知`,
                },
                {
                  en: `I would like to arrange a move-out inspection.`,
                  zh: `我想约个时间验房`,
                },
                {
                  en: `Please let me know how the deposit will be returned.`,
                  zh: `请告知押金如何退回`,
                },
                {
                  en: `I will leave the apartment clean and in good condition.`,
                  zh: `我会把房子打扫干净，保持完好`,
                },
              ],
              sample: `Subject: Notice to vacate – Apartment 3B, 42 Maple Street

Dear Mr. Walsh,

I am writing to give notice that I will be moving out of Apartment 3B at 42 Maple Street on 30 November. As required by section 6 of the lease, this email serves as 30 days' written notice.

I would like to arrange a move-out inspection during the last week of November, ideally on the evening of 28 November, so we can walk through the apartment together. I will leave the apartment clean and in the same condition as when I moved in, apart from normal wear.

Please let me know how the deposit will be returned and whether you need my bank details in advance. I will send a forwarding address before I leave.

Thank you for being a responsive landlord over the past year.

Kind regards,
[Your name]`,
            },
          ],
        },
        {
          id: `shop`,
          districtId: `life`,
          name: `商店`,
          nameEn: `Clothing Store`,
          emoji: `🛍️`,
          blurb: `问尺码、试衣服、退换货，逛街不只会说 how much`,
          npc: {
            id: `jess`,
            name: `Jess`,
            role: `店员`,
            roleEn: `sales associate`,
            emoji: `🧑‍💼`,
            voice: `female`,
            persona: `Jess is an energetic sales associate at a mid-range clothing store. She speaks fast, upbeat American English with retail phrases like "Let me grab that for you" and "That looks great on you", and gently upsells but backs off when the customer says no.`,
          },
          freeChatTopics: [
            `问她这季流行什么颜色`,
            `聊聊你平时怎么买衣服`,
            `问美国尺码和亚洲尺码怎么换算`,
            `问什么时候打折`,
          ],
          missions: [
            {
              id: `shop-size`,
              locationId: `shop`,
              title: `找尺码和试穿`,
              level: `A2`,
              xp: 40,
              playerRole: `你看中一件夹克，想要中码的深蓝色。问有没有货、试衣间在哪、能不能打折，试完觉得有点大，要换小一号。`,
              scene: `A clothing store. The learner likes a navy jacket. Medium is on the rack, small is in the back. Fitting rooms are at the back on the left. The jacket is 20% off this week. Jess helps find sizes and gives honest fit feedback.`,
              objectives: [
                {
                  zh: `说明想要的尺码和颜色`,
                  en: `Learner asks for a specific size and color`,
                },
                {
                  zh: `问试衣间在哪`,
                  en: `Learner asks where the fitting rooms are`,
                },
                {
                  zh: `说试穿后有点大，要换小一号`,
                  en: `Learner says it is a bit big and asks for a smaller size`,
                },
                {
                  zh: `问有没有折扣`,
                  en: `Learner asks about a discount or sale`,
                },
              ],
              opening: `Hi there! Let me know if you need any help finding a size. That jacket's really popular this season.`,
              phrases: [
                { en: `Do you have this in a medium?`, zh: `这个有中码吗？` },
                { en: `Do you have it in navy?`, zh: `有深蓝色的吗？` },
                { en: `Where are the fitting rooms?`, zh: `试衣间在哪？` },
                { en: `It's a bit big on me.`, zh: `我穿有点大` },
                { en: `Could I try a small?`, zh: `能试试小码吗？` },
                { en: `Is this on sale?`, zh: `这个打折吗？` },
                { en: `I'll take it.`, zh: `我要了` },
              ],
              grammar: {
                title: `买衣服：in a medium / in navy / a bit big`,
                explain: [
                  `尺码和颜色都用 in：in a large、in black`,
                  `太大太小说 a bit big / too small on me`,
                  `对比大小用 a size up / a size down`,
                ],
                examples: [
                  {
                    en: `Do you have these jeans in a 32?`,
                    zh: `这条牛仔裤有 32 码吗？`,
                  },
                  {
                    en: `These are a bit tight, could I try a size up?`,
                    zh: `这条有点紧，能试大一号吗？`,
                  },
                  {
                    en: `Do you have it in any other colors?`,
                    zh: `有别的颜色吗？`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Do you have this jacket in a medium, in navy?`,
                  zh: `这件夹克有深蓝色的中码吗？`,
                },
                {
                  en: `Let me grab that for you. Fitting rooms are at the back.`,
                  zh: `我去拿。试衣间在后面`,
                },
                {
                  en: `It's a bit big on me. Could I try a small?`,
                  zh: `我穿有点大。能试小码吗？`,
                },
                {
                  en: `Sure, I have one in the back. One second.`,
                  zh: `可以，后面有一件。稍等`,
                },
                {
                  en: `Is it on sale, by the way?`,
                  zh: `顺便问下，这个打折吗？`,
                },
                {
                  en: `Twenty percent off this week. That looks great on you.`,
                  zh: `这周八折。你穿很好看`,
                },
              ],
            },
            {
              id: `shop-return`,
              locationId: `shop`,
              title: `退货和退款`,
              level: `B1`,
              xp: 55,
              playerRole: `上周买的夹克拉链坏了。带着小票去退，说明问题，要求退款到原卡，而不是换货或店内积分。`,
              scene: `The returns desk. The learner bought the navy jacket 8 days ago and the zipper broke. The return policy is 30 days with a receipt. Jess will first offer an exchange or store credit; a refund to the original card is allowed for defective items if the learner asks. Refunds take 3–5 business days.`,
              objectives: [
                {
                  zh: `说明买了什么、什么时候买的`,
                  en: `Learner says what they bought and when`,
                },
                {
                  zh: `说明哪里坏了`,
                  en: `Learner explains what is wrong with the item`,
                },
                { zh: `出示小票`, en: `Learner mentions or shows the receipt` },
                {
                  zh: `坚持要退款到原卡而不是换货`,
                  en: `Learner insists on a refund to the original card rather than an exchange`,
                },
              ],
              opening: `Hi, welcome back! What can I do for you today?`,
              phrases: [
                { en: `I'd like to return this jacket.`, zh: `我想退这件夹克` },
                { en: `I bought it last week.`, zh: `我上周买的` },
                {
                  en: `The zipper broke after two days.`,
                  zh: `拉链两天就坏了`,
                },
                { en: `I have the receipt here.`, zh: `小票在这儿` },
                { en: `I'd rather have a refund, please.`, zh: `我更想退款` },
                {
                  en: `Could you refund it to my card?`,
                  zh: `能退到我的卡上吗？`,
                },
                { en: `How long will the refund take?`, zh: `退款要多久？` },
              ],
              grammar: {
                title: `说偏好：I'd rather … / I'd prefer …`,
                explain: [
                  `拒绝对方的方案又不失礼：I'd rather have a refund`,
                  `I'd prefer + 名词或 to + 动词`,
                  `被动问过程：How long will it take? / When will it be refunded?`,
                ],
                examples: [
                  {
                    en: `Thanks, but I'd rather get my money back.`,
                    zh: `谢谢，但我更想拿回钱`,
                  },
                  {
                    en: `I'd prefer a refund to store credit.`,
                    zh: `比起店内积分，我更想退款`,
                  },
                  {
                    en: `When will the money be back on my card?`,
                    zh: `钱什么时候退回卡上？`,
                  },
                ],
              },
              shadow: [
                {
                  en: `I'd like to return this jacket. I bought it last week.`,
                  zh: `我想退这件夹克。上周买的`,
                },
                {
                  en: `The zipper broke after just two days.`,
                  zh: `拉链才两天就坏了`,
                },
                {
                  en: `Oh no. I can do an exchange or store credit for you.`,
                  zh: `哎呀。我可以给你换货或店内积分`,
                },
                {
                  en: `Thanks, but I'd rather have a refund to my card.`,
                  zh: `谢谢，但我更想退回卡上`,
                },
                {
                  en: `No problem, since it's defective. Do you have the receipt?`,
                  zh: `没问题，这是质量问题。有小票吗？`,
                },
                {
                  en: `Here it is. How long will the refund take?`,
                  zh: `在这儿。退款要多久？`,
                },
              ],
              twist: `Before agreeing to the refund, ask whether the learner would like to swap it for the same jacket in another color at an extra 10% off.`,
            },
          ],
          writing: [
            {
              id: `shop-complaint`,
              locationId: `shop`,
              title: `网购投诉邮件`,
              level: `B1`,
              type: `email`,
              prompt: `你在这家店的网站买了双鞋，到手发现尺码发错了，而且客服电话打不通。写邮件给客服，要求换货并承担退运费。`,
              mustInclude: [
                `订单号和购买日期`,
                `具体哪里不对`,
                `已经做过什么尝试`,
                `明确要求：换货并由对方出运费，给出期限`,
              ],
              words: [80, 130],
              tips: [
                {
                  en: `I am writing about order #…, placed on…`,
                  zh: `我想反映……日下的订单……`,
                },
                {
                  en: `I received a size 9 instead of the size 8 I ordered.`,
                  zh: `我订的 8 码，收到的却是 9 码`,
                },
                {
                  en: `I tried calling customer service twice but could not get through.`,
                  zh: `我打了两次客服电话都没打通`,
                },
                {
                  en: `I would like an exchange, with return shipping covered by you.`,
                  zh: `我希望换货，退运费由你们承担`,
                },
                {
                  en: `I look forward to your reply within three business days.`,
                  zh: `希望三个工作日内回复`,
                },
              ],
              sample: `Subject: Wrong size received – Order #58213

Hello,

I am writing about order #58213, placed on 1 October. I ordered the Trailrunner shoes in size 8, but the package I received on 5 October contains a size 9. The label on the box also says size 9, so the mistake happened before shipping.

I tried calling customer service twice yesterday but could not get through, so I am contacting you by email instead.

I would like to exchange the shoes for the correct size, with return shipping covered by you since the error was not mine. Please send me a prepaid return label and confirm when the replacement will ship.

I look forward to your reply within three business days.

Best regards,
[Your name]`,
            },
          ],
        },
        {
          id: `street`,
          districtId: `life`,
          name: `街头`,
          nameEn: `Street`,
          emoji: `🚏`,
          blurb: `问路、搭讪邻居、打车，走在路上开口就来`,
          npc: {
            id: `ben`,
            name: `Ben`,
            role: `邻居`,
            roleEn: `friendly neighbor`,
            emoji: `🧔`,
            voice: `male`,
            persona: `Ben is a friendly neighbor in his thirties who walks his dog around the block every evening. He knows the area well, speaks relaxed, casual American English with filler words like "yeah" and "you know", and loves giving directions and local tips.`,
          },
          freeChatTopics: [
            `问他狗叫什么名字`,
            `聊聊这个街区周末有什么活动`,
            `问哪家超市便宜`,
            `问他怎么看这座城市的天气`,
          ],
          missions: [
            {
              id: `street-directions`,
              locationId: `street`,
              title: `问路`,
              level: `A2`,
              xp: 40,
              playerRole: `你要去中央图书馆，手机没电了。拦住路人问路，确认要走多久、要不要坐车，最后复述一遍路线。`,
              scene: `A street corner at 5 p.m. The Central Library is about a 15-minute walk: go straight two blocks, turn left at the bank, and it is on the right, next to the park. Bus 12 also goes there in 5 minutes from the stop across the street. Ben is walking his dog, Max.`,
              objectives: [
                {
                  zh: `礼貌地开口问路`,
                  en: `Learner politely asks how to get to the Central Library`,
                },
                {
                  zh: `问走路要多久`,
                  en: `Learner asks how long it takes on foot`,
                },
                {
                  zh: `问有没有公交可以到`,
                  en: `Learner asks whether there is a bus`,
                },
                {
                  zh: `复述一遍路线确认`,
                  en: `Learner repeats the directions back to confirm`,
                },
              ],
              opening: `Hey, you look a little lost. Need a hand? Oh, don't mind Max, he's friendly.`,
              phrases: [
                {
                  en: `Excuse me, how do I get to the Central Library?`,
                  zh: `打扰一下，中央图书馆怎么走？`,
                },
                { en: `Is it far from here?`, zh: `离这儿远吗？` },
                { en: `How long does it take on foot?`, zh: `走路要多久？` },
                {
                  en: `Is there a bus that goes there?`,
                  zh: `有公交到那儿吗？`,
                },
                {
                  en: `So I go straight and turn left at the bank?`,
                  zh: `所以我直走，到银行左转？`,
                },
                { en: `Got it, thanks a lot!`, zh: `明白了，多谢！` },
                {
                  en: `Which side of the street is it on?`,
                  zh: `在街的哪一边？`,
                },
              ],
              grammar: {
                title: `问路和指路：祈使句 + 方位词`,
                explain: [
                  `指路用祈使句：Go straight, turn left, cross the street`,
                  `位置用 on the right、next to、across from、at the corner`,
                  `确认用 So I … ? 把对方的话换成自己的话重复一遍`,
                ],
                examples: [
                  {
                    en: `Go straight for two blocks, then turn left at the bank.`,
                    zh: `直走两个街区，在银行左转`,
                  },
                  {
                    en: `It's on your right, next to the park.`,
                    zh: `在你右手边，公园旁边`,
                  },
                  {
                    en: `So I cross the street and take the number 12?`,
                    zh: `所以我过马路坐 12 路？`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Excuse me, how do I get to the Central Library?`,
                  zh: `打扰一下，中央图书馆怎么走？`,
                },
                {
                  en: `Go straight two blocks, then turn left at the bank.`,
                  zh: `直走两个街区，到银行左转`,
                },
                {
                  en: `It's on your right, right next to the park.`,
                  zh: `在右手边，就在公园旁边`,
                },
                { en: `How long does it take on foot?`, zh: `走路要多久？` },
                {
                  en: `About fifteen minutes. Or the number 12 bus gets you there in five.`,
                  zh: `大概十五分钟。或者坐 12 路五分钟`,
                },
                {
                  en: `So I go straight, turn left at the bank, and it's on the right?`,
                  zh: `所以直走，银行左转，在右边？`,
                },
              ],
            },
            {
              id: `street-neighbor`,
              locationId: `street`,
              title: `和邻居搭话`,
              level: `B1`,
              xp: 50,
              playerRole: `你上周刚搬进这条街。遇到遛狗的邻居 Ben，自我介绍，聊聊街区，问问回收日和停车规则，顺便约着下次一起喝咖啡。`,
              scene: `Evening on Maple Street. The learner moved into 3B last week. Ben lives at number 40 with his dog Max. Recycling is picked up Tuesdays, trash on Fridays; street parking needs a resident permit from the city website, otherwise $45 tickets. There is a block party on the last Saturday of the month.`,
              objectives: [
                {
                  zh: `自我介绍并说刚搬来`,
                  en: `Learner introduces themselves and says they just moved in`,
                },
                {
                  zh: `问垃圾和回收哪天收`,
                  en: `Learner asks about trash or recycling day`,
                },
                {
                  zh: `问停车规则`,
                  en: `Learner asks about street parking rules`,
                },
                {
                  zh: `提议下次一起喝咖啡或参加活动`,
                  en: `Learner suggests meeting up again, for coffee or the block party`,
                },
              ],
              opening: `Oh hey, are you the new neighbor in 3B? I'm Ben, I'm at number 40. Welcome to the street!`,
              phrases: [
                {
                  en: `Hi, I'm Wei. I just moved in last week.`,
                  zh: `你好，我是伟，上周刚搬来`,
                },
                {
                  en: `Nice to meet you, and hi Max!`,
                  zh: `很高兴认识你，Max 你好！`,
                },
                {
                  en: `Which day is recycling picked up?`,
                  zh: `回收哪天来收？`,
                },
                {
                  en: `Do I need a permit to park on the street?`,
                  zh: `路边停车需要许可证吗？`,
                },
                {
                  en: `Good to know, thanks for the heads-up.`,
                  zh: `好的，谢谢提醒`,
                },
                {
                  en: `We should grab a coffee sometime.`,
                  zh: `找时间一起喝杯咖啡吧`,
                },
                {
                  en: `I'd love to come to the block party.`,
                  zh: `我很想参加街区聚会`,
                },
              ],
              grammar: {
                title: `邀约不尴尬：We should … sometime / Would you like to …?`,
                explain: [
                  `随意邀约用 We should + 动词 + sometime，不给对方压力`,
                  `正式一点用 Would you like to …?`,
                  `接受说 I'd love to，拒绝说 I'd love to, but …`,
                ],
                examples: [
                  {
                    en: `We should grab a coffee sometime.`,
                    zh: `找时间一起喝杯咖啡吧`,
                  },
                  {
                    en: `Would you like to join us for the block party?`,
                    zh: `要不要来参加街区聚会？`,
                  },
                  {
                    en: `I'd love to, but I'm traveling that weekend.`,
                    zh: `我很想去，但那周末要出差`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Hi, I'm Wei. I just moved into 3B last week.`,
                  zh: `你好，我是伟。上周刚搬进 3B`,
                },
                {
                  en: `Welcome! Let me know if you need anything, you know, tips and stuff.`,
                  zh: `欢迎！需要什么随时说，比如生活小贴士`,
                },
                {
                  en: `Actually, which day is recycling picked up?`,
                  zh: `对了，回收哪天来收？`,
                },
                {
                  en: `Tuesdays. And you'll want a parking permit, or it's a forty-five dollar ticket.`,
                  zh: `周二。你最好办个停车证，不然罚 45 刀`,
                },
                {
                  en: `Good to know, thanks for the heads-up.`,
                  zh: `好的，谢谢提醒`,
                },
                {
                  en: `We should grab a coffee sometime. You free this weekend?`,
                  zh: `找时间喝杯咖啡吧。这周末有空吗？`,
                },
              ],
              twist: `Mention the block party on the last Saturday of the month and ask if the learner can bring a dish from their country.`,
            },
          ],
          writing: [
            {
              id: `street-note`,
              locationId: `street`,
              title: `给邻居的留言条`,
              level: `A2`,
              type: `note`,
              prompt: `周六晚你要在家办一个小聚会，可能到十一点有点吵。给楼上和楼下的邻居各留一张条子，提前打招呼，并留下你的电话。`,
              mustInclude: [
                `自我介绍（几号房）`,
                `聚会的日期、时间和可能的噪音`,
                `表示歉意并承诺几点结束`,
                `留电话，欢迎有问题联系或直接来`,
              ],
              words: [50, 90],
              tips: [
                {
                  en: `Hi, I'm your neighbor in 3B.`,
                  zh: `你好，我是 3B 的邻居`,
                },
                {
                  en: `I'm having a few friends over on Saturday evening.`,
                  zh: `周六晚上我请几个朋友来家里`,
                },
                {
                  en: `It might get a little noisy until about 11.`,
                  zh: `可能到十一点左右会有点吵`,
                },
                {
                  en: `Sorry in advance, and feel free to knock if it gets too loud.`,
                  zh: `先说声抱歉，太吵了随时敲门`,
                },
                { en: `You're welcome to drop by!`, zh: `欢迎过来坐坐！` },
              ],
              sample: `Hi neighbors,

I'm Wei, the new tenant in 3B. I'm having a few friends over this Saturday, 18 October, from about 7 p.m. It might get a little noisy with music and chatting, but we'll wrap up by 11 at the latest.

Sorry in advance for any noise. If it gets too loud, please feel free to knock or text me at [your number] and I'll turn it down right away.

And of course, you're welcome to drop by for a drink!

Thanks,
Wei`,
            },
          ],
        },
        {
          id: `bank`,
          districtId: `life`,
          name: `银行`,
          nameEn: `Bank`,
          emoji: `🏦`,
          blurb: `开户、挂失、查扣款，和钱有关的话说得清楚`,
          npc: {
            id: `olivia`,
            name: `Olivia`,
            role: `银行柜员`,
            roleEn: `bank teller`,
            emoji: `👩‍💻`,
            voice: `female`,
            persona: `Olivia is a precise, friendly bank teller at First Harbor Bank. She speaks clear, formal-but-warm American English, confirms details by repeating them back, explains fees and timelines carefully, and asks for ID before doing anything with an account.`,
          },
          freeChatTopics: [
            `问她美国人都用什么支付`,
            `聊聊你怎么记账`,
            `问信用分是怎么回事`,
            `问她银行几点关门`,
          ],
          missions: [
            {
              id: `bank-account`,
              locationId: `bank`,
              title: `开一个账户`,
              level: `B1`,
              xp: 55,
              playerRole: `你要在美国待一年，需要开一个银行账户收工资。问清楚需要什么证件、有没有月费、借记卡几天到、怎么开手机银行。`,
              scene: `A desk at First Harbor Bank. To open a checking account the learner needs a passport, a visa or work permit, proof of address (a lease works) and a $25 opening deposit. The monthly fee is $8, waived with a $500 monthly direct deposit. The debit card arrives by mail in 7–10 days; mobile banking is set up with a phone number today.`,
              objectives: [
                {
                  zh: `说明要开什么账户、用来做什么`,
                  en: `Learner says what kind of account they want and why`,
                },
                {
                  zh: `问需要哪些证件`,
                  en: `Learner asks what documents are required`,
                },
                {
                  zh: `问月费以及怎么免`,
                  en: `Learner asks about the monthly fee and how to avoid it`,
                },
                {
                  zh: `问借记卡和手机银行`,
                  en: `Learner asks about the debit card and mobile banking`,
                },
              ],
              opening: `Hi, welcome to First Harbor. I'm Olivia. How can I help you today?`,
              phrases: [
                {
                  en: `I'd like to open a checking account.`,
                  zh: `我想开一个支票账户`,
                },
                {
                  en: `I'll be here for a year on a work visa.`,
                  zh: `我持工作签证待一年`,
                },
                { en: `What documents do I need?`, zh: `需要什么证件？` },
                { en: `Is there a monthly fee?`, zh: `有月费吗？` },
                { en: `How can I get the fee waived?`, zh: `怎么能免月费？` },
                {
                  en: `When will I get the debit card?`,
                  zh: `借记卡什么时候能拿到？`,
                },
                {
                  en: `Can I set up mobile banking today?`,
                  zh: `今天能开通手机银行吗？`,
                },
              ],
              grammar: {
                title: `办手续：What do I need … / Is there … / How can I …`,
                explain: [
                  `问要带什么用 What do I need to …?`,
                  `问有没有某项费用用 Is there a …? 回答 There is / There isn't`,
                  `想免掉用 get … waived：get the fee waived`,
                ],
                examples: [
                  {
                    en: `What do I need to bring to open an account?`,
                    zh: `开户需要带什么？`,
                  },
                  {
                    en: `Is there a fee for international transfers?`,
                    zh: `国际转账有手续费吗？`,
                  },
                  {
                    en: `Can I get the annual fee waived in the first year?`,
                    zh: `第一年能免年费吗？`,
                  },
                ],
              },
              shadow: [
                {
                  en: `I'd like to open a checking account. I'll be here for a year.`,
                  zh: `我想开个支票账户。我会待一年`,
                },
                {
                  en: `Sure. What documents do I need?`,
                  zh: `好的。需要什么证件？`,
                },
                {
                  en: `A passport, your visa, and proof of address, like a lease.`,
                  zh: `护照、签证，还有地址证明，比如租约`,
                },
                {
                  en: `Is there a monthly fee, and how can I get it waived?`,
                  zh: `有月费吗，怎么免？`,
                },
                {
                  en: `It's eight dollars, waived with a five-hundred-dollar direct deposit.`,
                  zh: `八美元，每月直接入账五百就免`,
                },
                {
                  en: `When will I get the debit card?`,
                  zh: `借记卡什么时候到？`,
                },
              ],
            },
            {
              id: `bank-dispute`,
              locationId: `bank`,
              title: `卡里多扣了钱`,
              level: `B2`,
              xp: 65,
              playerRole: `账单上有一笔 $89 你不认识的扣款，商家名叫 ZXQ Digital。打电话到银行：说明情况、申请争议、问是否要换卡，以及钱多久退回。`,
              scene: `A phone call to First Harbor Bank. There is a $89.00 charge from "ZXQ DIGITAL" dated 3 October that the learner did not make. Olivia verifies identity (name, date of birth, last four digits of the card), files a dispute, recommends canceling the card and issuing a new one (5–7 days), and explains the provisional credit usually appears within 10 business days.`,
              objectives: [
                {
                  zh: `说明有一笔不认识的扣款，金额和日期`,
                  en: `Learner reports an unrecognized charge with the amount and date`,
                },
                {
                  zh: `确认自己没有在这家商户消费过`,
                  en: `Learner confirms they have never used this merchant`,
                },
                {
                  zh: `申请争议并询问是否要换卡`,
                  en: `Learner asks to dispute the charge and whether the card should be replaced`,
                },
                {
                  zh: `问钱多久能退回`,
                  en: `Learner asks how long the refund will take`,
                },
              ],
              opening: `Thank you for calling First Harbor Bank, this is Olivia. Can I start with your full name and date of birth?`,
              phrases: [
                {
                  en: `There's a charge on my card I don't recognize.`,
                  zh: `我卡上有一笔不认识的扣款`,
                },
                {
                  en: `It's for $89 from ZXQ Digital, dated October 3rd.`,
                  zh: `89 美元，ZXQ Digital，10 月 3 日`,
                },
                {
                  en: `I've never bought anything from them.`,
                  zh: `我从没在他们那买过东西`,
                },
                {
                  en: `I'd like to dispute this charge.`,
                  zh: `我想对这笔扣款提出争议`,
                },
                { en: `Should I cancel the card?`, zh: `我需要注销这张卡吗？` },
                {
                  en: `How long will it take to get the money back?`,
                  zh: `钱多久能退回来？`,
                },
                {
                  en: `Could you send me a confirmation by email?`,
                  zh: `能发一封确认邮件给我吗？`,
                },
              ],
              grammar: {
                title: `否认与陈述事实：I've never … / I didn't …`,
                explain: [
                  `从来没做过用现在完成时 I've never + 过去分词`,
                  `某次没做用过去式 I didn't make this purchase`,
                  `正式请求用 I'd like to + 动词：I'd like to dispute it`,
                ],
                examples: [
                  {
                    en: `I've never shopped at that store.`,
                    zh: `我从没在那家店买过东西`,
                  },
                  {
                    en: `I didn't authorize this transaction.`,
                    zh: `这笔交易我没授权`,
                  },
                  {
                    en: `I'd like to request a new card.`,
                    zh: `我想申请一张新卡`,
                  },
                ],
              },
              shadow: [
                {
                  en: `There's a charge on my card I don't recognize.`,
                  zh: `我卡上有一笔不认识的扣款`,
                },
                {
                  en: `It's eighty-nine dollars from ZXQ Digital, dated October third.`,
                  zh: `89 美元，ZXQ Digital，10 月 3 日`,
                },
                {
                  en: `I've never bought anything from them.`,
                  zh: `我从没在他们那买过东西`,
                },
                {
                  en: `I'd like to dispute this charge. Should I cancel the card?`,
                  zh: `我想申请争议。需要注销卡吗？`,
                },
                {
                  en: `I'd recommend that. A new card takes five to seven days.`,
                  zh: `建议注销。新卡五到七天到`,
                },
                {
                  en: `And how long will it take to get the money back?`,
                  zh: `那钱多久能退回来？`,
                },
              ],
              twist: `Before filing the dispute, ask whether the learner has signed up for any free trials recently, since ZXQ Digital often bills after a trial ends.`,
            },
          ],
          writing: [
            {
              id: `bank-dispute-letter`,
              locationId: `bank`,
              title: `书面争议申请`,
              level: `B2`,
              type: `email`,
              prompt: `银行让你把争议书面确认一下。写一封邮件给争议部门：交易信息、为什么不是你消费的、已经做了什么、要求退款并换卡。`,
              mustInclude: [
                `卡尾号、交易日期、金额和商户名`,
                `明确声明未授权该交易并说明理由`,
                `已经采取的措施（电话、注销卡）`,
                `要求：退款、换卡、书面确认`,
              ],
              words: [100, 160],
              tips: [
                {
                  en: `I am writing to formally dispute a transaction on my account.`,
                  zh: `我写信正式对一笔交易提出争议`,
                },
                {
                  en: `I did not authorize this transaction and have never dealt with this merchant.`,
                  zh: `我未授权此交易，也从未与该商户有过往来`,
                },
                {
                  en: `I reported the charge by phone on … and canceled the card.`,
                  zh: `我已于……电话报告并注销了卡`,
                },
                {
                  en: `I request that the amount be credited back to my account.`,
                  zh: `我要求将该金额退回我的账户`,
                },
                {
                  en: `Please confirm receipt of this dispute in writing.`,
                  zh: `请书面确认收到此争议申请`,
                },
              ],
              sample: `Subject: Formal dispute – unauthorized charge on card ending 4471

Dear Disputes Team,

I am writing to formally dispute a transaction on my checking account, card ending 4471. On 3 October a charge of $89.00 from "ZXQ DIGITAL" was posted to my account. I did not authorize this transaction and have never purchased anything from this merchant. I have not signed up for any trials or subscriptions that could explain it, and my card has been in my possession the whole time.

I reported the charge by phone on 9 October and spoke with Olivia, who canceled the card and opened a dispute. A replacement card has been requested.

I request that the $89.00 be credited back to my account and that any related fees be reversed. Please confirm receipt of this dispute in writing and let me know if you need any further information.

Kind regards,
[Your name]
Account holder, [phone number]`,
            },
          ],
        },
      ],
    },
    {
      id: `work`,
      name: `职场区`,
      emoji: `🏢`,
      blurb: `面试、开会、汇报、请假、谈薪，外企职场一条龙`,
      locations: [
        {
          id: `interview`,
          districtId: `work`,
          name: `面试室`,
          nameEn: `Interview Room`,
          emoji: `💼`,
          blurb: `自我介绍、讲案例、谈薪资，三轮面试闯到底`,
          npc: {
            id: `rachel`,
            name: `Rachel`,
            role: `招聘经理`,
            roleEn: `hiring manager`,
            emoji: `👩‍💼`,
            voice: `female`,
            persona: `Rachel is the hiring manager for the analytics team at Brightline Analytics. She is calm and sharp, speaks measured professional American English, takes notes while you talk, and follows up on vague answers with precise questions like "What exactly did you do?"`,
          },
          freeChatTopics: [
            `问她团队最近在忙什么`,
            `聊聊你职业上的下一步`,
            `问她面试时最看重什么`,
          ],
          missions: [
            {
              id: `interview-intro`,
              locationId: `interview`,
              title: `自我介绍`,
              level: `B1`,
              xp: 50,
              playerRole: `你应聘 Brightline Analytics 的数据分析师，这是第一轮面试。先介绍自己，再讲过去的经历。`,
              scene: `A video interview for a Data Analyst position at Brightline Analytics, a 200-person company in Austin. Rachel leads the analytics team. She wants a one-minute self-introduction, the most relevant past experience, and why the learner wants this job. The role needs SQL, Excel or Python, and presenting findings to non-technical teams.`,
              objectives: [
                {
                  zh: `介绍名字、现在的工作和几年经验`,
                  en: `Learner introduces their name, current job and years of experience`,
                },
                {
                  zh: `讲一段和岗位相关的经历`,
                  en: `Learner describes a past project or experience relevant to a data analyst role`,
                },
                {
                  zh: `说明为什么想来这家公司`,
                  en: `Learner explains why they want this job or company`,
                },
                {
                  zh: `反问面试官一个问题`,
                  en: `Learner asks Rachel a question about the team or role`,
                },
              ],
              opening: `Hi, thanks for joining. I'm Rachel, I lead the analytics team here. Why don't you start by telling me a bit about yourself?`,
              phrases: [
                {
                  en: `I've been working as a data analyst for three years.`,
                  zh: `我做了三年数据分析`,
                },
                {
                  en: `In my current role, I'm responsible for…`,
                  zh: `我现在负责……`,
                },
                {
                  en: `One project I'm proud of is…`,
                  zh: `我比较自豪的一个项目是……`,
                },
                {
                  en: `I'm looking for a role where I can…`,
                  zh: `我想找一个能让我……的岗位`,
                },
                {
                  en: `What drew me to Brightline is…`,
                  zh: `吸引我来 Brightline 的是……`,
                },
                {
                  en: `Could you tell me more about the team?`,
                  zh: `能介绍一下团队吗？`,
                },
                { en: `That's a great question.`, zh: `这问题问得好` },
              ],
              grammar: {
                title: `讲经历：现在完成时 I've worked / I've been doing`,
                explain: [
                  `说「到现在为止」的经历用 have + 过去分词`,
                  `持续多久用 for，从何时起用 since`,
                  `说具体某件事什么时候发生，就换回过去式`,
                ],
                examples: [
                  {
                    en: `I've worked in e-commerce for five years.`,
                    zh: `我在电商行业做了五年`,
                  },
                  {
                    en: `I've been leading a team of four since 2024.`,
                    zh: `我从 2024 年起带一个四人团队`,
                  },
                  {
                    en: `Last year I built a dashboard for the sales team.`,
                    zh: `去年我给销售团队做了一个看板`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Why don't you start by telling me about yourself?`,
                  zh: `先介绍一下你自己吧`,
                },
                {
                  en: `I've been working as a data analyst for three years.`,
                  zh: `我做了三年数据分析`,
                },
                {
                  en: `In my current role, I'm responsible for weekly sales reports.`,
                  zh: `我现在负责每周销售报表`,
                },
                {
                  en: `What drew me to this role is the chance to work with product teams.`,
                  zh: `吸引我的是能和产品团队合作`,
                },
                {
                  en: `Could you tell me more about the team I'd be joining?`,
                  zh: `能说说我要加入的团队吗？`,
                },
                {
                  en: `Thanks, that gives me a good picture.`,
                  zh: `谢谢，我大概清楚了`,
                },
              ],
              twist: `After the self-introduction, ask an unexpected follow-up: what the learner would do in their first 30 days if hired.`,
            },
            {
              id: `interview-star`,
              locationId: `interview`,
              title: `讲一个真实案例`,
              level: `B2`,
              xp: 60,
              playerRole: `第二轮面试。Rachel 会问行为面试题，你要按「情境-任务-行动-结果」讲一个你解决过的问题。`,
              scene: `Second-round interview at Brightline Analytics. Rachel asks behavioral questions such as "Tell me about a time you dealt with a difficult stakeholder" and "Tell me about a mistake you made." She expects concrete answers with a situation, the task, the actions the learner took, and a measurable result. She probes vague answers with "What exactly did you do?"`,
              objectives: [
                {
                  zh: `讲清当时的情境和你的任务`,
                  en: `Learner describes the situation and their task`,
                },
                {
                  zh: `说明你具体采取了哪些行动`,
                  en: `Learner explains the specific actions they personally took`,
                },
                {
                  zh: `用数字或事实说明结果`,
                  en: `Learner states the result with a number or concrete fact`,
                },
                {
                  zh: `说说你从中学到了什么`,
                  en: `Learner reflects on what they learned or would do differently`,
                },
              ],
              opening: `Welcome back. Today I'd like to hear some real examples. Tell me about a time you had to deal with a difficult stakeholder.`,
              phrases: [
                {
                  en: `Let me give you an example from my last job.`,
                  zh: `我举个上份工作的例子`,
                },
                { en: `The situation was that…`, zh: `当时的情况是……` },
                { en: `My task was to…`, zh: `我的任务是……` },
                { en: `So what I did was…`, zh: `于是我做的是……` },
                {
                  en: `As a result, we cut the delay by 40%.`,
                  zh: `结果我们把延误减少了 40%`,
                },
                { en: `Looking back, I'd…`, zh: `回头看，我会……` },
                { en: `What I learned from that was…`, zh: `我从中学到的是……` },
              ],
              grammar: {
                title: `用数字说结果：by / from…to / within`,
                explain: [
                  `增减幅度用 by：cut costs by 15%`,
                  `前后变化用 from A to B：from 3 days to 1`,
                  `多长时间内完成用 within / in：within two weeks`,
                  `说结果用过去式，别用现在完成时`,
                ],
                examples: [
                  {
                    en: `We reduced response time from two days to four hours.`,
                    zh: `我们把响应时间从两天缩到四小时`,
                  },
                  {
                    en: `Sales went up by 20% within a quarter.`,
                    zh: `一个季度内销售涨了 20%`,
                  },
                  {
                    en: `I finished the migration in three weeks.`,
                    zh: `我三周内完成了迁移`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Tell me about a time you dealt with a difficult stakeholder.`,
                  zh: `讲讲你应对难缠干系人的经历`,
                },
                {
                  en: `The situation was that our launch was two weeks behind.`,
                  zh: `当时的情况是发布晚了两周`,
                },
                {
                  en: `So what I did was set up a daily fifteen-minute check-in.`,
                  zh: `于是我安排了每天 15 分钟的碰头`,
                },
                {
                  en: `As a result, we shipped on time and cut bugs by thirty percent.`,
                  zh: `结果按时上线，bug 少了三成`,
                },
                {
                  en: `Looking back, I would have raised the issue earlier.`,
                  zh: `回头看，我应该更早提出问题`,
                },
                {
                  en: `What exactly did you do in that situation?`,
                  zh: `你当时具体做了什么？`,
                },
              ],
              twist: `When the learner gives a result, probe once: ask what they would do differently next time. Later, ask about a mistake they made.`,
            },
            {
              id: `interview-salary`,
              locationId: `interview`,
              title: `谈薪资`,
              level: `B2`,
              xp: 70,
              playerRole: `你拿到了 offer，Rachel 打电话来谈薪。对方开 8.5 万美元，你的底线是 9.2 万，还想问清奖金、远程和入职时间。`,
              scene: `Phone call after a successful final round. Rachel offers $85,000 base salary, a 10% annual bonus, three days a week in the office, and a start date in four weeks. She has approval to go up to $90,000 and can add a $3,000 signing bonus or one extra remote day if the learner pushes politely with reasons. She will not go above $90,000 base.`,
              objectives: [
                {
                  zh: `先表达感谢和兴趣，再提出薪资期望`,
                  en: `Learner thanks Rachel, shows interest, and states a salary expectation`,
                },
                {
                  zh: `给出要求更高薪资的理由`,
                  en: `Learner gives a reason for a higher salary, such as market rate, experience or another offer`,
                },
                {
                  zh: `问清奖金、远程办公或入职时间中的两项`,
                  en: `Learner asks about at least two of: bonus, remote work, start date`,
                },
                {
                  zh: `和 Rachel 达成一个明确结果`,
                  en: `Learner reaches a clear outcome: accepts, asks for time to decide, or agrees on revised terms`,
                },
              ],
              opening: `Hi, it's Rachel from Brightline. Good news—we'd like to make you an offer. Do you have a few minutes to go over the details?`,
              phrases: [
                {
                  en: `Thank you, I'm really excited about the offer.`,
                  zh: `谢谢，我对这个 offer 很期待`,
                },
                {
                  en: `Based on my experience and the market rate, I was hoping for…`,
                  zh: `按我的经验和市场价，我期望……`,
                },
                {
                  en: `Is there any flexibility on the base salary?`,
                  zh: `底薪有没有调整空间？`,
                },
                {
                  en: `If you could get to 92, I'd be ready to accept today.`,
                  zh: `要是能到 9.2 万，我今天就能接受`,
                },
                { en: `How does the bonus work?`, zh: `奖金是怎么算的？` },
                {
                  en: `Would it be possible to work remotely two days a week?`,
                  zh: `能一周远程两天吗？`,
                },
                {
                  en: `Could I have until Friday to think it over?`,
                  zh: `能给我到周五考虑一下吗？`,
                },
                { en: `That works for me.`, zh: `这个我可以接受` },
              ],
              grammar: {
                title: `谈条件：If you could…, I'd…`,
                explain: [
                  `谈判用第二条件句，语气更软：If you could…, I'd…`,
                  `主句用 would / could，不用 will`,
                  `问对方能不能让步：Would there be any room on…?`,
                ],
                examples: [
                  {
                    en: `If you could raise the base to 92, I'd accept right away.`,
                    zh: `要是底薪能到 9.2 万，我马上接受`,
                  },
                  {
                    en: `If the bonus were guaranteed, I'd be more comfortable.`,
                    zh: `如果奖金有保障，我会更放心`,
                  },
                  {
                    en: `Would you be open to a signing bonus instead?`,
                    zh: `换成签约奖金您能接受吗？`,
                  },
                ],
              },
              shadow: [
                {
                  en: `We'd like to offer you eighty-five thousand as base salary.`,
                  zh: `我们愿意给您 8.5 万的底薪`,
                },
                {
                  en: `I'm really excited, but I was hoping for something closer to ninety-two.`,
                  zh: `我很期待，不过希望能接近 9.2 万`,
                },
                {
                  en: `Is there any flexibility on the base salary?`,
                  zh: `底薪有没有调整空间？`,
                },
                {
                  en: `If you could get to ninety-two, I'd accept today.`,
                  zh: `要是能到 9.2 万，我今天就接受`,
                },
                {
                  en: `Could I have until Friday to think it over?`,
                  zh: `能给我到周五考虑吗？`,
                },
                {
                  en: `Let me check with the team and get back to you.`,
                  zh: `我和团队确认一下再回复您`,
                },
              ],
              twist: `After stating the base salary, pause and ask directly whether that works for the learner. If they ask for more, first say the budget is tight, then move to $90,000 or a signing bonus only if they give a reason.`,
            },
          ],
          writing: [
            {
              id: `interview-thankyou`,
              locationId: `interview`,
              title: `面试后感谢邮件`,
              level: `B1`,
              type: `email`,
              prompt: `昨天你面试了 Brightline 的数据分析师岗。给 Rachel 写一封简短的感谢邮件，让她记住你。`,
              mustInclude: [
                `感谢她的时间，提到岗位或面试时间`,
                `回顾一个你们聊到的具体话题`,
                `再次表达对岗位的兴趣`,
                `礼貌收尾，表示期待回复`,
              ],
              words: [80, 130],
              tips: [
                {
                  en: `Thank you for taking the time to speak with me yesterday.`,
                  zh: `感谢您昨天抽时间和我聊`,
                },
                {
                  en: `I really enjoyed learning about…`,
                  zh: `很高兴了解到……`,
                },
                {
                  en: `Our conversation about … confirmed that…`,
                  zh: `我们关于……的交流让我更确定……`,
                },
                {
                  en: `I'm even more excited about the opportunity to…`,
                  zh: `我对……这个机会更期待了`,
                },
                {
                  en: `Please let me know if you need anything else from me.`,
                  zh: `如果还需要我提供什么，请告诉我`,
                },
                {
                  en: `Looking forward to hearing from you.`,
                  zh: `期待您的回复`,
                },
              ],
              sample: `Subject: Thank you – Data Analyst interview

Hi Rachel,

Thank you for taking the time to speak with me yesterday about the Data Analyst role. I really enjoyed learning how your team turns raw sales data into weekly decisions, and our conversation about the dashboard rebuild confirmed that this is exactly the kind of work I want to do.

I'm even more excited about the opportunity to join Brightline and contribute from day one. Please let me know if you need anything else from me—references and work samples are ready to go.

Looking forward to hearing from you.

Best regards,
[Your name]`,
            },
          ],
        },
        {
          id: `office`,
          districtId: `work`,
          name: `办公室`,
          nameEn: `Office`,
          emoji: `🧑‍💻`,
          blurb: `入职、请假、报延期，和经理 Tom 打交道`,
          npc: {
            id: `tom`,
            name: `Tom`,
            role: `你的经理`,
            roleEn: `your manager`,
            emoji: `👨‍💼`,
            voice: `male`,
            persona: `Tom is a friendly but busy engineering manager in his forties at Brightline Analytics. He speaks warm, quick American English, checks his phone between sentences, appreciates people who come with a plan, and hates surprises. He often says "Okay, so what's the plan?"`,
          },
          freeChatTopics: [
            `问他团队有什么惯例`,
            `聊聊你第一周的感受`,
            `问他怎么平衡工作和生活`,
          ],
          missions: [
            {
              id: `office-firstday`,
              locationId: `office`,
              title: `入职第一天`,
              level: `A2`,
              xp: 40,
              playerRole: `今天是你在 Brightline 的第一天。经理 Tom 带你转一圈，你要介绍自己、认识同事、问清工位和午饭。`,
              scene: `Monday morning at the Brightline Analytics office in Austin. Tom, the learner's new manager, shows them around. The team has five people; the learner's desk is by the window; people usually have lunch at 12:30 at the taco place downstairs; the laptop and badge are at the IT desk on the 2nd floor. As they walk, Tom introduces Sarah (designer) and Ben (engineer).`,
              objectives: [
                {
                  zh: `跟 Tom 和同事打招呼并自我介绍`,
                  en: `Learner greets Tom and introduces themselves to a colleague`,
                },
                {
                  zh: `问清楚工位、电脑或工牌在哪`,
                  en: `Learner asks where their desk, laptop or badge is`,
                },
                {
                  zh: `问大家午饭怎么解决`,
                  en: `Learner asks what people usually do for lunch`,
                },
                {
                  zh: `回答一个关于自己的小问题`,
                  en: `Learner answers a personal small-talk question, such as where they are from or what they did before`,
                },
              ],
              opening: `Hey, you must be the new analyst! I'm Tom, we talked on the phone. Welcome aboard—let me show you around.`,
              phrases: [
                { en: `Nice to meet you, I'm…`, zh: `很高兴认识你，我是……` },
                {
                  en: `I just moved here from Shanghai.`,
                  zh: `我刚从上海搬来`,
                },
                { en: `Where should I sit?`, zh: `我坐哪儿？` },
                { en: `Where can I pick up my laptop?`, zh: `去哪儿领电脑？` },
                {
                  en: `What do people usually do for lunch?`,
                  zh: `大家午饭一般怎么解决？`,
                },
                { en: `Which team are you on?`, zh: `你在哪个组？` },
                { en: `How long have you been here?`, zh: `你来多久了？` },
                { en: `Great, see you at lunch!`, zh: `好，午饭见` },
              ],
              grammar: {
                title: `小问题怎么问：Where / What / Which + do…`,
                explain: [
                  `问地点用 Where，问事物用 What，几选一用 Which`,
                  `一般现在时的问句要加 do / does：What do you do?`,
                  `问「谁」用 Who，不加 do：Who sits here?`,
                ],
                examples: [
                  {
                    en: `Where do I pick up my badge?`,
                    zh: `我去哪儿领工牌？`,
                  },
                  {
                    en: `What do people usually do for lunch?`,
                    zh: `大家午饭一般怎么解决？`,
                  },
                  { en: `Which team are you on?`, zh: `你在哪个组？` },
                ],
              },
              shadow: [
                {
                  en: `You must be the new analyst. Welcome aboard!`,
                  zh: `你就是新来的分析师吧，欢迎`,
                },
                {
                  en: `Nice to meet you. I just moved here from Shanghai.`,
                  zh: `很高兴认识你，我刚从上海搬来`,
                },
                {
                  en: `Where can I pick up my laptop and badge?`,
                  zh: `去哪儿领电脑和工牌？`,
                },
                {
                  en: `What do people usually do for lunch around here?`,
                  zh: `这边大家午饭一般怎么解决？`,
                },
                {
                  en: `Your desk is the one by the window.`,
                  zh: `你的工位是靠窗那个`,
                },
                {
                  en: `Let me introduce you to the team.`,
                  zh: `我带你认识一下团队`,
                },
              ],
              twist: `While walking, introduce Sarah from the design team, who asks the learner where they are from and what they did before this job.`,
            },
            {
              id: `office-dayoff`,
              locationId: `office`,
              title: `请一天假`,
              level: `B1`,
              xp: 50,
              playerRole: `下周五你要去办签证，得请一天假。那天正好是发布日，你要跟 Tom 说明情况并安排好交接。`,
              scene: `A quick chat at Tom's desk. The learner wants next Friday off for a visa appointment. Tom is supportive, but next Friday is release day for the Q3 dashboard; he needs to know who will cover the release checks and whether the learner can finish the data validation by Thursday. Company policy: submit the request in the HR system (Workday) after the manager agrees.`,
              objectives: [
                {
                  zh: `委婉提出请假，说明日期和原因`,
                  en: `Learner politely asks for next Friday off and gives the date and reason`,
                },
                {
                  zh: `承认那天有发布，主动提出交接方案`,
                  en: `Learner acknowledges release day and proposes who will cover`,
                },
                {
                  zh: `确认截止前要完成的工作`,
                  en: `Learner commits to finishing the validation or other work before leaving`,
                },
                {
                  zh: `问清请假手续`,
                  en: `Learner asks how to submit the request, e.g. in Workday or by email`,
                },
              ],
              opening: `Hey, what's up? I've got about five minutes before my next call.`,
              phrases: [
                { en: `Do you have a minute?`, zh: `有空吗？` },
                {
                  en: `I was wondering if I could take next Friday off.`,
                  zh: `我想问问下周五能不能请假`,
                },
                {
                  en: `I have a visa appointment that I can't move.`,
                  zh: `我有个签证预约，改不了`,
                },
                {
                  en: `I know it's release day, so I'll…`,
                  zh: `我知道那天发布，所以我会……`,
                },
                {
                  en: `Ben has agreed to cover the release checks.`,
                  zh: `Ben 同意帮我盯发布检查`,
                },
                {
                  en: `I'll make sure the validation is done by Thursday.`,
                  zh: `我保证周四前做完校验`,
                },
                { en: `Should I put it in Workday?`, zh: `要在系统里提吗？` },
                {
                  en: `Thanks, I really appreciate it.`,
                  zh: `谢谢，真的很感激`,
                },
              ],
              grammar: {
                title: `把请求说软：I was wondering if… / Would it be possible…`,
                explain: [
                  `请假、借东西这类请求，用过去式开头更客气`,
                  `I was wondering if I could… 比 Can I… 软一档`,
                  `Would it be possible to…? 适合对上级说`,
                ],
                examples: [
                  {
                    en: `I was wondering if I could leave early on Friday.`,
                    zh: `我想问问周五能不能早点走`,
                  },
                  {
                    en: `Would it be possible to move my shift to Saturday?`,
                    zh: `能把我的班调到周六吗？`,
                  },
                  {
                    en: `Would you mind if I worked from home tomorrow?`,
                    zh: `明天我在家办公您介意吗？`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Do you have a minute? I wanted to ask you something.`,
                  zh: `有空吗？我想问你件事`,
                },
                {
                  en: `I was wondering if I could take next Friday off.`,
                  zh: `我想问问下周五能不能请假`,
                },
                {
                  en: `I have a visa appointment that I can't reschedule.`,
                  zh: `我有个签证预约，没法改期`,
                },
                {
                  en: `I know it's release day, so Ben will cover for me.`,
                  zh: `我知道那天发布，Ben 会替我`,
                },
                {
                  en: `I'll make sure everything is done by Thursday.`,
                  zh: `我保证周四前全部搞定`,
                },
                {
                  en: `Sounds good. Just put it in Workday and I'll approve it.`,
                  zh: `行，系统里提一下我就批`,
                },
              ],
              twist: `When the learner asks, point out that next Friday is release day and ask how they plan to handle it before agreeing.`,
            },
            {
              id: `office-delay`,
              locationId: `office`,
              title: `汇报延期`,
              level: `B2`,
              xp: 70,
              playerRole: `你负责的客户报表要晚一周，因为数据源出了问题。你要主动告诉 Tom，解释原因，给出补救方案。`,
              scene: `One-on-one with Tom. The customer report for Harbor Home was due this Friday; the vendor's data feed has been down for three days, so the project will slip by about a week. Tom will ask what caused it, whether the client has been told, what the new date is, and what can still be delivered on Friday. He values honesty and a concrete plan, and dislikes surprises.`,
              objectives: [
                {
                  zh: `直接说明项目会延期以及新的时间`,
                  en: `Learner clearly states the project will be late and gives a new date`,
                },
                {
                  zh: `解释原因但不推卸责任`,
                  en: `Learner explains the cause without blaming others or making excuses`,
                },
                {
                  zh: `提出补救方案`,
                  en: `Learner proposes a recovery plan, such as phased delivery or partial results on Friday`,
                },
                {
                  zh: `问 Tom 要不要你通知客户或需要什么支持`,
                  en: `Learner asks whether to inform the client or what support Tom needs`,
                },
              ],
              opening: `So, how's the customer report coming along? The client's been asking.`,
              phrases: [
                { en: `I need to flag something.`, zh: `我得报个风险` },
                {
                  en: `We're going to miss Friday's deadline.`,
                  zh: `我们周五的截止赶不上了`,
                },
                {
                  en: `The vendor feed has been down for three days.`,
                  zh: `供应商的数据接口断了三天`,
                },
                {
                  en: `I should have raised this earlier.`,
                  zh: `我应该早点提出来的`,
                },
                { en: `Here's what I'm going to do:`, zh: `我打算这么做：` },
                {
                  en: `We'll deliver the first half on Friday and the rest by next Wednesday.`,
                  zh: `周五先交一半，剩下的下周三前`,
                },
                {
                  en: `Would you like me to let the client know?`,
                  zh: `要不要我通知客户？`,
                },
                {
                  en: `Is there anything you'd need from me?`,
                  zh: `你需要我做什么吗？`,
                },
              ],
              grammar: {
                title: `说计划：going to / will / 'll`,
                explain: [
                  `已经决定好的计划用 be going to：We're going to split it`,
                  `当场做出的承诺用 will / 'll：I'll call them today`,
                  `把握大的预测也用 will：It will be ready by Wednesday`,
                ],
                examples: [
                  {
                    en: `We're going to deliver in two phases.`,
                    zh: `我们打算分两期交付`,
                  },
                  {
                    en: `I'll send the client an update this afternoon.`,
                    zh: `我今天下午给客户发进展`,
                  },
                  {
                    en: `The full report will be ready by next Wednesday.`,
                    zh: `完整报告下周三前能好`,
                  },
                ],
              },
              shadow: [
                {
                  en: `I need to flag something about the customer report.`,
                  zh: `客户报表这边我得报个风险`,
                },
                {
                  en: `We're going to miss Friday's deadline by about a week.`,
                  zh: `周五的截止大概要晚一周`,
                },
                {
                  en: `The vendor's data feed has been down since Monday.`,
                  zh: `供应商的数据接口周一起就断了`,
                },
                {
                  en: `We'll deliver the first half on Friday and the rest next Wednesday.`,
                  zh: `周五先交一半，剩下的下周三`,
                },
                {
                  en: `Would you like me to let the client know today?`,
                  zh: `要不要我今天通知客户？`,
                },
                {
                  en: `Thanks for telling me early. Let's keep the client in the loop.`,
                  zh: `谢谢早说，咱们随时同步客户`,
                },
              ],
              twist: `After hearing the plan, ask whether the client already knows, and push for something that can still be delivered this Friday.`,
            },
          ],
          writing: [
            {
              id: `office-leave-request`,
              locationId: `office`,
              title: `请假消息`,
              level: `B1`,
              type: `message`,
              prompt: `你已经口头跟 Tom 说过下周五要请假办签证。在 Slack 上发一条消息，把日期、交接和手续写清楚。`,
              mustInclude: [
                `日期和原因`,
                `交接安排，谁替你`,
                `截止前你会完成什么`,
                `请他确认或批准`,
              ],
              words: [50, 90],
              tips: [
                {
                  en: `Hi Tom, following up on our chat—`,
                  zh: `Tom 你好，接着刚才聊的……`,
                },
                {
                  en: `I'd like to request Friday, Oct 17 off for…`,
                  zh: `我想申请 10 月 17 日周五请假，因为……`,
                },
                {
                  en: `Ben will cover the release checks.`,
                  zh: `Ben 会负责发布检查`,
                },
                {
                  en: `I'll have the validation done by Thursday EOD.`,
                  zh: `校验周四下班前做完`,
                },
                { en: `Let me know if that works.`, zh: `可以的话告诉我一声` },
              ],
              sample: `Hi Tom, following up on our chat this morning. I'd like to request next Friday (Oct 17) off for a visa appointment that I can't reschedule. I know it's release day, so I've arranged for Ben to cover the release checks, and I'll have the data validation finished by Thursday EOD. I've also submitted the request in Workday. Let me know if that works for you—happy to adjust if anything comes up. Thanks!`,
            },
            {
              id: `office-status-update`,
              locationId: `office`,
              title: `项目延期邮件`,
              level: `B2`,
              type: `email`,
              prompt: `客户报表要延期一周。给 Tom 和客户 Emma 写一封进度邮件：说明新时间、原因、分阶段方案和下一步。`,
              mustInclude: [
                `当前状态和新的交付日期`,
                `延期原因，简短不推责`,
                `分阶段交付方案`,
                `下一步和需要对方做什么`,
              ],
              words: [100, 150],
              tips: [
                {
                  en: `I'm writing to give you an update on…`,
                  zh: `写这封邮件是想同步一下……的进展`,
                },
                {
                  en: `Unfortunately, we've run into an issue with…`,
                  zh: `很遗憾，我们在……上遇到了问题`,
                },
                {
                  en: `To keep things moving, we're going to…`,
                  zh: `为了不耽误，我们打算……`,
                },
                {
                  en: `The full report will be ready by…`,
                  zh: `完整报告将在……前完成`,
                },
                {
                  en: `Please let me know if you have any concerns.`,
                  zh: `有任何顾虑请告诉我`,
                },
                {
                  en: `Apologies for the inconvenience.`,
                  zh: `给您带来不便，抱歉`,
                },
              ],
              sample: `Subject: Customer report – updated timeline

Hi Tom, hi Emma,

I'm writing to give you an update on the customer report. Unfortunately, we've run into an issue with the vendor's data feed, which has been down since Monday, so the full report will not be ready this Friday as planned.

To keep things moving, we're going to deliver in two phases: the sales and traffic sections on Friday, Oct 10, and the complete report, including the vendor data, by Wednesday, Oct 15. We've also set up a daily check with the vendor to avoid further delays.

Please let me know if you have any concerns about the new timeline. Apologies for the inconvenience, and thank you for your patience.

Best,
[Your name]`,
            },
          ],
        },
        {
          id: `meeting`,
          districtId: `work`,
          name: `会议室`,
          nameEn: `Meeting Room`,
          emoji: `📊`,
          blurb: `站会同步、礼貌反对、争取人手，和产品经理 Priya 过招`,
          npc: {
            id: `priya`,
            name: `Priya`,
            role: `产品经理`,
            roleEn: `product manager`,
            emoji: `👩‍💻`,
            voice: `female`,
            persona: `Priya is a sharp, fast-talking product manager who loves numbers and hates meetings that run long. She speaks quick American English, interrupts politely with "Quick question—", and always asks "What does the data say?" She respects people who push back with evidence.`,
          },
          freeChatTopics: [
            `问她怎么判断一个产品决定对不对`,
            `聊聊会太多怎么办`,
            `问她当产品经理最难的是什么`,
          ],
          missions: [
            {
              id: `meeting-standup`,
              locationId: `meeting`,
              title: `站会同步进度`,
              level: `B1`,
              xp: 50,
              playerRole: `每天早上 15 分钟站会。轮到你了：说昨天做了什么、今天打算做什么、哪里卡住了。`,
              scene: `Daily stand-up at Brightline, 9:15 a.m., on Zoom. Priya runs it. The learner is building the churn dashboard: yesterday they finished the data model; today they plan to build the charts; they are blocked because the marketing team has not shared the campaign spreadsheet. Priya will ask for a firm date and can offer to ping marketing.`,
              objectives: [
                {
                  zh: `说明昨天完成了什么`,
                  en: `Learner says what they finished yesterday`,
                },
                {
                  zh: `说明今天的计划`,
                  en: `Learner says what they plan to do today`,
                },
                {
                  zh: `说清楚卡在哪里、需要谁帮忙`,
                  en: `Learner names a blocker and who could help`,
                },
                {
                  zh: `给出一个预计完成时间`,
                  en: `Learner gives an estimated date for the first version`,
                },
              ],
              opening: `Okay, quick round. Let's keep it tight—you're up. What's the status on the churn dashboard?`,
              phrases: [
                {
                  en: `Yesterday I finished the data model.`,
                  zh: `昨天我做完了数据模型`,
                },
                {
                  en: `Today I'm going to work on the charts.`,
                  zh: `今天我要做图表`,
                },
                {
                  en: `I've been waiting on the campaign spreadsheet from marketing.`,
                  zh: `我一直在等市场部的活动表`,
                },
                { en: `I'm blocked on…`, zh: `我卡在……` },
                {
                  en: `Could someone ping marketing for me?`,
                  zh: `能帮我催一下市场部吗？`,
                },
                {
                  en: `I should have a first version by Thursday.`,
                  zh: `周四前应该有第一版`,
                },
                { en: `No blockers on my side.`, zh: `我这边没有卡点` },
                { en: `That's it from me.`, zh: `我说完了` },
              ],
              grammar: {
                title: `说进行中的工作：I've been working on…`,
                explain: [
                  `从过去一直做到现在、还没完，用 have been + 动词 ing`,
                  `强调做了多久：I've been working on this since Monday`,
                  `已经做完的用 I've finished，不加 been`,
                ],
                examples: [
                  {
                    en: `I've been working on the data model all week.`,
                    zh: `我这周一直在做数据模型`,
                  },
                  {
                    en: `I've been waiting on marketing since Tuesday.`,
                    zh: `我从周二就在等市场部`,
                  },
                  {
                    en: `I've finished the model, and now I'm building the charts.`,
                    zh: `模型做完了，现在在做图表`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Quick round, let's keep it tight. You're up.`,
                  zh: `快速过一遍，别拖，到你了`,
                },
                {
                  en: `Yesterday I finished the data model for the churn dashboard.`,
                  zh: `昨天我做完了流失看板的数据模型`,
                },
                {
                  en: `Today I'm going to build the first three charts.`,
                  zh: `今天我要先做三张图`,
                },
                {
                  en: `I've been waiting on the campaign spreadsheet from marketing.`,
                  zh: `我一直在等市场部的活动表`,
                },
                {
                  en: `I should have a first version ready by Thursday.`,
                  zh: `周四前应该有第一版`,
                },
                {
                  en: `I'll ping marketing right after this.`,
                  zh: `散会我就去催市场部`,
                },
              ],
              twist: `After the learner mentions the blocker, ask how long they can keep working without the spreadsheet, and ask for a firm date for the first version.`,
            },
            {
              id: `meeting-disagree`,
              locationId: `meeting`,
              title: `礼貌说不同意`,
              level: `B2`,
              xp: 70,
              playerRole: `Priya 想下周就把新定价页全量上线。你看到测试样本太小，想提出不同意见，并给出替代方案。`,
              scene: `Product sync meeting. Priya wants to ship the new pricing page to all users next Monday because the A/B test showed a 12% lift. The learner knows the test only ran for four days with 300 users, and the lift is not statistically significant. Priya is open to data but needs a plan that delays no more than one week. Possible compromises: extend the test to two weeks, or ship to 20% of traffic first.`,
              objectives: [
                {
                  zh: `先认可 Priya 的观点，再提出顾虑`,
                  en: `Learner acknowledges Priya's point before raising a concern`,
                },
                {
                  zh: `用具体数据说明问题`,
                  en: `Learner cites specific numbers, such as four days or 300 users, to explain the concern`,
                },
                {
                  zh: `提出一个替代方案`,
                  en: `Learner proposes an alternative, such as a gradual rollout or a longer test`,
                },
                {
                  zh: `和 Priya 商定双方都接受的做法`,
                  en: `Learner and Priya agree on a concrete compromise`,
                },
              ],
              opening: `Great news—the pricing test is up 12%. I want to ship it to everyone on Monday. Any objections? No? Good.`,
              phrases: [
                {
                  en: `I see your point, but I have one concern.`,
                  zh: `我明白你的意思，但有一个顾虑`,
                },
                {
                  en: `I'm not sure the data is solid enough yet.`,
                  zh: `我不太确定数据够扎实`,
                },
                {
                  en: `The test only ran for four days with 300 users.`,
                  zh: `测试只跑了四天、300 个用户`,
                },
                {
                  en: `Have we considered a gradual rollout?`,
                  zh: `我们考虑过灰度发布吗？`,
                },
                {
                  en: `What if we ship to 20% first?`,
                  zh: `要不先放 20% 流量？`,
                },
                {
                  en: `That way we get a clean read without a big delay.`,
                  zh: `这样数据干净，也不会拖太久`,
                },
                { en: `I'm happy to go with that.`, zh: `这个我可以接受` },
                {
                  en: `Can we revisit this on Friday with more data?`,
                  zh: `周五有更多数据再定行吗？`,
                },
              ],
              grammar: {
                title: `委婉反对：I see your point, but… / Have we considered…?`,
                explain: [
                  `先认可再转折：I see your point, but…`,
                  `不说 you're wrong，说 I'm not sure that…`,
                  `提建议用问句：Have we considered…? / What if we…?`,
                ],
                examples: [
                  {
                    en: `I see what you mean, but I'm not sure four days is enough.`,
                    zh: `我明白，但四天可能不够`,
                  },
                  {
                    en: `Have we considered rolling it out gradually?`,
                    zh: `我们考虑过逐步放量吗？`,
                  },
                  {
                    en: `What if we extended the test by a week?`,
                    zh: `要不把测试再延长一周？`,
                  },
                ],
              },
              shadow: [
                {
                  en: `I see your point, but I have one concern about the data.`,
                  zh: `我明白，但对数据有一点顾虑`,
                },
                {
                  en: `The test only ran for four days with three hundred users.`,
                  zh: `测试只跑了四天、三百个用户`,
                },
                {
                  en: `I'm not sure that's enough to call it a win.`,
                  zh: `我不太确定这就能算赢`,
                },
                {
                  en: `Have we considered shipping to twenty percent of traffic first?`,
                  zh: `考虑过先放两成流量吗？`,
                },
                {
                  en: `That way we get a clean read without a big delay.`,
                  zh: `这样数据干净又不会拖太久`,
                },
                {
                  en: `Fine, let's do a staged rollout and review on Friday.`,
                  zh: `行，分阶段上，周五复盘`,
                },
              ],
              twist: `Push back once: say the CEO already saw the 12% number and is excited, and ask what the learner would tell the CEO.`,
            },
            {
              id: `meeting-resources`,
              locationId: `meeting`,
              title: `争取人手`,
              level: `B2`,
              xp: 70,
              playerRole: `你的看板项目要再加一个工程师才能按期完成。向 Priya 说明现状、后果，提出具体要求。`,
              scene: `Resource planning meeting. The dashboard project needs an extra front-end engineer for six weeks; otherwise the launch slips from November to January. Priya controls a small budget: she can lend one engineer (Ben) for four weeks, or approve a contractor for $8,000. She will ask what happens if nothing changes, exactly what the learner needs, and what could be cut from scope instead.`,
              objectives: [
                {
                  zh: `说明现状和没有额外人手的后果`,
                  en: `Learner explains the current situation and the consequence of no extra help`,
                },
                {
                  zh: `提出具体要求：几个人、多久、做什么`,
                  en: `Learner makes a specific request: how many people, for how long, doing what`,
                },
                {
                  zh: `回答能不能砍需求，给出取舍`,
                  en: `Learner answers what could be cut from scope and the trade-off`,
                },
                {
                  zh: `得到一个明确答复或下一步`,
                  en: `Learner gets a clear decision or agreed next step from Priya`,
                },
              ],
              opening: `You said you wanted to talk about headcount. Make your case—I've got ten minutes and basically no budget.`,
              phrases: [
                { en: `Here's where we are:`, zh: `现在的情况是：` },
                {
                  en: `If we don't add anyone, the launch slips to January.`,
                  zh: `不加人的话，发布要拖到一月`,
                },
                {
                  en: `What I need is one front-end engineer for six weeks.`,
                  zh: `我需要一个前端工程师六周`,
                },
                {
                  en: `That would let us hit the November date.`,
                  zh: `这样就能赶上十一月`,
                },
                {
                  en: `We could cut the export feature so that we ship on time.`,
                  zh: `可以砍掉导出功能，好按时上线`,
                },
                {
                  en: `Because the API work is done, a contractor could start right away.`,
                  zh: `接口做完了，外包可以马上开始`,
                },
                {
                  en: `Four weeks would work if we drop the mobile view.`,
                  zh: `四周也行，前提是放弃移动端`,
                },
                { en: `Can I take that as a yes?`, zh: `这算答应了吗？` },
              ],
              grammar: {
                title: `讲因果：because / so that / which means`,
                explain: [
                  `说原因用 because：because the API is done`,
                  `说目的用 so that：so that we ship on time`,
                  `说后果用 which means：…, which means a two-month delay`,
                ],
                examples: [
                  {
                    en: `We need one more engineer because the front end is the bottleneck.`,
                    zh: `前端是瓶颈，所以要再加一个工程师`,
                  },
                  {
                    en: `Let's cut the export feature so that we ship in November.`,
                    zh: `砍掉导出功能，好在十一月上线`,
                  },
                  {
                    en: `Nothing changes, which means the launch slips to January.`,
                    zh: `什么都不变，就意味着拖到一月`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Make your case—I've got ten minutes and no budget.`,
                  zh: `说说看，我只有十分钟，没预算`,
                },
                {
                  en: `If we don't add anyone, the launch slips to January.`,
                  zh: `不加人的话，发布就拖到一月`,
                },
                {
                  en: `What I need is one front-end engineer for six weeks.`,
                  zh: `我需要一个前端工程师六周`,
                },
                {
                  en: `We could drop the export feature so that we ship on time.`,
                  zh: `可以砍掉导出功能，好按时上线`,
                },
                {
                  en: `That means a two-month delay for the whole project.`,
                  zh: `那意味着整个项目晚两个月`,
                },
                {
                  en: `I can lend you Ben for four weeks, not six.`,
                  zh: `我能把 Ben 借你四周，六周不行`,
                },
              ],
              twist: `Ask what the learner would cut from scope if no extra engineer is available, and only then offer four weeks of Ben's time.`,
            },
          ],
          writing: [
            {
              id: `meeting-notes`,
              locationId: `meeting`,
              title: `会议纪要`,
              level: `B1`,
              type: `email`,
              prompt: `定价页的会刚开完：决定先放 20% 流量，周五看数据。给团队发一封会议纪要，写清决定、待办和下次时间。`,
              mustInclude: [
                `会议决定了什么`,
                `每个待办的负责人和截止日`,
                `还没定的问题`,
                `下次讨论的时间`,
              ],
              words: [80, 130],
              tips: [
                {
                  en: `Here are the notes from today's sync.`,
                  zh: `这是今天同步会的纪要`,
                },
                { en: `Decisions:`, zh: `决定：` },
                {
                  en: `Action items: … (owner, due date)`,
                  zh: `待办：……（负责人，截止日）`,
                },
                { en: `Open questions:`, zh: `待定问题：` },
                {
                  en: `Next check-in: Friday, 10 a.m.`,
                  zh: `下次碰头：周五上午十点`,
                },
                { en: `Shout if I missed anything.`, zh: `有遗漏吱一声` },
              ],
              sample: `Subject: Notes – pricing page sync (Oct 9)

Hi all,

Here are the notes from today's sync.

Decisions: We will not ship the pricing page to 100% on Monday. Instead, we'll roll it out to 20% of traffic and review the data on Friday.

Action items:
- Ben: set up the 20% rollout by Monday, Oct 13.
- Me: prepare the test readout (sample size, lift, confidence) by Thursday, Oct 16.
- Priya: update the CEO on the new timeline.

Open questions: Do we need legal to review the new price wording?

Next check-in: Friday, Oct 17, 10 a.m.

Shout if I missed anything.

Thanks,
[Your name]`,
            },
          ],
        },
        {
          id: `client`,
          districtId: `work`,
          name: `客户电话`,
          nameEn: `Client Call`,
          emoji: `☎️`,
          blurb: `约会议、做演示、处理投诉，客户 Emma 很客气也很较真`,
          npc: {
            id: `emma`,
            name: `Emma`,
            role: `客户`,
            roleEn: `client`,
            emoji: `👩‍🦰`,
            voice: `female`,
            persona: `Emma is the operations lead at Harbor Home, a mid-size home goods retailer in London. She is polite, precise and demanding; she speaks clear British English, uses phrases like "I appreciate that, but…", interrupts with practical questions, and always asks for dates and numbers in writing.`,
          },
          freeChatTopics: [
            `问她零售行业今年最难的是什么`,
            `聊聊英美办公习惯的差别`,
            `问她周末去哪里放松`,
          ],
          missions: [
            {
              id: `client-followup`,
              locationId: `client`,
              title: `约演示时间`,
              level: `B1`,
              xp: 50,
              playerRole: `客户 Emma 想看你们的新功能。你要和她约一次演示，确认时间、参会人和会前要发的材料。`,
              scene: `Phone call. Emma wants a demo of Brightline's new Stock Alerts feature for her and her warehouse manager, Raj. She is free next Tuesday afternoon or Thursday morning (London time, GMT); the learner is in Austin (Central time, six hours behind London). Emma wants a short agenda and a written quote before the meeting, plus a calendar invite with a Zoom link.`,
              objectives: [
                {
                  zh: `说明会议目的，建议两个时间选项`,
                  en: `Learner states the purpose of the meeting and suggests two time options`,
                },
                {
                  zh: `考虑时差，确认一个双方都行的时间`,
                  en: `Learner handles the time difference and confirms a time that works for both`,
                },
                {
                  zh: `确认参会人和会前要发的材料`,
                  en: `Learner confirms who will attend and what to send beforehand, such as an agenda or quote`,
                },
                {
                  zh: `复述一遍约定：时间、人、材料`,
                  en: `Learner summarizes the agreed time, attendees and materials`,
                },
              ],
              opening: `Hi, it's Emma from Harbor Home. I heard you've got a new stock alert feature—my warehouse manager is keen to see it. When could you show us?`,
              phrases: [
                {
                  en: `Let's set up a demo for you and Raj.`,
                  zh: `我给您和 Raj 安排一次演示`,
                },
                {
                  en: `How about Tuesday at 3 p.m. your time?`,
                  zh: `周二下午三点您那边的时间怎么样？`,
                },
                {
                  en: `That would be 9 a.m. for me in Austin.`,
                  zh: `那我这边奥斯汀是早上九点`,
                },
                {
                  en: `Would 10 a.m. London time work for you?`,
                  zh: `伦敦时间上午十点您方便吗？`,
                },
                {
                  en: `Should I include Raj on the invite?`,
                  zh: `要把 Raj 也拉进邀请吗？`,
                },
                {
                  en: `I'll send the agenda and the quote by Friday.`,
                  zh: `我周五前把议程和报价发过去`,
                },
                {
                  en: `So that's Tuesday at 3 p.m. GMT, with Raj.`,
                  zh: `那就定伦敦时间周二下午三点，Raj 参加`,
                },
                {
                  en: `Perfect, I'll send the invite right after this call.`,
                  zh: `好，挂了电话我就发邀请`,
                },
              ],
              grammar: {
                title: `时间怎么说：on / at / by / in`,
                explain: [
                  `日期和星期用 on：on Tuesday, on Oct 14`,
                  `几点用 at：at 3 p.m.`,
                  `截止用 by：by Friday（周五前）`,
                  `多久之后用 in：in two weeks`,
                ],
                examples: [
                  {
                    en: `Let's meet on Tuesday at 10 a.m. London time.`,
                    zh: `我们周二上午十点（伦敦时间）见`,
                  },
                  {
                    en: `I'll send the quote by Friday.`,
                    zh: `报价周五前发给您`,
                  },
                  {
                    en: `We can review the results in two weeks.`,
                    zh: `两周后我们可以复盘结果`,
                  },
                ],
              },
              shadow: [
                {
                  en: `My warehouse manager is keen to see it. When could you show us?`,
                  zh: `仓库经理很想看，什么时候能演示？`,
                },
                {
                  en: `How about Tuesday at three p.m. your time?`,
                  zh: `周二下午三点您那边时间怎么样？`,
                },
                {
                  en: `That would be nine in the morning for me in Austin.`,
                  zh: `那我在奥斯汀是早上九点`,
                },
                {
                  en: `Should I include Raj on the calendar invite?`,
                  zh: `要把 Raj 也加进日历邀请吗？`,
                },
                {
                  en: `I'll send the agenda by Friday and the Zoom link today.`,
                  zh: `议程周五前发，Zoom 链接今天发`,
                },
                {
                  en: `So that's Tuesday at three, London time, with Raj.`,
                  zh: `那就是伦敦时间周二三点，Raj 参加`,
                },
              ],
              twist: `Point out the time difference: ask what time the learner's suggestion would be in London, and ask them to send a quote before the meeting.`,
            },
            {
              id: `client-demo`,
              locationId: `client`,
              title: `给客户演示产品`,
              level: `B2`,
              xp: 70,
              playerRole: `Emma 要看你们的库存预警功能。你要在电话里一步步演示，说清每个功能对她有什么用，并回答她的问题。`,
              scene: `Screen-share call. The learner demos Brightline's new Stock Alerts feature to Emma: (1) a dashboard showing items below their reorder level, (2) email alerts when stock drops under a threshold Emma sets, (3) a weekly summary report. Emma cares about three things: whether alerts can go to her warehouse manager Raj, whether it works with their Shopify data (it does, out of the box), and the price ($400 per month add-on, first month free). She interrupts with questions.`,
              objectives: [
                {
                  zh: `开场说明演示内容和大概时长`,
                  en: `Learner opens by outlining what they will show and how long it will take`,
                },
                {
                  zh: `分步介绍至少两个功能，并说清各自的好处`,
                  en: `Learner walks through at least two features and explains the benefit of each`,
                },
                {
                  zh: `回答 Emma 关于集成、价格或权限的问题`,
                  en: `Learner answers Emma's questions about integration, price or who receives alerts`,
                },
                {
                  zh: `结尾确认下一步：试用、报价或再约`,
                  en: `Learner closes with a clear next step, such as a trial, a quote or another meeting`,
                },
              ],
              opening: `Right, I've got thirty minutes. Show me this stock alert thing—our warehouse manager is desperate for it.`,
              phrases: [
                { en: `Let me share my screen.`, zh: `我共享一下屏幕` },
                {
                  en: `Today I'll walk you through three things.`,
                  zh: `今天我带您看三块内容`,
                },
                {
                  en: `First, this dashboard shows every item below its reorder level.`,
                  zh: `首先，这个看板显示所有低于补货线的商品`,
                },
                {
                  en: `This lets your warehouse manager act before you run out.`,
                  zh: `这样仓库经理能在断货前动手`,
                },
                {
                  en: `You can set the threshold yourself, here.`,
                  zh: `阈值您可以自己在这儿设`,
                },
                {
                  en: `It works with your Shopify data out of the box.`,
                  zh: `它直接就能接您的 Shopify 数据`,
                },
                {
                  en: `It's a $400-a-month add-on, and the first month is free.`,
                  zh: `每月 400 美元的附加功能，首月免费`,
                },
                {
                  en: `Shall we set up a two-week trial?`,
                  zh: `要不要先开个两周试用？`,
                },
              ],
              grammar: {
                title: `说功能有什么用：let / allow / enable`,
                explain: [
                  `let + 人 + 动词原形：This lets you see…`,
                  `allow / enable + 人 + to do：It allows you to set…`,
                  `说「自动做」用 It automatically + 动词`,
                ],
                examples: [
                  {
                    en: `This lets your team act before stock runs out.`,
                    zh: `这样你们团队能在断货前行动`,
                  },
                  {
                    en: `It allows you to set a different threshold per product.`,
                    zh: `它允许每个商品设不同的阈值`,
                  },
                  {
                    en: `The system automatically emails you every Monday.`,
                    zh: `系统每周一自动给您发邮件`,
                  },
                ],
              },
              shadow: [
                {
                  en: `I've got thirty minutes. Show me how the stock alerts work.`,
                  zh: `我有半小时，给我看看库存预警怎么用`,
                },
                {
                  en: `First, this dashboard shows every item below its reorder level.`,
                  zh: `首先这个看板显示所有低于补货线的商品`,
                },
                {
                  en: `This lets your warehouse manager act before you run out.`,
                  zh: `这样仓库经理能在断货前行动`,
                },
                {
                  en: `Can the alerts go to my warehouse manager instead of me?`,
                  zh: `预警能发给仓库经理而不是我吗？`,
                },
                {
                  en: `It's a four-hundred-dollar monthly add-on, and the first month is free.`,
                  zh: `每月四百美元的附加项，首月免费`,
                },
                {
                  en: `Shall we set up a two-week trial for your team?`,
                  zh: `要不要给您团队开个两周试用？`,
                },
              ],
              twist: `Interrupt in the middle of the demo to ask whether the alerts can go to Raj instead of you, and later ask bluntly how much it costs.`,
            },
            {
              id: `client-complaint`,
              locationId: `client`,
              title: `处理客户投诉`,
              level: `B2`,
              xp: 70,
              playerRole: `Emma 打电话投诉：月度报表晚了三天，害她在董事会上没数据。你要道歉、解释、补救，挽回信任。`,
              scene: `Phone call. Harbor Home's monthly performance report was due on the 1st and arrived on the 4th because the data pipeline failed over the weekend and nobody was on call. Emma had to present to her board without it. She wants an explanation, a guarantee it will not happen again, and some form of compensation. The learner can offer: a 15% credit on this month's invoice, a weekend on-call rota from next month, and an early-warning email whenever a delay is expected.`,
              objectives: [
                {
                  zh: `真诚道歉并承认影响`,
                  en: `Learner apologizes sincerely and acknowledges the impact on Emma`,
                },
                {
                  zh: `简要解释原因，不找借口`,
                  en: `Learner briefly explains the cause without making excuses`,
                },
                {
                  zh: `提出具体补救和防再发措施`,
                  en: `Learner offers concrete compensation and a prevention measure`,
                },
                {
                  zh: `确认 Emma 是否满意，并约定书面跟进`,
                  en: `Learner checks whether Emma is satisfied and promises written follow-up`,
                },
              ],
              opening: `Hi, it's Emma from Harbor Home. I'll be honest, I'm quite frustrated. The monthly report was three days late and I had to go into a board meeting without it.`,
              phrases: [
                {
                  en: `I'm really sorry about this, and I understand the impact.`,
                  zh: `非常抱歉，我理解这造成的影响`,
                },
                { en: `You're right to be frustrated.`, zh: `您生气是应该的` },
                {
                  en: `Let me explain what happened.`,
                  zh: `我说明一下发生了什么`,
                },
                {
                  en: `The pipeline failed over the weekend, and that's on us.`,
                  zh: `流程周末出了故障，这是我们的责任`,
                },
                {
                  en: `Here's what we're putting in place:`,
                  zh: `我们打算这样改：`,
                },
                {
                  en: `We'd like to offer a 15% credit on this month's invoice.`,
                  zh: `我们想在本月账单上抵 15%`,
                },
                {
                  en: `Going forward, you'll get an early warning if anything slips.`,
                  zh: `以后一有延误风险就提前通知您`,
                },
                {
                  en: `I'll put all of this in writing today.`,
                  zh: `我今天就把这些落成书面`,
                },
              ],
              grammar: {
                title: `解释事故：被动语态 was delayed / wasn't caught`,
                explain: [
                  `讲「发生了什么」而不是「谁的错」，用被动：The report was delayed`,
                  `be + 过去分词，时态改在 be 上：was / has been`,
                  `要承担责任就补一句主动的：and that's on us`,
                ],
                examples: [
                  {
                    en: `The report was delayed by a pipeline failure.`,
                    zh: `报表因为流程故障延误了`,
                  },
                  {
                    en: `The error wasn't caught until Monday morning.`,
                    zh: `错误到周一早上才被发现`,
                  },
                  {
                    en: `An on-call rota has been set up for next month.`,
                    zh: `下个月起已经安排了值班表`,
                  },
                ],
              },
              shadow: [
                {
                  en: `I'll be honest, I'm quite frustrated about this.`,
                  zh: `老实说，这事我挺不满的`,
                },
                {
                  en: `I'm really sorry, and I understand the impact on your board meeting.`,
                  zh: `非常抱歉，我明白对您董事会汇报的影响`,
                },
                {
                  en: `The pipeline failed over the weekend and wasn't caught until Monday.`,
                  zh: `流程周末故障，周一才发现`,
                },
                {
                  en: `We'd like to offer a fifteen percent credit on this month's invoice.`,
                  zh: `我们想在本月账单抵扣 15%`,
                },
                {
                  en: `Going forward, you'll get an early warning if anything slips.`,
                  zh: `今后一有延误风险就会提前通知`,
                },
                {
                  en: `I appreciate that, but I'd like it in writing by tomorrow.`,
                  zh: `谢谢，但请明天前书面发我`,
                },
              ],
              twist: `After the apology, say this is the second time this year and ask why she should believe it will not happen again. Accept the plan only if it includes a concrete prevention measure.`,
            },
          ],
          writing: [
            {
              id: `client-meeting-confirm`,
              locationId: `client`,
              title: `会议确认邮件`,
              level: `B1`,
              type: `email`,
              prompt: `你和 Emma 电话里约好了下周二的演示。发一封确认邮件：两个时区的时间、参会人、议程、链接和会前材料。`,
              mustInclude: [
                `会议时间，写两个时区`,
                `参会人`,
                `会议目的和议程`,
                `会前材料和会议链接`,
              ],
              words: [60, 100],
              tips: [
                { en: `Thanks for your time today.`, zh: `感谢您今天的时间` },
                {
                  en: `As discussed, I've scheduled our demo for…`,
                  zh: `按我们聊的，演示定在……`,
                },
                {
                  en: `That's 3 p.m. London time / 9 a.m. Central.`,
                  zh: `伦敦时间下午三点 / 美中时间上午九点`,
                },
                { en: `Agenda:`, zh: `议程：` },
                {
                  en: `I've attached the quote and included the Zoom link below.`,
                  zh: `报价见附件，Zoom 链接在下面`,
                },
                {
                  en: `Let me know if anything needs to change.`,
                  zh: `需要调整请告诉我`,
                },
              ],
              sample: `Subject: Stock Alerts demo – Tue Oct 14, 3 p.m. GMT

Hi Emma,

Thanks for your time today. As discussed, I've scheduled the Stock Alerts demo for Tuesday, Oct 14 at 3 p.m. London time (9 a.m. Central), with Raj included on the invite.

Agenda:
1. Live demo: dashboard, alerts and weekly summary (15 min)
2. Shopify connection and alert settings for Raj (10 min)
3. Pricing, trial and next steps (5 min)

I've attached the quote and included the Zoom link below. Let me know if anything needs to change.

Best regards,
[Your name]`,
            },
            {
              id: `client-apology-email`,
              locationId: `client`,
              title: `正式道歉邮件`,
              level: `B2`,
              type: `email`,
              prompt: `投诉电话打完了。给 Emma 发一封正式邮件：再次道歉、说明原因、写清补偿和防再发措施。`,
              mustInclude: [
                `道歉并说明造成的影响`,
                `原因一两句，不推责`,
                `补偿和防再发措施`,
                `后续联系方式或下一步`,
              ],
              words: [100, 150],
              tips: [
                {
                  en: `I'm writing to follow up on our call and to apologise again for…`,
                  zh: `接着我们的通话，再次为……道歉`,
                },
                { en: `The delay was caused by…`, zh: `延误是由……造成的` },
                {
                  en: `To make up for this, we will…`,
                  zh: `作为补偿，我们将……`,
                },
                {
                  en: `To prevent this from happening again, we have…`,
                  zh: `为了避免再次发生，我们已经……`,
                },
                {
                  en: `Please don't hesitate to contact me directly if…`,
                  zh: `如果……，请直接联系我`,
                },
                { en: `Thank you for your patience.`, zh: `感谢您的耐心` },
              ],
              sample: `Subject: Apology and next steps – October report

Dear Emma,

I'm writing to follow up on our call and to apologise again for the late delivery of the October report. I understand it left you without key figures for your board meeting, and I'm sorry for the position that put you in.

The delay was caused by a pipeline failure over the weekend that wasn't detected until Monday. To make up for this, we will apply a 15% credit to this month's invoice. To prevent it from happening again, we have set up a weekend on-call rota, and you will receive an early-warning email if any report is at risk of slipping.

Please don't hesitate to contact me directly if anything else comes up.

Kind regards,
[Your name]`,
            },
          ],
        },
        {
          id: `breakroom`,
          districtId: `work`,
          name: `茶水间`,
          nameEn: `Break Room`,
          emoji: `🍻`,
          blurb: `聊周末、约午饭，和同事 Chris 混熟`,
          npc: {
            id: `chris`,
            name: `Chris`,
            role: `同事`,
            roleEn: `colleague`,
            emoji: `🧔`,
            voice: `male`,
            persona: `Chris is an easygoing colleague from the sales team who runs on coffee, plays in a Saturday soccer league, follows F1, and always has a restaurant recommendation. He speaks relaxed, slangy American English with lots of "honestly" and "man", keeps things light, and asks people about their weekends.`,
          },
          freeChatTopics: [
            `聊聊你最近看的剧或比赛`,
            `问他周末有什么计划`,
            `问他附近哪家午饭好吃`,
          ],
          missions: [
            {
              id: `breakroom-weekend`,
              locationId: `breakroom`,
              title: `周一闲聊周末`,
              level: `A2`,
              xp: 40,
              playerRole: `周一早上在茶水间碰到 Chris。聊聊各自的周末，让他推荐个地方。`,
              scene: `Monday 9 a.m. by the coffee machine. Chris went hiking at Lake Travis on Saturday and watched his soccer team lose 2-1 on Sunday. He loves asking people what they did and recommending places: a taco truck called Veracruz and a trail at Barton Creek. He keeps it light and short.`,
              objectives: [
                {
                  zh: `问 Chris 周末过得怎么样并回应`,
                  en: `Learner asks about Chris's weekend and reacts to what he says`,
                },
                {
                  zh: `讲讲自己周末做的两件事`,
                  en: `Learner describes at least two things they did on the weekend`,
                },
                {
                  zh: `追问他一个细节`,
                  en: `Learner asks a follow-up question about a detail, such as where he went or how it was`,
                },
                {
                  zh: `让他推荐一个地方或活动`,
                  en: `Learner asks Chris for a recommendation`,
                },
              ],
              opening: `Hey! Monday, huh? How was your weekend?`,
              phrases: [
                { en: `How was your weekend?`, zh: `周末过得怎么样？` },
                {
                  en: `It was pretty chill. I mostly…`,
                  zh: `挺放松的，我基本在……`,
                },
                {
                  en: `I went to the farmers market and tried a new ramen place.`,
                  zh: `我去了农夫市集，还试了家新拉面店`,
                },
                { en: `Oh nice, where did you go?`, zh: `不错，你去哪儿了？` },
                {
                  en: `Sorry to hear that. Was it a close game?`,
                  zh: `真遗憾，比分接近吗？`,
                },
                {
                  en: `Any good hikes you'd recommend?`,
                  zh: `有推荐的徒步路线吗？`,
                },
                { en: `I'll check it out.`, zh: `我去看看` },
                {
                  en: `Anyway, back to it. Catch you later!`,
                  zh: `行，干活去了，回头聊`,
                },
              ],
              grammar: {
                title: `聊过去：一般过去时 went / had / was`,
                explain: [
                  `说周末做了什么用过去式：I went, I watched, It was`,
                  `问句用 did + 动词原形：Where did you go?`,
                  `否定用 didn't + 原形：I didn't do much`,
                ],
                examples: [
                  {
                    en: `I went hiking and had tacos after.`,
                    zh: `我去徒步了，然后吃了塔可`,
                  },
                  { en: `What did you do on Sunday?`, zh: `你周日做了什么？` },
                  {
                    en: `I didn't do much, just slept in.`,
                    zh: `没干什么，就睡了个懒觉`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Hey, how was your weekend?`,
                  zh: `嘿，周末过得怎么样？`,
                },
                {
                  en: `It was pretty chill. I went to the farmers market.`,
                  zh: `挺放松的，我去了农夫市集`,
                },
                {
                  en: `Oh nice, where did you go hiking?`,
                  zh: `不错，你去哪儿徒步了？`,
                },
                {
                  en: `We lost two to one in the last minute. Brutal.`,
                  zh: `最后一分钟一比二输了，太惨了`,
                },
                {
                  en: `Any good taco places you'd recommend?`,
                  zh: `有推荐的塔可店吗？`,
                },
                {
                  en: `Anyway, back to it. Catch you later!`,
                  zh: `行，干活去了，回头聊`,
                },
              ],
              twist: `Mention that your soccer team lost 2-1 and see if the learner reacts; then ask if they would like to come to a game sometime.`,
            },
            {
              id: `breakroom-lunch`,
              locationId: `breakroom`,
              title: `约同事吃午饭`,
              level: `B1`,
              xp: 50,
              playerRole: `你来公司两周了，想约 Chris 吃个午饭，顺便聊聊兴趣爱好，混熟一点。`,
              scene: `Wednesday 11:30 a.m. in the break room. Chris is free for lunch today or Friday. He likes the Veracruz taco truck and a Thai place two blocks away, but he is allergic to shellfish. He plays soccer on Saturdays and is into podcasts and F1. He will ask about the learner's hobbies and invite them to join the Saturday soccer league.`,
              objectives: [
                {
                  zh: `发出午饭邀请并商定时间地点`,
                  en: `Learner invites Chris to lunch and they agree on a time and place`,
                },
                {
                  zh: `问 Chris 的爱好并回应`,
                  en: `Learner asks about Chris's hobbies and reacts to his answer`,
                },
                {
                  zh: `介绍自己的一个爱好，说说为什么喜欢`,
                  en: `Learner describes one of their own hobbies and why they enjoy it`,
                },
                {
                  zh: `回应他的邀请：接受或委婉推掉`,
                  en: `Learner accepts or politely declines Chris's invitation to soccer`,
                },
              ],
              opening: `Oh hey, perfect timing—I was just about to grab a coffee. What's up?`,
              phrases: [
                {
                  en: `Do you want to grab lunch today?`,
                  zh: `今天一起吃午饭吗？`,
                },
                {
                  en: `How about the Thai place on 5th?`,
                  zh: `第五街那家泰国菜怎么样？`,
                },
                { en: `Let's do 12:30.`, zh: `那就 12 点半` },
                {
                  en: `What do you do outside of work?`,
                  zh: `你下班后一般干什么？`,
                },
                {
                  en: `I'm really into cycling—it clears my head.`,
                  zh: `我很喜欢骑行，能让脑子清静`,
                },
                {
                  en: `That sounds fun. How long have you been playing?`,
                  zh: `听着挺有意思，你踢多久了？`,
                },
                {
                  en: `I'd love to, but I'm not much of a soccer player.`,
                  zh: `很想去，但我不太会踢球`,
                },
                { en: `Count me in.`, zh: `算我一个` },
              ],
              grammar: {
                title: `发邀请、提建议：Do you want to… / How about… / Let's…`,
                explain: [
                  `邀请用 Do you want to + 动词：Do you want to grab lunch?`,
                  `提议用 How about + 名词 / 动词 ing：How about Thai?`,
                  `定下来用 Let's + 动词：Let's do 12:30`,
                  `委婉拒绝：I'd love to, but…`,
                ],
                examples: [
                  {
                    en: `Do you want to grab lunch on Friday?`,
                    zh: `周五一起吃午饭吗？`,
                  },
                  {
                    en: `How about trying the new ramen place?`,
                    zh: `去试试那家新拉面店怎么样？`,
                  },
                  {
                    en: `I'd love to, but I've got a call at noon.`,
                    zh: `很想去，但我中午有个电话会`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Do you want to grab lunch today? My treat.`,
                  zh: `今天一起吃午饭吗？我请`,
                },
                {
                  en: `How about the Thai place two blocks away?`,
                  zh: `两条街外那家泰国菜怎么样？`,
                },
                {
                  en: `I'm really into cycling. It clears my head.`,
                  zh: `我很喜欢骑行，能让脑子清静`,
                },
                {
                  en: `How long have you been playing soccer?`,
                  zh: `你踢球踢多久了？`,
                },
                {
                  en: `I'd love to, but I'm not much of a soccer player.`,
                  zh: `很想去，但我不太会踢球`,
                },
                {
                  en: `Count me in. Saturday at ten works for me.`,
                  zh: `算我一个，周六十点可以`,
                },
              ],
              twist: `If the learner suggests seafood, say you are allergic to shellfish. Later, invite them to Saturday soccer and accept a polite no gracefully.`,
            },
          ],
          writing: [
            {
              id: `breakroom-team-invite`,
              locationId: `breakroom`,
              title: `组织团队聚餐`,
              level: `A2`,
              type: `message`,
              prompt: `看板上线了，你想组织周五下班后聚餐。在团队群里发一条消息，让大家回复能不能来。`,
              mustInclude: [
                `时间和地点`,
                `为什么聚：庆祝或欢迎`,
                `让大家回复能不能来`,
                `一句轻松的话`,
              ],
              words: [40, 70],
              tips: [
                { en: `Hey team!`, zh: `各位！` },
                {
                  en: `We're getting together at … on Friday at 6.`,
                  zh: `周五六点我们在……聚一下`,
                },
                {
                  en: `To celebrate the launch / to welcome…`,
                  zh: `庆祝上线 / 欢迎……`,
                },
                { en: `Drop a 👍 if you're in.`, zh: `能来的点个 👍` },
                { en: `Partners welcome.`, zh: `欢迎带家属` },
                { en: `First round's on me.`, zh: `第一轮我请` },
              ],
              sample: `Hey team! To celebrate the dashboard launch, we're getting together at Veracruz Tacos on Friday at 6 p.m. Nothing fancy—just tacos, drinks, and no talk about pipelines. Partners and plus-ones are welcome. Drop a 👍 by Thursday if you're in so I can book a table. First round's on me!`,
            },
          ],
        },
        {
          id: `conference`,
          districtId: `work`,
          name: `行业会议`,
          nameEn: `Conference`,
          emoji: `🎤`,
          blurb: `介绍自己、会后提问、提出合作，和创始人 Dana 搭上线`,
          npc: {
            id: `dana`,
            name: `Dana`,
            role: `创业公司创始人`,
            roleEn: `startup founder`,
            emoji: `👩‍🚀`,
            voice: `female`,
            persona: `Dana is the founder of Looply, a 12-person startup that builds customer survey tools. She is an energetic networker who talks fast, asks "So what do you do?" within ten seconds, loves swapping contacts, and gets straight to the point. American English, lots of enthusiasm, but she is cautious about partnerships that go nowhere.`,
          },
          freeChatTopics: [
            `问她创业最难的一关是什么`,
            `聊聊这次大会哪个分享最好`,
            `问她用什么工具管团队`,
          ],
          missions: [
            {
              id: `conference-intro`,
              locationId: `conference`,
              title: `介绍自己和公司`,
              level: `B1`,
              xp: 50,
              playerRole: `你在 SaaS 大会的展区遇到 Dana。用 30 秒介绍你是谁、公司做什么，再问问她的公司。`,
              scene: `Booth area at SaaS Connect in Austin. Dana runs Looply, a 12-person startup that builds customer survey tools. The learner works at Brightline Analytics, a 50-person data company in Austin that turns sales and customer data into dashboards for about 60 retail customers, mostly mid-size online stores. Dana will ask what the learner does, who their customers are, and what brought them to the conference.`,
              objectives: [
                {
                  zh: `介绍自己的名字、公司和职位`,
                  en: `Learner gives their name, company and job title`,
                },
                {
                  zh: `一句话说清公司做什么、服务谁`,
                  en: `Learner explains what their company does and who its customers are`,
                },
                {
                  zh: `问 Dana 她的公司做什么`,
                  en: `Learner asks what Looply does`,
                },
                {
                  zh: `说明你来会议想收获什么`,
                  en: `Learner says what they hope to get out of the conference`,
                },
              ],
              opening: `Hi there! Dana, Looply—we do survey tools. So what do you do?`,
              phrases: [
                {
                  en: `I'm … from Brightline Analytics.`,
                  zh: `我是 Brightline Analytics 的……`,
                },
                {
                  en: `We're a data company based in Austin.`,
                  zh: `我们是奥斯汀的一家数据公司`,
                },
                {
                  en: `We help retailers turn their sales data into dashboards.`,
                  zh: `我们帮零售商把销售数据做成看板`,
                },
                {
                  en: `Our customers are mostly mid-size online stores.`,
                  zh: `我们的客户主要是中型网店`,
                },
                {
                  en: `What does Looply do exactly?`,
                  zh: `Looply 具体做什么？`,
                },
                {
                  en: `I'm here to meet potential partners.`,
                  zh: `我来是想找合作伙伴`,
                },
                { en: `That sounds really interesting.`, zh: `听起来很有意思` },
                { en: `How big is your team?`, zh: `你们团队多大？` },
              ],
              grammar: {
                title: `介绍公司：We're a… / We help… / We're based in…`,
                explain: [
                  `公司是什么用 We're a + 名词：We're a data company`,
                  `做什么用 We help + 人 + 动词：We help retailers see…`,
                  `在哪里用 be based in：We're based in Austin`,
                  `客户用 Our customers are mostly…`,
                ],
                examples: [
                  {
                    en: `We're a 50-person data company based in Austin.`,
                    zh: `我们是奥斯汀一家 50 人的数据公司`,
                  },
                  {
                    en: `We help online stores understand their sales.`,
                    zh: `我们帮网店看懂自己的销售`,
                  },
                  {
                    en: `Our customers are mostly mid-size retailers.`,
                    zh: `我们的客户主要是中型零售商`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Hi, I'm Dana from Looply. So what do you do?`,
                  zh: `嗨，我是 Looply 的 Dana，你是做什么的？`,
                },
                {
                  en: `I work at Brightline Analytics. We're based in Austin.`,
                  zh: `我在 Brightline Analytics，总部在奥斯汀`,
                },
                {
                  en: `We help retailers turn their sales data into dashboards.`,
                  zh: `我们帮零售商把销售数据做成看板`,
                },
                {
                  en: `Our customers are mostly mid-size online stores.`,
                  zh: `我们客户主要是中型网店`,
                },
                {
                  en: `What does Looply do exactly?`,
                  zh: `Looply 具体是做什么的？`,
                },
                {
                  en: `I'm here to meet potential partners and see what's new.`,
                  zh: `我来是想找合作伙伴、看看新东西`,
                },
              ],
              twist: `After hearing about Brightline, ask who their typical customer is and how big the team is.`,
            },
            {
              id: `conference-questions`,
              locationId: `conference`,
              title: `提问并交换联系方式`,
              level: `B1`,
              xp: 50,
              playerRole: `刚听完 Dana 的小型分享。你想问她两个有质量的问题，然后交换联系方式，约好会后再联系。`,
              scene: `Right after Dana's 15-minute talk, "Surveys that people actually answer." Key points of her talk: response rates doubled when surveys were cut to three questions; Looply sends surveys by SMS; they charge $99 per month. Dana appreciates specific questions, gives direct answers, and is happy to connect on LinkedIn or share her email, dana@looply.io. She has another session in five minutes.`,
              objectives: [
                {
                  zh: `对分享内容做一句具体的肯定`,
                  en: `Learner gives a specific compliment about something in the talk`,
                },
                {
                  zh: `问至少两个和分享内容相关的问题`,
                  en: `Learner asks at least two questions related to the talk`,
                },
                {
                  zh: `提出交换联系方式`,
                  en: `Learner asks to connect on LinkedIn, exchange emails or business cards`,
                },
                {
                  zh: `约定会后怎么跟进`,
                  en: `Learner agrees on how and when to follow up after the conference`,
                },
              ],
              opening: `Hey, you were in the front row! Thanks for sticking around. Any questions?`,
              phrases: [
                {
                  en: `I really liked the point about three-question surveys.`,
                  zh: `我特别喜欢你讲的三题问卷那一点`,
                },
                {
                  en: `Could you tell me how you measured the response rate?`,
                  zh: `能说说你们怎么统计回复率的吗？`,
                },
                {
                  en: `I'd love to know what kind of customers use SMS surveys.`,
                  zh: `我想知道什么样的客户用短信问卷`,
                },
                {
                  en: `Do you mind if I ask about pricing?`,
                  zh: `方便问一下价格吗？`,
                },
                {
                  en: `Are you on LinkedIn? I'd love to connect.`,
                  zh: `你用 LinkedIn 吗？想加个好友`,
                },
                { en: `Here's my card.`, zh: `这是我的名片` },
                {
                  en: `Could I email you next week to follow up?`,
                  zh: `下周我能给你发邮件跟进吗？`,
                },
                {
                  en: `Great meeting you—I'll be in touch.`,
                  zh: `很高兴认识你，我再联系你`,
                },
              ],
              grammar: {
                title: `把问题问得客气：Could you tell me how… / I'd love to know what…`,
                explain: [
                  `直接问 How do you…? 没错，Could you tell me how you…? 更客气`,
                  `间接问句里不倒装：…how you measured it，不是 how did you`,
                  `问敏感问题先铺一句：Do you mind if I ask…`,
                ],
                examples: [
                  {
                    en: `Could you tell me how you got your first customers?`,
                    zh: `能说说你们最早的客户是怎么来的吗？`,
                  },
                  {
                    en: `I'd love to know what tools you use.`,
                    zh: `我想知道你们用什么工具`,
                  },
                  {
                    en: `Do you mind if I ask how much you charge?`,
                    zh: `方便问一下你们收费多少吗？`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Thanks for sticking around. Any questions?`,
                  zh: `谢谢留下来，有什么问题吗？`,
                },
                {
                  en: `I really liked your point about three-question surveys.`,
                  zh: `我很喜欢你说的三题问卷`,
                },
                {
                  en: `Could you tell me how you measured the response rate?`,
                  zh: `能说说你们怎么统计回复率的吗？`,
                },
                {
                  en: `Do you mind if I ask about your pricing?`,
                  zh: `方便问一下你们的价格吗？`,
                },
                {
                  en: `Are you on LinkedIn? I'd love to connect.`,
                  zh: `你用 LinkedIn 吗？想加个好友`,
                },
                {
                  en: `Great meeting you. I'll email you next week.`,
                  zh: `很高兴认识你，下周给你发邮件`,
                },
              ],
              twist: `Answer the first question briefly, then say you have to get to another session in five minutes, to see whether the learner moves quickly to exchange contacts.`,
            },
            {
              id: `conference-pitch`,
              locationId: `conference`,
              title: `提出合作`,
              level: `B2`,
              xp: 70,
              playerRole: `你觉得 Brightline 的看板和 Looply 的问卷可以打通。向 Dana 提出合作设想，说清对双方的好处，约一次正式会议。`,
              scene: `Coffee after the talk. The learner proposes an integration: Looply survey results flow into Brightline dashboards, so retailers see customer feedback next to sales numbers. Dana is interested but cautious: she has 12 people and only two engineers, and has been burned by partnerships that went nowhere. Facts: Brightline has about 60 retail customers, 8 of which already use Looply. She will ask what Brightline would build, what Looply would have to do, how many customers they share, and what is in it for her.`,
              objectives: [
                {
                  zh: `清楚说明合作设想：谁做什么、用户得到什么`,
                  en: `Learner explains the integration idea: who builds what and what users get`,
                },
                {
                  zh: `用具体数字说明对双方的好处`,
                  en: `Learner uses concrete numbers, such as shared customers, to show the benefit for both sides`,
                },
                {
                  zh: `回应 Dana 的顾虑：工程量或过去失败的合作`,
                  en: `Learner addresses Dana's concerns about engineering effort or past failed partnerships`,
                },
                {
                  zh: `约定一次正式会议和各自要带的材料`,
                  en: `Learner agrees on a follow-up meeting and what each side will bring`,
                },
              ],
              opening: `Okay, you said you had an idea. I'm listening—but I'll warn you, I've heard a lot of 'let's partner' this week.`,
              phrases: [
                {
                  en: `Here's the idea in one sentence:`,
                  zh: `一句话说我的想法：`,
                },
                {
                  en: `We'd build a connector that pulls your survey results into our dashboards.`,
                  zh: `我们做一个连接器，把你们的问卷结果拉进看板`,
                },
                {
                  en: `Retailers who use both tools could see feedback next to sales.`,
                  zh: `两个工具都用的零售商能把反馈和销售放一起看`,
                },
                {
                  en: `We already share eight customers.`,
                  zh: `我们已经有 8 个共同客户`,
                },
                {
                  en: `On your side, it would just be an API key.`,
                  zh: `你们这边只需要一个 API 密钥`,
                },
                {
                  en: `I get that—let's start small.`,
                  zh: `我理解，那我们从小的开始`,
                },
                {
                  en: `What if we pilot it with two customers first?`,
                  zh: `要不先用两个客户试点？`,
                },
                {
                  en: `Can we set up a call next week with your engineer?`,
                  zh: `下周能和你们工程师开个电话会吗？`,
                },
              ],
              grammar: {
                title: `用定语从句描述：a tool that… / customers who…`,
                explain: [
                  `描述东西用 that / which：a connector that pulls data`,
                  `描述人用 who：retailers who use both tools`,
                  `从句紧跟在被描述的词后面，别隔开`,
                ],
                examples: [
                  {
                    en: `We'd build a connector that pulls your results into our dashboards.`,
                    zh: `我们做个连接器把你们的结果拉进看板`,
                  },
                  {
                    en: `Retailers who use both tools would see feedback next to sales.`,
                    zh: `两边都用的零售商能把反馈和销售放一起看`,
                  },
                  {
                    en: `It's a small step which costs you almost nothing.`,
                    zh: `这一小步几乎不用你们花什么`,
                  },
                ],
              },
              shadow: [
                {
                  en: `I'm listening, but I've heard a lot of 'let's partner' this week.`,
                  zh: `我听着呢，不过这周听了太多「合作」了`,
                },
                {
                  en: `We'd build a connector that pulls your survey results into our dashboards.`,
                  zh: `我们做个连接器把你们问卷结果拉进看板`,
                },
                {
                  en: `We already share eight customers who use both tools.`,
                  zh: `我们已经有八个共同客户在用两边工具`,
                },
                {
                  en: `On your side, it would just be an API key and a short call.`,
                  zh: `你们这边只需要一个 API 密钥和一通短电话`,
                },
                {
                  en: `What if we pilot it with two customers first?`,
                  zh: `要不先拿两个客户试点？`,
                },
                {
                  en: `Fine. Send me a one-pager and let's talk next Thursday.`,
                  zh: `行，发我一页纸，下周四聊`,
                },
              ],
              twist: `Ask exactly what Looply's two engineers would have to build, and say you have been burned before; only agree to a meeting if the learner proposes a small first step.`,
            },
          ],
          writing: [
            {
              id: `conference-linkedin`,
              locationId: `conference`,
              title: `会后 LinkedIn 消息`,
              level: `B1`,
              type: `message`,
              prompt: `大会结束了。在 LinkedIn 上给 Dana 发一条跟进消息，提醒她你是谁，并把下一步约下来。`,
              mustInclude: [
                `提醒她你们在哪里聊过什么`,
                `感谢并提到她分享里的一点`,
                `提出下一步：会议或发材料`,
                `简短礼貌收尾`,
              ],
              words: [60, 100],
              tips: [
                {
                  en: `Hi Dana, great meeting you at SaaS Connect yesterday.`,
                  zh: `Dana 你好，昨天在 SaaS Connect 很高兴认识你`,
                },
                {
                  en: `I really enjoyed your talk on…`,
                  zh: `很喜欢你关于……的分享`,
                },
                { en: `As promised, here's…`, zh: `说好的……在这里` },
                {
                  en: `Would you be open to a 30-minute call next week?`,
                  zh: `下周方便打个 30 分钟的电话吗？`,
                },
                {
                  en: `I'll send over a one-pager by Wednesday.`,
                  zh: `我周三前把一页纸发过去`,
                },
                {
                  en: `Thanks again, and enjoy the rest of the conference!`,
                  zh: `再次感谢，祝大会顺利`,
                },
              ],
              sample: `Hi Dana, great meeting you at SaaS Connect yesterday—I was the one from Brightline asking about SMS surveys. I really enjoyed your talk, especially the point about cutting surveys down to three questions; we're going to try that with our own customers. As promised, I'll send over a one-pager on the dashboard integration by Wednesday. Would you be open to a 30-minute call with your engineer next Thursday? Thanks again, and enjoy the rest of the conference!`,
            },
          ],
        },
      ],
    },
    {
      id: `campus`,
      name: `校园区`,
      emoji: `🎓`,
      blurb: `找教授、选课、室友、小组作业、社团，留学生活全在这`,
      locations: [
        {
          id: `professor`,
          districtId: `campus`,
          name: `教授办公室`,
          nameEn: `Office Hours`,
          emoji: `🎓`,
          blurb: `答疑、求宽限、要推荐信，office hours 别白跑`,
          npc: {
            id: `alvarez`,
            name: `Prof. Alvarez`,
            role: `教授`,
            roleEn: `professor`,
            emoji: `👨‍🏫`,
            voice: `male`,
            persona: `Professor Alvarez teaches Introduction to Economics. He is warm, encouraging and genuinely curious about students, but strict about deadlines and expects people to come prepared. He speaks clear, slightly formal American English, explains ideas with everyday examples, and likes to ask what the student has already tried.`,
          },
          freeChatTopics: [
            `问他为什么选择教经济学`,
            `聊聊这门课你最感兴趣的部分`,
            `请他推荐一本课外书`,
          ],
          missions: [
            {
              id: `professor-concept`,
              locationId: `professor`,
              title: `弄懂一个概念`,
              level: `B1`,
              xp: 50,
              playerRole: `你是大一新生，刚上完经济学课，没听懂「机会成本」。你去 office hours 请教。`,
              scene: `Office hours in Room 412, Hale Hall, on a Tuesday afternoon. The course is ECON 101 (Introduction to Economics); the last lecture covered opportunity cost, and Problem Set 3 is due Friday. Professor Alvarez first checks what the student already understands, then explains with a concrete example (choosing between a part-time job and extra study time), and finally asks the student to explain the idea back in their own words.`,
              objectives: [
                {
                  zh: `说明你是哪门课的、来问什么`,
                  en: `Learner says which course they are in and that they are confused about opportunity cost`,
                },
                {
                  zh: `说清楚自己卡在哪一步`,
                  en: `Learner explains specifically what part they do not understand or what they have already tried`,
                },
                { zh: `请教授举个例子`, en: `Learner asks for an example` },
                {
                  zh: `用自己的话复述一遍确认理解`,
                  en: `Learner restates the concept in their own words to confirm understanding`,
                },
              ],
              opening: `Come on in, have a seat. You're in my ECON 101 section, right? What can I help you with today?`,
              phrases: [
                {
                  en: `I'm in your ECON 101 class, and I had a question about opportunity cost.`,
                  zh: `我上您的经济学101，想问问机会成本`,
                },
                {
                  en: `Could you explain what opportunity cost means in simple terms?`,
                  zh: `能用简单的话解释一下机会成本吗？`,
                },
                {
                  en: `I understand the definition, but I get lost when…`,
                  zh: `定义我懂，但一到……就糊涂了`,
                },
                { en: `Could you give me an example?`, zh: `能举个例子吗？` },
                {
                  en: `So if I understand correctly, it means…`,
                  zh: `那我理解得对的话，意思是……`,
                },
                { en: `Does that sound right?`, zh: `这样理解对吗？` },
                {
                  en: `That makes a lot more sense now, thank you.`,
                  zh: `现在清楚多了，谢谢`,
                },
              ],
              grammar: {
                title: `间接问句：Could you explain… / I was wondering…`,
                explain: [
                  `问教授问题别直接 What is X? 用 Could you explain…`,
                  `间接问句里不倒装：Could you tell me what it means`,
                  `I was wondering if… 最客气，适合提请求`,
                ],
                examples: [
                  {
                    en: `Could you tell me what the second question is asking?`,
                    zh: `能告诉我第二题在问什么吗？`,
                  },
                  {
                    en: `I was wondering if you could go over the example again.`,
                    zh: `不知道您能不能再讲一遍那个例子`,
                  },
                ],
              },
              shadow: [
                {
                  en: `What can I help you with today?`,
                  zh: `今天有什么我能帮你的？`,
                },
                {
                  en: `I had a question about opportunity cost.`,
                  zh: `我想问问机会成本`,
                },
                {
                  en: `Could you give me a concrete example?`,
                  zh: `能举个具体的例子吗？`,
                },
                {
                  en: `Think about what you give up when you choose one option.`,
                  zh: `想想选一个时你放弃了什么`,
                },
                {
                  en: `So if I understand correctly, it means the next best choice.`,
                  zh: `那我理解得对的话，就是次优选择`,
                },
                { en: `Does that sound right to you?`, zh: `这样理解对吗？` },
              ],
              twist: `After the learner asks, first ask them what they think opportunity cost means before explaining, to check their current understanding.`,
            },
            {
              id: `professor-extension`,
              locationId: `professor`,
              title: `申请延期交作业`,
              level: `B1`,
              xp: 60,
              playerRole: `期中论文周五截止，但你这周生病了，还有两场考试。你去请教授宽限几天。`,
              scene: `Office hours on Thursday. The ECON 101 midterm paper is due Friday at 5 p.m. Professor Alvarez's policy: extensions are possible only for a good reason, must be requested before the deadline, are normally up to three days, and he may ask for a doctor's note. He appreciates students who propose a specific new date instead of asking vaguely.`,
              objectives: [
                {
                  zh: `说明来意：想申请延期`,
                  en: `Learner clearly asks for an extension on the midterm paper`,
                },
                {
                  zh: `给出具体原因`,
                  en: `Learner gives a specific, honest reason (e.g. being sick, exams)`,
                },
                {
                  zh: `提出一个具体的新截止日期`,
                  en: `Learner proposes a specific new deadline`,
                },
                {
                  zh: `感谢并确认约定`,
                  en: `Learner thanks the professor and confirms the agreed date`,
                },
              ],
              opening: `Hi there. Thursday before a deadline—let me guess, this is about the midterm paper?`,
              phrases: [
                {
                  en: `I'd like to ask for a short extension on the midterm paper.`,
                  zh: `我想申请期中论文延期几天`,
                },
                {
                  en: `I've been sick since Monday and I'm still catching up.`,
                  zh: `我周一开始生病，现在还在补进度`,
                },
                {
                  en: `Would it be possible to submit it by Monday instead?`,
                  zh: `能改成周一交吗？`,
                },
                {
                  en: `I can send you a doctor's note if that helps.`,
                  zh: `需要的话我可以提供病假条`,
                },
                {
                  en: `I've already finished the first two sections.`,
                  zh: `前两部分我已经写完了`,
                },
                {
                  en: `I really appreciate it. I'll have it to you by Monday.`,
                  zh: `太感谢了，我周一一定交`,
                },
                {
                  en: `I understand if that's not possible.`,
                  zh: `如果不行我也理解`,
                },
              ],
              grammar: {
                title: `说明原因：because / since / due to`,
                explain: [
                  `because / since 后接完整句子：since I was sick`,
                  `due to 后接名词：due to illness，更正式`,
                  `原因放前面要加逗号：Since I was sick, I…`,
                ],
                examples: [
                  {
                    en: `Since I've been sick all week, I'm behind on the paper.`,
                    zh: `因为这周一直病着，论文进度落后了`,
                  },
                  {
                    en: `I missed two lectures due to a family emergency.`,
                    zh: `因为家里有急事，我缺了两节课`,
                  },
                ],
              },
              shadow: [
                {
                  en: `I'd like to ask for a short extension.`,
                  zh: `我想申请延期几天`,
                },
                {
                  en: `I've been sick since Monday.`,
                  zh: `我从周一就开始生病了`,
                },
                {
                  en: `Would it be possible to submit it by Monday instead?`,
                  zh: `能改成周一交吗？`,
                },
                {
                  en: `Extensions need to be requested before the deadline.`,
                  zh: `延期必须在截止前申请`,
                },
                {
                  en: `I'll need a doctor's note for my records.`,
                  zh: `我需要一张病假条留档`,
                },
                {
                  en: `Thank you, I really appreciate your understanding.`,
                  zh: `谢谢，非常感谢您的理解`,
                },
              ],
              twist: `When the learner proposes a new date, say that date is too late because you grade over the weekend, and offer a shorter extension (Sunday noon) instead.`,
            },
            {
              id: `professor-letter`,
              locationId: `professor`,
              title: `请教授写推荐信`,
              level: `B2`,
              xp: 80,
              playerRole: `你准备申请研究生，想请上过两门课的 Alvarez 教授写推荐信。最早截止日期在四周后。`,
              scene: `Office hours in early October. The learner took ECON 101 (A-) and ECON 220 (A) with Professor Alvarez and once presented a group project on housing prices in Seattle. He only writes letters for students he knows well, needs at least three weeks' notice, and asks for a CV, a draft statement of purpose, the program list with deadlines, and a reminder of what the student did in his classes. The earliest application deadline is November 5, four weeks away.`,
              objectives: [
                {
                  zh: `说明申请什么、请他写推荐信`,
                  en: `Learner explains they are applying to graduate programs and asks the professor to write a recommendation letter`,
                },
                {
                  zh: `提醒他你在他课上做过什么`,
                  en: `Learner reminds the professor of specific work they did in his classes (e.g. the housing project, grades)`,
                },
                {
                  zh: `说明截止日期和你会提供的材料`,
                  en: `Learner mentions the deadline and offers to send materials (CV, statement, program list)`,
                },
                {
                  zh: `问清他还需要什么`,
                  en: `Learner asks what else the professor needs from them`,
                },
              ],
              opening: `Good to see you again! It's been a while since ECON 220. What brings you by?`,
              phrases: [
                {
                  en: `I'm applying to master's programs in economics this fall.`,
                  zh: `我今年秋天申请经济学硕士`,
                },
                {
                  en: `Would you be willing to write me a letter of recommendation?`,
                  zh: `您愿意为我写一封推荐信吗？`,
                },
                {
                  en: `You might remember my project on housing prices in ECON 220.`,
                  zh: `您可能记得我在220课上做的房价项目`,
                },
                {
                  en: `The earliest deadline is November 5th, so there's about four weeks.`,
                  zh: `最早的截止日是11月5日，还有四周`,
                },
                {
                  en: `I can send you my CV and a draft of my statement today.`,
                  zh: `我今天就能把简历和文书初稿发您`,
                },
                {
                  en: `Is there anything else you'd need from me?`,
                  zh: `您还需要我提供什么吗？`,
                },
                {
                  en: `I'd be really grateful for your support.`,
                  zh: `非常感谢您的支持`,
                },
                {
                  en: `I completely understand if your schedule is too full.`,
                  zh: `如果您太忙，我完全理解`,
                },
              ],
              grammar: {
                title: `正式请求：Would you be willing to… / I'd be grateful if…`,
                explain: [
                  `重要请求用 Would you be willing to…，给对方拒绝空间`,
                  `I'd be grateful if you could… 比 Can you 正式得多`,
                  `先铺垫再开口：I'm applying to…, and…`,
                ],
                examples: [
                  {
                    en: `Would you be willing to serve as a reference for me?`,
                    zh: `您愿意当我的推荐人吗？`,
                  },
                  {
                    en: `I'd be grateful if you could submit it by the 5th.`,
                    zh: `如果您能在5号前提交，我会非常感激`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Would you be willing to write me a letter of recommendation?`,
                  zh: `您愿意为我写推荐信吗？`,
                },
                {
                  en: `I'm applying to master's programs in economics.`,
                  zh: `我在申请经济学硕士`,
                },
                {
                  en: `You might remember my project on housing prices.`,
                  zh: `您可能记得我的房价项目`,
                },
                {
                  en: `I'll need your CV and a draft of your statement.`,
                  zh: `我需要你的简历和文书初稿`,
                },
                {
                  en: `The earliest deadline is November fifth.`,
                  zh: `最早的截止日是11月5日`,
                },
                {
                  en: `Is there anything else you'd need from me?`,
                  zh: `您还需要我提供什么吗？`,
                },
              ],
              twist: `Before agreeing, ask which programs the learner is applying to and why, and say you can only write a strong letter if you remember their work—wait for them to remind you.`,
            },
          ],
          writing: [
            {
              id: `professor-extension-email`,
              locationId: `professor`,
              title: `写邮件申请延期`,
              level: `B1`,
              type: `email`,
              prompt: `你周五要交 ECON 101 的期中论文，但这周生病了。给 Alvarez 教授写一封邮件，申请延期到下周一。`,
              mustInclude: [
                `开头说明你是谁、哪门课`,
                `说清原因和目前进度`,
                `提出具体的新截止日期`,
                `礼貌结尾并表示感谢`,
              ],
              words: [80, 130],
              tips: [
                { en: `Dear Professor Alvarez,`, zh: `尊敬的 Alvarez 教授` },
                {
                  en: `I'm writing to ask for a short extension on…`,
                  zh: `我写信是想申请……延期几天`,
                },
                {
                  en: `Unfortunately, I've been sick since Monday and…`,
                  zh: `很遗憾，我从周一开始生病……`,
                },
                {
                  en: `Would it be possible to submit it by Monday, October 13?`,
                  zh: `能否改成10月13日周一交？`,
                },
                {
                  en: `I'm happy to provide a doctor's note.`,
                  zh: `我可以提供病假条`,
                },
                {
                  en: `Thank you for considering my request.`,
                  zh: `感谢您考虑我的请求`,
                },
              ],
              sample: `Dear Professor Alvarez,

I'm a student in your ECON 101 section (Tuesday/Thursday). I'm writing to ask for a short extension on the midterm paper due this Friday. Unfortunately, I've been sick since Monday and have missed most of this week's study time. I've already finished the first two sections and have a clear outline for the rest. Would it be possible to submit the paper by Monday, October 13, at 5 p.m.? I'm happy to provide a doctor's note if needed. Thank you very much for considering my request.

Best regards,
Li Wei`,
            },
            {
              id: `professor-letter-materials`,
              locationId: `professor`,
              title: `推荐信材料邮件`,
              level: `B2`,
              type: `email`,
              prompt: `Alvarez 教授答应给你写推荐信。给他发邮件：附上简历和文书初稿，列出申请项目和截止日期，提醒他你在他课上做过什么。`,
              mustInclude: [
                `感谢他答应写信`,
                `列出项目和截止日期`,
                `说明附件内容`,
                `简要提醒你在课上的表现`,
              ],
              words: [90, 140],
              tips: [
                {
                  en: `Thank you again for agreeing to write a letter for me.`,
                  zh: `再次感谢您答应为我写推荐信`,
                },
                {
                  en: `I've attached my CV and a draft of my statement of purpose.`,
                  zh: `附件是我的简历和文书初稿`,
                },
                {
                  en: `The programs and deadlines are:`,
                  zh: `申请的项目和截止日期如下：`,
                },
                {
                  en: `As a reminder, in ECON 220 I…`,
                  zh: `提醒一下，在经济学220课上我……`,
                },
                {
                  en: `Please let me know if there's anything else you need.`,
                  zh: `如还需要什么，请告诉我`,
                },
              ],
              sample: `Dear Professor Alvarez,

Thank you again for agreeing to write a recommendation letter for me. I've attached my CV, a draft of my statement of purpose, and the list of programs. The deadlines are:
• University of Washington, M.A. Economics – November 5
• Boston University, M.S. Economic Policy – December 1
• UC Davis, M.A. Economics – December 15

As a reminder, I took ECON 101 (A-) and ECON 220 (A) with you, and in ECON 220 I presented the group project on housing prices in Seattle, which you suggested I expand into my writing sample. The portals will email you the submission links this week. Please let me know if there's anything else you need from me.

With sincere thanks,
Li Wei`,
            },
          ],
        },
        {
          id: `library`,
          districtId: `campus`,
          name: `图书馆`,
          nameEn: `Library`,
          emoji: `📚`,
          blurb: `借书、订自习室、找论文资料，安静也能开口`,
          npc: {
            id: `chen`,
            name: `Ms. Chen`,
            role: `图书管理员`,
            roleEn: `research librarian`,
            emoji: `👩‍💼`,
            voice: `female`,
            persona: `Ms. Chen is a research librarian in her forties: patient, precise, and quietly funny. She speaks clear, measured American English, asks exactly what the student needs, and loves pointing people to the right database or the right floor.`,
          },
          freeChatTopics: [
            `问她最近有什么好书推荐`,
            `聊聊你喜欢在哪里学习`,
            `问图书馆有没有活动`,
          ],
          missions: [
            {
              id: `library-borrow`,
              locationId: `library`,
              title: `借书和订自习室`,
              level: `A2`,
              xp: 40,
              playerRole: `你是刚入学的留学生，第一次来图书馆。想借一本课上要读的书，再问问能不能订自习室。`,
              scene: `The main desk of Hayes Library on a weekday afternoon. Students borrow with their student ID; the loan period is three weeks with one online renewal. The book the learner wants, 'Thinking, Fast and Slow', is on the 3rd floor, call number BF441 .K238. Group study rooms are on the 2nd floor and can be booked at the desk or online for up to two hours; quiet study is on the 4th floor; printers are next to the elevators on each floor.`,
              objectives: [
                {
                  zh: `说出你要借的书并问在哪`,
                  en: `Learner asks where to find the book 'Thinking, Fast and Slow' or asks to borrow it`,
                },
                {
                  zh: `问清借期和怎么续借`,
                  en: `Learner asks how long they can keep the book or how to renew it`,
                },
                {
                  zh: `问能不能订自习室、怎么订`,
                  en: `Learner asks about booking a study room`,
                },
              ],
              opening: `Hi there, welcome to Hayes Library. How can I help you today?`,
              phrases: [
                {
                  en: `I'm looking for a book called 'Thinking, Fast and Slow'.`,
                  zh: `我想找一本书，叫《思考，快与慢》`,
                },
                { en: `Where can I find it?`, zh: `在哪里能找到？` },
                { en: `How long can I keep it?`, zh: `能借多久？` },
                { en: `Can I renew it online?`, zh: `可以在网上续借吗？` },
                {
                  en: `Is there a study room I can book?`,
                  zh: `有可以预订的自习室吗？`,
                },
                { en: `How do I book one?`, zh: `怎么预订？` },
                { en: `Do I need my student ID?`, zh: `需要学生证吗？` },
              ],
              grammar: {
                title: `问有没有、在哪：Is there a… / Where's the…`,
                explain: [
                  `第一次提到用 a：Is there a study room?`,
                  `双方都知道的用 the：Where's the printer?`,
                  `问位置用 Where can I find…? 更礼貌`,
                ],
                examples: [
                  {
                    en: `Is there a quiet floor in the library?`,
                    zh: `图书馆有安静的楼层吗？`,
                  },
                  { en: `Where's the elevator?`, zh: `电梯在哪？` },
                ],
              },
              shadow: [
                { en: `How can I help you today?`, zh: `今天需要什么帮助？` },
                {
                  en: `I'm looking for a book called Thinking, Fast and Slow.`,
                  zh: `我想找《思考，快与慢》这本书`,
                },
                {
                  en: `It's on the third floor, call number B F four four one.`,
                  zh: `在三楼，索书号 BF441`,
                },
                { en: `How long can I keep it?`, zh: `能借多久？` },
                {
                  en: `You can renew it once online.`,
                  zh: `可以在网上续借一次`,
                },
                {
                  en: `Is there a study room I can book?`,
                  zh: `有可以预订的自习室吗？`,
                },
              ],
              twist: `When the learner asks about a study room, say all rooms are full for today and offer a slot tomorrow morning or a quiet seat on the 4th floor instead.`,
            },
            {
              id: `library-sources`,
              locationId: `library`,
              title: `找论文资料`,
              level: `B1`,
              xp: 55,
              playerRole: `你要写一篇「社交媒体与睡眠」的课程论文，需要 5 篇可靠文献。你来请管理员帮忙。`,
              scene: `The research help desk. The library subscribes to JSTOR, PsycINFO and Google Scholar through the library login; peer-reviewed articles can be filtered with the 'Peer reviewed' checkbox. Ms. Chen suggests keywords like 'social media use', 'sleep quality', 'college students', and limiting results to the last ten years. The library also offers 30-minute research appointments and an APA citation guide.`,
              objectives: [
                {
                  zh: `说清论文题目和需要什么资料`,
                  en: `Learner explains the paper topic (social media and sleep) and what kind of sources they need`,
                },
                {
                  zh: `问该用哪个数据库、怎么搜`,
                  en: `Learner asks which database to use or how to search effectively`,
                },
                {
                  zh: `问怎么判断文献靠不靠谱`,
                  en: `Learner asks how to tell whether a source is reliable or peer-reviewed`,
                },
                {
                  zh: `问引用格式或预约深入帮助`,
                  en: `Learner asks about citation format or books a research appointment`,
                },
              ],
              opening: `Hi, you've found the research desk. What are you working on?`,
              phrases: [
                {
                  en: `I'm writing a paper on social media and sleep for my psychology class.`,
                  zh: `我在给心理课写一篇社交媒体与睡眠的论文`,
                },
                {
                  en: `I need about five peer-reviewed sources.`,
                  zh: `我需要大概五篇同行评审的文献`,
                },
                {
                  en: `Which database would you recommend?`,
                  zh: `您推荐用哪个数据库？`,
                },
                {
                  en: `I've tried Google, but I haven't found anything solid.`,
                  zh: `我试过谷歌，但没找到靠谱的`,
                },
                {
                  en: `How can I tell if an article is reliable?`,
                  zh: `怎么判断一篇文章靠不靠谱？`,
                },
                { en: `What keywords should I use?`, zh: `我该用什么关键词？` },
                {
                  en: `Do you have a guide for APA citations?`,
                  zh: `有 APA 引用格式的指南吗？`,
                },
              ],
              grammar: {
                title: `说进展：I've already… / I haven't… yet`,
                explain: [
                  `到目前为止做了什么用现在完成时：I've tried…`,
                  `还没做到用 haven't… yet：I haven't found any yet`,
                  `already 放在 have 后面：I've already read two`,
                ],
                examples: [
                  {
                    en: `I've already found two articles, but I need three more.`,
                    zh: `我已经找到两篇，还需要三篇`,
                  },
                  {
                    en: `I haven't checked JSTOR yet.`,
                    zh: `我还没查过 JSTOR`,
                  },
                ],
              },
              shadow: [
                { en: `What are you working on?`, zh: `你在做什么课题？` },
                {
                  en: `I'm writing a paper on social media and sleep.`,
                  zh: `我在写社交媒体与睡眠的论文`,
                },
                {
                  en: `I've tried Google, but I haven't found anything solid.`,
                  zh: `我试过谷歌，但没找到靠谱的`,
                },
                {
                  en: `Try PsycINFO and check the peer-reviewed box.`,
                  zh: `试试 PsycINFO，勾上同行评审`,
                },
                {
                  en: `Limit your results to the last ten years.`,
                  zh: `把结果限定在最近十年`,
                },
                {
                  en: `We also offer thirty-minute research appointments.`,
                  zh: `我们还提供30分钟的研究咨询`,
                },
              ],
              twist: `Ask the learner what they have already tried before recommending anything, and if they mention a blog or news site, point out that it is not peer-reviewed.`,
            },
          ],
          writing: [
            {
              id: `library-request`,
              locationId: `library`,
              title: `邮件求助找资料`,
              level: `B1`,
              type: `email`,
              prompt: `你的心理学论文需要「社交媒体与睡眠」的文献，但数据库登录不了。给图书馆研究台的 Ms. Chen 写邮件求助。`,
              mustInclude: [
                `说明论文主题和需要的文献类型`,
                `描述登录数据库遇到的问题`,
                `提出想预约一次研究咨询`,
                `留下你方便的时间`,
              ],
              words: [70, 110],
              tips: [
                {
                  en: `I'm a first-year student working on a paper about…`,
                  zh: `我是大一学生，正在写关于……的论文`,
                },
                {
                  en: `I'm having trouble logging in to PsycINFO.`,
                  zh: `我登录 PsycINFO 时遇到问题`,
                },
                {
                  en: `Could you point me to a few reliable sources?`,
                  zh: `能给我指几个靠谱的资料来源吗？`,
                },
                {
                  en: `I'd also like to book a research appointment.`,
                  zh: `我还想预约一次研究咨询`,
                },
                {
                  en: `I'm free on Tuesday afternoon or Thursday morning.`,
                  zh: `我周二下午或周四上午有空`,
                },
              ],
              sample: `Dear Ms. Chen,

I'm a first-year psychology student working on a paper about social media use and sleep quality. I need about five peer-reviewed articles, but when I try to log in to PsycINFO from my laptop, I get an error saying my account is not recognized. Could you let me know what I should check? I'd also like to book a 30-minute research appointment to go over search strategies. I'm free on Tuesday afternoon or Thursday morning. Thank you for your help.

Best,
Li Wei`,
            },
          ],
        },
        {
          id: `dorm`,
          districtId: `campus`,
          name: `宿舍`,
          nameEn: `Dorm`,
          emoji: `🛏️`,
          blurb: `认识室友、定规矩、解决矛盾，一起计划周末`,
          npc: {
            id: `alex`,
            name: `Alex`,
            role: `室友`,
            roleEn: `roommate`,
            emoji: `🧑‍🎤`,
            voice: `male`,
            persona: `Alex is a sophomore from Chicago: easygoing, funny and a little messy. He games until 2 a.m., leaves dishes in the sink, and genuinely likes his roommate. He speaks very casual American English with phrases like 'no worries', 'my bad' and 'for sure', and is quick to compromise when asked nicely.`,
          },
          freeChatTopics: [
            `聊聊他的家乡芝加哥`,
            `问他最近在玩什么游戏`,
            `聊聊食堂哪个最好吃`,
          ],
          missions: [
            {
              id: `dorm-meet`,
              locationId: `dorm`,
              title: `认识室友、定规矩`,
              level: `A2`,
              xp: 40,
              playerRole: `开学第一天，你搬进双人间，室友 Alex 已经到了。你们第一次见面，聊聊彼此，顺便定几条宿舍规矩。`,
              scene: `Move-in day in Room 214, Harper Hall. Alex arrived yesterday and took the bed by the window. He is a computer science major who usually goes to bed around 2 a.m. and wakes up at 10. He is open to rules about lights, cleaning and guests if asked. He will ask where the learner is from, what they study, and whether they're okay with him gaming at night with headphones.`,
              objectives: [
                {
                  zh: `自我介绍：名字、来自哪、学什么`,
                  en: `Learner introduces themselves: name, where they are from, and their major`,
                },
                {
                  zh: `问问室友的情况`,
                  en: `Learner asks Alex about himself (major, hometown, hobbies, or schedule)`,
                },
                {
                  zh: `提出至少两条宿舍规矩`,
                  en: `Learner proposes at least two house rules (e.g. quiet hours, cleaning, guests)`,
                },
                {
                  zh: `商定好一个具体的安静时间`,
                  en: `Learner and Alex agree on a specific quiet time`,
                },
              ],
              opening: `Hey! You must be my roommate. I'm Alex—I grabbed the bed by the window, hope that's cool?`,
              phrases: [
                {
                  en: `Hi, I'm Wei. I'm from Chengdu, China.`,
                  zh: `你好，我是小伟，来自中国成都`,
                },
                { en: `What are you studying?`, zh: `你学什么专业？` },
                { en: `I'm majoring in business.`, zh: `我学商科` },
                {
                  en: `Let's set a few ground rules.`,
                  zh: `咱们定几条基本规矩吧`,
                },
                {
                  en: `How about quiet hours after 11 on weekdays?`,
                  zh: `工作日11点以后保持安静怎么样？`,
                },
                {
                  en: `Can we take turns taking out the trash?`,
                  zh: `我们轮流倒垃圾行吗？`,
                },
                {
                  en: `Let me know before you have friends over.`,
                  zh: `叫朋友来之前跟我说一声`,
                },
                { en: `Sounds good to me.`, zh: `我觉得行` },
              ],
              grammar: {
                title: `提建议：Let's… / How about + V-ing`,
                explain: [
                  `Let's 后接动词原形：Let's take turns`,
                  `How about 后接 V-ing：How about cleaning on Sundays?`,
                  `问对方是否接受：Is that okay with you?`,
                ],
                examples: [
                  {
                    en: `Let's keep the lights off after midnight.`,
                    zh: `午夜以后咱们把灯关掉吧`,
                  },
                  {
                    en: `How about splitting the fridge in half?`,
                    zh: `冰箱一人一半怎么样？`,
                  },
                ],
              },
              shadow: [
                { en: `You must be my roommate.`, zh: `你一定就是我室友吧` },
                {
                  en: `I'm from Chengdu, and I'm majoring in business.`,
                  zh: `我来自成都，学商科`,
                },
                { en: `What are you studying?`, zh: `你学什么专业？` },
                {
                  en: `Let's set a few ground rules.`,
                  zh: `咱们定几条基本规矩吧`,
                },
                {
                  en: `How about quiet hours after eleven on weekdays?`,
                  zh: `工作日11点以后保持安静怎么样？`,
                },
                {
                  en: `Sounds good to me, no worries.`,
                  zh: `我觉得行，没问题`,
                },
              ],
              twist: `When quiet hours come up, say you usually game until 2 a.m. with headphones on and ask if that's a problem, then compromise once the learner explains their schedule.`,
            },
            {
              id: `dorm-noise`,
              locationId: `dorm`,
              title: `好好谈谈噪音问题`,
              level: `B1`,
              xp: 55,
              playerRole: `住了一个月，Alex 半夜打游戏太吵，水槽里的碗也堆了三天。你明天早八考试，想今晚跟他好好谈谈。`,
              scene: `Room 214 at 9 p.m. Over the past two weeks Alex has been gaming with friends on voice chat until 2 a.m. and has left dishes in the sink for three days. The learner has an 8 a.m. exam tomorrow. Alex does not realize how loud he is and gets a bit defensive if blamed harshly, but he will apologize and agree to concrete changes (headphones, moving to the lounge after midnight, dishes within a day) if the learner is polite and specific.`,
              objectives: [
                {
                  zh: `委婉开口，说明想谈个事`,
                  en: `Learner opens the conversation politely and says they want to talk about something`,
                },
                {
                  zh: `具体说明噪音怎么影响了你`,
                  en: `Learner describes the noise problem specifically and how it affects them (e.g. exam tomorrow)`,
                },
                {
                  zh: `提出碗堆着的问题`,
                  en: `Learner brings up the dishes in the sink`,
                },
                {
                  zh: `一起商定具体的解决办法`,
                  en: `Learner and Alex agree on specific solutions (e.g. headphones after midnight, dishes within a day)`,
                },
              ],
              opening: `Hey, what's up? You look like you've got something on your mind.`,
              phrases: [
                {
                  en: `Hey, do you have a minute? I wanted to talk about something.`,
                  zh: `有空吗？我想聊个事`,
                },
                {
                  en: `I don't want to make a big deal of it, but…`,
                  zh: `我不想小题大做，但是……`,
                },
                {
                  en: `The voice chat has been pretty loud after midnight.`,
                  zh: `半夜语音开得挺响的`,
                },
                {
                  en: `I've got an 8 a.m. exam tomorrow, so I really need to sleep.`,
                  zh: `我明天早八考试，真得睡个好觉`,
                },
                {
                  en: `Would you mind using headphones after midnight?`,
                  zh: `午夜以后能戴耳机吗？`,
                },
                {
                  en: `Also, could we deal with the dishes within a day?`,
                  zh: `还有，碗能一天内洗掉吗？`,
                },
                { en: `Thanks for hearing me out.`, zh: `谢谢你听我说完` },
                { en: `No hard feelings, right?`, zh: `没生气吧？` },
              ],
              grammar: {
                title: `委婉请求：Would you mind + V-ing / Do you think you could…`,
                explain: [
                  `Would you mind 后接 V-ing：Would you mind turning it down?`,
                  `回答 Would you mind 时，No 才是答应`,
                  `Do you think you could… 给对方台阶，适合室友同事`,
                ],
                examples: [
                  {
                    en: `Would you mind keeping it down after midnight?`,
                    zh: `午夜以后能小声点吗？`,
                  },
                  {
                    en: `Do you think you could do the dishes tonight?`,
                    zh: `你今晚能把碗洗了吗？`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Do you have a minute? I wanted to talk about something.`,
                  zh: `有空吗？我想聊个事`,
                },
                {
                  en: `The voice chat has been pretty loud after midnight.`,
                  zh: `半夜语音开得挺响的`,
                },
                {
                  en: `I've got an eight a.m. exam tomorrow.`,
                  zh: `我明天早上八点考试`,
                },
                {
                  en: `Would you mind using headphones after midnight?`,
                  zh: `午夜以后能戴耳机吗？`,
                },
                {
                  en: `My bad, I didn't realize it was that loud.`,
                  zh: `抱歉，我没意识到那么吵`,
                },
                {
                  en: `Could we deal with the dishes within a day?`,
                  zh: `碗能一天内洗掉吗？`,
                },
              ],
              twist: `At first, say you thought the headphones were enough and that some of the dishes are the learner's—then apologize and agree once the learner stays calm and specific.`,
            },
            {
              id: `dorm-trip`,
              locationId: `dorm`,
              title: `计划周末短途`,
              level: `B1`,
              xp: 55,
              playerRole: `下周是长周末，你和 Alex 想一起去附近的国家公园玩两天。你们要定行程、交通和预算。`,
              scene: `Friday night in the dorm lounge, with a three-day weekend coming up. Pine Ridge National Park is two hours away by car. A rental car costs about $90 round trip split two ways; the bus is $25 each way but takes four hours. Camping is $20 a night, a cabin is $80 a night. Alex is a vegetarian and gets up late, and the forecast says rain on Sunday. The learner has never been camping.`,
              objectives: [
                {
                  zh: `提议去哪、哪天去`,
                  en: `Learner proposes a destination and dates (e.g. Pine Ridge over the long weekend)`,
                },
                {
                  zh: `讨论并定下交通方式`,
                  en: `Learner discusses transport options and agrees on one (car or bus)`,
                },
                {
                  zh: `谈好住哪和预算`,
                  en: `Learner discusses accommodation (camping or cabin) and budget`,
                },
                {
                  zh: `分好谁负责什么`,
                  en: `Learner and Alex divide the tasks (booking, food, etc.)`,
                },
              ],
              opening: `Yo, long weekend coming up! Please tell me you're not planning to just study the whole time.`,
              phrases: [
                {
                  en: `I was thinking we could go to Pine Ridge next weekend.`,
                  zh: `我在想下周末可以去松岭公园`,
                },
                {
                  en: `How are we getting there—bus or rental car?`,
                  zh: `我们怎么去，大巴还是租车？`,
                },
                {
                  en: `The car's faster, but we'd have to split the cost.`,
                  zh: `开车快，但得平摊费用`,
                },
                {
                  en: `Should we camp or get a cabin?`,
                  zh: `我们露营还是住小木屋？`,
                },
                {
                  en: `I've never been camping, honestly.`,
                  zh: `说实话我从没露营过`,
                },
                {
                  en: `I'll book the cabin if you handle the food.`,
                  zh: `我来订木屋，你负责吃的`,
                },
                {
                  en: `We're leaving Saturday morning, right?`,
                  zh: `我们周六早上出发，对吧？`,
                },
                {
                  en: `What's our budget per person?`,
                  zh: `我们每人预算多少？`,
                },
              ],
              grammar: {
                title: `将来安排：be going to / 现在进行时表计划`,
                explain: [
                  `已定计划用现在进行时：We're leaving on Saturday`,
                  `打算用 be going to：I'm going to book the cabin`,
                  `临时决定用 will：Okay, I'll drive`,
                ],
                examples: [
                  {
                    en: `We're leaving at nine on Saturday morning.`,
                    zh: `我们周六早上九点出发`,
                  },
                  {
                    en: `I'm going to check the weather tonight.`,
                    zh: `我今晚去看看天气`,
                  },
                ],
              },
              shadow: [
                { en: `Long weekend coming up!`, zh: `长周末要来了！` },
                {
                  en: `I was thinking we could go to Pine Ridge.`,
                  zh: `我在想可以去松岭公园`,
                },
                {
                  en: `How are we getting there, bus or rental car?`,
                  zh: `我们怎么去，大巴还是租车？`,
                },
                {
                  en: `The rental is about ninety dollars, split two ways.`,
                  zh: `租车大概90美元，两人平摊`,
                },
                {
                  en: `We're leaving Saturday morning and coming back Monday.`,
                  zh: `我们周六早上走，周一回来`,
                },
                {
                  en: `I'll book the cabin if you handle the food.`,
                  zh: `我订木屋，你负责吃的`,
                },
              ],
              twist: `After the plan is almost set, mention the forecast says rain on Sunday and ask whether to change the dates or book a cabin instead of camping.`,
            },
          ],
          writing: [
            {
              id: `dorm-rules-message`,
              locationId: `dorm`,
              title: `给室友发条消息`,
              level: `A2`,
              type: `message`,
              prompt: `你明天早八考试，今晚想早睡，但 Alex 还没回来。给他发一条短信，提醒今晚安静一点，顺便提下厨房的碗。`,
              mustInclude: [
                `友好开头`,
                `说明今晚需要安静的原因`,
                `提醒洗碗的事，语气别生硬`,
                `表达感谢或约定`,
              ],
              words: [40, 80],
              tips: [
                {
                  en: `Hey Alex, quick heads-up:`,
                  zh: `嘿 Alex，提前说一声：`,
                },
                {
                  en: `I've got an exam at 8 tomorrow, so…`,
                  zh: `我明天8点有考试，所以……`,
                },
                {
                  en: `Would you mind keeping it down tonight?`,
                  zh: `今晚能小声点吗？`,
                },
                {
                  en: `Also, the dishes have been there since Monday 😅`,
                  zh: `还有，碗从周一放到现在了`,
                },
                {
                  en: `Thanks, man. I owe you one.`,
                  zh: `谢了兄弟，欠你个人情`,
                },
              ],
              sample: `Hey Alex, quick heads-up: I've got an exam at 8 tomorrow morning, so I'm going to try to sleep by 11 tonight. Would you mind keeping the voice chat down after that, or maybe gaming in the lounge? Also, the dishes in the sink have been there since Monday 😅 Could you deal with yours tonight? I'll do mine when I get back. Thanks, man—I owe you one. Let's grab lunch after my exam!`,
            },
            {
              id: `dorm-trip-plan`,
              locationId: `dorm`,
              title: `写周末行程单`,
              level: `B1`,
              type: `note`,
              prompt: `你和 Alex 定好了去松岭公园的两天行程。写一份简短的行程安排发到你们俩的群里，让他确认。`,
              mustInclude: [
                `出发和返回的时间`,
                `交通和住宿安排`,
                `每人预算`,
                `谁负责什么`,
              ],
              words: [60, 100],
              tips: [
                {
                  en: `Here's the plan for Pine Ridge—let me know if anything's off.`,
                  zh: `这是松岭的计划，有问题告诉我`,
                },
                {
                  en: `We're leaving at 9 a.m. on Saturday and heading back Monday afternoon.`,
                  zh: `周六早9点出发，周一下午返程`,
                },
                {
                  en: `Rental car: about $45 each.`,
                  zh: `租车：每人大约45美元`,
                },
                {
                  en: `I'll book the cabin; you're in charge of food.`,
                  zh: `我订木屋，你负责吃的`,
                },
                {
                  en: `Total budget: around $120 per person.`,
                  zh: `总预算：每人约120美元`,
                },
              ],
              sample: `Here's the plan for Pine Ridge—let me know if anything's off!

Saturday: leaving campus at 9 a.m. in the rental car (about $45 each, split two ways). Check-in at the cabin at 2 p.m., then the lake trail in the afternoon.
Sunday: rain is likely, so we're doing the visitor center and the short forest loop.
Monday: heading back after lunch, home by 4 p.m.

I'll book the cabin ($80 a night, so $80 each for two nights) and you're in charge of food—vegetarian is fine with me. Total budget: around $150 per person.`,
            },
          ],
        },
        {
          id: `group`,
          districtId: `campus`,
          name: `小组作业`,
          nameEn: `Group Project`,
          emoji: `👥`,
          blurb: `分工、催稿、处理不靠谱队友，小组作业必修课`,
          npc: {
            id: `jordan`,
            name: `Jordan`,
            role: `同组同学`,
            roleEn: `classmate`,
            emoji: `🧑‍💻`,
            voice: `male`,
            persona: `Jordan is a sharp, charming junior who has great ideas and talks fast, but is famously flaky about deadlines and tends to over-promise. He speaks casual, confident American English, jokes a lot, and gets defensive for a moment when called out before admitting he dropped the ball.`,
          },
          freeChatTopics: [
            `问他为什么总是拖到最后`,
            `聊聊你们都讨厌哪种小组作业`,
            `问他毕业想做什么`,
          ],
          missions: [
            {
              id: `group-divide`,
              locationId: `group`,
              title: `分工做展示`,
              level: `B1`,
              xp: 55,
              playerRole: `市场营销课要做一个 15 分钟的小组展示，两周后交。你和 Jordan 一组，今天要把分工和时间表定下来。`,
              scene: `A study room on the 2nd floor of the library. The assignment is a 15-minute MKTG 201 presentation on a brand's social media strategy, due in two weeks (Friday the 24th). It needs research, a short survey, slides, and a rehearsal. Jordan is good at design and public speaking, hates data work, and will try to take only the fun parts and keep deadlines vague. He has a part-time job on Tuesdays and Thursdays.`,
              objectives: [
                {
                  zh: `列出展示要做的几块工作`,
                  en: `Learner lists the parts of the work (research, survey, slides, rehearsal, etc.)`,
                },
                {
                  zh: `按各自强项分工`,
                  en: `Learner proposes a division of work based on strengths and agrees who does what`,
                },
                {
                  zh: `给每块定一个明确的截止日期`,
                  en: `Learner sets specific internal deadlines for each part`,
                },
                {
                  zh: `约好排练时间`,
                  en: `Learner and Jordan schedule a rehearsal`,
                },
              ],
              opening: `Okay, so I had a genius idea for the presentation—what if we do the whole thing as a TikTok? Kidding. Mostly. Where do we start?`,
              phrases: [
                {
                  en: `Let's break this down into parts first.`,
                  zh: `咱们先把活拆成几块`,
                },
                {
                  en: `We need research, a survey, slides, and a rehearsal.`,
                  zh: `我们需要调研、问卷、幻灯片和排练`,
                },
                {
                  en: `You're great at design, so could you handle the slides?`,
                  zh: `你擅长设计，幻灯片你来做？`,
                },
                {
                  en: `I'll take care of the research and the survey.`,
                  zh: `调研和问卷我来负责`,
                },
                {
                  en: `Can we have the first draft done by next Wednesday?`,
                  zh: `初稿下周三前能做完吗？`,
                },
                {
                  en: `Let's rehearse on Thursday the 23rd.`,
                  zh: `我们23号周四排练吧`,
                },
                {
                  en: `Does that work with your job schedule?`,
                  zh: `这跟你打工时间冲突吗？`,
                },
                {
                  en: `I'll put all of this in a shared doc.`,
                  zh: `我把这些都写进共享文档`,
                },
              ],
              grammar: {
                title: `认领任务：I'll… / Could you handle… / be in charge of`,
                explain: [
                  `当场认领用 will：I'll take care of the survey`,
                  `请对方负责用 Could you handle…?`,
                  `说明谁负责：You're in charge of the slides`,
                ],
                examples: [
                  {
                    en: `I'll do the research, and you'll handle the slides.`,
                    zh: `我做调研，你负责幻灯片`,
                  },
                  { en: `Who's in charge of the survey?`, zh: `问卷谁负责？` },
                ],
              },
              shadow: [
                {
                  en: `Let's break this down into parts first.`,
                  zh: `咱们先把活拆成几块`,
                },
                {
                  en: `You're great at design, so could you handle the slides?`,
                  zh: `你擅长设计，幻灯片你来做？`,
                },
                {
                  en: `I'll take care of the research and the survey.`,
                  zh: `调研和问卷我来负责`,
                },
                {
                  en: `Can we have the first draft done by next Wednesday?`,
                  zh: `初稿下周三前能做完吗？`,
                },
                {
                  en: `Does that work with your job schedule?`,
                  zh: `这跟你打工时间冲突吗？`,
                },
                {
                  en: `I'll put all of this in a shared doc.`,
                  zh: `我把这些都写进共享文档`,
                },
              ],
              twist: `When deadlines come up, say 'let's just play it by ear' and only agree to specific dates if the learner insists and explains why.`,
            },
            {
              id: `group-flaky`,
              locationId: `group`,
              title: `队友没交活`,
              level: `B2`,
              xp: 75,
              playerRole: `说好周三交的幻灯片初稿，Jordan 周五还没动。展示下周五就要交。你得把话说开，又不想撕破脸。`,
              scene: `Friday afternoon in the library café. Jordan agreed to finish the slide draft by Wednesday but has done nothing; the presentation is next Friday. His excuse: extra shifts at work and 'the slides are easy, I'll do them Sunday'. The learner has already finished the research and survey. Jordan gets a little defensive, then admits it, if the learner stays calm, focuses on the impact, and proposes a concrete plan (e.g. six slides by Sunday noon, send a screenshot, rehearse Tuesday). He resists if the learner just complains.`,
              objectives: [
                {
                  zh: `冷静指出初稿没按时交`,
                  en: `Learner points out calmly that the slide draft was due Wednesday and is not done`,
                },
                {
                  zh: `说明这对项目和成绩的影响`,
                  en: `Learner explains the impact on the project, the grade, or their own time`,
                },
                {
                  zh: `听他解释并回应`,
                  en: `Learner acknowledges Jordan's explanation without simply accepting vague promises`,
                },
                {
                  zh: `定下新的具体安排和检查点`,
                  en: `Learner and Jordan agree on a concrete new plan with a checkpoint (date and deliverable)`,
                },
              ],
              opening: `Hey! Sorry, sorry, I know—the slides. This week has been insane at work. But honestly they're easy, I can knock them out Sunday.`,
              phrases: [
                {
                  en: `I get that work has been crazy, but the draft was due Wednesday.`,
                  zh: `我明白你工作很忙，但初稿周三就该交了`,
                },
                {
                  en: `I'm not trying to blame you; I'm worried about the deadline.`,
                  zh: `我不是要怪你，我是担心截止日期`,
                },
                {
                  en: `I've already finished the research and the survey.`,
                  zh: `我已经做完了调研和问卷`,
                },
                {
                  en: `I see your point, but 'Sunday' is what you said last week.`,
                  zh: `我理解，但你上周也说「周日」`,
                },
                {
                  en: `Can you send me six slides by Sunday noon?`,
                  zh: `周日中午前能发我六页吗？`,
                },
                {
                  en: `If it's not done by then, I'll have to take over the slides.`,
                  zh: `如果到时没做完，幻灯片就得我来接手`,
                },
                {
                  en: `Let's rehearse Tuesday so we have time to fix things.`,
                  zh: `我们周二排练，留时间改`,
                },
                {
                  en: `I appreciate you being honest about it.`,
                  zh: `谢谢你坦白说`,
                },
              ],
              grammar: {
                title: `柔性反驳：I see your point, but… / I understand, however…`,
                explain: [
                  `先认可再转折：I see your point, but…`,
                  `however 放句首要加逗号：However, the deadline…`,
                  `说影响不说人：It puts the whole project at risk`,
                ],
                examples: [
                  {
                    en: `I see your point, but we can't wait until Sunday.`,
                    zh: `我理解，但我们不能等到周日`,
                  },
                  {
                    en: `I understand work is busy. However, the deadline hasn't moved.`,
                    zh: `我理解工作忙，但截止日期没变`,
                  },
                ],
              },
              shadow: [
                {
                  en: `I get that work has been crazy, but the draft was due Wednesday.`,
                  zh: `我明白你很忙，但初稿周三就该交了`,
                },
                {
                  en: `I'm not trying to blame you, I'm worried about the deadline.`,
                  zh: `我不是要怪你，是担心截止日期`,
                },
                {
                  en: `I've already finished the research and the survey.`,
                  zh: `我已经做完了调研和问卷`,
                },
                {
                  en: `Can you send me six slides by Sunday noon?`,
                  zh: `周日中午前能发我六页吗？`,
                },
                {
                  en: `If it's not done by then, I'll take over the slides.`,
                  zh: `如果到时没做完，幻灯片我来接手`,
                },
                {
                  en: `Fair enough, that's on me. Sunday noon, you'll have them.`,
                  zh: `好吧，是我的问题，周日中午给你`,
                },
              ],
              twist: `When the learner proposes a checkpoint, push back once by saying 'you don't have to micromanage me', then accept if the learner explains it's about the shared grade, not trust.`,
            },
          ],
          writing: [
            {
              id: `group-chat-tasks`,
              locationId: `group`,
              title: `群里发分工消息`,
              level: `B1`,
              type: `message`,
              prompt: `你们小组定好了展示的分工。把分工、截止日期和排练时间整理成一条消息发到小组群里，让大家确认。`,
              mustInclude: [
                `每个人负责什么`,
                `每项的截止日期`,
                `排练时间地点`,
                `请大家确认或提出问题`,
              ],
              words: [60, 100],
              tips: [
                {
                  en: `Hi all, here's the plan we agreed on today:`,
                  zh: `大家好，这是我们今天定的计划：`,
                },
                {
                  en: `Jordan – slides, first draft by Wed 15th`,
                  zh: `Jordan 负责幻灯片，初稿15号周三前`,
                },
                {
                  en: `Me – research and survey, results by Mon 13th`,
                  zh: `我负责调研和问卷，13号周一出结果`,
                },
                {
                  en: `Rehearsal: Thursday 23rd, 4 p.m., Library Room 2B`,
                  zh: `排练：23号周四下午4点，图书馆2B`,
                },
                {
                  en: `Please thumbs-up to confirm or reply if anything doesn't work.`,
                  zh: `可以的话点个赞，有问题回复`,
                },
              ],
              sample: `Hi all, here's the plan we agreed on today for the MKTG 201 presentation (due Friday the 24th):

• Me – research and survey; results shared by Monday the 13th
• Jordan – slide deck; first draft by Wednesday the 15th
• Both – review and comments by Friday the 17th

Rehearsal: Thursday the 23rd at 4 p.m., Library Room 2B. Everything goes in the shared Google Doc (link pinned above). Please thumbs-up to confirm, or reply here if any date doesn't work for you. Thanks!`,
            },
            {
              id: `group-peer-eval`,
              locationId: `group`,
              title: `写同伴互评`,
              level: `B2`,
              type: `note`,
              prompt: `课程要求每人给队友写一段同伴评价，老师会看。Jordan 后期补上了幻灯片且做得不错，但前期拖延。客观地写一段。`,
              mustInclude: [
                `肯定他做得好的地方`,
                `如实说明拖延及影响`,
                `语气客观，不带情绪`,
                `给出一条具体建议`,
              ],
              words: [70, 110],
              tips: [
                {
                  en: `Jordan brought strong design skills to the project.`,
                  zh: `Jordan 为项目带来了出色的设计能力`,
                },
                {
                  en: `That said, the first draft came in four days late, which…`,
                  zh: `不过初稿晚了四天，这……`,
                },
                {
                  en: `Once we set a clear checkpoint, he delivered.`,
                  zh: `一旦定了明确的检查点，他就做到了`,
                },
                {
                  en: `In future projects, I'd suggest…`,
                  zh: `以后做项目，我建议……`,
                },
                {
                  en: `Overall, I'd rate his contribution as…`,
                  zh: `总体来说，我认为他的贡献……`,
                },
              ],
              sample: `Jordan brought strong design and presentation skills to our project; the final slides were clear, visually consistent, and he handled the Q&A confidently. That said, the first slide draft came in four days late, which pushed our review and rehearsal into the last three days and added pressure on both of us. Once we agreed on a concrete checkpoint, he delivered exactly what he promised, on time. For future projects, I'd suggest agreeing on interim deadlines in the first meeting. Overall, I'd rate his contribution as good, with room to improve on time management.`,
            },
          ],
        },
        {
          id: `advisor`,
          districtId: `campus`,
          name: `教务处`,
          nameEn: `Advising Office`,
          emoji: `🏛️`,
          blurb: `加退课、问先修、换专业，规矩多但有人带`,
          npc: {
            id: `brooks`,
            name: `Ms. Brooks`,
            role: `教务顾问`,
            roleEn: `academic advisor`,
            emoji: `👩‍🏫`,
            voice: `female`,
            persona: `Ms. Brooks is an academic advisor who has seen every scheduling problem there is: efficient, direct and kind, with a dry sense of humor. She speaks clear professional American English, checks facts on her screen before answering, and always ends by summarizing the next steps.`,
          },
          freeChatTopics: [
            `问她学生最常犯的选课错误`,
            `聊聊你对未来专业的纠结`,
            `问问暑期实习怎么找`,
          ],
          missions: [
            {
              id: `advisor-course`,
              locationId: `advisor`,
              title: `加课退课`,
              level: `B1`,
              xp: 55,
              playerRole: `开学第二周，你想退掉太难的统计课，换成数据分析入门。但你不确定先修条件和截止日期。`,
              scene: `The advising office in the second week of the fall semester. The add/drop deadline is Friday, September 12; after that, dropping shows a 'W' on the transcript until October 24. STAT 250 (Statistics) is required for the business major; INFO 180 (Intro to Data Analysis) has no prerequisite and can replace STAT 250 only with a petition. The learner needs 12 credits to stay full-time as an international student; dropping STAT 250 without adding another course would leave them at 9. Ms. Brooks always checks credit load and visa status.`,
              objectives: [
                {
                  zh: `说明想退哪门、加哪门，以及原因`,
                  en: `Learner says they want to drop STAT 250 and add INFO 180, and why`,
                },
                {
                  zh: `问清加退课截止日期`,
                  en: `Learner asks about the add/drop deadline or the consequences of dropping late`,
                },
                {
                  zh: `问清先修要求和能否替代`,
                  en: `Learner asks whether INFO 180 has prerequisites or can replace the required course`,
                },
                {
                  zh: `确认学分够不够、下一步做什么`,
                  en: `Learner confirms their credit load stays at 12 and understands the next steps`,
                },
              ],
              opening: `Hi, come on in. Second week—let me guess, schedule change? What are we looking at?`,
              phrases: [
                {
                  en: `I'd like to drop STAT 250 and add INFO 180 instead.`,
                  zh: `我想退掉统计250，加数据分析180`,
                },
                {
                  en: `Statistics is moving too fast for me right now.`,
                  zh: `统计课现在节奏对我太快了`,
                },
                {
                  en: `When is the add/drop deadline?`,
                  zh: `加退课截止日期是什么时候？`,
                },
                {
                  en: `Does INFO 180 have any prerequisites?`,
                  zh: `数据分析180有先修要求吗？`,
                },
                {
                  en: `If I drop it, will I still be a full-time student?`,
                  zh: `如果退了，我还算全日制吗？`,
                },
                {
                  en: `Can INFO 180 count toward my major?`,
                  zh: `180 能算进专业学分吗？`,
                },
                {
                  en: `What do I need to do next?`,
                  zh: `我接下来需要做什么？`,
                },
                {
                  en: `Just to confirm, I'll stay at 12 credits, right?`,
                  zh: `确认一下，我还是12学分，对吧？`,
                },
              ],
              grammar: {
                title: `问后果：If I drop…, will I…?（第一条件句）`,
                explain: [
                  `if 从句用一般现在时，主句用 will：If I drop it, will I…`,
                  `问可能性还可以用 What happens if…?`,
                  `规定类问题用 Do I need to / Do I have to…`,
                ],
                examples: [
                  {
                    en: `If I drop STAT 250, will it show on my transcript?`,
                    zh: `如果退掉统计250，成绩单上会显示吗？`,
                  },
                  {
                    en: `What happens if I miss the deadline?`,
                    zh: `错过截止日期会怎样？`,
                  },
                ],
              },
              shadow: [
                {
                  en: `I'd like to drop STAT 250 and add INFO 180 instead.`,
                  zh: `我想退掉统计250，加数据分析180`,
                },
                {
                  en: `When is the add/drop deadline?`,
                  zh: `加退课截止日期是什么时候？`,
                },
                {
                  en: `If I drop it, will I still be a full-time student?`,
                  zh: `如果退了，我还算全日制吗？`,
                },
                {
                  en: `The deadline is this Friday, September twelfth.`,
                  zh: `截止日期是本周五9月12日`,
                },
                {
                  en: `You need twelve credits to keep your visa status.`,
                  zh: `你需要12学分才能保住签证身份`,
                },
                {
                  en: `Here's what you need to do next.`,
                  zh: `接下来你要这么做`,
                },
              ],
              twist: `Point out that STAT 250 is required for the business major, so INFO 180 would only replace it with a petition, and ask whether the learner wants to drop it anyway or switch to a different section instead.`,
            },
            {
              id: `advisor-major`,
              locationId: `advisor`,
              title: `谈谈换专业`,
              level: `B2`,
              xp: 75,
              playerRole: `读了一年商科，你发现自己更喜欢数据和编程。你来和顾问谈换到信息科学专业，担心会延迟毕业。`,
              scene: `The advising office in spring, by appointment. The learner is a first-year business major with a 3.4 GPA considering a switch to Information Science. The switch requires a 3.0 GPA and a B or better in INFO 180 and CS 110; the application window is April 1–30. Most general education credits transfer, but two business courses would count only as electives. Switching now still allows graduating in four years with one summer course; a double major in business and information science is possible but takes an extra semester. Ms. Brooks asks about motivation, not just logistics.`,
              objectives: [
                {
                  zh: `说明为什么想换专业`,
                  en: `Learner explains why they want to switch majors (interest in data and programming)`,
                },
                {
                  zh: `问清换专业的条件和流程`,
                  en: `Learner asks about the requirements and process for switching`,
                },
                {
                  zh: `问清会不会延迟毕业、学分怎么算`,
                  en: `Learner asks whether the switch delays graduation and how current credits transfer`,
                },
                {
                  zh: `比较备选方案并说出自己的倾向`,
                  en: `Learner discusses alternatives (e.g. double major, minor) and states a preference or next step`,
                },
              ],
              opening: `Good to see you. Your note said you wanted to talk about your major—big topic. Tell me what's been on your mind.`,
              phrases: [
                {
                  en: `I've been thinking about switching to Information Science.`,
                  zh: `我一直在考虑换到信息科学专业`,
                },
                {
                  en: `I've been enjoying the data and coding classes a lot more.`,
                  zh: `我更喜欢数据和编程的课`,
                },
                {
                  en: `What are the requirements for switching?`,
                  zh: `换专业有什么条件？`,
                },
                {
                  en: `Would this delay my graduation?`,
                  zh: `这会推迟我毕业吗？`,
                },
                {
                  en: `How many of my credits would transfer?`,
                  zh: `我修过的学分能转多少？`,
                },
                { en: `Is a double major realistic?`, zh: `双专业现实吗？` },
                {
                  en: `I'm leaning toward switching, to be honest.`,
                  zh: `说实话，我倾向于换`,
                },
                {
                  en: `What would you suggest I do before April?`,
                  zh: `您建议我四月前做些什么？`,
                },
              ],
              grammar: {
                title: `说持续的想法：I've been thinking about…（现在完成进行时）`,
                explain: [
                  `一直在考虑、一直在做用 have been + V-ing`,
                  `强调过程和持续，常配 lately / for a while`,
                  `对比：I've decided（已决定）vs I've been thinking（还在想）`,
                ],
                examples: [
                  {
                    en: `I've been thinking about this for a few months.`,
                    zh: `这事我已经考虑了几个月`,
                  },
                  {
                    en: `I've been enjoying my coding class lately.`,
                    zh: `我最近很喜欢编程课`,
                  },
                ],
              },
              shadow: [
                {
                  en: `I've been thinking about switching to Information Science.`,
                  zh: `我一直在考虑换到信息科学`,
                },
                {
                  en: `I've been enjoying the data and coding classes a lot more.`,
                  zh: `我更喜欢数据和编程的课`,
                },
                {
                  en: `What are the requirements for switching?`,
                  zh: `换专业有什么条件？`,
                },
                {
                  en: `Would this delay my graduation?`,
                  zh: `这会推迟我毕业吗？`,
                },
                {
                  en: `You'd need a B or better in INFO 180 and CS 110.`,
                  zh: `你需要信息180和计算机110拿B以上`,
                },
                {
                  en: `A double major would take an extra semester.`,
                  zh: `双专业要多读一个学期`,
                },
              ],
              twist: `Ask whether the learner has actually talked to anyone working in data, and suggest they take CS 110 first before deciding—see how they respond.`,
            },
          ],
          writing: [
            {
              id: `advisor-drop-email`,
              locationId: `advisor`,
              title: `申请退课的邮件`,
              level: `B1`,
              type: `email`,
              prompt: `加退课截止日前一天，你决定退掉统计 250、加数据分析 180。给 Brooks 顾问写邮件，请她批准并确认学分。`,
              mustInclude: [
                `说明要退哪门、加哪门`,
                `简要说明原因`,
                `确认学分仍满 12`,
                `请她告知还需什么手续`,
              ],
              words: [70, 110],
              tips: [
                { en: `Dear Ms. Brooks,`, zh: `尊敬的 Brooks 女士` },
                {
                  en: `Following our meeting on Tuesday, I've decided to…`,
                  zh: `继周二面谈后，我决定……`,
                },
                {
                  en: `I'd like to drop STAT 250 and add INFO 180.`,
                  zh: `我想退掉统计250，加数据分析180`,
                },
                {
                  en: `This would keep me at 12 credits.`,
                  zh: `这样我仍有12学分`,
                },
                {
                  en: `Could you let me know if any other forms are required?`,
                  zh: `请告知是否还需其他表格`,
                },
              ],
              sample: `Dear Ms. Brooks,

Following our meeting on Tuesday, I've decided to drop STAT 250 and add INFO 180 for this semester. The pace of STAT 250 has been difficult for me, and INFO 180 fits my interest in data analysis better. With this change I would still be registered for 12 credits, so my full-time status is not affected. I've submitted the add/drop form through the portal today, before the September 12 deadline. Could you let me know if any other forms or approvals are required? Thank you for your help.

Best regards,
Li Wei`,
            },
          ],
        },
        {
          id: `club`,
          districtId: `campus`,
          name: `社团招新`,
          nameEn: `Club Fair`,
          emoji: `🎉`,
          blurb: `逛招新摊位、问清投入、报名当志愿者`,
          npc: {
            id: `lily`,
            name: `Lily`,
            role: `社长`,
            roleEn: `club president`,
            emoji: `🙋‍♀️`,
            voice: `female`,
            persona: `Lily is the president of the International Film Club: bubbly, talkative, and genuinely welcoming to new students. She speaks fast, enthusiastic American English full of 'oh my gosh' and 'you'd love it', and she always tries to sign people up for more than they planned.`,
          },
          freeChatTopics: [
            `问她最喜欢的一部电影`,
            `聊聊你家乡的电影`,
            `问社团最有趣的一次活动`,
          ],
          missions: [
            {
              id: `club-join`,
              locationId: `club`,
              title: `加入一个社团`,
              level: `A2`,
              xp: 40,
              playerRole: `开学社团招新日，你在操场逛摊位。你对电影社有兴趣，想问清活动时间、要不要交钱、新人能不能来。`,
              scene: `The club fair on the main quad. Lily runs the International Film Club table. The club meets every Thursday at 7 p.m. in Room 120 of the Student Center, with a free screening and snacks every two weeks and a film festival trip in November. Membership is free, but the festival trip costs $15. Beginners and non-film majors are welcome; sign-up is on a paper list or by scanning a QR code for the group chat.`,
              objectives: [
                {
                  zh: `表达对社团的兴趣并问做什么`,
                  en: `Learner shows interest and asks what the club does`,
                },
                {
                  zh: `问清活动时间和频率`,
                  en: `Learner asks when and how often the club meets`,
                },
                {
                  zh: `问要不要交费、新手能不能加入`,
                  en: `Learner asks about fees or whether beginners are welcome`,
                },
                {
                  zh: `报名或拿到加入方式`,
                  en: `Learner signs up or gets the way to join (QR code or list)`,
                },
              ],
              opening: `Hi! Do you like movies? Of course you do, everyone likes movies—come check out the International Film Club!`,
              phrases: [
                {
                  en: `Hi, what does your club do?`,
                  zh: `你好，你们社团是做什么的？`,
                },
                { en: `How often do you meet?`, zh: `你们多久活动一次？` },
                { en: `What time and where?`, zh: `几点、在哪？` },
                { en: `Is there a membership fee?`, zh: `要交会费吗？` },
                {
                  en: `I'm not a film major—is that okay?`,
                  zh: `我不是电影专业的，可以吗？`,
                },
                { en: `How do I sign up?`, zh: `怎么报名？` },
                { en: `Can I bring a friend?`, zh: `我可以带朋友来吗？` },
                {
                  en: `Sounds fun, count me in!`,
                  zh: `听起来很有意思，算我一个！`,
                },
              ],
              grammar: {
                title: `问频率：How often…? / once a week`,
                explain: [
                  `问多久一次用 How often do you…?`,
                  `回答用 once / twice a week、every Thursday`,
                  `问具体时间用 What time… / When…`,
                ],
                examples: [
                  {
                    en: `How often does the club meet?`,
                    zh: `社团多久活动一次？`,
                  },
                  {
                    en: `We meet every Thursday at seven.`,
                    zh: `我们每周四七点活动`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Do you like movies? Come check out the Film Club!`,
                  zh: `喜欢电影吗？来看看电影社！`,
                },
                { en: `What does your club do?`, zh: `你们社团是做什么的？` },
                { en: `How often do you meet?`, zh: `你们多久活动一次？` },
                {
                  en: `We meet every Thursday at seven in the Student Center.`,
                  zh: `我们每周四七点在学生中心活动`,
                },
                { en: `Is there a membership fee?`, zh: `要交会费吗？` },
                {
                  en: `Scan this QR code to join the group chat.`,
                  zh: `扫这个二维码进群`,
                },
              ],
              twist: `After the learner shows interest, try to also sign them up for the November festival trip, and mention it costs fifteen dollars.`,
            },
            {
              id: `club-volunteer`,
              locationId: `club`,
              title: `报名当活动志愿者`,
              level: `B1`,
              xp: 55,
              playerRole: `你加入电影社一个月了。社团下个月办电影之夜，缺志愿者。你想报名一个岗位，但一周只能抽 3 小时。`,
              scene: `After a Thursday screening, Lily is recruiting volunteers for the club's Spring Film Night on Friday, March 20, 6–10 p.m. Open roles: front-desk check-in (2 people, 5:30–8 p.m.), social media (posting before and during the event, about 2 hours a week for three weeks), snack table (2 people), and host/MC (needs confident English). Volunteers get a free T-shirt and a thank-you dinner. Lily tries to push the MC role on anyone who seems friendly.`,
              objectives: [
                {
                  zh: `主动提出想当志愿者`,
                  en: `Learner offers to volunteer for the film night`,
                },
                {
                  zh: `问清有哪些岗位、各要做什么`,
                  en: `Learner asks what roles are available and what each involves`,
                },
                {
                  zh: `说明自己的时间限制`,
                  en: `Learner explains their time limit (about three hours a week)`,
                },
                {
                  zh: `选定一个岗位并确认时间`,
                  en: `Learner chooses a role and confirms the time commitment`,
                },
              ],
              opening: `You're still here! Perfect. So… Spring Film Night is in three weeks and I need volunteers. Please say you're interested?`,
              phrases: [
                {
                  en: `I'd love to help out with the film night.`,
                  zh: `我很想帮忙办电影之夜`,
                },
                { en: `What roles do you still need?`, zh: `还缺哪些岗位？` },
                {
                  en: `What would the social media role involve?`,
                  zh: `社交媒体那个岗位要做什么？`,
                },
                {
                  en: `I can only do about three hours a week.`,
                  zh: `我一周只能抽大概三小时`,
                },
                {
                  en: `I'm used to working at a front desk, so check-in sounds good.`,
                  zh: `我做过前台，签到岗挺合适`,
                },
                {
                  en: `I used to run my school's film club back home.`,
                  zh: `我以前在家乡学校管过电影社`,
                },
                {
                  en: `I'm not confident enough to be the MC yet.`,
                  zh: `我还没自信到能当主持`,
                },
                {
                  en: `Put me down for check-in from 5:30 to 8.`,
                  zh: `签到岗5点半到8点，算我一个`,
                },
              ],
              grammar: {
                title: `经验表达：used to（以前常）vs be used to（习惯了）`,
                explain: [
                  `used to + 动词原形：以前常做、现在不做了`,
                  `be used to + 名词/V-ing：习惯于`,
                  `对比：I used to run a club / I'm used to running events`,
                ],
                examples: [
                  {
                    en: `I used to volunteer at a theater back home.`,
                    zh: `我以前在老家剧院做过志愿者`,
                  },
                  {
                    en: `I'm used to talking to strangers, so check-in is fine.`,
                    zh: `我习惯和陌生人说话，签到没问题`,
                  },
                ],
              },
              shadow: [
                {
                  en: `I'd love to help out with the film night.`,
                  zh: `我很想帮忙办电影之夜`,
                },
                { en: `What roles do you still need?`, zh: `还缺哪些岗位？` },
                {
                  en: `I can only do about three hours a week.`,
                  zh: `我一周只能抽大概三小时`,
                },
                {
                  en: `I used to run my school's film club back home.`,
                  zh: `我以前在家乡学校管过电影社`,
                },
                {
                  en: `Check-in runs from five thirty to eight.`,
                  zh: `签到岗从5点半到8点`,
                },
                {
                  en: `Put me down for check-in, please.`,
                  zh: `签到岗，算我一个`,
                },
              ],
              twist: `Try hard to convince the learner to be the MC because they 'seem so friendly', and only back off when they clearly explain their limit.`,
            },
          ],
          writing: [
            {
              id: `club-application`,
              locationId: `club`,
              title: `社团报名小自述`,
              level: `A2`,
              type: `post`,
              prompt: `电影社报名表最后一栏要你用英文写几句：为什么想加入、你能带来什么、每周能投入多少时间。`,
              mustInclude: [
                `为什么对电影社有兴趣`,
                `自己的相关经验或爱好`,
                `每周能投入的时间`,
                `想参与哪类活动`,
              ],
              words: [50, 90],
              tips: [
                {
                  en: `I'd like to join the International Film Club because…`,
                  zh: `我想加入国际电影社，因为……`,
                },
                { en: `Back home, I used to…`, zh: `在老家时，我以前常……` },
                {
                  en: `I can commit about three hours a week.`,
                  zh: `我每周可以投入大约三小时`,
                },
                { en: `I'd be happy to help with…`, zh: `我很乐意帮忙……` },
                {
                  en: `I'm especially interested in…`,
                  zh: `我特别感兴趣的是……`,
                },
              ],
              sample: `I'd like to join the International Film Club because watching films is how I learned most of my English, and I'd love to discuss them with people from other countries. Back home in Chengdu, I used to organize a small movie night with my friends every month, so I'm used to picking films and setting up screenings. I can commit about three hours a week, mostly on Thursday evenings. I'd be happy to help with the snack table or social media, and I'm especially interested in the film festival trip in November.`,
            },
          ],
        },
        {
          id: `seminar`,
          districtId: `campus`,
          name: `研讨课`,
          nameEn: `Seminar`,
          emoji: `🏫`,
          blurb: `问清作业要求、课上发表观点，不再当隐形人`,
          npc: {
            id: `okafor`,
            name: `Sam Okafor`,
            role: `助教`,
            roleEn: `teaching assistant`,
            emoji: `👨🏿‍🎓`,
            voice: `male`,
            persona: `Sam Okafor is a PhD student and the teaching assistant for a first-year writing seminar. He is encouraging and patient, pushes students to back up opinions with reasons, and never makes anyone feel stupid for asking. He speaks clear, friendly American English and often says 'Good—now tell me why.'`,
          },
          freeChatTopics: [
            `问他读博的生活是什么样`,
            `聊聊你最近读的一本书`,
            `问他怎么克服上课发言的紧张`,
          ],
          missions: [
            {
              id: `seminar-clarify`,
              locationId: `seminar`,
              title: `问清作业要求`,
              level: `B1`,
              xp: 55,
              playerRole: `写作研讨课布置了一篇「回应论文」，但你没搞懂要写什么、写多长、能不能引用课外资料。下课后你去问助教。`,
              scene: `After class in Room 305, Wright Hall. The course is WRIT 101 (First-Year Writing Seminar). The assignment is a two-page response paper on this week's reading, 'Is Google Making Us Stupid?' by Nicholas Carr, due Monday at 11:59 p.m. on Canvas. It should be double-spaced, about 600 words; students are supposed to summarize the main argument in one paragraph, then give their own position with at least two reasons. Outside sources are allowed but not required, and must be cited in MLA format. The rubric is on Canvas under 'Files'.`,
              objectives: [
                {
                  zh: `说明哪里没搞懂`,
                  en: `Learner says which part of the assignment they are unsure about`,
                },
                {
                  zh: `问清字数、格式和截止时间`,
                  en: `Learner asks about length, format, or the deadline`,
                },
                {
                  zh: `问清能不能用课外资料、怎么引用`,
                  en: `Learner asks whether outside sources are allowed and how to cite them`,
                },
                {
                  zh: `复述一遍要求确认`,
                  en: `Learner summarizes the requirements back to confirm understanding`,
                },
              ],
              opening: `Hey, nice work in discussion today. Got a question about the response paper?`,
              phrases: [
                {
                  en: `I'm not totally sure what a response paper is supposed to include.`,
                  zh: `我不太确定回应论文该包含什么`,
                },
                { en: `How long is it supposed to be?`, zh: `要求写多长？` },
                {
                  en: `Are we supposed to summarize the whole article?`,
                  zh: `我们是要把整篇文章总结一遍吗？`,
                },
                {
                  en: `Can I use outside sources, or just the reading?`,
                  zh: `能用课外资料吗，还是只用课上阅读？`,
                },
                {
                  en: `Which citation style should I use?`,
                  zh: `该用哪种引用格式？`,
                },
                { en: `When exactly is it due?`, zh: `具体什么时候截止？` },
                {
                  en: `So, to sum up: a short summary, then my position with two reasons.`,
                  zh: `总结一下：先简要概述，再给观点和两个理由`,
                },
                {
                  en: `Where can I find the rubric?`,
                  zh: `评分标准在哪能找到？`,
                },
              ],
              grammar: {
                title: `问规定：be supposed to / Do we have to…?`,
                explain: [
                  `问「应该、规定要」用 Are we supposed to…?`,
                  `问「必须吗」用 Do we have to…?`,
                  `回答：You're supposed to… / You don't have to…`,
                ],
                examples: [
                  {
                    en: `Are we supposed to cite the reading?`,
                    zh: `我们需要引用阅读材料吗？`,
                  },
                  {
                    en: `Do we have to use outside sources?`,
                    zh: `必须用课外资料吗？`,
                  },
                ],
              },
              shadow: [
                {
                  en: `Got a question about the response paper?`,
                  zh: `对回应论文有问题吗？`,
                },
                {
                  en: `I'm not totally sure what it's supposed to include.`,
                  zh: `我不太确定它该包含什么`,
                },
                {
                  en: `Are we supposed to summarize the whole article?`,
                  zh: `我们是要把整篇文章总结一遍吗？`,
                },
                {
                  en: `You don't have to use outside sources, but you can.`,
                  zh: `不是必须用课外资料，但可以用`,
                },
                {
                  en: `It's due Monday at eleven fifty-nine p.m. on Canvas.`,
                  zh: `周一晚11点59分前交到 Canvas`,
                },
                {
                  en: `So, to sum up: a short summary, then my position.`,
                  zh: `总结一下：先概述，再给观点`,
                },
              ],
              twist: `When the learner asks about length, first ask what they think a 'response' means, then clarify that the summary should be only one paragraph.`,
            },
            {
              id: `seminar-opinion`,
              locationId: `seminar`,
              title: `课上发表观点`,
              level: `B2`,
              xp: 80,
              playerRole: `研讨课讨论「互联网让我们变笨了吗」。助教点名让你谈看法，同学 Maya 认为是，你并不完全同意。`,
              scene: `Seminar discussion in WRIT 101 on Nicholas Carr's 'Is Google Making Us Stupid?'. Sam Okafor is facilitating. Earlier, a classmate named Maya argued that constant scrolling has destroyed people's ability to read long texts. Sam wants the learner to state a clear position, give a reason or example from the reading or their own experience, respond directly to Maya's point (agreeing partly or disagreeing politely), and handle a follow-up question. Sam plays devil's advocate and asks 'why' at least once; he may relay a counterpoint from Maya.`,
              objectives: [
                {
                  zh: `清楚说出你的立场`,
                  en: `Learner states a clear position on whether the internet is making us less able to read or think deeply`,
                },
                {
                  zh: `用阅读材料或亲身经历支持观点`,
                  en: `Learner supports their position with a reason or example from the reading or personal experience`,
                },
                {
                  zh: `有礼貌地回应同学 Maya 的观点`,
                  en: `Learner responds directly to Maya's argument, agreeing partly or disagreeing politely`,
                },
                {
                  zh: `回答助教的追问`,
                  en: `Learner answers Sam's follow-up question with further reasoning`,
                },
              ],
              opening: `Okay, let's hear another voice. Maya thinks scrolling has basically killed deep reading. What's your take—do you agree with Carr?`,
              phrases: [
                {
                  en: `I'd argue that the internet changes how we read, not whether we can.`,
                  zh: `我认为互联网改变的是阅读方式，而不是能力`,
                },
                {
                  en: `I see Maya's point, but I'd push back a little.`,
                  zh: `我理解 Maya 的观点，但想稍微反驳一下`,
                },
                {
                  en: `While it's true that…, I don't think…`,
                  zh: `虽然……是事实，但我不认为……`,
                },
                { en: `In my experience, …`, zh: `以我的经验……` },
                { en: `Carr himself admits that…`, zh: `Carr 自己也承认……` },
                { en: `To some extent, yes, but…`, zh: `某种程度上是的，但……` },
                {
                  en: `That's a fair question. I think…`,
                  zh: `这是个好问题，我认为……`,
                },
                { en: `Can I add one more thing?`, zh: `我能再补充一点吗？` },
              ],
              grammar: {
                title: `让步与反驳：While / Although…, … / I'd argue that…`,
                explain: [
                  `先让步再反驳：While I agree…, I think…`,
                  `Although 开头的句子后面不加 but`,
                  `表达观点更稳用 I'd argue / It seems to me`,
                ],
                examples: [
                  {
                    en: `While scrolling is distracting, people still read long novels.`,
                    zh: `刷屏虽然分心，但人们仍在读长篇小说`,
                  },
                  {
                    en: `Although Carr makes a good point, his evidence is mostly personal.`,
                    zh: `Carr 说得有道理，但证据多是个人经历`,
                  },
                ],
              },
              shadow: [
                {
                  en: `What's your take, do you agree with Carr?`,
                  zh: `你怎么看，同意 Carr 吗？`,
                },
                {
                  en: `I'd argue that the internet changes how we read, not whether we can.`,
                  zh: `我认为互联网改的是读法，不是能力`,
                },
                {
                  en: `I see Maya's point, but I'd push back a little.`,
                  zh: `我理解 Maya 的观点，但想稍微反驳`,
                },
                {
                  en: `While scrolling is distracting, people still read long novels.`,
                  zh: `刷屏虽然分心，但人们仍在读长篇`,
                },
                {
                  en: `Good, now tell me why you think that.`,
                  zh: `好，说说你为什么这么想`,
                },
                {
                  en: `That's a fair question, let me think.`,
                  zh: `这是个好问题，让我想想`,
                },
              ],
              twist: `After the learner states a position, relay Maya's counterpoint ('but you're on your phone right now, aren't you?') and ask the learner to respond to it directly.`,
            },
          ],
          writing: [
            {
              id: `seminar-discussion-post`,
              locationId: `seminar`,
              title: `讨论区回帖`,
              level: `B2`,
              type: `post`,
              prompt: `课程论坛要求你回应 Carr 的文章《谷歌让我们变笨了吗》，并回复同学 Maya 的帖子（她认为是）。写一条讨论区回帖。`,
              mustInclude: [
                `一句话概括 Carr 的主要观点`,
                `明确你的立场和两个理由`,
                `直接回应 Maya 的观点`,
                `引用阅读材料中的一个细节`,
              ],
              words: [120, 180],
              tips: [
                { en: `Carr's main claim is that…`, zh: `Carr 的主要观点是……` },
                {
                  en: `I partly agree with Carr, but…`,
                  zh: `我部分同意 Carr，但是……`,
                },
                {
                  en: `Maya, I see your point about…, but…`,
                  zh: `Maya，我理解你关于……的观点，但……`,
                },
                {
                  en: `For example, Carr describes how…`,
                  zh: `例如，Carr 描述了……`,
                },
                { en: `In my own experience, …`, zh: `以我自己的经验……` },
                { en: `Overall, I'd argue that…`, zh: `总的来说，我认为……` },
              ],
              sample: `Carr's main claim is that the internet is reshaping how we think, making it harder to read deeply and stay focused. I partly agree with him, but I don't think the picture is as bleak as he suggests. First, Carr's evidence is mostly personal—he describes his own 'skimming' habit and quotes a few friends, which isn't the same as proof. Second, deep reading hasn't disappeared; it has moved. Book clubs, audiobooks, and long podcasts are more popular than ever. Maya, I see your point about scrolling, and I notice the same restlessness in myself. But I'd argue that the problem is how we use our phones, not the internet itself. When I turn off notifications, I can still read for an hour. Overall, I'd say Carr is right about the risk but wrong about the outcome.`,
            },
            {
              id: `seminar-draft-email`,
              locationId: `seminar`,
              title: `请助教看一眼初稿`,
              level: `B1`,
              type: `email`,
              prompt: `回应论文周一截止，你周五写好了开头两段，不确定论点是否清楚。给助教 Sam 发邮件请他看看，并问他办公时间。`,
              mustInclude: [
                `说明写的是哪门课哪篇作业`,
                `具体说出不确定的地方`,
                `礼貌请求他看初稿或约时间`,
                `附上或说明初稿在哪`,
              ],
              words: [60, 100],
              tips: [
                { en: `Hi Sam,`, zh: `你好 Sam` },
                {
                  en: `I've drafted the first two paragraphs of my response paper.`,
                  zh: `我写好了回应论文的前两段`,
                },
                {
                  en: `I'm not sure my thesis is clear enough.`,
                  zh: `我不确定我的论点够不够清楚`,
                },
                {
                  en: `Would you have time to take a quick look before Monday?`,
                  zh: `周一前您有时间快速看一眼吗？`,
                },
                {
                  en: `I've pasted the paragraphs below.`,
                  zh: `两段贴在下面了`,
                },
              ],
              sample: `Hi Sam,

I'm in your Tuesday section of WRIT 101. I've drafted the first two paragraphs of my response paper on Carr's article, but I'm not sure my thesis is clear enough—right now it sounds like I'm just summarizing him instead of taking a position. Would you have time to take a quick look before Monday? I've pasted the two paragraphs below, and I'm also happy to come to your office hours on Friday if that's easier. Thanks a lot for your time.

Best,
Li Wei`,
            },
          ],
        },
      ],
    },
  ];

export var fh = new Map();

export var ph = new Map();

export var mh = new Map();

for (let e of dh)
  for (let t of e.locations) {
    fh.set(t.id, t);
    for (let n of t.missions) ph.set(n.id, { ...n, districtId: e.id });
    for (let e of t.writing) mh.set(e.id, e);
  }

export var hh = (e) => dh.find((t) => t.id === e);

export var gh = (e) => fh.get(e);

export var _h = (e) => ph.get(e);

export var vh = (e) => mh.get(e);

export var yh = () => [...ph.values()];

export var bh = (e, t) => {
    let n = yh().filter((e) => e.districtId === t);
    return n.length > 0 && n.every((t) => (e.missions[t.id]?.stars ?? 0) > 0);
  };

export var xh = [
    {
      id: `first_talk`,
      title: `开口了`,
      desc: `完成第一次 NPC 对话`,
      emoji: `💬`,
      test: (e) => e.totals.missionsDone >= 1,
    },
    {
      id: `three_stars`,
      title: `满分通关`,
      desc: `任意一关拿到 3 星`,
      emoji: `⭐`,
      test: (e) => Object.values(e.missions).some((e) => e.stars === 3),
    },
    {
      id: `streak_3`,
      title: `三天不断`,
      desc: `连续学 3 天`,
      emoji: `🔥`,
      test: (e) => e.streak >= 3,
    },
    {
      id: `streak_7`,
      title: `一周达人`,
      desc: `连续学 7 天`,
      emoji: `🏆`,
      test: (e) => e.streak >= 7,
    },
    {
      id: `notebook_20`,
      title: `错题收藏家`,
      desc: `错题本攒到 20 条`,
      emoji: `📒`,
      test: (e) => e.notebook.length >= 20,
    },
    {
      id: `review_50`,
      title: `复习狂人`,
      desc: `复习错题 50 次`,
      emoji: `🔁`,
      test: (e) => e.totals.reviews >= 50,
    },
    {
      id: `writer_5`,
      title: `笔杆子`,
      desc: `写作 5 篇`,
      emoji: `✍️`,
      test: (e) => e.totals.writings >= 5,
    },
    {
      id: `shadow_50`,
      title: `跟读 50 句`,
      desc: `跟读或听写累计 50 句`,
      emoji: `🎙️`,
      test: (e) => e.totals.shadow + e.totals.dictation >= 50,
    },
    {
      id: `level_5`,
      title: `五级居民`,
      desc: `等级达到 5`,
      emoji: `🏅`,
      test: (e) => oh(e.xp).level >= 5,
    },
    {
      id: `all_life`,
      title: `生活通`,
      desc: `生活区每关都通过`,
      emoji: `🏙️`,
      test: (e) => bh(e, `life`),
    },
    {
      id: `all_work`,
      title: `职场通`,
      desc: `职场区每关都通过`,
      emoji: `🏢`,
      test: (e) => bh(e, `work`),
    },
    {
      id: `all_campus`,
      title: `校园通`,
      desc: `校园区每关都通过`,
      emoji: `🎓`,
      test: (e) => bh(e, `campus`),
    },
  ];

export function Sh(e) {
  for (let t of xh)
    !e.achievements.includes(t.id) && t.test(e) && e.unlock(t.id);
}

export var Ch = { us: `美式`, uk: `英式` };

export var wh = { us: `en-US`, uk: `en-GB` };

export var Th = {
    us: {
      name: `American English`,
      speak: `American English. Use American spelling (color, realize, center), American words (apartment, elevator, line, the check, vacation, cell phone, fall) and American expressions.`,
      grade: `The learner may use American or British spelling and words. Never list the other variety as an issue; if there is a more American way to say it, put it in "better" only.`,
    },
    uk: {
      name: `British English`,
      speak: `British English. Use British spelling (colour, realise, centre), British words (flat, lift, queue, the bill, holiday, mobile, autumn) and British expressions (cheers, brilliant, lovely, fancy a..., you alright?).`,
      grade: `The learner may use American or British spelling and words. Never list the other variety as an issue; if there is a more British way to say it, put it in "better" only.`,
    },
  };
export { dh as DISTRICTS, hh as getDistrict, gh as getLocation, _h as getMission, vh as getWritingTask, xh as ACHIEVEMENTS };
