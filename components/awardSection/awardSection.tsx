import style from "../myJourney/journeySection.module.scss";

export default function Journey() {
    return (
        <>
            <br id="journey-section" />
            <h1 className={style.journeyTitle}>My Achievement</h1>
            <br />
            <div>
                <div className="containers" >
                    <div className={style.journeySectionBg}>
                        <div className={style.div}>
                            <div className={style.cardDiv}>
                                <div className={style.aboutData}>
                                    <p className={style.aboutDataText}>
                                        Byju&apos;s Performer of the quarter
                                    </p>
                                    <p className={style.dateSection}> Apr - June 2021 </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.journeyLine}>
                            <div className={style.dot}></div>
                        </div>
                        <div className={style.div}>
                            <div className={style.cardDiv}>
                            <div className={style.aboutData}>
                                    <p className={style.aboutDataText}>
                                        Byju&apos;s Code Ninja of the Quarter
                                    </p>
                                    <p className={style.dateSection}> July - Sept 2021 </p>
                                </div>
                            </div>
                        </div>
                        <div className={style.journeyLine}>
                            <div className={style.dot}></div>
                        </div>
                        <div className={style.div}>
                            <div className={style.cardDiv}>
                            <div className={style.aboutData}>
                                    <p className={style.aboutDataText}>
                                        Byju&apos;s Code Ninja of the Quarter
                                    </p>
                                    <p className={style.dateSection}> Oct - Dec 2021 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}
