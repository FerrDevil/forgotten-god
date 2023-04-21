import { useState } from "react";
import useTitle from "../../../hooks/useTitle";
import BasePage from "../../../pages/BasePage";
import { SupportWrapper, SupportTextInput, SupportAnswers, SupportAnswer, SupportContactUs } from "../styles/supportPage";

const SupportPage = () => {
    useTitle("Поддержка")

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
        setAnswers(commonProblems.filter(problem => problem.text.includes(event.target.value)))
    }

    return (
        <BasePage>
            <SupportWrapper>
                <SupportTextInput onChange={onSearchAnswers} placeholder="Поиск по категориям"/>
                <SupportAnswers>
                    {answers.map((problem, problemIndex) => (
                        <SupportAnswer key={problemIndex} to={`/support/${problem.link}`}>
                            {problem.text}
                        </SupportAnswer>
                    ))}
                    {
                    answers.length === 0 && 
                    <SupportContactUs to="/support/contactUs">
                        По вашему запросу ничего не найдено.
                        Свяжитесь с нами для решения вашей проблемы</SupportContactUs>
                    }
                    
                </SupportAnswers>
            </SupportWrapper>
        </BasePage>
    )
}

export default SupportPage