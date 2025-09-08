document.addEventListener('DOMContentLoaded', () => {
    const sentenceEl = document.getElementById('sentence');
    const translationEl = document.getElementById('translation');
    const answerInput = document.getElementById('answer-input');
    const submitBtn = document.getElementById('submit-btn');
    const nextBtn = document.getElementById('next-btn');
    const feedbackEl = document.getElementById('feedback');
    const reviewBtn = document.getElementById('review-btn');

    let originalquestions = [
        {
            sentence: "when an infant is [          ] it always seeks out its mother.",
            answer: "frightened",
            translation: "유아는 겁을 먹었을 때, 항상 엄마를 찾게 된다." 
        },
        {
            sentence: "All [           ] and play activity stops.",
            answer: "exploratory",
            translation: "모든 탐색과 놀이 활동이 중단된다."
        },
        {
            sentence: "It also has to be [            ] detailed.",
            answer: "sufficently",
            translation: "이것 또한 충분히 상세하게 그려져있어야 한다."
        },
        {
            sentence: "It's [          ], people are drawn to it.",
            answer: "reassuring",
            translation: "그건 저흴 안심시킵니다. 사람들은 그것에 이끌리죠."
        },
        {
            sentence: "Her deep [          ] to her family was evident.",
            answer: "attachment",
            translation: "가족에 대한 그녀의 싶은 애착은 분명했다."
        },
        {
            sentence: "These [          ] are maintained throughout their childhood years.",
            answer: "tendencies",
            translation: "이러한 경향은 아동기내내 지속된다."
        },
        {
            sentence: "Our complex brains might have evolved to [         ] strong social bonds.",
            answer: "establish",
            translation: "우리의 복잡한 두뇌는 강한 사회적 유대를 형성하도록 진화했을 수도 있다."
        },
        {
            sentence: "[        ] what should be part of that social group appears to be rather flexible",
            answer: "Defining",
            translation: "무엇이 그 사회적 집단의 일부가 되어야 하는지를 정의하는 것은 다소 유연한 것으로 보인다."
        },
        {
            sentence: "Others see animals as [        ] from humans.",
            answer: "distinct",
            translation: "다른 사람들은 동물을 인간과 별개로 여긴다."
        },
        {
            sentence: "[         ] objects don't have a different personality.",
            answer: "Inanimate",
            translation: "무생물은 다른 개성을 갖추고 있지 않다."
        },
        {
            sentence: "The [         ] to learn English is almost unimaginable",
            answer: "intensity",
            translation: "영어 공부의 강도는 거의 상상을 초월한다." 
        },
        {
            sentence: "An impelling [       ] is to seek the company of others.",
            answer: "impulse",
            translation: "뿌리칠 수 없는 충동은 다른 사람과 함께 있는 것을 추구하는 것이다."
        },
        {
            sentence: "We need others [          ] that we are there.",
            answer: "to confirm",
            translation: "우리는 우리가 거기에 있다는 것을 확인하기 위해 다른 사람들을 필요로 한다."
        },
        {
            sentence: "We have an [        ] thath is unique and separate from anyone else.",
            answer: "identity",
            translation: "우리는 고유하면서 다른 누구와도 구별되는 정체성을 가지고 있다."
        },
        {
            sentence: "During all these decades, the world has gone through profound [               ].",
            answer: "transformations",
            translation: "지난 수 십년 동안, 세계는 커다란 전환을 경험했다."
        },
        {
            sentence: "We can [     ] nature, but in some ways also improve upon it.",
            answer: "mimic",
            translation: "우리는 자연을 모방하지만 어느 정도는 개선할 수도 있다."
        },
        {
            sentence: "They have [          ] this field for many years.",
            answer: "cultivated",
            translation: "그들은 이 밭을 여러 해 동안 경작해왔다."
        },
        {
            sentence: "[            ] enables species to maintain their populations through genetic transmission.",
            answer: "Reproduction",
            translation: "생식은 유전자 전달을 통해 종이 개체수를 유지할 수 있게 한다."
        },
        {
            sentence: "Crops that [       ] or were stored after harvesting attracted rats and mice.",
            answer: "ripened",
            translation: "익거나 수확 후 저장된 농작물은 쥐, 생쥐를 끌어들였다."
        },
        {
            sentence: "Water pools provided [        ] for mosquitoes.",
            answer: "habitats",
            translation: "물웅덩이는 모기에게 서식지를 제공했다."
        },{
            sentence: "Scientists made careful [           ] of the experiment's results.",
            answer: "observation",
            translation: "과학자들이 실험 결과를 주의 깊게 관찰했다." 
        },
        {
            sentence: "They'll monitor the post to [     ] the volume of reactions.",
            answer: "gauge",
            translation: "그들은 반응의 양을 측정하기 위해 게시물을 추적 관찰한다."
        },
        {
            sentence: "Their aim of posting is to earn recognition for what they're sharing as a way to [            ].",
            answer: "self-enhance",
            translation: "그들의 게시 목표는 자신을 고양하는 하나의 방법으로서 공유하고 있는 것에 대한 인정을 받는 것이다."
        },
        {
            sentence: "Researchers have discovered one peculiar behaviour that [                    ].",
            answer: "sets teenagers apart",
            translation: "연구자들은 10대들을 구별 짓는 독특한 행동 하나를 발견했다."
        },
        {
            sentence: "[          ] usually anticipate negative outcomes in any given situation.",
            answer: "Pessimists",
            translation: "비관론자들은 보통 어떤 상황에서든 부정적인 결과를 예상한다."
        },
        {
            sentence: "A doomer [        ] that the world will end in five years.",
            answer: "predicts",
            translation: "어떤 운명론자가 5년 내에 세상이 끝날 것이라고 예측한다."
        },
        {
            sentence: "His performance was an [     ] failure.",
            answer: "utter",
            translation: "그의 공연은 완전한 실패였다."
        },
        {
            sentence: "System [          ] lead to errors.",
            answer: "breakdowns",
            translation: "시스템 고장들이 오류를 초래한다."
        },
        {
            sentence: "The player took an aggressive [      ].",
            answer: "stance",
            translation: "선수는 공격적인 자세를 취했다."
        },
        {
            sentence: "He realized that the solution to the problem was [       ].",
            answer: "obvious",
            translation: "그는 문제의 해결책이 명백하다는 것을 깨달았다."
        },
        {
            sentence: "The meeting [          ] yesterday afternoon.",
            answer: "took place",
            translation: "회의는 어제 오후에 열렸다." 
        },
        {
            sentence: "An understander [            ] his cocktail party script.",
            answer: "brought out",
            translation: "이해하는 사람은 그의 칵테일파티 대본을 끄집어 냈다."
        },
        {
            sentence: "There is something instantly [           ] about the colour of fire and danger.",
            answer: "arresting",
            translation: "불과 위험의 색에 관한 즉각적으로 시선을 사로잡는 무언가가 있다."
        },
        {
            sentence: "It is charged with alarm and [       ].",
            answer: "urgency",
            translation: "그것은 경고와 긴급함으로 가득 차 있다."
        },
        {
            sentence: "[          ] few butterflies are red either.",
            answer: "Relatively",
            translation: "붉은색의 나비도 비교적 거의 없는 편이다."
        },
        {
            sentence: "Vision is our [        ] sense.",
            answer: "dominant",
            translation: "시각은 우리의 지배적인 감각이다."
        },
        {
            sentence: "Our sense of hearing isn't [          ].",
            answer: "a big deal",
            translation: "우리의 청각은 중요한 것이 아니다."
        },
        {
            sentence: "I don't have to mention the [        ] example of cavemen.",
            answer: "worn-out",
            translation: "내가 원시인의 진부한 예를 언급할 필요는 없다."
        },
        {
            sentence: "These pose an [             ] but serious threat.",
            answer: "unanticipated",
            translation: "이것은 예상치 못한, 하지만 심각한 위협을 제기한다."
        },
        {
            sentence: "[           ] waited for the traffic light to change.",
            answer: "Pedestrians",
            translation: "보행자들이 신호등이 바뀌기를 기다렸다."
        },{
            sentence: "They depend on engine noise to [      ] and orient to cars.",
            answer: "detect",
            translation: "그들은 차를 발견하고 방향을 잡기 위해 엔진 소리에 의존한다." 
        },
        {
            sentence: "The government requires electric vehicles [           ] a warning noise.",
            answer: "to generate",
            translation: "정부는 전기차가 경고음을 내도록 요구한다."
        },
        {
            sentence: "A cook have to first find a pumpkin of [        ] size.",
            answer: "suitable",
            translation: "요리사는 먼저 적당한 크기의 호박을 찾아야 한다."
        },
        {
            sentence: "She found an [       ] stone near the river.",
            answer: "unusual",
            translation: "그녀는 강 근처에서 특이한 돌을 발견했다."
        },
        {
            sentence: "The chef [        ] fresh ingredients well.",
            answer: "combined",
            translation: "요리사는 신선한 재료들을 잘 결합했다."
        },
        {
            sentence: "Chefs prefer fresh [           ].",
            answer: "ingredients",
            translation: "요리사들은 신선한 재료를 선호한다."
        },
        {
            sentence: "She is [       ] coffee into a mug.",
            answer: "pouring",
            translation: "그녀는 머그잔에 커피를 따르고 있다."
        },
        {
            sentence: "Cooks may cut out a great deal of [     ] and time.",
            answer: "labor",
            translation: "요리사들은 많은 노동과 시간을 절약할 수도 있다."
        },
        {
            sentence: "A missing hiker was found safe on Tuesday by a [      ] team.",
            answer: "rescue",
            translation: "실종된 등산객이 안전한 상태로 발견되었다."
        },
        {
            sentence: "A recent forest fire had [         ] some signs.",
            answer: "destoryed",
            translation: "최근의 산불이 몇몇 표지판을 망가뜨렸다."
        },{
            sentence: "The [           ] was dropping quickly.",
            answer: "temperature",
            translation: "기온은 급격히 떨어지고 있었다." 
        },
        {
            sentence: "he sent a picture to show his [            ].",
            answer: "surroundings",
            translation: "그는 그의 주변 환경을 보여 주기 위해 사진 한 장을 보냈다."
        },
        {
            sentence: "The local police were [        ] of the missing hiker.",
            answer: "informed",
            translation: "지역 경찰이 실종된 등산객에 대해 보고받았다."
        },
        {
            sentence: "His legs were hanging over the [    ] of a canyon with rocks and green trees.",
            answer: "edge",
            translation: "그의 다리는 바위와 푸른 나무들이 있는 협곡의 가장자리에 걸쳐 있었다.."
        },
        {
            sentence: "Most drivers [                 ] traffic sounds on busy streets.",
            answer: "are familiar with",
            translation: "대부분의 운전자들은 번잡한 거리의 교통 소리에 익숙하다."
        },
        {
            sentence: "His legs were covered in black [   ] from the recent forest fires.",
            answer: "ash",
            translation: "그의 다리는 최근의 산불로 생긴 검은 재로 덮여 있었다."
        },
        {
            sentence: "The [        ] of the picture was poor due to the weak signal.",
            answer: "quality",
            translation: "약한 신호로 인해 사진의 화질이 나빴다."
        },
        {
            sentence: "His [        ] settings werer turned off.",
            answer: "location",
            translation: "그의 우치 설정이 꺼져 있었다."
        },
        {
            sentence: "He had spent one night in difficult [          ].",
            answer: "conditions",
            translation: "그는 힘든 환경에서 하룻밤을 보냈다."
        },
        {
            sentence: "They decided to use social media to find out if anyone could find [     ] in the picture.",
            answer: "clues",
            translation: "그들은 누군가 사진 속에서 단서를 찾을 수 있는지 알아보기 위해 소셜 미디어를 사용하기로 결정했다."
        },
        {
            sentence: "Scientists often [        ] the echoes in large empty spaces.",
            answer: "examine",
            translation: "과학자들은 종종 넓은 빈 공간에서 울림(메아리)을 연구한다." 
        },
        {
            sentence: "[          ] transmit signals across the globe.",
            answer: "Satellites",
            translation: "위성들은 전 세계로 신호를 전송한다."
        },
        {
            sentence: "He enjoys [           ] where pictures were taken.",
            answer: "determining",
            translation: "그는 어디서 사진이 찍혔는지를 알아내는 것을 즐겼다."
        },
        {
            sentence: "It [        ] him of a recent forest fire.",
            answer: "reminded",
            translation: "그것은 그에게 최근의 산불을 떠올리게 했다."
        },
        {
            sentence: "",
            answer: "transformations",
            translation: "지난 수 십년 동안, 세계는 커다란 전환을 경험했다."
        },
        {
            sentence: "We can [     ] nature, but in some ways also improve upon it.",
            answer: "mimic",
            translation: "우리는 자연을 모방하지만 어느 정도는 개선할 수도 있다."
        },
        {
            sentence: "They have [          ] this field for many years.",
            answer: "cultivated",
            translation: "그들은 이 밭을 여러 해 동안 경작해왔다."
        },
        {
            sentence: "[            ] enables species to maintain their populations through genetic transmission.",
            answer: "Reproduction",
            translation: "생식은 유전자 전달을 통해 종이 개체수를 유지할 수 있게 한다."
        },
        {
            sentence: "Crops that [       ] or were stored after harvesting attracted rats and mice.",
            answer: "ripened",
            translation: "익거나 수확 후 저장된 농작물은 쥐, 생쥐를 끌어들였다."
        },
        {
            sentence: "Water pools provided [        ] for mosquitoes.",
            answer: "habitats",
            translation: "물웅덩이는 모기에게 서식지를 제공했다."
        },{
            sentence: "Scientists made careful [           ] of the experiment's results.",
            answer: "observation",
            translation: "과학자들이 실험 결과를 주의 깊게 관찰했다." 
        },
        {
            sentence: "They'll monitor the post to [     ] the volume of reactions.",
            answer: "gauge",
            translation: "그들은 반응의 양을 측정하기 위해 게시물을 추적 관찰한다."
        },
        {
            sentence: "Their aim of posting is to earn recognition for what they're sharing as a way to [            ].",
            answer: "self-enhance",
            translation: "그들의 게시 목표는 자신을 고양하는 하나의 방법으로서 공유하고 있는 것에 대한 인정을 받는 것이다."
        },
        {
            sentence: "Researchers have discovered one peculiar behaviour that [                    ].",
            answer: "sets teenagers apart",
            translation: "연구자들은 10대들을 구별 짓는 독특한 행동 하나를 발견했다."
        },
        {
            sentence: "[          ] usually anticipate negative outcomes in any given situation.",
            answer: "Pessimists",
            translation: "비관론자들은 보통 어떤 상황에서든 부정적인 결과를 예상한다."
        },
        {
            sentence: "A doomer [        ] that the world will end in five years.",
            answer: "predicts",
            translation: "어떤 운명론자가 5년 내에 세상이 끝날 것이라고 예측한다."
        },
        {
            sentence: "His performance was an [     ] failure.",
            answer: "utter",
            translation: "그의 공연은 완전한 실패였다."
        },
        {
            sentence: "System [          ] lead to errors.",
            answer: "breakdowns",
            translation: "시스템 고장들이 오류를 초래한다."
        },
        {
            sentence: "The player took an aggressive [      ].",
            answer: "stance",
            translation: "선수는 공격적인 자세를 취했다."
        },
        {
            sentence: "He realized that the solution to the problem was [       ].",
            answer: "obvious",
            translation: "그는 문제의 해결책이 명백하다는 것을 깨달았다."
        },
        {
            sentence: "The meeting [          ] yesterday afternoon.",
            answer: "took place",
            translation: "회의는 어제 오후에 열렸다." 
        },
        {
            sentence: "An understander [            ] his cocktail party script.",
            answer: "brought out",
            translation: "이해하는 사람은 그의 칵테일파티 대본을 끄집어 냈다."
        },
        {
            sentence: "There is something instantly [           ] about the colour of fire and danger.",
            answer: "arresting",
            translation: "불과 위험의 색에 관한 즉각적으로 시선을 사로잡는 무언가가 있다."
        },
        {
            sentence: "It is charged with alarm and [       ].",
            answer: "urgency",
            translation: "그것은 경고와 긴급함으로 가득 차 있다."
        },
        {
            sentence: "[          ] few butterflies are red either.",
            answer: "Relatively",
            translation: "붉은색의 나비도 비교적 거의 없는 편이다."
        },
        {
            sentence: "Vision is our [        ] sense.",
            answer: "dominant",
            translation: "시각은 우리의 지배적인 감각이다."
        },
        {
            sentence: "Our sense of hearing isn't [          ].",
            answer: "a big deal",
            translation: "우리의 청각은 중요한 것이 아니다."
        },
        {
            sentence: "I don't have to mention the [        ] example of cavemen.",
            answer: "worn-out",
            translation: "내가 원시인의 진부한 예를 언급할 필요는 없다."
        },
        {
            sentence: "These pose an [             ] but serious threat.",
            answer: "unanticipated",
            translation: "이것은 예상치 못한, 하지만 심각한 위협을 제기한다."
        },
        {
            sentence: "[           ] waited for the traffic light to change.",
            answer: "Pedestrians",
            translation: "보행자들이 신호등이 바뀌기를 기다렸다."
        },{
            sentence: "They depend on engine noise to [      ] and orient to cars.",
            answer: "detect",
            translation: "그들은 차를 발견하고 방향을 잡기 위해 엔진 소리에 의존한다." 
        },
        {
            sentence: "The government requires electric vehicles [           ] a warning noise.",
            answer: "to generate",
            translation: "정부는 전기차가 경고음을 내도록 요구한다."
        },
        {
            sentence: "A cook have to first find a pumpkin of [        ] size.",
            answer: "suitable",
            translation: "요리사는 먼저 적당한 크기의 호박을 찾아야 한다."
        },
        {
            sentence: "She found an [       ] stone near the river.",
            answer: "unusual",
            translation: "그녀는 강 근처에서 특이한 돌을 발견했다."
        },
        {
            sentence: "The chef [        ] fresh ingredients well.",
            answer: "combined",
            translation: "요리사는 신선한 재료들을 잘 결합했다."
        },
        {
            sentence: "Chefs prefer fresh [           ].",
            answer: "ingredients",
            translation: "요리사들은 신선한 재료를 선호한다."
        },
        {
            sentence: "She is [       ] coffee into a mug.",
            answer: "pouring",
            translation: "그녀는 머그잔에 커피를 따르고 있다."
        },
        {
            sentence: "Cooks may cut out a great deal of [     ] and time.",
            answer: "labor",
            translation: "요리사들은 많은 노동과 시간을 절약할 수도 있다."
        },
        {
            sentence: "A missing hiker was found safe on Tuesday by a [      ] team.",
            answer: "rescue",
            translation: "실종된 등산객이 안전한 상태로 발견되었다."
        },
        {
            sentence: "A recent forest fire had [         ] some signs.",
            answer: "destoryed",
            translation: "최근의 산불이 몇몇 표지판을 망가뜨렸다."
        },
    ];

    const shuffleArray = array => {
        for (let i = 0; i < array.length; i++) {
            let j = Math.floor(Math.random() * (i + 1)); // j는 0이상 i이하의 수
            [array[i], array[j]] = [array[j], array[i]]; // i번째 요소와 j번째 요소의 값을 변경
        }
        return array;
    };

    let questions = shuffleArray(originalquestions);

    let incorrectQuestions = [];
    let currentQuestionIndex = 0;
    let isReviewMode = false;

    function loadQuestion() {
        if (currentQuestionIndex < questions.length) {
            sentenceEl.textContent = questions[currentQuestionIndex].sentence;
            translationEl.textContent = questions[currentQuestionIndex].translation;
            answerInput.value = '';
            feedbackEl.textContent = '';
            feedbackEl.className = '';
            submitBtn.style.display = 'inline-block';
            nextBtn.style.display = 'none';
            answerInput.disabled = false;
        } else {
            // End of the quiz
            sentenceEl.textContent = "Quiz finished!";
            answerInput.style.display = 'none';
            submitBtn.style.display = 'none';
            nextBtn.style.display = 'none';
            if (incorrectQuestions.length > 0) {
                feedbackEl.textContent = `You have ${incorrectQuestions.length} incorrect answers.`;
                reviewBtn.style.display = 'inline-block';
            } else {
                feedbackEl.textContent = "Congratulations! You answered all questions correctly.";
                feedbackEl.className = 'correct';
            }
        }
    }

    function checkAnswer() {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

        if (userAnswer === correctAnswer) {
            feedbackEl.textContent = "Correct!";
            feedbackEl.className = 'correct';
        } else {
            feedbackEl.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
            feedbackEl.className = 'incorrect';
            if (!isReviewMode) {
                incorrectQuestions.push(questions[currentQuestionIndex]);
            }
        }
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'inline-block';
        answerInput.disabled = true;
    }

    function nextQuestion() {
        currentQuestionIndex++;
        loadQuestion();
    }

    function startReview() {
        isReviewMode = true;
        questions = [...incorrectQuestions];
        incorrectQuestions = [];
        currentQuestionIndex = 0;
        reviewBtn.style.display = 'none';
        answerInput.style.display = 'inline-block';
        loadQuestion();
    }

    submitBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', nextQuestion);
    reviewBtn.addEventListener('click', startReview);
    answerInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            if(submitBtn.style.display !== 'none') {
                checkAnswer();
            }
        }
    });

    loadQuestion();
});