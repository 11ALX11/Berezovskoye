import TextWithLines from "@/components/TextWithLines";
import Image from "next/image";
import React from "react";

export default function About() {
    return (
        <div className="base-container">
            <TextWithLines text={"О нас"}/>
            <div className="flex flex-col gap-1 bg-white p-1 sm:gap-2.5 sm:p-2.5">
                <Image
                    src="/about-1.jpg"
                    width={1240}
                    height={190}
                    style={{objectFit: "contain"}}
                    alt="Торфопредприятие"
                />
                <div className="flex flex-col gap-2 font-normal">
                    <p>
                        Торфопредприятие «Березовское» создано <span className="font-medium">29 декабря 1960</span> года
                        Приказом Управления торфяной промышленности СНХ БССР №215 с целью производства
                        коммунально-бытового
                        топлива (торфобрикет) для населения и других потребителей Брестской области, а также для добычи
                        торфа сельскому хозяйству Ивацевичского района, расположено в посёлке Зелёный бор Ивацевичского
                        района Брестской области.
                    </p>
                    <p>
                        В <span className="font-medium">1981 году</span> Приказом Министерства топливной промышленности
                        Белорусской ССР было принято решение строительства нового завода, в связи с исчерпанием сырьевых
                        ресурсов в месторождении «Заеловье». На принятие такого решения также оказало влияние письмо
                        Брестского облисполкома от 21.04.78г. №140-7/24 о том, что действующий завод удовлетворял
                        потребности области в
                        бытовом топливе лишь на 62,7%.
                    </p>
                    <p>
                        Место строительства завода было выбрано в <span className="font-medium">районе д.Нехачево и
                        ж.д.станции Коссово-Полесская.</span> Завод расположили в 1,5 км от пос. Зелёный Бор и
                        промзоны действующего на то время предприятия «Березовское», что позволило использовать его
                        ремонтное и складское хозяйство, а <span className="font-medium">с 1986 года</span>, в связи
                        с выбытием мощностей по торфу, и жилой посёлок с его персоналом, жилым фондом,
                        административно-хозяйственными и культурно-бытовыми помещениями.
                    </p>
                </div>
            </div>
            <div
                className="flex flex-col items-center justify-center gap-1 bg-white p-1 sm:gap-2.5 sm:p-2.5 md:flex-row">
                <div
                    className="size-full min-h-[200px] bg-[url(/about-2.jpg)] bg-cover bg-center md:min-h-0 md:min-w-[40%]"/>
                <div className="flex flex-col gap-2 font-normal">
                    <p>
                        В <span className="font-medium">1987 году</span> был введен в действие новый брикетный завод.
                        Сырьевой базой завода стало торфяное месторождение «Стубла». Запас торфяной залежи
                        предусматривал
                        срок эксплуатации сырьевой базы и брикетного завода 36 лет при мощности завода
                        <span className="font-medium"> 60 тысяч тонн в год.</span>
                    </p>
                    <p>
                        В <span className="font-medium">1992 году</span>, в связи с выработкой сырьевых запасов
                        месторождения «Заеловье» был выведен из строя завод, находящийся в пос. Зелёный Бор.
                        Непосредственная связь этого завода с сырьевой базой месторождения «Стубла» узкоколейным
                        железнодорожным транспортом была затруднена тем, что предприятие находилось
                        за железнодорожной и автомобильной магистралями Брест-Москва.
                    </p>
                    <p>
                        В <span className="font-medium">2001 году</span> торфопредприятие «Березовское» решением
                        концерна
                        по топливу и газификации «Белтопгаз» было переименовано в производственное республиканское
                        унитарное торфопредприятие «Березовское» (ПРУТП «Березовское»).
                    </p>
                </div>
            </div>
            <div
                className="flex flex-col items-center justify-center gap-1 bg-white p-1 sm:gap-2.5 sm:p-2.5 md:flex-row-reverse">
                <div className="size-full min-h-[200px] min-w-[40%] bg-[url(/about-3.jpg)] bg-cover bg-center"/>
                <div className="flex flex-col gap-2 font-normal">
                    <p>
                        В <span className="font-medium">2007 году</span> на основании приказа Министерства энергетики
                        РБ №199 от 29 июня 2007 года, приказа ПРУП «Брестоблгаз» №571 от
                        <span className="font-medium"> 24.07.2007 г.</span> создано торфобрикетное производственное
                        управление «Березовское» (ТПУ «Березовское») в результате реорганизации ПРУТП «Березовское»
                        в форме присоединения к производственному республиканскому унитарному предприятию
                        «Брестоблгаз» (УП «Брестоблгаз») в качестве структурного подразделения в целях повышения
                        эффективности производства путём совершенствования организационной структуры Государственного
                        производственного объединения по топливу и газификации «Белтопгаз» (ГПО «Белтопгаз»).
                    </p>
                    <p>
                        Учредителем и республиканским органом государственного управления УП «Брестоблгаз» является
                        <span className="font-medium"> Министерство энергетики РБ.</span> УП «Брестоблгаз» входит в
                        состав ГПО «Белтопгаз».
                    </p>
                    <p>
                        В настоящее время ТПУ «Березовское» является обособленным структурным подразделением
                        (филиалом) УП «Брестоблгаз».
                    </p>
                </div>
            </div>
        </div>
    );
}