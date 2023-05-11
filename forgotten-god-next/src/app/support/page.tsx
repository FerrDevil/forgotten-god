"use client"

import { useState } from "react";
import { SupportWrapper, SupportTextInput, SupportAnswers, SupportAnswer, SupportContactUs } from "@/services/support/styles/supportPage";


const SupportPage = () => {

    const commonProblems = [
        {
            text: "Не работает клиент",
            link: "clientNotWorking"
        },
        {
            text: "После покупки игра не появилась в библиотеке",
            link: "noGameInLibrary"
        },
        {
            text: "Меня взломали, или украли аккаунт",
            link: "myAccountGotStolen"
        },
        {
            text: "Не могу войти в аккаунт",
            link: "cannotAccessToAccount"
        },
        {
            text: "Найден баг",
            link: "sendBugReport"
        },

    ]

    const [answers, setAnswers] = useState(commonProblems)

    const onSearchAnswers = (event) => {
        setAnswers(commonProblems.filter(problem => problem.text.toLowerCase().includes(event.target.value)))
    }

    return (
            <SupportWrapper>
                <SupportTextInput onChange={onSearchAnswers} placeholder="Поиск по категориям"/>
                <SupportAnswers>
                    {answers.map((problem, problemIndex) => (
                        <SupportAnswer key={problemIndex} href={`/support/${problem.link}`}>
                            {problem.text}
                        </SupportAnswer>
                    ))}
                    {
                    answers.length === 0 && 
                    <SupportContactUs href="/support/contactUs">
                        По вашему запросу ничего не найдено.
                        Свяжитесь с нами для решения вашей проблемы
                    </SupportContactUs>
                    }
                    
                </SupportAnswers>
            </SupportWrapper>
    )
}

export default SupportPage